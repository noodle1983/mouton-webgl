#include <functional>

#include <emscripten.h>
#include <SDL.h>

#include "shaders.inl"

#define GL_GLEXT_PROTOTYPES 1
#include <SDL_opengles2.h>

#include <assert.h>

// Shader sources
const GLchar* vertexSource = mouton_vert;
const GLchar* fragmentSource = mouton_frag;

std::function<void()> loop;
void main_loop() { loop(); }

GLuint CompileShader (GLenum type, const GLchar *source) {

    // Create shader object
    const GLchar* sourceString[1];
    GLint sourceStringLengths[1];

    sourceString[0] = source;
    sourceStringLengths[0] = strlen(source);
    GLuint shader = glCreateShader(type);

    if (shader == 0) {
        return 0;
    }

    // Assign and compile the source to the shader object
    glShaderSource(shader, 1, sourceString, sourceStringLengths);
    glCompileShader(shader);
	
	GLint success = 0;
    glGetShaderiv(shader, GL_COMPILE_STATUS, &success);
    if (success == GL_FALSE) {
        int infoLen = 0;
		glGetShaderiv( shader, GL_INFO_LOG_LENGTH, &infoLen );

		if (infoLen > 1) {
			char* infoLog = new char[infoLen + 1];
			glGetShaderInfoLog( shader, infoLen, NULL, infoLog );
			infoLog[infoLen] = '\0';
			printf("type:%d, error: [%s]\n", type, infoLog);
			delete[] infoLog;

		}
        glDeleteShader(shader);
		shader = 0;
    }

    return shader;
}

GLuint CreateProgram(GLuint shader1, GLuint shader2)
{
	if (shader1 == 0 && shader2 == 0){return 0;}
	
	GLuint shaderProgram = glCreateProgram();
	if (shader1 != 0){
		glAttachShader(shaderProgram, shader1);
	}
	if (shader2 != 0){
		glAttachShader(shaderProgram, shader2);
	}
    glLinkProgram(shaderProgram);
	
	GLint isLinked = 0;
	glGetProgramiv(shaderProgram, GL_LINK_STATUS, &isLinked);
	if (isLinked == GL_FALSE)
	{
		GLint maxLength = 0;
		glGetProgramiv(shaderProgram, GL_INFO_LOG_LENGTH, &maxLength);

		if (maxLength > 1) {
			char* infoLog = new char[maxLength + 1];
			glGetProgramInfoLog(shaderProgram, maxLength, &maxLength, infoLog );
			infoLog[maxLength] = '\0';
			printf("link error: [%s]\n", infoLog);
			delete[] infoLog;
		}

		glDeleteProgram(shaderProgram);
		shaderProgram = 0;
	}
	return shaderProgram;
}


void print_info()
{	
	 /* get sdl & gl infos */  
    SDL_version sdl_compiled, sdl_linked;
    SDL_VERSION(&sdl_compiled);
    SDL_GetVersion(&sdl_linked);
    printf("SDL version (compiled): %d.%d.%d\n", sdl_compiled.major, sdl_compiled.minor, sdl_compiled.patch);
    printf("SDL version (linked): %d.%d.%d\n", sdl_linked.major, sdl_linked.minor, sdl_linked.patch);

    const GLubyte* gl_vendor = glGetString(GL_VENDOR);
    printf("GL Vendor: %s\n", gl_vendor);

    const GLubyte* gl_renderer = glGetString(GL_RENDERER);
    printf("GL Renderer: %s\n", gl_renderer);

    const GLubyte* gl_version = glGetString(GL_VERSION);
    printf("GL Version: %s\n", gl_version);

    const GLubyte* glsl_version = glGetString(GL_SHADING_LANGUAGE_VERSION);
    printf("GLSL Version: %s\n", glsl_version);
}

int main()
{
	SDL_Init(SDL_INIT_EVERYTHING);
	
    SDL_Window *window = SDL_CreateWindow(NULL, 0, 0, 640, 480, SDL_WINDOW_OPENGL | SDL_WINDOW_SHOWN);
    assert(window);

	SDL_GL_SetAttribute(SDL_GL_CONTEXT_PROFILE_MASK, SDL_GL_CONTEXT_PROFILE_ES);
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION, 3);
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 0);
	
    SDL_GLContext  gl_context = SDL_GL_CreateContext(window);
    SDL_GL_MakeCurrent(window, gl_context);
    SDL_GL_SetSwapInterval(0);
    assert(gl_context);
	
	print_info();
	
    glClearColor(.9f,.9f,.9f,1.f);

    // Create a Vertex Buffer Object and copy the vertex data to it
    GLfloat vertices[] = {
		-1, -1, 
		 1, -1, 
		 1,  1, 
		 1,  1, 
		-1,  1, 
		-1, -1
	};	
    GLuint vbo;
    glGenBuffers(1, &vbo);	
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    // Create and compile the vertex shader
    GLuint vertexShader = CompileShader(GL_VERTEX_SHADER, vertexSource);
	assert(vertexShader);

    // Create and compile the fragment shader
    GLuint fragmentShader = CompileShader(GL_FRAGMENT_SHADER, fragmentSource);
	assert(fragmentShader);

    // Link the vertex and fragment shader into a shader program
    GLuint shaderProgram = CreateProgram(vertexShader, fragmentShader);
	assert(shaderProgram);
	
    glUseProgram(shaderProgram);

    // Specify the layout of the vertex data
	GLint posAttrib = glGetAttribLocation(shaderProgram, "k");
    glEnableVertexAttribArray(posAttrib);
    glVertexAttribPointer(posAttrib, 2, GL_FLOAT, GL_FALSE, 0, 0);
	
	GLint uniformLocation = glGetUniformLocation(shaderProgram, "U");
    if (uniformLocation == -1) {
		printf("uniformLocation not found!");
		return -1;
	}

    loop = [&]
    {
        const uint32_t milliseconds_since_start = SDL_GetTicks();
		glUseProgram(shaderProgram);
		
		
		glBindBuffer(GL_ARRAY_BUFFER, vbo);
		glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
		glUniform1f(uniformLocation, milliseconds_since_start * 0.001);
		//glRects(-1, -1, 1, 1);
		glDrawArrays(GL_TRIANGLES, 0, sizeof(vertices)/sizeof(float)/2);


        SDL_GL_SwapWindow(window);
    };

    emscripten_set_main_loop(main_loop, 0, true);

    return EXIT_SUCCESS;
}
