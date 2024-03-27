:: dir -x to get short name
set UNITY_PATH=C:\PROGRA~1\Unity\Hub\Editor\2021.3.31f1
set EMSCRIPTEN_PATH=%UNITY_PATH%\Editor\Data\PlaybackEngines\WebGLSupport\BuildTools\Emscripten
set EM_CONFIG=%EMSCRIPTEN_PATH%\.emscripten_not_frozon_cache
set MAKE_PATH=%UNITY_PATH%\Editor\Data\PlaybackEngines\AndroidPlayer\NDK\prebuilt\windows-x86_64\bin
set PATH=%EMSCRIPTEN_PATH%\binaryen\bin;%EMSCRIPTEN_PATH%\python;%EMSCRIPTEN_PATH%\node;%EMSCRIPTEN_PATH%\llvm;%EMSCRIPTEN_PATH%\emscripten;%MAKE_PATH%;%PATH%

:: cmd /c emcmake cmake -G "Unix Makefiles" .
:: cmd /c emmake make
emcc src/main.cpp -std=c++11 -s FULL_ES3 -s WASM=1 -s USE_SDL=2 -Os -o webroot/index.js


pause