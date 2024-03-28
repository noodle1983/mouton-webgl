# version 300 es

precision mediump float;
out vec4 f;
const vec2 v=vec2(640,480);
in vec3 m,s,y,x,z,i,l,r,c,e,d;
in vec2 a,n;
in float t,o,p,u,w;
uniform float U;
const float g=acos(-1.);
float C=0.;
vec2 h(vec2 i,vec2 x)
{
  return i.x<x.x?
    i:
    x;
}
float h(vec3 v,vec3 i,float x)
{
  float y=max(dot(v,normalize(i+v)),0.),c=2e3/x,s=3./x;
  return(pow(y,c)*(c+2.)+pow(y,s)*(s+2.)*2.)*.008;
}
vec3 h(vec3 v)
{
  uvec3 y=uvec3((v+1e2)*1e4);
  y=(y>>8U^y.yzx)*1103515245U;
  y=(y>>8U^y.yzx)*1103515245U;
  y=(y>>8U^y.yzx)*1103515245U;
  return vec3(y)*(1./float(-1U));
}
float D(vec3 v)
{
  vec3 y=floor(v),s=fract(v);
  s=s*s*s*(s*(s*6.-15.)+10.);
  return mix(mix(mix(h(y+vec3(0)).x,h(y+vec3(1,0,0)).x,s.x),mix(h(y+vec3(0,1,0)).x,h(y+vec3(1,1,0)).x,s.x),s.y),mix(mix(h(y+vec3(0,0,1)).x,h(y+vec3(1,0,1)).x,s.x),mix(h(y+vec3(0,1,1)).x,h(y+vec3(1)).x,s.x),s.y),s.z)*2.-1.;
}
vec2 B(vec3 v)
{
  v.xz-=l.xz;
  v.y-=-l.y;
  float y=v.y+smoothstep(1.,20.,length(v.xz));
  return y<.4?
    (y-=pow((D(v*.9)*.5+D(v*1.6)*.3+D(v*2.7)*.1)*.5+.5,3.)*.45*(1.-exp((-U+137.3)*3.)),vec2(y,12)):
    vec2(9e7,0);
}
mat3 B(vec3 v,vec3 y)
{
  vec3 x=normalize(y-v),s=normalize(cross(x,normalize(vec3(0,1,0))));
  return mat3(s,cross(s,x),x);
}
mat2 A(float v)
{
  float y=cos(v),s=sin(v);
  return mat2(y,s,-s,y);
}
vec3 A(vec3 i,vec2 v,float y)
{
  vec2 x=vec2(cos(U*.7+2.),sin(U*.7+2.)*.75);
  float s=smoothstep(.151,.15,length(v-x));
  vec2 m=A(U*2e-4)*v*2e2,c=floor(m);
  vec3 d=h(vec3(abs(c),abs(c.x)));
  float f=d.z*.06;
  return s*smoothstep(.13,.2701,length(v-x-vec2(.05))+.004*D(1e2*vec3(v-x,0)))*vec3(1,.9,.1)*smoothstep(.5,-1.,r.y)+smoothstep(f,f*.01,length(fract(m)-.5+(d.xy-.5)))*(1.-s)+exp(-length(v-x)*2.)*.1+pow(y,2.);
}
float A(vec3 v,vec3 x)
{
  vec3 y=abs(v)-x;
  return length(max(y,0.))+min(max(y.x,max(y.y,y.z)),0.);
}
vec2 E(vec3 v)
{
  v-=l;
  v.xz=A(1.)*v.xz;
  float y=pow(clamp(v.y-1.,.004,1.),.5),f=A(v-vec3(0,1,0),vec3(1.5-y,1,2.5-y));
  if(f<10.)
    {
      f=min(f,A(v-vec3(0,3,0),vec3(2,1,3)));
      float s=length((v.yz-vec2(4.5,3))*vec2(1,.8))-2.;
      s=max(s,abs(v.x)-.5);
      s=max(s,v.y-3.5);
      f=min(f,s);
      return vec2(f-.1,11);
    }
  return vec2(9e7,0);
}
vec2 F(vec3 v)
{
  v-=z;
  float y=A(v-vec3(0,7.5,-5),vec3(.8,.8,.1))-.2;
  if(y<7.)
    {
      y=max(y,abs(v.z+5.)-.1);
      float x=A(v-vec3(0,4,-5.1),vec3(.11,4,.08));
      return h(vec2(x,5),vec2(y,7));
    }
  return vec2(9e7,0);
}
float A(vec3 v,float s,float i,float y)
{
  vec2 m=vec2(length(v.xz),v.y),c=vec2(y,s),x=vec2(y-i,2.*s),d=vec2(m.x-min(m.x,m.y<0.?
    i:
    y),abs(m.y)-s),f=m-c+x*clamp(dot(c-m,x)/dot(x,x),0.,1.);
  return(f.x<0.&&d.y<0.?
    -1.:
    1.)*sqrt(min(dot(d,d),dot(f,f)));
}
float B(vec3 v,vec3 x,vec3 m,float y)
{
  vec3 i=v-x,s=m-x;
  return length(i-s*clamp(dot(i,s)/dot(s,s),0.,1.))-y;
}
float D(vec3 v,vec2 x)
{
  return length(vec2(length(v.xy)-x.x,v.z))-x.y;
}
float E(vec3 v,vec3 y)
{
  float x=length(v/y);
  return x*(x-1.)/length(v/(y*y));
}
vec2 G(vec3 v)
{
  v-=x;
  vec3 y=v;
  y.x+=cos(.775+U)*3.1*.2;
  y.y-=2.8;
  y.zy=A(.7)*y.zy;
  float i=E(y-vec3(0,.3,0),vec3(1,.2+cos(y.x*150.)*sin(y.z*150.)*.05,1)*.25);
  if(i<5.)
    {
      vec2 m=vec2(i,8);
      vec3 s=y;
      float c=g*.2,f=atan(s.z,s.x),d=length(s.xz);
      f=mod(f-c/2.,c)-c/2.;
      s.xz=vec2(cos(f),sin(f))*d;
      float e=E(s-vec3(.5,.2+sin(s.x*2.)*.2,0),vec3(2,.1+sin(s.z*40.)*.02,.75)*.25);
      if(e<m.x)
        m=vec2(e,9);
      float o=max(length(v.xz+vec2(cos(v.y*.25+U)*v.y*.2+.02,-.1))-smoothstep(3.1,0.,v.y)*.05-.02,v.y-3.1);
      if(o<m.x)
        m=vec2(o,10);
      return m;
    }
  return vec2(9e7,0);
}
float B(float v,float y,float x)
{
  float s=clamp(.5+.5*(y-v)/x,0.,1.);
  return mix(y,v,s)-x*s*(1.-s);
}
float D(float v,float x,float y)
{
  y*=1.4;
  float s=max(y-abs(v-x),0.);
  return max(v,x)+s*s*s/(6.*y*y);
}
vec2 H(vec3 v)
{
  v-=y;
  float f=mod(U,1.);
  f=smoothstep(0.,1.,abs(f*2.-1.));
  v.y-=1.;
  v.z-=-2.;
  float x=U*s.x;
  vec3 i=vec3(cos(x*g),cos(x*g*2.)*.1,0)*.025*m.x;
  float c=length(v*vec3(1,1,.825)-vec3(0,1.5,2.55)-i)-2.;
  if(c<3.)
    {
      float d=pow(D((v-i+vec3(.05,0,.5))*2.)*.5+.5,.75)*2.-1.;
      c=c+.05-d*.2;
      float z=mod(U*s.x,2.),e=smoothstep(0.,.5,z),o=smoothstep(.5,1.,z),l=smoothstep(1.,1.5,z),r=smoothstep(1.5,2.,z);
      vec4 n=vec4(o*(1.-o),r*(1.-r),e*(1.-e),l*(1.-l)),u=z*.5-vec4(o,r,e,l);
      u*=m.x;
      vec3 E=v;
      E.x-=.8;
      E.z-=2.+u.x;
      E.yz=A(n.x)*E.yz;
      float F=A(E-vec3(0),.7,.3,.2),G=A(E-vec3(0,-.8,0),.2,.35,.3);
      E=v;
      E.x+=1.;
      E.z-=2.+u.y;
      E.yz=A(n.y)*E.yz;
      F=min(F,A(E-vec3(0),.7,.3,.2));
      G=min(G,A(E-vec3(0,-.8,0),.2,.35,.3));
      E=v;
      E.x-=1.;
      E.z-=4.+u.z;
      E.yz=A(n.z)*E.yz;
      F=min(F,A(E-vec3(0),.7,.3,.2));
      G=min(G,A(E-vec3(0,-.8,0),.2,.35,.3));
      E=v;
      E.x+=1.;
      E.z-=4.+u.w;
      E.yz=A(n.w)*E.yz;
      F=min(F,A(E-vec3(0),.7,.3,.2));
      G=min(G,A(E-vec3(0,-.8,0),.2,.35,.3));
      vec3 J=v+vec3(0,-2,-1.2);
      J.xz=A((f*s.y-.5)*.25*m.y+a.x)*J.xz;
      J.zy=A(sin(U*s.y)*.25*m.y-a.y)*J.zy;
      float H=length(J-vec3(0,-1.3,-1.2))-1.;
      H=B(H,length(J-vec3(0))-.5,1.8);
      vec3 I=J;
      I*=vec3(.7,1,.7);
      float K=length(J-vec3(0,.35,-.1))-.55;
      K-=(cos(J.z*8.+J.y*4.5+J.x*4.)+cos(J.z*4.+J.y*6.5+J.x*8.))*.05;
      K=B(K,c,.1);
      I=J;
      I.yz=A(-.6)*I.yz;
      I.x=abs(v.x)-.8;
      I*=vec3(.3,1,.4);
      I-=vec3(0,-.05-pow(I.x,2.)*5.,-.1);
      float L=length(I)-.15;
      L=D(L,-length(I-vec3(0,-.1,0))+.12,.01);
      I.y*=.3;
      I.y-=-.11;
      float M=length(I)-.16;
      I=J;
      I.x=abs(J.x)-.4;
      float N=length(I*vec3(1,1,1.-p)-vec3(0,0,-1))-.3,O=abs(N)-.01;
      O=D(O,B(-abs(J.y+J.z*.025)+.25-smoothstep(.95,.96,t)*.3+cos(U)*.02,-J.z-1.-p*1.8,.2),.01);
      O=B(O,H,.02);
      H=min(H,O);
      I.x=abs(J.x)-.2;
      I.xz=A(-.45)*I.xz;
      H=D(H,-length(I-vec3(-.7,-1.2,-2.05))+.14*w,.1);
      H=B(H,D(I-vec3(-.7,-1.2,-1.94),vec2(.14*w,.05)),.05);
      float P=B(v-vec3(0,-.1,cos(v.y-.7)*.5),vec3(cos(U*s.z)*m.z,.2,5),vec3(0,2,4.9),.2);
      P-=(cos(v.z*8.+v.y*4.5+v.x*4.)+cos(v.z*4.+v.y*6.5+v.x*3.))*.02;
      P=B(c,P,.1);
      vec2 k=vec2(c,1);
      k=h(k,vec2(P,1));
      k=h(k,vec2(K,1));
      k.x=D(k.x,-M,.15);
      k=h(k,vec2(F,2));
      k=h(k,vec2(H,2));
      k=h(k,vec2(N,3));
      k=h(k,vec2(G,4));
      k=h(k,vec2(L,2));
      C=H;
      return k;
    }
  return vec2(c,1);
}
float E(vec3 v,vec2 x,float s)
{
  return max(abs(v.z)-x.y,D(D(v.x*.9+v.y*.5,-v.x*.9+v.y*.5,s),-v.y,s)-x.x*.5);
}
vec2 I(vec3 v)
{
  v-=i;
  float y=E(v-vec3(0,7.5,-5),vec2(1.7,.1),.3);
  if(y<8.)
    {
      y=D(y,-E(v-vec3(0,7.5,-5.1),vec2(1.6,.1),.3),.001);
      float f=A(v-vec3(0,4,-5.1),vec3(.11,4,.08));
      vec3 s=v;
      s.y=abs(s.y-7.3)-.3;
      f=min(f,A(s-vec3(0,0,-5.05),vec3(.35,.1,.05)));
      vec2 x=vec2(f,5);
      return h(x,vec2(y,6));
    }
  return vec2(9e7,0);
}
vec2 J(vec3 v)
{
  return h(h(h(h(h(h(vec2(v.y,0),H(v)),G(v)),F(v)),I(v)),E(v)),B(v));
}
float D(vec3 v,vec3 x,float y,float i)
{
  float s=.5*y-J(v+x*y*.5).x,c=.95*(y-J(v+x*y).x);
  return clamp(1.-i*1.5*(s+c),0.,1.);
}
float F(vec3 v,vec3 x)
{
  float y=.01;
  for(int i=0;i<128;i++)
    {
      float m=J(v+x*y).x;
      y+=m;
      if(y>1e2||abs(m)<.001)
        break;
    }
  return y;
}
float G(vec3 v,vec3 x)
{
  float y=1.,s=.08;
  for(int i=0;i<64;i++)
    {
      float m=J(v+x*s).x;
      y=min(y,30.*m/s);
      s+=m;
      if(y<1e-4||s>50.)
        break;
    }
  return clamp(y,0.,1.);
}
float E(vec2 v,float y,float x,float s)
{
  v.x=abs(v.x);
  float i=(y-x)/s,c=sqrt(1.-i*i),m=dot(v,vec2(-i,c));
  return m<0.?
    length(v)-y:
    m>c*s?
      length(v-vec2(0,s))-x:
      dot(v,vec2(c,i))-y;
}
float F(vec2 v,float s,float x)
{
  vec2 y=vec2(.81,-.59),c=vec2(-y.x,y.y);
  v.x=abs(v.x);
  v-=2.*max(dot(y,v),0.)*y;
  v-=2.*max(dot(c,v),0.)*c;
  v.x=abs(v.x);
  v.y-=s;
  vec2 m=x*vec2(-y.y,y)-vec2(0,1);
  float i=clamp(dot(v,m)/dot(m,m),0.,s);
  return length(v-m*i)*sign(v.y*m.x-v.x*m.y);
}
void main()
{
  vec2 y=gl_FragCoord.xy/v,s=y*2.-1.;
  s.x*=v.x/v.y;
  vec3 m=c,a=B(m,e)*normalize(vec3(s,o-length(s)*u));
  float l=F(m,a);
  vec3 k=m+a*l;
  vec2 I=J(k),H=vec2(1e-4,0);
  vec3 t=normalize(vec3(I.x-J(k-H.xyy).x,I.x-J(k-H.yxy).x,I.x-J(k-H.yyx).x));
  float w=smoothstep(0.,.3,r.y)+.1,O=D(k,t,.15,1.)*D(k,t,1.,.1)*.5,g=G(k,r),K=1.+dot(a,t);
  vec3 P=vec3(1,.8,.7)*max(dot(t,r),0.)*pow(vec3(g),vec3(1,1.2,1.5)),L=vec3(1,.8,.7)*.1*max(dot(t,-r),0.)*O,N=vec3(.5)*mix(D(k,a,.3,.75),D(k,r,.3,.75),.5),M=vec3(1)*max(dot(reflect(a,t),r),0.),Q=vec3(0),R=vec3(.4,.45,.5)*O,S=vec3(0),b=vec3(0);
  if(I.y==0.)
    b=vec3(3),N*=0.,M*=0.;
  else if(I.y==1.)
    b=vec3(.4),N*=K*.5+.5,S=vec3(.35),M=pow(M,vec3(4))*K*.25;
  else if(I.y==4.)
    b=vec3(.025),N*=0.,M=pow(M,vec3(80))*K*10.;
  else if(I.y==3.)
    {
      N*=.5;
      vec3 T=normalize(d+(D(vec3(U,U*.5,U*1.5))*2.-1.)*.01),V=cross(T,vec3(0,1,0)),W=cross(T,V);
      V=cross(W,T);
      vec3 X=t.z*T+t.x*V+t.y*W,Y=a.z*d+a.x*V+a.y*W;
      vec2 Z=Y.xy/Y.z*length(X.xy)/length(m-k)*.4;
      X.xy-=Z*smoothstep(.01,0.,dot(X,a));
      float _=.2+p*.5,j=length(X.xy),q=atan(X.x,X.y);
      vec3 at=mix(vec3(.5,.3,.1),vec3(0,.8,1),smoothstep(.16,.3,j)*.3+cos(q*15.)*.04);
      float ay=smoothstep(_,_+.02,j);
      b=at*((smoothstep(-.9,1.,D(vec3(j*10.,q*30.+cos(j*50.+D(vec3(q))*50.),0)))+smoothstep(-.9,1.,D(vec3(j*10.,q*40.+cos(j*30.+D(vec3(q))*50.)*2.,0))))*.5+.5)*smoothstep(.3,.29,j);
      b*=vec3(1,.8,.7)*pow(max(0.,dot(normalize(vec3(3,1,-1)),X)),8.)*3e2+.5;
      b*=ay;
      b+=pow(M,vec3(800))*3.;
      b=mix(b,vec3(.8),smoothstep(.29,.3,j));
      b=mix(at*.3,b,smoothstep(0.,.05,abs(j-.3)+.01));
      t=mix(normalize(t+(d+t)*4.),t,smoothstep(.3,.32,j));
      {
        vec3 ax=reflect(a,t),av=normalize(vec3(1,1.5,-1)),ac=vec3(-av.x,av.y*.5,av.z);
        float ab=h(ax,av,.1)+h(ax,ac,2.)*.1+h(ax,normalize(av+vec3(.2,0,0)),.3)+h(ax,normalize(av+vec3(.2,0,.2)),.5)+h(ax,normalize(ac+vec3(.1,0,.2)),8.)*.5;
        Q=(mix(mix(vec3(.3,.3,0),vec3(.1),smoothstep(-.7,.2,ax.y)),vec3(.3,.65,1),smoothstep(0.,1.,ax.y))+ab*vec3(1,.9,.8))*mix(.15,.2,ay)*sqrt(K)*2.5;
      }
      J(k);
      b*=smoothstep(0.,.015,C)*.4+.6;
      M*=0.;
    }
  else if(I.y==5.)
    b=vec3(.85,.95,1),N*=0.,M=pow(M,vec3(8))*K*2.;
  else if(I.y==6.)
    {
      vec3 X=k-i;
      N*=0.;
      M=pow(M,vec3(8))*K*20.;
      if(t.z>.5)
        {
          float j=E(X-vec3(0,7.5,-5),vec2(1.3,.2),.01);
          b=vec3(1.5,0,0);
          float V=smoothstep(.13,.1295,distance(X,vec3(0,7.1,-4.9)));
          V+=smoothstep(.005,0.,E(X.xy-vec2(0,7.34),.06,.14,1.));
          b=mix(b,vec3(2),smoothstep(.005,0.,j));
          b=mix(b,vec3(0),V);
        }
      else
         b=vec3(.85,.95,1);
    }
  else if(I.y==7.)
    {
      vec3 X=k-z;
      N*=0.;
      M=pow(M,vec3(8))*K*10.;
      if(t.z>.5)
        {
          b=vec3(0,0,1.5);
          X.y-=7.4;
          float j=A(X-vec3(0,.1,-5),vec3(.8,.8,1)),V=0.;
          X.xy=A(.8)*X.xy;
          V+=smoothstep(.01,0.,E(X.xy-vec2(-.04,-.6),.1,.05,1.));
          V+=smoothstep(.01,0.,E(X.xy-vec2(-.04,.5),.16,.135,.15));
          V*=smoothstep(0.,.01,E(X.xy-vec2(-.12,.56),.001,.02,.2));
          V*=smoothstep(0.,.01,E(X.xy-vec2(0,.56),.001,.02,.2));
          X.xy=A(-1.6)*X.xy;
          V+=smoothstep(.01,0.,E(X.xy-vec2(.04,-.6),.1,.05,1.));
          V+=smoothstep(.01,0.,E(X.xy-vec2(.04,.5),.16,.1,.15));
          b=mix(b,vec3(2),smoothstep(.01,0.,j));
          b=mix(b,vec3(0),V);
        }
      else
         b=vec3(1);
    }
  else if(I.y==8.)
    {
      vec3 X=k-x;
      X.x+=cos(.775+U)*3.1*.2;
      X.y-=2.8;
      X.zy=A(.75)*X.zy;
      b=mix(vec3(2,.75,0),vec3(2,2,0),smoothstep(0.,.45,length(X-vec3(0,.3,0))))*1.8;
      N=vec3(.01);
      M*=0.;
    }
  else if(I.y==10.)
    b=vec3(0,.05,0),M*=K;
  else if(I.y==9.)
    {
      vec3 X=k-x;
      X.x+=cos(.775+U)*3.1*.2;
      X.y-=2.8;
      X.zy=A(.75)*X.zy;
      b=mix(vec3(1)+.5,vec3(.75,.5,1),smoothstep(.5,1.1,length(X-vec3(0,.3,0))))*2.;
      N*=0.;
      M=pow(M,vec3(4))*K;
    }
  else if(I.y==11.)
    b=vec3(1),P*=vec3(.1)*K,R*=vec3(.1)*K,L*=0.,N*=0.,M=pow(M,vec3(100))*K*2.;
  else if(I.y==12.)
    b=vec3(1,.01,.01)*.3,P*=vec3(3),R*=vec3(2)*K*K,N*=0.,M=vec3(1,.3,.3)*pow(M,vec3(500))*5.;
  else if(I.y==2.)
    b=vec3(1,.7,.5),R*=vec3(1,.75,.75),N=pow(N,vec3(.5,2.5,5)+2.)*2.,M=pow(M,vec3(4))*K*.02;
  vec3 X=clamp(mix((b*(R+P*.5+L*2.+N*2.)+Q+M*g+S)*w,A(a,s,w),smoothstep(90.,1e2,l)),0.,1.);
  if(I.y==0.)
    {
      float j=length(s)*.5,V=cos(atan(s.x,s.y)*15.-U*3.-j*30.*n.y);
      X=mix(X,mix(mix(vec3(1,.5,0),vec3(.8,.5,1),(cos(j*5.+U*5.)*.5+.5)*n.y),vec3(1),smoothstep(-j,j,V)),n.x);
    }
  vec2 V=vec2(abs(s.x*5.-.35)-1.8,s.y*5.-1.4);
  V=A(U*5.)*V;
  float j=(1.4+.2*sin(U*20.))*smoothstep(.5,1.,n.x),q=F(V,j,.5);
  vec3 T=mix(vec3(1,.6,0),vec3(1,.2,0),smoothstep(-.1,.6,F(V,j*.5,.5)))*1.3;
  X=mix(X,T,smoothstep(0.,-.01,q)*n.x);
  X=pow(pow(X,vec3(1./2.2)),vec3(1,1.05,1.1));
  float W=length(gl_FragCoord.xy/v.xx-vec2(.5,.3)),_=max(.137,smoothstep(147.,146.,U));
  X*=smoothstep(_,_-.005,W);
  float Y=fract(23.*pow(W,.25));
  Y-=smoothstep(.95,.99,Y);
  X=mix(X,mix(vec3(1,.6,0),vec3(1,0,0),pow(Y,1.)),smoothstep(.135,.136,W)*smoothstep(147.,148.,U));
  X*=smoothstep(0.,8.,U)*smoothstep(153.,150.,U);
  f=vec4(X/(1.+pow(length(y*2.-1.),4.)*.04),1);
}