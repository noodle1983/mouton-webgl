# version 300 es

precision mediump float;

in vec4 k;
out vec3 m,s,y,x,z,i,l,r,c,e,d;
out vec2 a,n;
out float t,o,p,u,w;
uniform float U;
void main()
{
  gl_Position=k;
  float v=U;
  y=vec3(0);
  z=vec3(9e7);
  x=vec3(9e7);
  i=vec3(9e7);
  l=vec3(9e7);
  o=2.;
  t=max(fract(U*.333),fract(U*.123+.1));
  n=vec2(0);
  r=normalize(vec3(3.5,1,-1));
  s=vec3(1);
  u=0.;
  a=vec2(0);
  w=1.;
  p=0.;
  if(v<7.5)
    m=vec3(1,.2,1),s=vec3(1,1,.5),d=vec3(0,.45,1),a.y=.25,o=4.,c=vec3(0,2.5,-3.7),e=vec3(0,3,0);
  else if(v<14.5)
    m=vec3(1,.2,.25),s=vec3(1,1,2),d=vec3(0,.5,1),a.y=.25,o=4.,c=vec3(5,.5,0),e=vec3(0,.5,1);
  else if(v<29.5)
    {
      float f=v-14.5;
      m=vec3(1,.2,.25);
      s=vec3(1,1,2);
      d=vec3(0,.5,1);
      a.y=.25;
      c=vec3(5.+f*.5,2,f*.5);
      e=vec3(0,2,0);
    }
  else if(v<44.)
    {
      float f=v-29.;
      m=vec3(1,.2,.25);
      s=vec3(1,1,2);
      d=vec3(0,.5,1);
      a.y=.25;
      float X=f*.35+2.5;
      r=normalize(vec3(cos(X),sin(X),-.3));
      o=1.5;
      c=vec3(22,2,f*.6-10.);
      e=vec3(0,2,f*.6-10.);
    }
  else if(v<52.)
    {
      float f=v-44.,X=smoothstep(5.,5.5,f);
      a.y=mix(.25,0.,X);
      m=vec3(1.-X,.2*(1.-X),1);
      s=vec3(1,1,.5);
      d=vec3(X*.3,.3-X*.3,1);
      p=smoothstep(7.4,7.6,f)*.2;
      o=4.;
      c=vec3(0,3,-4);
      e=vec3(0,3,0);
      if(f>3.)
        t=max(fract(U*.333),fract(U*.333+.08));
    }
  else if(v<54.8)
    {
      float f=v-52.;
      z=vec3(-5,0,-8);
      y=vec3(9e7);
      d=vec3(.3,0,1);
      p=.2;
      float X=smoothstep(0.,.5,f);
      o=mix(4.,3.,X);
      c=vec3(0,3,-4);
      e=mix(vec3(0,3,0),vec3(-5,5,-9),X);
    }
  else if(v<60.)
    {
      float f=v-55.;
      n.x=smoothstep(0.,.5,f);
      m=vec3(0);
      t=0.;
      d=vec3(.3,0,1);
      c=mix(vec3(0,3,-4),vec3(0,2,-6),n.x);
      e=vec3(0,3,0);
      o=mix(4.,3.,n.x)+smoothstep(0.,5.,f);
    }
  else if(v<65.)
    {
      float f=v-60.;
      d=vec3(0,0,1);
      y=vec3(0,0,-f*3.-2.);
      z=vec3(-5,0,-8);
      m=vec3(1,1,.5);
      s=vec3(3,1.5,8)*1.5;
      c=vec3(16,5,9);
      e=vec3(3,5,-2.-f);
      o=3.;
    }
  else if(v<73.)
    {
      float f=v-65.;
      m=vec3(1);
      s=vec3(3,1.5,8);
      float X=mod(f,8.);
      d=vec3(smoothstep(.5,1.,X)*smoothstep(2.8,2.5,X)-smoothstep(4.,4.5,X)*smoothstep(5.8,5.5,X)+cos(U)*.2,cos(U*.5)*.1+.1,1);
      u=.3;
      o=2.5;
      c=vec3(2.75,1,-5.25);
      e=vec3(0,2.3,0);
      float b=mod(f,2.);
      w+=smoothstep(.5,.6,b)*smoothstep(.7,.6,b)*.3;
      b=mod(f+.3,3.);
      w+=smoothstep(.5,.6,b)*smoothstep(.7,.6,b)*.3;
    }
  else if(v<76.)
    {
      float f=v-73.,X=smoothstep(1.,3.,f);
      m=vec3(0,1.-X*.5,1);
      s=vec3(3,1.5,6);
      d=vec3(X*.5,.3-X*.45,1);
      o=4.;
      c=vec3(0,3,-4);
      e=vec3(0,3,0);
      if(f>3.)
        t=max(fract(U*.333),fract(U*.333+.08));
    }
  else if(v<81.25)
    {
      float f=v-76.;
      i=vec3(-5,0,-8);
      d=vec3(.5,-.15,1);
      m=vec3(0,.5,1);
      s=vec3(3,1.5,6);
      float X=smoothstep(0.,1.,f);
      o=mix(4.,3.,X);
      c=vec3(0,3,-4);
      e=mix(vec3(0,3,0),vec3(-5,5,-9),X);
    }
  else if(v<88.)
    {
      float f=v-81.25;
      y=vec3(0,0,-11);
      i=vec3(-5,0,-8);
      d=normalize(mix(vec3(1,-.5,1),vec3(0,.5,1),smoothstep(2.8,3.2,f)));
      d=mix(d,vec3(1,-.5,1),smoothstep(6.,6.5,f));
      a.y=smoothstep(3.,3.5,f)*.6;
      a.x=smoothstep(3.,3.5,f)*smoothstep(7.,5.,f)*.25*sin(f*3.);
      m=vec3(1,.2,.5);
      s=vec3(0,.2,1);
      c=vec3(-3,4.8,-30);
      e=vec3(-3,4,0);
      o=3.5;
    }
  else if(v<96.)
    {
      float f=v-87.,X=smoothstep(6.,9.,f);
      y=vec3(0,0,f*.25-11.);
      i=vec3(-2,0,-8);
      d=vec3(-.5,.25-X,1);
      a.y=.5-X;
      m=vec3(1,.2,.5);
      s=vec3(-1,1,1)*.5;
      c=vec3(18,5,-5);
      e=vec3(-5,5,-6);
      o=3.;
    }
  else if(v<102.)
    {
      float f=v-96.;
      m=vec3(0);
      s=vec3(0);
      i=vec3(0,0,-8);
      e=mod(f,3.)<1.5?
        (t=0.,c=vec3(0,2,-8),vec3(0,3,0)):
        (c=vec3(0,5.5,2),vec3(0,5.75,0));
      d=vec3(0,-.1,1);
      o=3.+f*.1;
    }
  else if(v<110.)
    {
      float f=v-103.5,X=sin(min(f,5.));
      m=vec3(0);
      s=vec3(0);
      d=normalize(vec3(X*.7,0,1));
      d=mix(d,vec3(-.3,.2,1),smoothstep(5.2,5.4,f));
      a.x=X*.25;
      p=smoothstep(6.,6.2,f)*.2;
      y=vec3(0,(smoothstep(6.,6.2,f)-smoothstep(6.2,6.4,f))*.4,0);
      o=3.5;
      c=vec3(0,2,-8);
      e=vec3(0,3,0);
    }
  else if(v<112.)
    {
      float f=v-110.;
      y=vec3(9e7);
      i=vec3(-2,0,-8);
      x=vec3(5,0,-20);
      float X=smoothstep(.5,1.,f);
      o=mix(3.,4.,X);
      c=vec3(0,5.5,2);
      e=mix(vec3(-.5,5.75,0),vec3(5,2,-20),X);
      n.x=X*.3;
    }
  else if(v<117.8)
    {
      float f=v-112.;
      f*=1.2;
      m=vec3(.1);
      s=vec3(.2);
      o=2.8+f*.15;
      int X=int(f);
      if(X%4==1)
        i=vec3(0,0,-8),c=vec3(2.5,2,-1),e=vec3(1,5.25,-8),o=2.8+pow(f*.3,1.2);
      else if(X%4==3)
        x=vec3(4,0,-8),c=vec3(0,5.5,2),e=vec3(4,3,-8),n.x=.3+.2/12.,n.y=f/12.;
      else
         c=vec3(0,2.4,-8),e=vec3(0,3,0);
      float b=smoothstep(.3,.7,fract(f));
      if(X%4==0)
        b=1.-b;
      a.x=-b*.1;
      d=normalize(mix(vec3(.1,-.25,1),vec3(-.2,.2,1),b));
      d+=vec3(cos(f*10.),cos(f*5.),1)*.01;
    }
  else if(v<121.8)
    {
      float f=v-118.;
      y=vec3(9e7);
      i=vec3(-2,0,-8);
      x=vec3(5,0,-20);
      o=9.+f*.2;
      c=vec3(0,5.5,2);
      e=vec3(5,2,-20);
      n.x=.4;
      n.y=f;
    }
  else if(v<125.)
    {
      float f=v-120.;
      m=vec3(0,.1,0);
      s=vec3(0,.5,0);
      c=vec3(0,2.4,-8);
      e=vec3(0,3,0);
      a.x=-.1;
      a.y=sin(f*2.)*.1;
      p=smoothstep(0.,3.,f)*.1;
      d=vec3(-.2,.2,1);
      o=3.2-f*.15;
      n.x=.1;
      n.y=5.;
    }
  else if(v<137.)
    {
      float f=v-125.;
      d=vec3(0,0,1);
      y=vec3(0,0,-f*2.+2.);
      x=vec3(0,-.5,-30);
      m=vec3(1,1,.5);
      s=vec3(3,1.5,8);
      c=vec3(-2,3.5,mix(-10.,-33.,smoothstep(0.,10.,f)));
      e=vec3(2,2,-3.-f*2.);
      o=3.;
    }
  else if(v<142.)
    {
      float f=v-137.2;
      d=vec3(0,0,1);
      y=vec3(0,(1.-smoothstep(.3,.25,f))*-4.8,-22.-f*2.);
      x=vec3(2,0,-30);
      m=vec3(1,1,.5);
      s=vec3(3,1.5,8);
      c=vec3(-20,6,-13)+vec3(cos(f*72.),cos(f*64.),sin(f*48.))*3.*smoothstep(.3,.31,f)*smoothstep(.7,.1,f);
      e=vec3(3,2,-23);
      o=mix(4.,4.2,smoothstep(0.,5.,f));
      l=vec3(0,smoothstep(.3,.2,f)*13.,-22);
    }
  else
    {
      float f=v-143.;
      d=vec3(0,0,1);
      y=vec3(9e7);
      i=vec3(-1,0,-8);
      x=vec3(1,0,-25);
      e=vec3(2,3.6,-18);
      c=vec3(5,5,2);
      o=2.5+smoothstep(1.7,2.2,f)*4.2;
      l=vec3(7,0,-20);
    }
  d=normalize(d);
}