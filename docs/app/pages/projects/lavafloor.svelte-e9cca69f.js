var ou=Object.defineProperty;var ba=Object.getOwnPropertySymbols;var au=Object.prototype.hasOwnProperty,lu=Object.prototype.propertyIsEnumerable;var Fr=(o,t,e)=>t in o?ou(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Ma=(o,t)=>{for(var e in t||(t={}))au.call(t,e)&&Fr(o,e,t[e]);if(ba)for(var e of ba(t))lu.call(t,e)&&Fr(o,e,t[e]);return o};var Ls=(o,t,e)=>(Fr(o,typeof t!="symbol"?t+"":t,e),e);import{S as cu,i as hu,s as uu,e as _n,t as wn,c as bn,a as Mn,h as Sn,d as Me,b as _c,g as os,H as ae,k as kn,G as du,m as Vn,M as zr,j as Sa,E as Ea,T as fu,v as pu,V as mu,U as gu}from"../../chunks/index-deee8842.js";/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="135";const vu=0,Ta=1,xu=2,wc=1,yu=2,as=3,ps=0,ie=1,Ii=2,bc=1,Tn=0,hs=1,Aa=2,Ca=3,La=4,_u=5,Ei=100,wu=101,bu=102,Ra=103,Pa=104,Mu=200,Su=201,Eu=202,Tu=203,Mc=204,Sc=205,Au=206,Cu=207,Lu=208,Ru=209,Pu=210,Iu=0,Du=1,Nu=2,Co=3,Fu=4,zu=5,Bu=6,Ou=7,yr=0,Uu=1,ku=2,Jn=0,Vu=1,Hu=2,Gu=3,Wu=4,qu=5,Ec=300,ws=301,bs=302,Lo=303,Ro=304,_r=306,Wo=307,Po=1e3,Ce=1001,Io=1002,ce=1003,Ia=1004,Da=1005,Pe=1006,ju=1007,wr=1008,Rn=1009,Xu=1010,Yu=1011,ms=1012,Zu=1013,dr=1014,En=1015,Li=1016,Ju=1017,$u=1018,Ku=1019,Ri=1020,Qu=1021,$n=1022,_e=1023,td=1024,ed=1025,nd=_e,Kn=1026,Di=1027,id=1028,sd=1029,rd=1030,od=1031,ad=1032,ld=1033,Na=33776,Fa=33777,za=33778,Ba=33779,Oa=35840,Ua=35841,ka=35842,Va=35843,cd=36196,Ha=37492,Ga=37496,hd=37808,ud=37809,dd=37810,fd=37811,pd=37812,md=37813,gd=37814,vd=37815,xd=37816,yd=37817,_d=37818,wd=37819,bd=37820,Md=37821,Sd=36492,Ed=37840,Td=37841,Ad=37842,Cd=37843,Ld=37844,Rd=37845,Pd=37846,Id=37847,Dd=37848,Nd=37849,Fd=37850,zd=37851,Bd=37852,Od=37853,Ud=2200,kd=2201,Vd=2202,fr=2300,pr=2301,Br=2302,Ti=2400,Ai=2401,mr=2402,qo=2500,Tc=2501,Hd=0,Ee=3e3,br=3001,jo=3007,Xo=3002,Ac=3004,Cc=3005,Lc=3006,Gd=3200,Wd=3201,Bi=0,qd=1,Or=7680,jd=519,gs=35044,gr=35048,Wa="300 es";class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const de=[];for(let o=0;o<256;o++)de[o]=(o<16?"0":"")+o.toString(16);const Ur=Math.PI/180,Do=180/Math.PI;function Ye(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[o&255]+de[o>>8&255]+de[o>>16&255]+de[o>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toUpperCase()}function Se(o,t,e){return Math.max(t,Math.min(e,o))}function Xd(o,t){return(o%t+t)%t}function kr(o,t,e){return(1-e)*o+e*t}function qa(o){return(o&o-1)===0&&o!==0}function Yd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}class tt{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}tt.prototype.isVector2=!0;class fe{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=i[0],x=i[3],g=i[6],p=i[1],b=i[4],y=i[7],M=i[2],T=i[5],_=i[8];return s[0]=r*v+a*p+l*M,s[3]=r*x+a*b+l*T,s[6]=r*g+a*y+l*_,s[1]=c*v+h*p+d*M,s[4]=c*x+h*b+d*T,s[7]=c*g+h*y+d*_,s[2]=u*v+f*p+m*M,s[5]=u*x+f*b+m*T,s[8]=u*g+f*y+m*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*s,f=c*s-r*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*r)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],r=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*s+n*l,i[3]=e*r+n*c,i[6]=e*a+n*h,i[1]=-n*s+e*l,i[4]=-n*r+e*c,i[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}fe.prototype.isMatrix3=!0;function Rc(o){if(o.length===0)return-1/0;let t=o[0];for(let e=1,n=o.length;e<n;++e)o[e]>t&&(t=o[e]);return t}function Mr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ja(o,t=0){let e=3735928559^t,n=1103547991^t;for(let i=0,s;i<o.length;i++)s=o.charCodeAt(i),e=Math.imul(e^s,2654435761),n=Math.imul(n^s,1597334677);return e=Math.imul(e^e>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),4294967296*(2097151&n)+(e>>>0)}let si;class Oi{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=Mr("canvas")),si.width=t.width,si.height=t.height;const n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}}let Zd=0;class pe extends ei{constructor(t=pe.DEFAULT_IMAGE,e=pe.DEFAULT_MAPPING,n=Ce,i=Ce,s=Pe,r=wr,a=_e,l=Rn,c=1,h=Ee){super(),Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ye(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Ye()),!e&&t.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Vr(i[r].image)):s.push(Vr(i[r]))}else s=Vr(i);t.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case Ce:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case Ce:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&this.version++}}pe.DEFAULT_IMAGE=void 0;pe.DEFAULT_MAPPING=Ec;pe.prototype.isTexture=!0;function Vr(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?Oi.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Gt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],x=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+x)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,y=(f+1)/2,M=(g+1)/2,T=(h+u)/4,_=(d+v)/4,D=(m+x)/4;return b>y&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=T/n,s=_/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=D/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=_/s,i=D/s),this.set(n,i,s,e),this}let p=Math.sqrt((x-m)*(x-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(p)<.001&&(p=1),this.x=(x-m)/p,this.y=(d-v)/p,this.z=(u-h)/p,this.w=Math.acos((c+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Gt.prototype.isVector4=!0;class Ie extends ei{constructor(t,e,n={}){super(),this.width=t,this.height=e,this.depth=1,this.scissor=new Gt(0,0,t,e),this.scissorTest=!1,this.viewport=new Gt(0,0,t,e),this.texture=new pe(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:t,height:e,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(t){t.image={width:this.width,height:this.height,depth:this.depth},this.texture=t}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.image=Ma({},this.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.prototype.isWebGLRenderTarget=!0;class Jd extends Ie{constructor(t,e,n){super(t,e);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}Jd.prototype.isWebGLMultipleRenderTargets=!0;class Yo extends Ie{constructor(t,e,n={}){super(t,e,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(t){return super.copy.call(this,t),this.samples=t.samples,this.useRenderToTexture=t.useRenderToTexture,this.useRenderbuffer=t.useRenderbuffer,this}}Yo.prototype.isWebGLMultisampleRenderTarget=!0;class ge{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],f=s[r+1],m=s[r+2],v=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==m){let x=1-a;const g=l*u+c*f+h*m+d*v,p=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const M=Math.sqrt(b),T=Math.atan2(M,g*p);x=Math.sin(x*T)/M,a=Math.sin(a*T)/M}const y=a*p;if(l=l*x+u*y,c=c*x+f*y,h=h*x+m*y,d=d*x+v*y,x===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],f=s[r+2],m=s[r+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}ge.prototype.isQuaternion=!0;class L{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=l*e+r*i-a*n,h=l*n+a*e-s*i,d=l*i+s*n-r*e,u=-s*e-r*n-a*i;return this.x=c*l+u*-s+h*-a-d*-r,this.y=h*l+u*-r+d*-s-c*-a,this.z=d*l+u*-a+c*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}L.prototype.isVector3=!0;const Hr=new L,Xa=new ge;class Ve{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],d=t[l+1],u=t[l+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>a&&(a=u)}return this.min.set(e,n,i),this.max.set(s,r,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),d=t.getY(l),u=t.getZ(l);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>a&&(a=u)}return this.min.set(e,n,i),this.max.set(s,r,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ji.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);const e=t.geometry;e!==void 0&&(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox),Gr.applyMatrix4(t.matrixWorld),this.union(Gr));const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),Rs.subVectors(this.max,Xi),ri.subVectors(t.a,Xi),oi.subVectors(t.b,Xi),ai.subVectors(t.c,Xi),un.subVectors(oi,ri),dn.subVectors(ai,oi),Hn.subVectors(ri,ai);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-Hn.z,Hn.y,un.z,0,-un.x,dn.z,0,-dn.x,Hn.z,0,-Hn.x,-un.y,un.x,0,-dn.y,dn.x,0,-Hn.y,Hn.x,0];return!Wr(e,ri,oi,ai,Rs)||(e=[1,0,0,0,1,0,0,0,1],!Wr(e,ri,oi,ai,Rs))?!1:(Ps.crossVectors(un,dn),e=[Ps.x,Ps.y,Ps.z],Wr(e,ri,oi,ai,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ji.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($e),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}Ve.prototype.isBox3=!0;const $e=[new L,new L,new L,new L,new L,new L,new L,new L],ji=new L,Gr=new Ve,ri=new L,oi=new L,ai=new L,un=new L,dn=new L,Hn=new L,Xi=new L,Rs=new L,Ps=new L,Gn=new L;function Wr(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Gn.fromArray(o,s);const a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $d=new Ve,Ya=new L,qr=new L,jr=new L;class Ui{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){jr.subVectors(t,this.center);const e=jr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(jr.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return qr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Ya.copy(t.center).add(qr)),this.expandByPoint(Ya.copy(t.center).sub(qr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ke=new L,Xr=new L,Is=new L,fn=new L,Yr=new L,Ds=new L,Zr=new L;class ni{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ke)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ke.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ke.copy(this.direction).multiplyScalar(e).add(this.origin),Ke.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xr.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Xr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Is),a=fn.dot(this.direction),l=-fn.dot(Is),c=fn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,m;if(h>0)if(d=r*l-a,u=r*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){const v=1/h;d*=v,u*=v,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-r*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(r*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Is).multiplyScalar(u).add(Xr),f}intersectSphere(t,e){Ke.subVectors(t.center,this.origin);const n=Ke.dot(this.direction),i=Ke.dot(Ke)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ke)!==null}intersectTriangle(t,e,n,i,s){Yr.subVectors(e,t),Ds.subVectors(n,t),Zr.crossVectors(Yr,Ds);let r=this.direction.dot(Zr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;fn.subVectors(this.origin,t);const l=a*this.direction.dot(Ds.crossVectors(fn,Ds));if(l<0)return null;const c=a*this.direction.dot(Yr.cross(fn));if(c<0||l+c>r)return null;const h=-a*fn.dot(Zr);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,r,a,l,c,h,d,u,f,m,v,x){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=r,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=v,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/li.setFromMatrixColumn(t,0).length(),s=1/li.setFromMatrixColumn(t,1).length(),r=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,f=r*d,m=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=m+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u+v*a,e[4]=m*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=v+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u-v*a,e[4]=-r*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=v-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,m=a*h,v=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){const u=r*l,f=r*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=r*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Qd)}lookAt(t,e,n){const i=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),pn.crossVectors(n,Te),pn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),pn.crossVectors(n,Te)),pn.normalize(),Ns.crossVectors(Te,pn),i[0]=pn.x,i[4]=Ns.x,i[8]=Te.x,i[1]=pn.y,i[5]=Ns.y,i[9]=Te.y,i[2]=pn.z,i[6]=Ns.z,i[10]=Te.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],x=n[10],g=n[14],p=n[3],b=n[7],y=n[11],M=n[15],T=i[0],_=i[4],D=i[8],B=i[12],z=i[1],A=i[5],X=i[9],C=i[13],I=i[2],N=i[6],P=i[10],O=i[14],k=i[3],q=i[7],V=i[11],G=i[15];return s[0]=r*T+a*z+l*I+c*k,s[4]=r*_+a*A+l*N+c*q,s[8]=r*D+a*X+l*P+c*V,s[12]=r*B+a*C+l*O+c*G,s[1]=h*T+d*z+u*I+f*k,s[5]=h*_+d*A+u*N+f*q,s[9]=h*D+d*X+u*P+f*V,s[13]=h*B+d*C+u*O+f*G,s[2]=m*T+v*z+x*I+g*k,s[6]=m*_+v*A+x*N+g*q,s[10]=m*D+v*X+x*P+g*V,s[14]=m*B+v*C+x*O+g*G,s[3]=p*T+b*z+y*I+M*k,s[7]=p*_+b*A+y*N+M*q,s[11]=p*D+b*X+y*P+M*V,s[15]=p*B+b*C+y*O+M*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],x=t[11],g=t[15];return m*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+v*(+e*l*f-e*c*u+s*r*u-i*r*f+i*c*h-s*l*h)+x*(+e*c*d-e*a*f-s*r*d+n*r*f+s*a*h-n*c*h)+g*(-i*a*h-e*l*d+e*a*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],x=t[14],g=t[15],p=d*x*c-v*u*c+v*l*f-a*x*f-d*l*g+a*u*g,b=m*u*c-h*x*c-m*l*f+r*x*f+h*l*g-r*u*g,y=h*v*c-m*d*c+m*a*f-r*v*f-h*a*g+r*d*g,M=m*d*l-h*v*l-m*a*u+r*v*u+h*a*x-r*d*x,T=e*p+n*b+i*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/T;return t[0]=p*_,t[1]=(v*u*s-d*x*s-v*i*f+n*x*f+d*i*g-n*u*g)*_,t[2]=(a*x*s-v*l*s+v*i*c-n*x*c-a*i*g+n*l*g)*_,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*_,t[4]=b*_,t[5]=(h*x*s-m*u*s+m*i*f-e*x*f-h*i*g+e*u*g)*_,t[6]=(m*l*s-r*x*s-m*i*c+e*x*c+r*i*g-e*l*g)*_,t[7]=(r*u*s-h*l*s+h*i*c-e*u*c-r*i*f+e*l*f)*_,t[8]=y*_,t[9]=(m*d*s-h*v*s-m*n*f+e*v*f+h*n*g-e*d*g)*_,t[10]=(r*v*s-m*a*s+m*n*c-e*v*c-r*n*g+e*a*g)*_,t[11]=(h*a*s-r*d*s-h*n*c+e*d*c+r*n*f-e*a*f)*_,t[12]=M*_,t[13]=(h*v*i-m*d*i+m*n*u-e*v*u-h*n*x+e*d*x)*_,t[14]=(m*a*i-r*v*i-m*n*l+e*v*l+r*n*x-e*a*x)*_,t[15]=(r*d*i-h*a*i+h*n*l-e*d*l-r*n*u+e*a*u)*_,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,h=r+r,d=a+a,u=s*c,f=s*h,m=s*d,v=r*h,x=r*d,g=a*d,p=l*c,b=l*h,y=l*d,M=n.x,T=n.y,_=n.z;return i[0]=(1-(v+g))*M,i[1]=(f+y)*M,i[2]=(m-b)*M,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(u+g))*T,i[6]=(x+p)*T,i[7]=0,i[8]=(m+b)*_,i[9]=(x-p)*_,i[10]=(1-(u+v))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=li.set(i[0],i[1],i[2]).length();const r=li.set(i[4],i[5],i[6]).length(),a=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Be.copy(this);const c=1/s,h=1/r,d=1/a;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=d,Be.elements[9]*=d,Be.elements[10]*=d,e.setFromRotationMatrix(Be),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r){r===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(r+s)/(r-s),f=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,r){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(r-s),d=(e+t)*l,u=(n+i)*c,f=(r+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}_t.prototype.isMatrix4=!0;const li=new L,Be=new _t,Kd=new L(0,0,0),Qd=new L(1,1,1),pn=new L,Ns=new L,Te=new L,Za=new _t,Ja=new ge;class Dn{constructor(t=0,e=0,n=0,i=Dn.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Dn.prototype.isEuler=!0;Dn.DefaultOrder="XYZ";Dn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tf=0;const $a=new L,ci=new ge,Qe=new _t,Fs=new L,Yi=new L,ef=new L,nf=new ge,Ka=new L(1,0,0),Qa=new L(0,1,0),tl=new L(0,0,1),sf={type:"added"},el={type:"removed"};class Vt extends ei{constructor(){super(),Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ye(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DefaultUp.clone();const t=new L,e=new Dn,n=new ge,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new fe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Vt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Ka,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(tl,t)}translateOnAxis(t,e){return $a.copy(t).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ka,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(tl,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Yi,Fs,this.up):Qe.lookAt(Fs,Yi,this.up),this.quaternion.setFromRotationMatrix(Qe),i&&(Qe.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(Qe),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(el)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(el)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Vt.DefaultUp=new L(0,1,0);Vt.DefaultMatrixAutoUpdate=!0;Vt.prototype.isObject3D=!0;const Oe=new L,tn=new L,Jr=new L,en=new L,hi=new L,ui=new L,nl=new L,$r=new L,Kr=new L,Qr=new L;class ne{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Oe.subVectors(t,e),i.cross(Oe);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Oe.subVectors(i,e),tn.subVectors(n,e),Jr.subVectors(t,e);const r=Oe.dot(Oe),a=Oe.dot(tn),l=Oe.dot(Jr),c=tn.dot(tn),h=tn.dot(Jr),d=r*c-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(c*l-a*h)*u,m=(r*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,en),l.set(0,0),l.addScaledVector(s,en.x),l.addScaledVector(r,en.y),l.addScaledVector(a,en.z),l}static isFrontFacing(t,e,n,i){return Oe.subVectors(n,e),tn.subVectors(t,e),Oe.cross(tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Oe.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ne.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ne.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ne.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ne.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ne.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;hi.subVectors(i,n),ui.subVectors(s,n),$r.subVectors(t,n);const l=hi.dot($r),c=ui.dot($r);if(l<=0&&c<=0)return e.copy(n);Kr.subVectors(t,i);const h=hi.dot(Kr),d=ui.dot(Kr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(hi,r);Qr.subVectors(t,s);const f=hi.dot(Qr),m=ui.dot(Qr);if(m>=0&&f<=m)return e.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ui,a);const x=h*m-f*d;if(x<=0&&d-h>=0&&f-m>=0)return nl.subVectors(s,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(nl,a);const g=1/(x+v+u);return r=v*g,a=u*g,e.copy(n).addScaledVector(hi,r).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let rf=0;class xe extends ei{constructor(){super(),Object.defineProperty(this,"id",{value:rf++}),this.uuid=Ye(),this.name="",this.type="Material",this.fog=!0,this.blending=hs,this.side=ps,this.vertexColors=!1,this.opacity=1,this.format=_e,this.transparent=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===bc;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==ps&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==_e&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.format=t.format,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}xe.prototype.isMaterial=!0;const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ue={h:0,s:0,l:0},zs={h:0,s:0,l:0};function to(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function eo(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function no(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}class xt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,e,n){return this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=Xd(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,s=2*n-i;this.r=to(s,i,t+1/3),this.g=to(s,i,t),this.b=to(s,i,t-1/3)}return this}setStyle(t){function e(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let i;const s=n[1],r=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=Ic[t.toLowerCase()];return e!==void 0?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,e=2){return this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this}copyLinearToGamma(t,e=2){const n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this}convertGammaToLinear(t){return this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){const e=this.r,n=this.g,i=this.b,s=Math.max(e,n,i),r=Math.min(e,n,i);let a,l;const c=(r+s)/2;if(r===s)a=0,l=0;else{const h=s-r;switch(l=c<=.5?h/(s+r):h/(2-s-r),s){case e:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-e)/h+2;break;case i:a=(e-n)/h+4;break}a/=6}return t.h=a,t.s=l,t.l=c,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,e,n){return this.getHSL(Ue),Ue.h+=t,Ue.s+=e,Ue.l+=n,this.setHSL(Ue.h,Ue.s,Ue.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ue),t.getHSL(zs);const n=kr(Ue.h,zs.h,e),i=kr(Ue.s,zs.s,e),s=kr(Ue.l,zs.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}xt.NAMES=Ic;xt.prototype.isColor=!0;xt.prototype.r=1;xt.prototype.g=1;xt.prototype.b=1;class Zo extends xe{constructor(t){super(),this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Zo.prototype.isMeshBasicMaterial=!0;const Wt=new L,Bs=new tt;class re{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=gs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new xt),e[n++]=r.r,e[n++]=r.g,e[n++]=r.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new tt),e[n++]=r.x,e[n++]=r.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new L),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new Gt),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z,e[n++]=r.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Wt.fromBufferAttribute(this,e),Wt.applyMatrix3(t),this.setXYZ(e,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Wt.x=this.getX(e),Wt.y=this.getY(e),Wt.z=this.getZ(e),Wt.applyMatrix4(t),this.setXYZ(e,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Wt.x=this.getX(e),Wt.y=this.getY(e),Wt.z=this.getZ(e),Wt.applyNormalMatrix(t),this.setXYZ(e,Wt.x,Wt.y,Wt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Wt.x=this.getX(e),Wt.y=this.getY(e),Wt.z=this.getZ(e),Wt.transformDirection(t),this.setXYZ(e,Wt.x,Wt.y,Wt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gs&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}re.prototype.isBufferAttribute=!0;class Dc extends re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nc extends re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class of extends re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}of.prototype.isFloat16BufferAttribute=!0;class ue extends re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let af=0;const Re=new _t,io=new Vt,di=new L,Ae=new Ve,Zi=new Ve,oe=new L;class Zt extends ei{constructor(){super(),Object.defineProperty(this,"id",{value:af++}),this.uuid=Ye(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rc(t)>65535?Nc:Dc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new fe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ve);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ae.setFromBufferAttribute(s),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,Ae.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,Ae.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(Ae.min),this.boundingBox.expandByPoint(Ae.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ae.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(oe.addVectors(Ae.min,Zi.min),Ae.expandByPoint(oe),oe.addVectors(Ae.max,Zi.max),Ae.expandByPoint(oe)):(Ae.expandByPoint(Zi.min),Ae.expandByPoint(Zi.max))}Ae.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(oe));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)oe.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(t,c),oe.add(di)),i=Math.max(i,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new re(new Float32Array(4*a),4));const l=e.tangent.array,c=[],h=[];for(let z=0;z<a;z++)c[z]=new L,h[z]=new L;const d=new L,u=new L,f=new L,m=new tt,v=new tt,x=new tt,g=new L,p=new L;function b(z,A,X){d.fromArray(i,z*3),u.fromArray(i,A*3),f.fromArray(i,X*3),m.fromArray(r,z*2),v.fromArray(r,A*2),x.fromArray(r,X*2),u.sub(d),f.sub(d),v.sub(m),x.sub(m);const C=1/(v.x*x.y-x.x*v.y);!isFinite(C)||(g.copy(u).multiplyScalar(x.y).addScaledVector(f,-v.y).multiplyScalar(C),p.copy(f).multiplyScalar(v.x).addScaledVector(u,-x.x).multiplyScalar(C),c[z].add(g),c[A].add(g),c[X].add(g),h[z].add(p),h[A].add(p),h[X].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let z=0,A=y.length;z<A;++z){const X=y[z],C=X.start,I=X.count;for(let N=C,P=C+I;N<P;N+=3)b(n[N+0],n[N+1],n[N+2])}const M=new L,T=new L,_=new L,D=new L;function B(z){_.fromArray(s,z*3),D.copy(_);const A=c[z];M.copy(A),M.sub(_.multiplyScalar(_.dot(A))).normalize(),T.crossVectors(D,A);const C=T.dot(h[z])<0?-1:1;l[z*4]=M.x,l[z*4+1]=M.y,l[z*4+2]=M.z,l[z*4+3]=C}for(let z=0,A=y.length;z<A;++z){const X=y[z],C=X.start,I=X.count;for(let N=C,P=C+I;N<P;N+=3)B(n[N+0]),B(n[N+1]),B(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new L,s=new L,r=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),v=t.getX(u+1),x=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const r=n[i].array,a=t.attributes[i],l=a.array,c=a.itemSize*e,h=Math.min(l.length,r.length-c);for(let d=0,u=c;d<h;d++,u++)r[u]=l[d]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new re(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.prototype.isBufferGeometry=!0;const il=new _t,fi=new ni,so=new Ui,mn=new L,gn=new L,vn=new L,ro=new L,oo=new L,ao=new L,Os=new L,Us=new L,ks=new L,Vs=new tt,Hs=new tt,Gs=new tt,lo=new L,Ws=new L;class he extends Vt{constructor(t=new Zt,e=new Zo){super(),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),t.ray.intersectsSphere(so)===!1)||(il.copy(s).invert(),fi.copy(t.ray).applyMatrix4(il),n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1))return;let r;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const g=f[v],p=i[g.materialIndex],b=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let M=b,T=y;M<T;M+=3){const _=a.getX(M),D=a.getX(M+1),B=a.getX(M+2);r=qs(this,p,t,fi,l,c,h,d,u,_,D,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let g=v,p=x;g<p;g+=3){const b=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);r=qs(this,i,t,fi,l,c,h,d,u,b,y,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const g=f[v],p=i[g.materialIndex],b=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=b,T=y;M<T;M+=3){const _=M,D=M+1,B=M+2;r=qs(this,p,t,fi,l,c,h,d,u,_,D,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=v,p=x;g<p;g+=3){const b=g,y=g+1,M=g+2;r=qs(this,i,t,fi,l,c,h,d,u,b,y,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}he.prototype.isMesh=!0;function lf(o,t,e,n,i,s,r,a){let l;if(t.side===ie?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side!==Ii,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:o}}function qs(o,t,e,n,i,s,r,a,l,c,h,d){mn.fromBufferAttribute(i,c),gn.fromBufferAttribute(i,h),vn.fromBufferAttribute(i,d);const u=o.morphTargetInfluences;if(s&&u){Os.set(0,0,0),Us.set(0,0,0),ks.set(0,0,0);for(let m=0,v=s.length;m<v;m++){const x=u[m],g=s[m];x!==0&&(ro.fromBufferAttribute(g,c),oo.fromBufferAttribute(g,h),ao.fromBufferAttribute(g,d),r?(Os.addScaledVector(ro,x),Us.addScaledVector(oo,x),ks.addScaledVector(ao,x)):(Os.addScaledVector(ro.sub(mn),x),Us.addScaledVector(oo.sub(gn),x),ks.addScaledVector(ao.sub(vn),x)))}mn.add(Os),gn.add(Us),vn.add(ks)}o.isSkinnedMesh&&(o.boneTransform(c,mn),o.boneTransform(h,gn),o.boneTransform(d,vn));const f=lf(o,t,e,n,mn,gn,vn,lo);if(f){a&&(Vs.fromBufferAttribute(a,c),Hs.fromBufferAttribute(a,h),Gs.fromBufferAttribute(a,d),f.uv=ne.getUV(lo,mn,gn,vn,Vs,Hs,Gs,new tt)),l&&(Vs.fromBufferAttribute(l,c),Hs.fromBufferAttribute(l,h),Gs.fromBufferAttribute(l,d),f.uv2=ne.getUV(lo,mn,gn,vn,Vs,Hs,Gs,new tt));const m={a:c,b:h,c:d,normal:new L,materialIndex:0};ne.getNormal(mn,gn,vn,m.normal),f.face=m}return f}class ii extends Zt{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function m(v,x,g,p,b,y,M,T,_,D,B){const z=y/_,A=M/D,X=y/2,C=M/2,I=T/2,N=_+1,P=D+1;let O=0,k=0;const q=new L;for(let V=0;V<P;V++){const G=V*A-C;for(let Y=0;Y<N;Y++){const it=Y*z-X;q[v]=it*p,q[x]=G*b,q[g]=I,c.push(q.x,q.y,q.z),q[v]=0,q[x]=0,q[g]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(Y/_),d.push(1-V/D),O+=1}}for(let V=0;V<D;V++)for(let G=0;G<_;G++){const Y=u+G+N*V,it=u+G+N*(V+1),ut=u+(G+1)+N*(V+1),It=u+(G+1)+N*V;l.push(Y,it,It),l.push(it,ut,It),k+=6}a.addGroup(f,k,B),f+=k,u+=O}}static fromJSON(t){return new ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function me(o){const t={};for(let e=0;e<o.length;e++){const n=Ni(o[e]);for(const i in n)t[i]=n[i]}return t}const cf={clone:Ni,merge:me};var hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends xe{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Qn.prototype.isShaderMaterial=!0;class Jo extends Vt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Jo.prototype.isCamera=!0;class ye extends Jo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}ye.prototype.isPerspectiveCamera=!0;const pi=90,mi=1;class $o extends Vt{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new ye(pi,mi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const s=new ye(pi,mi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);const r=new ye(pi,mi,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new L(0,1,0)),this.add(r);const a=new ye(pi,mi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new ye(pi,mi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new ye(pi,mi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,l,c]=this.children,h=t.xr.enabled,d=t.getRenderTarget();t.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=u,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(d),t.xr.enabled=h}}class Sr extends pe{constructor(t,e,n,i,s,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,i,s,r,a,l,c,h),this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}Sr.prototype.isCubeTexture=!0;class Fc extends Ie{constructor(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),super(t,t,e),e=e||{},this.texture=new Sr(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.format=_e,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ii(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ie,blending:Tn});s.uniforms.tEquirect.value=e;const r=new he(i,s),a=e.minFilter;return e.minFilter===wr&&(e.minFilter=Pe),new $o(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}Fc.prototype.isWebGLCubeRenderTarget=!0;const co=new L,df=new L,ff=new fe;class cn{constructor(t=new L(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=co.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(co),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ff.getNormalMatrix(t),i=this.coplanarPoint(co).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}cn.prototype.isPlane=!0;const gi=new Ui,js=new L;class Er{constructor(t=new cn,e=new cn,n=new cn,i=new cn,s=new cn,r=new cn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],f=n[9],m=n[10],v=n[11],x=n[12],g=n[13],p=n[14],b=n[15];return e[0].setComponents(a-i,d-l,v-u,b-x).normalize(),e[1].setComponents(a+i,d+l,v+u,b+x).normalize(),e[2].setComponents(a+s,d+c,v+f,b+g).normalize(),e[3].setComponents(a-s,d-c,v-f,b-g).normalize(),e[4].setComponents(a-r,d-h,v-m,b-p).normalize(),e[5].setComponents(a+r,d+h,v+m,b+p).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zc(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function pf(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,d,u),c.onUploadCallback();let m=5126;return d instanceof Float32Array?m=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?e?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:d instanceof Int16Array?m=5122:d instanceof Uint32Array?m=5125:d instanceof Int32Array?m=5124:d instanceof Int8Array?m=5120:(d instanceof Uint8Array||d instanceof Uint8ClampedArray)&&(m=5121),{buffer:f,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,f=h.updateRange;o.bindBuffer(d,c),f.count===-1?o.bufferSubData(d,0,u):(e?o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:a,update:l}}class Tr extends Zt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],v=[],x=[];for(let g=0;g<h;g++){const p=g*u-r;for(let b=0;b<c;b++){const y=b*d-s;m.push(y,-p,0),v.push(0,0,1),x.push(b/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let p=0;p<a;p++){const b=p+c*g,y=p+c*(g+1),M=p+1+c*(g+1),T=p+1+c*g;f.push(b,y,T),f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(x,2))}static fromJSON(t){return new Tr(t.width,t.height,t.widthSegments,t.heightSegments)}}var mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf="vec3 transformed = vec3( position );",bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Df=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ff=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Kf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,np=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gp=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Tp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,em=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,nm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,im=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,om=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,am=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Um=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pt={alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:vf,alphatest_pars_fragment:xf,aomap_fragment:yf,aomap_pars_fragment:_f,begin_vertex:wf,beginnormal_vertex:bf,bsdfs:Mf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Cf,color_fragment:Lf,color_pars_fragment:Rf,color_pars_vertex:Pf,color_vertex:If,common:Df,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:zf,displacementmap_vertex:Bf,emissivemap_fragment:Of,emissivemap_pars_fragment:Uf,encodings_fragment:kf,encodings_pars_fragment:Vf,envmap_fragment:Hf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Wf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:np,envmap_vertex:jf,fog_vertex:Xf,fog_pars_vertex:Yf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:$f,lightmap_fragment:Kf,lightmap_pars_fragment:Qf,lights_lambert_vertex:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:vp,map_particle_fragment:xp,map_particle_pars_fragment:yp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:wp,morphnormal_vertex:bp,morphtarget_pars_vertex:Mp,morphtarget_vertex:Sp,normal_fragment_begin:Ep,normal_fragment_maps:Tp,normal_pars_fragment:Ap,normal_pars_vertex:Cp,normal_vertex:Lp,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Dp,output_fragment:Np,packing:Fp,premultiplied_alpha_fragment:zp,project_vertex:Bp,dithering_fragment:Op,dithering_pars_fragment:Up,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Wp,shadowmask_pars_fragment:qp,skinbase_vertex:jp,skinning_pars_vertex:Xp,skinning_vertex:Yp,skinnormal_vertex:Zp,specularmap_fragment:Jp,specularmap_pars_fragment:$p,tonemapping_fragment:Kp,tonemapping_pars_fragment:Qp,transmission_fragment:tm,transmission_pars_fragment:em,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:sm,uv2_pars_fragment:rm,uv2_pars_vertex:om,uv2_vertex:am,worldpos_vertex:lm,background_vert:cm,background_frag:hm,cube_vert:um,cube_frag:dm,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:vm,equirect_frag:xm,linedashed_vert:ym,linedashed_frag:_m,meshbasic_vert:wm,meshbasic_frag:bm,meshlambert_vert:Mm,meshlambert_frag:Sm,meshmatcap_vert:Em,meshmatcap_frag:Tm,meshnormal_vert:Am,meshnormal_frag:Cm,meshphong_vert:Lm,meshphong_frag:Rm,meshphysical_vert:Pm,meshphysical_frag:Im,meshtoon_vert:Dm,meshtoon_frag:Nm,points_vert:Fm,points_frag:zm,shadow_vert:Bm,shadow_frag:Om,sprite_vert:Um,sprite_frag:km},ot={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fe},uv2Transform:{value:new fe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}}},je={basic:{uniforms:me([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:me([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.fog,ot.lights,{emissive:{value:new xt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:me([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:me([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:me([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new xt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:me([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:me([ot.points,ot.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:me([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:me([ot.common,ot.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:me([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:me([ot.sprite,ot.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},cube:{uniforms:me([ot.envmap,{opacity:{value:1}}]),vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:me([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:me([ot.lights,ot.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};je.physical={uniforms:me([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};function Vm(o,t,e,n,i){const s=new xt(0);let r=0,a,l,c=null,h=0,d=null;function u(m,v){let x=!1,g=v.isScene===!0?v.background:null;g&&g.isTexture&&(g=t.get(g));const p=o.xr,b=p.getSession&&p.getSession();b&&b.environmentBlendMode==="additive"&&(g=null),g===null?f(s,r):g&&g.isColor&&(f(g,1),x=!0),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),g&&(g.isCubeTexture||g.mapping===_r)?(l===void 0&&(l=new he(new ii(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ni(je.cube.uniforms),vertexShader:je.cube.vertexShader,fragmentShader:je.cube.fragmentShader,side:ie,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,(c!==g||h!==g.version||d!==o.toneMapping)&&(l.material.needsUpdate=!0,c=g,h=g.version,d=o.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(a===void 0&&(a=new he(new Tr(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ni(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),a.material.uniforms.uvTransform.value.copy(g.matrix),(c!==g||h!==g.version||d!==o.toneMapping)&&(a.material.needsUpdate=!0,c=g,h=g.version,d=o.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function f(m,v){e.buffers.color.setClear(m.r,m.g,m.b,v,i)}return{getClearColor:function(){return s},setClearColor:function(m,v=1){s.set(m),r=v,f(s,r)},getClearAlpha:function(){return r},setClearAlpha:function(m){r=m,f(s,r)},render:u}}function Hm(o,t,e,n){const i=o.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=v(null);let c=l;function h(C,I,N,P,O){let k=!1;if(r){const q=m(P,N,I);c!==q&&(c=q,u(c.object)),k=x(P,O),k&&g(P,O)}else{const q=I.wireframe===!0;(c.geometry!==P.id||c.program!==N.id||c.wireframe!==q)&&(c.geometry=P.id,c.program=N.id,c.wireframe=q,k=!0)}C.isInstancedMesh===!0&&(k=!0),O!==null&&e.update(O,34963),k&&(_(C,I,N,P),O!==null&&o.bindBuffer(34963,e.get(O).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function u(C){return n.isWebGL2?o.bindVertexArray(C):s.bindVertexArrayOES(C)}function f(C){return n.isWebGL2?o.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function m(C,I,N){const P=N.wireframe===!0;let O=a[C.id];O===void 0&&(O={},a[C.id]=O);let k=O[I.id];k===void 0&&(k={},O[I.id]=k);let q=k[P];return q===void 0&&(q=v(d()),k[P]=q),q}function v(C){const I=[],N=[],P=[];for(let O=0;O<i;O++)I[O]=0,N[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:P,object:C,attributes:{},index:null}}function x(C,I){const N=c.attributes,P=C.attributes;let O=0;for(const k in P){const q=N[k],V=P[k];if(q===void 0||q.attribute!==V||q.data!==V.data)return!0;O++}return c.attributesNum!==O||c.index!==I}function g(C,I){const N={},P=C.attributes;let O=0;for(const k in P){const q=P[k],V={};V.attribute=q,q.data&&(V.data=q.data),N[k]=V,O++}c.attributes=N,c.attributesNum=O,c.index=I}function p(){const C=c.newAttributes;for(let I=0,N=C.length;I<N;I++)C[I]=0}function b(C){y(C,0)}function y(C,I){const N=c.newAttributes,P=c.enabledAttributes,O=c.attributeDivisors;N[C]=1,P[C]===0&&(o.enableVertexAttribArray(C),P[C]=1),O[C]!==I&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,I),O[C]=I)}function M(){const C=c.newAttributes,I=c.enabledAttributes;for(let N=0,P=I.length;N<P;N++)I[N]!==C[N]&&(o.disableVertexAttribArray(N),I[N]=0)}function T(C,I,N,P,O,k){n.isWebGL2===!0&&(N===5124||N===5125)?o.vertexAttribIPointer(C,I,N,O,k):o.vertexAttribPointer(C,I,N,P,O,k)}function _(C,I,N,P){if(n.isWebGL2===!1&&(C.isInstancedMesh||P.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;p();const O=P.attributes,k=N.getAttributes(),q=I.defaultAttributeValues;for(const V in k){const G=k[V];if(G.location>=0){let Y=O[V];if(Y===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),Y!==void 0){const it=Y.normalized,ut=Y.itemSize,It=e.get(Y);if(It===void 0)continue;const K=It.buffer,At=It.type,bt=It.bytesPerElement;if(Y.isInterleavedBufferAttribute){const vt=Y.data,yt=vt.stride,Ft=Y.offset;if(vt&&vt.isInstancedInterleavedBuffer){for(let j=0;j<G.locationSize;j++)y(G.location+j,vt.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let j=0;j<G.locationSize;j++)b(G.location+j);o.bindBuffer(34962,K);for(let j=0;j<G.locationSize;j++)T(G.location+j,ut/G.locationSize,At,it,yt*bt,(Ft+ut/G.locationSize*j)*bt)}else{if(Y.isInstancedBufferAttribute){for(let vt=0;vt<G.locationSize;vt++)y(G.location+vt,Y.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let vt=0;vt<G.locationSize;vt++)b(G.location+vt);o.bindBuffer(34962,K);for(let vt=0;vt<G.locationSize;vt++)T(G.location+vt,ut/G.locationSize,At,it,ut*bt,ut/G.locationSize*vt*bt)}}else if(q!==void 0){const it=q[V];if(it!==void 0)switch(it.length){case 2:o.vertexAttrib2fv(G.location,it);break;case 3:o.vertexAttrib3fv(G.location,it);break;case 4:o.vertexAttrib4fv(G.location,it);break;default:o.vertexAttrib1fv(G.location,it)}}}}M()}function D(){A();for(const C in a){const I=a[C];for(const N in I){const P=I[N];for(const O in P)f(P[O].object),delete P[O];delete I[N]}delete a[C]}}function B(C){if(a[C.id]===void 0)return;const I=a[C.id];for(const N in I){const P=I[N];for(const O in P)f(P[O].object),delete P[O];delete I[N]}delete a[C.id]}function z(C){for(const I in a){const N=a[I];if(N[C.id]===void 0)continue;const P=N[C.id];for(const O in P)f(P[O].object),delete P[O];delete N[C.id]}}function A(){X(),c!==l&&(c=l,u(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:A,resetDefaultState:X,dispose:D,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:p,enableAttribute:b,disableUnusedAttributes:M}}function Gm(o,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=o,f="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,c,h,d),e.update(h,s,d)}this.setMode=r,this.render=a,this.renderInstances=l}function Wm(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(_){if(_==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&o instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=o.getParameter(34930),u=o.getParameter(35660),f=o.getParameter(3379),m=o.getParameter(34076),v=o.getParameter(34921),x=o.getParameter(36347),g=o.getParameter(36348),p=o.getParameter(36349),b=u>0,y=r||t.has("OES_texture_float"),M=b&&y,T=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:x,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function qm(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new cn,a=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,f){const m=d.length!==0||u||n!==0||i;return i=u,e=h(d,f,0),n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,u,f){const m=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,g=o.get(d);if(!i||m===null||m.length===0||s&&!x)s?h(null):c();else{const p=s?0:n,b=p*4;let y=g.clippingState||null;l.value=y,y=h(m,u,b,f);for(let M=0;M!==b;++M)y[M]=e[M];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const v=d!==null?d.length:0;let x=null;if(v!==0){if(x=l.value,m!==!0||x===null){const g=f+v*4,p=u.matrixWorldInverse;a.getNormalMatrix(p),(x===null||x.length<g)&&(x=new Float32Array(g));for(let b=0,y=f;b!==v;++b,y+=4)r.copy(d[b]).applyMatrix4(p,a),r.normal.toArray(x,y),x[y+3]=r.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,x}}function jm(o){let t=new WeakMap;function e(r,a){return a===Lo?r.mapping=ws:a===Ro&&(r.mapping=bs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===Lo||a===Ro)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=o.getRenderTarget(),h=new Fc(l.height/2);return h.fromEquirectangularTexture(o,r),t.set(r,h),o.setRenderTarget(c),r.addEventListener("dispose",i),e(h.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ko extends Jo{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Ko.prototype.isOrthographicCamera=!0;class Ar extends Qn{constructor(t){super(t),this.type="RawShaderMaterial"}}Ar.prototype.isRawShaderMaterial=!0;const Pi=4,An=8,qe=Math.pow(2,An),Bc=[.125,.215,.35,.446,.526,.582],Oc=An-Pi+1+Bc.length,vi=20,ti={[Ee]:0,[br]:1,[Xo]:2,[Ac]:3,[Cc]:4,[Lc]:5,[jo]:6},ho=new Ko,{_lodPlanes:Ji,_sizeLods:sl,_sigmas:Xs}=Zm(),rl=new xt;let uo=null;const Xn=(1+Math.sqrt(5))/2,xi=1/Xn,ol=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Xn,xi),new L(0,Xn,-xi),new L(xi,0,Xn),new L(-xi,0,Xn),new L(Xn,xi,0),new L(-Xn,xi,0)];class Xm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=Jm(vi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){uo=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t){return this._fromTexture(t)}fromCubemap(t){return this._fromTexture(t)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=cl(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=ll(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let t=0;t<Ji.length;t++)Ji[t].dispose()}_cleanup(t){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(uo),t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t){uo=this._renderer.getRenderTarget();const e=this._allocateTargets(t);return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(t){const e={magFilter:ce,minFilter:ce,generateMipmaps:!1,type:Rn,format:nd,encoding:Ym(t)?t.encoding:Xo,depthBuffer:!1},n=al(e);return n.depthBuffer=!t,this._pingPongRenderTarget=al(e),n}_compileMaterial(t){const e=new he(Ji[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,n,i){const a=new ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.outputEncoding,f=h.toneMapping;h.getClearColor(rl),h.toneMapping=Jn,h.outputEncoding=Ee,h.autoClear=!1;const m=new Zo({name:"PMREM.Background",side:ie,depthWrite:!1,depthTest:!1}),v=new he(new ii,m);let x=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(rl),x=!0);for(let p=0;p<6;p++){const b=p%3;b==0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b==1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p])),Ys(i,b*qe,p>2?qe:0,qe,qe),h.setRenderTarget(i),x&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.outputEncoding=u,h.autoClear=d,t.background=g}_setEncoding(t,e){t.value=ti[e.encoding]}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ws||t.mapping===bs;i?this._cubemapShader==null&&(this._cubemapShader=cl()):this._equirectShader==null&&(this._equirectShader=ll());const s=i?this._cubemapShader:this._equirectShader,r=new he(Ji[0],s),a=s.uniforms;a.envMap.value=t,i||a.texelSize.value.set(1/t.image.width,1/t.image.height),this._setEncoding(a.inputEncoding,t),this._setEncoding(a.outputEncoding,e.texture),Ys(e,0,0,3*qe,2*qe),n.setRenderTarget(e),n.render(r,ho)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<Oc;i++){const s=Math.sqrt(Xs[i]*Xs[i]-Xs[i-1]*Xs[i-1]),r=ol[(i-1)%ol.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new he(Ji[i],c),u=c.uniforms,f=sl[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*vi-1),v=s/m,x=isFinite(s)?1+Math.floor(h*v):vi;x>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vi}`);const g=[];let p=0;for(let T=0;T<vi;++T){const _=T/v,D=Math.exp(-_*_/2);g.push(D),T==0?p+=D:T<x&&(p+=2*D)}for(let T=0;T<g.length;T++)g[T]=g[T]/p;u.envMap.value=t.texture,u.samples.value=x,u.weights.value=g,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a),u.dTheta.value=m,u.mipInt.value=An-n,this._setEncoding(u.inputEncoding,t.texture),this._setEncoding(u.outputEncoding,t.texture);const b=sl[i],y=3*Math.max(0,qe-2*b),M=(i===0?0:2*qe)+2*b*(i>An-Pi?i-An+Pi:0);Ys(e,y,M,3*b,2*b),l.setRenderTarget(e),l.render(d,ho)}}function Ym(o){return o===void 0||o.type!==Rn?!1:o.encoding===Ee||o.encoding===br||o.encoding===jo}function Zm(){const o=[],t=[],e=[];let n=An;for(let i=0;i<Oc;i++){const s=Math.pow(2,n);t.push(s);let r=1/s;i>An-Pi?r=Bc[i-An+Pi-1]:i==0&&(r=0),e.push(r);const a=1/(s-1),l=-a/2,c=1+a/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=2,v=1,x=new Float32Array(f*u*d),g=new Float32Array(m*u*d),p=new Float32Array(v*u*d);for(let y=0;y<d;y++){const M=y%3*2/3-1,T=y>2?0:-1,_=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];x.set(_,f*u*y),g.set(h,m*u*y);const D=[y,y,y,y,y,y];p.set(D,v*u*y)}const b=new Zt;b.setAttribute("position",new re(x,f)),b.setAttribute("uv",new re(g,m)),b.setAttribute("faceIndex",new re(p,v)),o.push(b),n>Pi&&n--}return{_lodPlanes:o,_sizeLods:t,_sigmas:e}}function al(o){const t=new Ie(3*qe,3*qe,o);return t.texture.mapping=_r,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Ys(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Jm(o){const t=new Float32Array(o),e=new L(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:o},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e},inputEncoding:{value:ti[Ee]},outputEncoding:{value:ti[Ee]}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${ta()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ll(){const o=new tt(1,1);return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:o},inputEncoding:{value:ti[Ee]},outputEncoding:{value:ti[Ee]}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${ta()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function cl(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:ti[Ee]},outputEncoding:{value:ti[Ee]}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${ta()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ta(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function $m(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===Lo||l===Ro,h=l===ws||l===bs;if(c||h){if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){const u=o.getRenderTarget();e===null&&(e=new Xm(o));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),o.setRenderTarget(u),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Km(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qm(o,t,e,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)t.update(u[m],34962);const f=d.morphAttributes;for(const m in f){const v=f[m];for(let x=0,g=v.length;x<g;x++)t.update(v[x],34962)}}function c(d){const u=[],f=d.index,m=d.attributes.position;let v=0;if(f!==null){const p=f.array;v=f.version;for(let b=0,y=p.length;b<y;b+=3){const M=p[b+0],T=p[b+1],_=p[b+2];u.push(M,T,T,_,_,M)}}else{const p=m.array;v=m.version;for(let b=0,y=p.length/3-1;b<y;b+=3){const M=b+0,T=b+1,_=b+2;u.push(M,T,T,_,_,M)}}const x=new(Rc(u)>65535?Nc:Dc)(u,1);x.version=v;const g=s.get(d);g&&t.remove(g),s.set(d,x)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function tg(o,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,f){o.drawElements(s,f,a,u*l),e.update(f,s,1)}function d(u,f,m){if(m===0)return;let v,x;if(i)v=o,x="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,f,a,u*l,m),e.update(f,s,m)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function eg(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}class ea extends pe{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=ce,this.minFilter=ce,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ea.prototype.isDataTexture2DArray=!0;function ng(o,t){return o[0]-t[0]}function ig(o,t){return Math.abs(t[1])-Math.abs(o[1])}function hl(o,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(e)}function sg(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new L,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position.length;let v=s.get(h);if(v===void 0||v.count!==m){v!==void 0&&v.texture.dispose();const p=h.morphAttributes.normal!==void 0,b=h.morphAttributes.position,y=h.morphAttributes.normal||[],M=h.attributes.position.count,T=p===!0?2:1;let _=M*T,D=1;_>t.maxTextureSize&&(D=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const B=new Float32Array(_*D*4*m),z=new ea(B,_,D,m);z.format=_e,z.type=En;const A=T*4;for(let X=0;X<m;X++){const C=b[X],I=y[X],N=_*D*4*X;for(let P=0;P<C.count;P++){r.fromBufferAttribute(C,P),C.normalized===!0&&hl(r,C);const O=P*A;B[N+O+0]=r.x,B[N+O+1]=r.y,B[N+O+2]=r.z,B[N+O+3]=0,p===!0&&(r.fromBufferAttribute(I,P),I.normalized===!0&&hl(r,I),B[N+O+4]=r.x,B[N+O+5]=r.y,B[N+O+6]=r.z,B[N+O+7]=0)}}v={count:m,texture:z,size:new tt(_,D)},s.set(h,v)}let x=0;for(let p=0;p<f.length;p++)x+=f[p];const g=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(o,"morphTargetBaseInfluence",g),u.getUniforms().setValue(o,"morphTargetInfluences",f),u.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let v=n[h.id];if(v===void 0||v.length!==m){v=[];for(let y=0;y<m;y++)v[y]=[y,0];n[h.id]=v}for(let y=0;y<m;y++){const M=v[y];M[0]=y,M[1]=f[y]}v.sort(ig);for(let y=0;y<8;y++)y<m&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(ng);const x=h.morphAttributes.position,g=h.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const M=a[y],T=M[0],_=M[1];T!==Number.MAX_SAFE_INTEGER&&_?(x&&h.getAttribute("morphTarget"+y)!==x[T]&&h.setAttribute("morphTarget"+y,x[T]),g&&h.getAttribute("morphNormal"+y)!==g[T]&&h.setAttribute("morphNormal"+y,g[T]),i[y]=_,p+=_):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),g&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const b=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(o,"morphTargetBaseInfluence",b),u.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function rg(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class Uc extends pe{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=ce,this.minFilter=ce,this.wrapR=Ce,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Uc.prototype.isDataTexture3D=!0;const kc=new pe,Vc=new ea,Hc=new Uc,Gc=new Sr,ul=[],dl=[],fl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function ki(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=ul[i];if(s===void 0&&(s=new Float32Array(i),ul[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function we(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ve(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Cr(o,t){let e=dl[t];e===void 0&&(e=new Int32Array(t),dl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function og(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function ag(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;o.uniform2fv(this.addr,t),ve(e,t)}}function lg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;o.uniform3fv(this.addr,t),ve(e,t)}}function cg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;o.uniform4fv(this.addr,t),ve(e,t)}}function hg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(we(e,n))return;ml.set(n),o.uniformMatrix2fv(this.addr,!1,ml),ve(e,n)}}function ug(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(we(e,n))return;pl.set(n),o.uniformMatrix3fv(this.addr,!1,pl),ve(e,n)}}function dg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(we(e,n))return;fl.set(n),o.uniformMatrix4fv(this.addr,!1,fl),ve(e,n)}}function fg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function pg(o,t){const e=this.cache;we(e,t)||(o.uniform2iv(this.addr,t),ve(e,t))}function mg(o,t){const e=this.cache;we(e,t)||(o.uniform3iv(this.addr,t),ve(e,t))}function gg(o,t){const e=this.cache;we(e,t)||(o.uniform4iv(this.addr,t),ve(e,t))}function vg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function xg(o,t){const e=this.cache;we(e,t)||(o.uniform2uiv(this.addr,t),ve(e,t))}function yg(o,t){const e=this.cache;we(e,t)||(o.uniform3uiv(this.addr,t),ve(e,t))}function _g(o,t){const e=this.cache;we(e,t)||(o.uniform4uiv(this.addr,t),ve(e,t))}function wg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.safeSetTexture2D(t||kc,i)}function bg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hc,i)}function Mg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.safeSetTextureCube(t||Gc,i)}function Sg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vc,i)}function Eg(o){switch(o){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return vg;case 36294:return xg;case 36295:return yg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function Tg(o,t){o.uniform1fv(this.addr,t)}function Ag(o,t){const e=ki(t,this.size,2);o.uniform2fv(this.addr,e)}function Cg(o,t){const e=ki(t,this.size,3);o.uniform3fv(this.addr,e)}function Lg(o,t){const e=ki(t,this.size,4);o.uniform4fv(this.addr,e)}function Rg(o,t){const e=ki(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Pg(o,t){const e=ki(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Ig(o,t){const e=ki(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Dg(o,t){o.uniform1iv(this.addr,t)}function Ng(o,t){o.uniform2iv(this.addr,t)}function Fg(o,t){o.uniform3iv(this.addr,t)}function zg(o,t){o.uniform4iv(this.addr,t)}function Bg(o,t){o.uniform1uiv(this.addr,t)}function Og(o,t){o.uniform2uiv(this.addr,t)}function Ug(o,t){o.uniform3uiv(this.addr,t)}function kg(o,t){o.uniform4uiv(this.addr,t)}function Vg(o,t,e){const n=t.length,i=Cr(e,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.safeSetTexture2D(t[s]||kc,i[s])}function Hg(o,t,e){const n=t.length,i=Cr(e,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||Hc,i[s])}function Gg(o,t,e){const n=t.length,i=Cr(e,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.safeSetTextureCube(t[s]||Gc,i[s])}function Wg(o,t,e){const n=t.length,i=Cr(e,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||Vc,i[s])}function qg(o){switch(o){case 5126:return Tg;case 35664:return Ag;case 35665:return Cg;case 35666:return Lg;case 35674:return Rg;case 35675:return Pg;case 35676:return Ig;case 5124:case 35670:return Dg;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return zg;case 5125:return Bg;case 36294:return Og;case 36295:return Ug;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}function jg(o,t,e){this.id=o,this.addr=e,this.cache=[],this.setValue=Eg(t.type)}function Wc(o,t,e){this.id=o,this.addr=e,this.cache=[],this.size=t.size,this.setValue=qg(t.type)}Wc.prototype.updateCache=function(o){const t=this.cache;o instanceof Float32Array&&t.length!==o.length&&(this.cache=new Float32Array(o.length)),ve(t,o)};function qc(o){this.id=o,this.seq=[],this.map={}}qc.prototype.setValue=function(o,t,e){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const r=n[i];r.setValue(o,t[r.id],e)}};const fo=/(\w+)(\])?(\[|\.)?/g;function gl(o,t){o.seq.push(t),o.map[t.id]=t}function Xg(o,t,e){const n=o.name,i=n.length;for(fo.lastIndex=0;;){const s=fo.exec(n),r=fo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){gl(e,c===void 0?new jg(a,o,t):new Wc(a,o,t));break}else{let d=e.map[a];d===void 0&&(d=new qc(a),gl(e,d)),e=d}}}function Cn(o,t){this.seq=[],this.map={};const e=o.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=o.getActiveUniform(t,n),s=o.getUniformLocation(t,i.name);Xg(i,s,this)}}Cn.prototype.setValue=function(o,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(o,e,n)};Cn.prototype.setOptional=function(o,t,e){const n=t[e];n!==void 0&&this.setValue(o,e,n)};Cn.upload=function(o,t,e,n){for(let i=0,s=t.length;i!==s;++i){const r=t[i],a=e[r.id];a.needsUpdate!==!1&&r.setValue(o,a.value,n)}};Cn.seqWithValue=function(o,t){const e=[];for(let n=0,i=o.length;n!==i;++n){const s=o[n];s.id in t&&e.push(s)}return e};function vl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let Yg=0;function Zg(o){const t=o.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function jc(o){switch(o){case Ee:return["Linear","( value )"];case br:return["sRGB","( value )"];case Xo:return["RGBE","( value )"];case Ac:return["RGBM","( value, 7.0 )"];case Cc:return["RGBM","( value, 16.0 )"];case Lc:return["RGBD","( value, 256.0 )"];case jo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function xl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();return n&&i===""?"":e.toUpperCase()+`

`+i+`

`+Zg(o.getShaderSource(t))}function Wn(o,t){const e=jc(t);return"vec4 "+o+"( vec4 value ) { return "+e[0]+"ToLinear"+e[1]+"; }"}function Jg(o,t){const e=jc(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function $g(o,t){let e;switch(t){case Vu:e="Linear";break;case Hu:e="Reinhard";break;case Gu:e="OptimizedCineon";break;case Wu:e="ACESFilmic";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Kg(o){return[o.extensionDerivatives||o.envMapCubeUV||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function Qg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tv(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function ls(o){return o!==""}function yl(o,t){return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(o){return o.replace(ev,nv)}function nv(o,t){const e=Pt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return No(e)}const iv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(o){return o.replace(sv,Xc).replace(iv,rv)}function rv(o,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Xc(o,t,e,n)}function Xc(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ov(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===as&&(t="SHADOWMAP_TYPE_VSM"),t}function av(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ws:case bs:t="ENVMAP_TYPE_CUBE";break;case _r:case Wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lv(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:case Wo:t="ENVMAP_MODE_REFRACTION";break}return t}function cv(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case yr:t="ENVMAP_BLENDING_MULTIPLY";break;case Uu:t="ENVMAP_BLENDING_MIX";break;case ku:t="ENVMAP_BLENDING_ADD";break}return t}function hv(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=ov(e),c=av(e),h=lv(e),d=cv(e),u=o.gammaFactor>0?o.gammaFactor:1,f=e.isWebGL2?"":Kg(e),m=Qg(s),v=i.createProgram();let x,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=[m].filter(ls).join(`
`),x.length>0&&(x+=`
`),g=[f,m].filter(ls).join(`
`),g.length>0&&(g+=`
`)):(x=[bl(e),"#define SHADER_NAME "+e.shaderName,m,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),g=[f,bl(e),"#define SHADER_NAME "+e.shaderName,m,"#define GAMMA_FACTOR "+u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.format===$n?"#define OPAQUE":"",Pt.encodings_pars_fragment,e.map?Wn("mapTexelToLinear",e.mapEncoding):"",e.matcap?Wn("matcapTexelToLinear",e.matcapEncoding):"",e.envMap?Wn("envMapTexelToLinear",e.envMapEncoding):"",e.emissiveMap?Wn("emissiveMapTexelToLinear",e.emissiveMapEncoding):"",e.specularColorMap?Wn("specularColorMapTexelToLinear",e.specularColorMapEncoding):"",e.sheenColorMap?Wn("sheenColorMapTexelToLinear",e.sheenColorMapEncoding):"",e.lightMap?Wn("lightMapTexelToLinear",e.lightMapEncoding):"",Jg("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),r=No(r),r=yl(r,e),r=_l(r,e),a=No(a),a=yl(a,e),a=_l(a,e),r=wl(r),a=wl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Wa?"":"out highp vec4 pc_fragColor;",e.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=p+x+r,y=p+g+a,M=vl(i,35633,b),T=vl(i,35632,y);if(i.attachShader(v,M),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),o.debug.checkShaderErrors){const B=i.getProgramInfoLog(v).trim(),z=i.getShaderInfoLog(M).trim(),A=i.getShaderInfoLog(T).trim();let X=!0,C=!0;if(i.getProgramParameter(v,35714)===!1){X=!1;const I=xl(i,M,"vertex"),N=xl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+B+`
`+I+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||A==="")&&(C=!1);C&&(this.diagnostics={runnable:X,programLog:B,vertexShader:{log:z,prefix:x},fragmentShader:{log:A,prefix:g}})}i.deleteShader(M),i.deleteShader(T);let _;this.getUniforms=function(){return _===void 0&&(_=new Cn(i,v)),_};let D;return this.getAttributes=function(){return D===void 0&&(D=tv(i,v)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=e.shaderName,this.id=Yg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=T,this}function uv(o,t,e,n,i,s,r){const a=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,h=i.floatVertexTextures,d=i.maxVertexUniforms,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function x(_){const B=_.skeleton.bones;if(h)return 1024;{const A=Math.floor((d-20)/4),X=Math.min(A,B.length);return X<B.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+B.length+" bones. This GPU supports "+X+"."),0):X}}function g(_){let D;return _&&_.isTexture?D=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),D=_.texture.encoding):D=Ee,D}function p(_,D,B,z,A){const X=z.fog,C=_.isMeshStandardMaterial?z.environment:null,I=(_.isMeshStandardMaterial?e:t).get(_.envMap||C),N=m[_.type],P=A.isSkinnedMesh?x(A):0;_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let O,k;if(N){const it=je[N];O=it.vertexShader,k=it.fragmentShader}else O=_.vertexShader,k=_.fragmentShader;const q=o.getRenderTarget(),V=_.alphaTest>0,G=_.clearcoat>0;return{isWebGL2:l,shaderID:N,shaderName:_.type,vertexShader:O,fragmentShader:k,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,instancing:A.isInstancedMesh===!0,instancingColor:A.isInstancedMesh===!0&&A.instanceColor!==null,supportsVertexTextures:u,outputEncoding:q!==null?g(q.texture):o.outputEncoding,map:!!_.map,mapEncoding:g(_.map),matcap:!!_.matcap,matcapEncoding:g(_.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:g(I),envMapCubeUV:!!I&&(I.mapping===_r||I.mapping===Wo),lightMap:!!_.lightMap,lightMapEncoding:g(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:g(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===qd,tangentSpaceNormalMap:_.normalMapType===Bi,clearcoat:G,clearcoatMap:G&&!!_.clearcoatMap,clearcoatRoughnessMap:G&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:G&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,specularColorMapEncoding:g(_.specularColorMap),alphaMap:!!_.alphaMap,alphaTest:V,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenColorMapEncoding:g(_.sheenColorMap),sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!A.geometry&&!!A.geometry.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!A.geometry&&!!A.geometry.attributes.color&&A.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!X,useFog:_.fog,fogExp2:X&&X.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:c,skinning:A.isSkinnedMesh===!0&&P>0,maxBones:P,useVertexTexture:h,morphTargets:!!A.geometry&&!!A.geometry.morphAttributes.position,morphNormals:!!A.geometry&&!!A.geometry.morphAttributes.normal,morphTargetsCount:!!A.geometry&&!!A.geometry.morphAttributes.position?A.geometry.morphAttributes.position.length:0,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,format:_.format,dithering:_.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:_.toneMapped?o.toneMapping:Jn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ii,flipSided:_.side===ie,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function b(_){const D=[];if(_.shaderID?D.push(_.shaderID):(D.push(ja(_.fragmentShader)),D.push(ja(_.vertexShader))),_.defines!==void 0)for(const B in _.defines)D.push(B),D.push(_.defines[B]);if(_.isRawShaderMaterial===!1){for(let B=0;B<v.length;B++)D.push(_[v[B]]);D.push(o.outputEncoding),D.push(o.gammaFactor)}return D.push(_.customProgramCacheKey),D.join()}function y(_){const D=m[_.type];let B;if(D){const z=je[D];B=cf.clone(z.uniforms)}else B=_.uniforms;return B}function M(_,D){let B;for(let z=0,A=a.length;z<A;z++){const X=a[z];if(X.cacheKey===D){B=X,++B.usedTimes;break}}return B===void 0&&(B=new hv(o,D,_,s),a.push(B)),B}function T(_){if(--_.usedTimes===0){const D=a.indexOf(_);a[D]=a[a.length-1],a.pop(),_.destroy()}}return{getParameters:p,getProgramCacheKey:b,getUniforms:y,acquireProgram:M,releaseProgram:T,programs:a}}function dv(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function fv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.program!==t.program?o.program.id-t.program.id:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ml(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Sl(o){const t=[];let e=0;const n=[],i=[],s=[],r={id:-1};function a(){e=0,n.length=0,i.length=0,s.length=0}function l(f,m,v,x,g,p){let b=t[e];const y=o.get(v);return b===void 0?(b={id:f.id,object:f,geometry:m,material:v,program:y.program||r,groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},t[e]=b):(b.id=f.id,b.object=f,b.geometry=m,b.material=v,b.program=y.program||r,b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=g,b.group=p),e++,b}function c(f,m,v,x,g,p){const b=l(f,m,v,x,g,p);v.transmission>0?i.push(b):v.transparent===!0?s.push(b):n.push(b)}function h(f,m,v,x,g,p){const b=l(f,m,v,x,g,p);v.transmission>0?i.unshift(b):v.transparent===!0?s.unshift(b):n.unshift(b)}function d(f,m){n.length>1&&n.sort(f||fv),i.length>1&&i.sort(m||Ml),s.length>1&&s.sort(m||Ml)}function u(){for(let f=e,m=t.length;f<m;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:c,unshift:h,finish:u,sort:d}}function pv(o){let t=new WeakMap;function e(i,s){let r;return t.has(i)===!1?(r=new Sl(o),t.set(i,[r])):s>=t.get(i).length?(r=new Sl(o),t.get(i).push(r)):r=t.get(i)[s],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function mv(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new xt};break;case"SpotLight":e={position:new L,direction:new L,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new L,halfWidth:new L,halfHeight:new L};break}return o[t.id]=e,e}}}function gv(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let vv=0;function xv(o,t){return(t.castShadow?1:0)-(o.castShadow?1:0)}function yv(o,t){const e=new mv,n=gv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new L);const s=new L,r=new _t,a=new _t;function l(h,d){let u=0,f=0,m=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let v=0,x=0,g=0,p=0,b=0,y=0,M=0,T=0;h.sort(xv);const _=d!==!0?Math.PI:1;for(let B=0,z=h.length;B<z;B++){const A=h[B],X=A.color,C=A.intensity,I=A.distance,N=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=X.r*C*_,f+=X.g*C*_,m+=X.b*C*_;else if(A.isLightProbe)for(let P=0;P<9;P++)i.probe[P].addScaledVector(A.sh.coefficients[P],C);else if(A.isDirectionalLight){const P=e.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity*_),A.castShadow){const O=A.shadow,k=n.get(A);k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,i.directionalShadow[v]=k,i.directionalShadowMap[v]=N,i.directionalShadowMatrix[v]=A.shadow.matrix,y++}i.directional[v]=P,v++}else if(A.isSpotLight){const P=e.get(A);if(P.position.setFromMatrixPosition(A.matrixWorld),P.color.copy(X).multiplyScalar(C*_),P.distance=I,P.coneCos=Math.cos(A.angle),P.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),P.decay=A.decay,A.castShadow){const O=A.shadow,k=n.get(A);k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,i.spotShadow[g]=k,i.spotShadowMap[g]=N,i.spotShadowMatrix[g]=A.shadow.matrix,T++}i.spot[g]=P,g++}else if(A.isRectAreaLight){const P=e.get(A);P.color.copy(X).multiplyScalar(C),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=P,p++}else if(A.isPointLight){const P=e.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity*_),P.distance=A.distance,P.decay=A.decay,A.castShadow){const O=A.shadow,k=n.get(A);k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,i.pointShadow[x]=k,i.pointShadowMap[x]=N,i.pointShadowMatrix[x]=A.shadow.matrix,M++}i.point[x]=P,x++}else if(A.isHemisphereLight){const P=e.get(A);P.skyColor.copy(A.color).multiplyScalar(C*_),P.groundColor.copy(A.groundColor).multiplyScalar(C*_),i.hemi[b]=P,b++}}p>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const D=i.hash;(D.directionalLength!==v||D.pointLength!==x||D.spotLength!==g||D.rectAreaLength!==p||D.hemiLength!==b||D.numDirectionalShadows!==y||D.numPointShadows!==M||D.numSpotShadows!==T)&&(i.directional.length=v,i.spot.length=g,i.rectArea.length=p,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=T,D.directionalLength=v,D.pointLength=x,D.spotLength=g,D.rectAreaLength=p,D.hemiLength=b,D.numDirectionalShadows=y,D.numPointShadows=M,D.numSpotShadows=T,i.version=vv++)}function c(h,d){let u=0,f=0,m=0,v=0,x=0;const g=d.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){const y=h[p];if(y.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(y.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),M.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function El(o,t){const e=new yv(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function a(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function _v(o,t){let e=new WeakMap;function n(s,r=0){let a;return e.has(s)===!1?(a=new El(o,t),e.set(s,[a])):r>=e.get(s).length?(a=new El(o,t),e.get(s).push(a)):a=e.get(s)[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Yc extends xe{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}Yc.prototype.isMeshDepthMaterial=!0;class Zc extends xe{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}Zc.prototype.isMeshDistanceMaterial=!0;const wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jc(o,t,e){let n=new Er;const i=new tt,s=new tt,r=new Gt,a=new Yc({depthPacking:Wd}),l=new Zc,c={},h=e.maxTextureSize,d={0:ie,1:ps,2:Ii},u=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:wv,fragmentShader:bv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Zt;m.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new he(m,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc,this.render=function(y,M,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;const _=o.getRenderTarget(),D=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),z=o.state;z.setBlending(Tn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let A=0,X=y.length;A<X;A++){const C=y[A],I=C.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const N=I.getFrameExtents();if(i.multiply(N),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,I.mapSize.y=s.y)),I.map===null&&!I.isPointLightShadow&&this.type===as){const O={minFilter:Pe,magFilter:Pe,format:_e};I.map=new Ie(i.x,i.y,O),I.map.texture.name=C.name+".shadowMap",I.mapPass=new Ie(i.x,i.y,O),I.camera.updateProjectionMatrix()}if(I.map===null){const O={minFilter:ce,magFilter:ce,format:_e};I.map=new Ie(i.x,i.y,O),I.map.texture.name=C.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const P=I.getViewportCount();for(let O=0;O<P;O++){const k=I.getViewport(O);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),z.viewport(r),I.updateMatrices(C,O),n=I.getFrustum(),b(M,T,I.camera,C,this.type)}!I.isPointLightShadow&&this.type===as&&g(I,T),I.needsUpdate=!1}x.needsUpdate=!1,o.setRenderTarget(_,D,B)};function g(y,M){const T=t.update(v);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(M,null,T,u,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(M,null,T,f,v,null)}function p(y,M,T,_,D,B,z){let A=null;const X=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(X!==void 0?A=X:A=_.isPointLight===!0?l:a,o.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const C=A.uuid,I=T.uuid;let N=c[C];N===void 0&&(N={},c[C]=N);let P=N[I];P===void 0&&(P=A.clone(),N[I]=P),A=P}return A.visible=T.visible,A.wireframe=T.wireframe,z===as?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:d[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(_.matrixWorld),A.nearDistance=D,A.farDistance=B),A}function b(y,M,T,_,D){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&D===as)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const A=t.update(y),X=y.material;if(Array.isArray(X)){const C=A.groups;for(let I=0,N=C.length;I<N;I++){const P=C[I],O=X[P.materialIndex];if(O&&O.visible){const k=p(y,A,O,_,T.near,T.far,D);o.renderBufferDirect(T,null,A,k,y,P)}}}else if(X.visible){const C=p(y,A,X,_,T.near,T.far,D);o.renderBufferDirect(T,null,A,C,y,null)}}const z=y.children;for(let A=0,X=z.length;A<X;A++)b(z[A],M,T,_,D)}}function Mv(o,t,e){const n=e.isWebGL2;function i(){let F=!1;const st=new Gt;let Q=null;const lt=new Gt(0,0,0,0);return{setMask:function(rt){Q!==rt&&!F&&(o.colorMask(rt,rt,rt,rt),Q=rt)},setLocked:function(rt){F=rt},setClear:function(rt,ft,gt,Ct,Qt){Qt===!0&&(rt*=Ct,ft*=Ct,gt*=Ct),st.set(rt,ft,gt,Ct),lt.equals(st)===!1&&(o.clearColor(rt,ft,gt,Ct),lt.copy(st))},reset:function(){F=!1,Q=null,lt.set(-1,0,0,0)}}}function s(){let F=!1,st=null,Q=null,lt=null;return{setTest:function(rt){rt?it(2929):ut(2929)},setMask:function(rt){st!==rt&&!F&&(o.depthMask(rt),st=rt)},setFunc:function(rt){if(Q!==rt){if(rt)switch(rt){case Iu:o.depthFunc(512);break;case Du:o.depthFunc(519);break;case Nu:o.depthFunc(513);break;case Co:o.depthFunc(515);break;case Fu:o.depthFunc(514);break;case zu:o.depthFunc(518);break;case Bu:o.depthFunc(516);break;case Ou:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);Q=rt}},setLocked:function(rt){F=rt},setClear:function(rt){lt!==rt&&(o.clearDepth(rt),lt=rt)},reset:function(){F=!1,st=null,Q=null,lt=null}}}function r(){let F=!1,st=null,Q=null,lt=null,rt=null,ft=null,gt=null,Ct=null,Qt=null;return{setTest:function(Bt){F||(Bt?it(2960):ut(2960))},setMask:function(Bt){st!==Bt&&!F&&(o.stencilMask(Bt),st=Bt)},setFunc:function(Bt,Ne,Fe){(Q!==Bt||lt!==Ne||rt!==Fe)&&(o.stencilFunc(Bt,Ne,Fe),Q=Bt,lt=Ne,rt=Fe)},setOp:function(Bt,Ne,Fe){(ft!==Bt||gt!==Ne||Ct!==Fe)&&(o.stencilOp(Bt,Ne,Fe),ft=Bt,gt=Ne,Ct=Fe)},setLocked:function(Bt){F=Bt},setClear:function(Bt){Qt!==Bt&&(o.clearStencil(Bt),Qt=Bt)},reset:function(){F=!1,st=null,Q=null,lt=null,rt=null,ft=null,gt=null,Ct=null,Qt=null}}}const a=new i,l=new s,c=new r;let h={},d={},u=null,f=!1,m=null,v=null,x=null,g=null,p=null,b=null,y=null,M=!1,T=null,_=null,D=null,B=null,z=null;const A=o.getParameter(35661);let X=!1,C=0;const I=o.getParameter(7938);I.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(I)[1]),X=C>=1):I.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),X=C>=2);let N=null,P={};const O=o.getParameter(3088),k=o.getParameter(2978),q=new Gt().fromArray(O),V=new Gt().fromArray(k);function G(F,st,Q){const lt=new Uint8Array(4),rt=o.createTexture();o.bindTexture(F,rt),o.texParameteri(F,10241,9728),o.texParameteri(F,10240,9728);for(let ft=0;ft<Q;ft++)o.texImage2D(st+ft,0,6408,1,1,0,6408,5121,lt);return rt}const Y={};Y[3553]=G(3553,3553,1),Y[34067]=G(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),it(2929),l.setFunc(Co),Ft(!1),j(Ta),it(2884),vt(Tn);function it(F){h[F]!==!0&&(o.enable(F),h[F]=!0)}function ut(F){h[F]!==!1&&(o.disable(F),h[F]=!1)}function It(F,st){return d[F]!==st?(o.bindFramebuffer(F,st),d[F]=st,n&&(F===36009&&(d[36160]=st),F===36160&&(d[36009]=st)),!0):!1}function K(F){return u!==F?(o.useProgram(F),u=F,!0):!1}const At={[Ei]:32774,[wu]:32778,[bu]:32779};if(n)At[Ra]=32775,At[Pa]=32776;else{const F=t.get("EXT_blend_minmax");F!==null&&(At[Ra]=F.MIN_EXT,At[Pa]=F.MAX_EXT)}const bt={[Mu]:0,[Su]:1,[Eu]:768,[Mc]:770,[Pu]:776,[Lu]:774,[Au]:772,[Tu]:769,[Sc]:771,[Ru]:775,[Cu]:773};function vt(F,st,Q,lt,rt,ft,gt,Ct){if(F===Tn){f===!0&&(ut(3042),f=!1);return}if(f===!1&&(it(3042),f=!0),F!==_u){if(F!==m||Ct!==M){if((v!==Ei||p!==Ei)&&(o.blendEquation(32774),v=Ei,p=Ei),Ct)switch(F){case hs:o.blendFuncSeparate(1,771,1,771);break;case Aa:o.blendFunc(1,1);break;case Ca:o.blendFuncSeparate(0,0,769,771);break;case La:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hs:o.blendFuncSeparate(770,771,1,771);break;case Aa:o.blendFunc(770,1);break;case Ca:o.blendFunc(0,769);break;case La:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,g=null,b=null,y=null,m=F,M=Ct}return}rt=rt||st,ft=ft||Q,gt=gt||lt,(st!==v||rt!==p)&&(o.blendEquationSeparate(At[st],At[rt]),v=st,p=rt),(Q!==x||lt!==g||ft!==b||gt!==y)&&(o.blendFuncSeparate(bt[Q],bt[lt],bt[ft],bt[gt]),x=Q,g=lt,b=ft,y=gt),m=F,M=null}function yt(F,st){F.side===Ii?ut(2884):it(2884);let Q=F.side===ie;st&&(Q=!Q),Ft(Q),F.blending===hs&&F.transparent===!1?vt(Tn):vt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const lt=F.stencilWrite;c.setTest(lt),lt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(32926):ut(32926)}function Ft(F){T!==F&&(F?o.frontFace(2304):o.frontFace(2305),T=F)}function j(F){F!==vu?(it(2884),F!==_&&(F===Ta?o.cullFace(1029):F===xu?o.cullFace(1028):o.cullFace(1032))):ut(2884),_=F}function et(F){F!==D&&(X&&o.lineWidth(F),D=F)}function nt(F,st,Q){F?(it(32823),(B!==st||z!==Q)&&(o.polygonOffset(st,Q),B=st,z=Q)):ut(32823)}function dt(F){F?it(3089):ut(3089)}function at(F){F===void 0&&(F=33984+A-1),N!==F&&(o.activeTexture(F),N=F)}function Et(F,st){N===null&&at();let Q=P[N];Q===void 0&&(Q={type:void 0,texture:void 0},P[N]=Q),(Q.type!==F||Q.texture!==st)&&(o.bindTexture(F,st||Y[F]),Q.type=F,Q.texture=st)}function Tt(){const F=P[N];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Dt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function R(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function E(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(F){q.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),q.copy(F))}function mt(F){V.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),V.copy(F))}function pt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},N=null,P={},d={},u=null,f=!1,m=null,v=null,x=null,g=null,p=null,b=null,y=null,M=!1,T=null,_=null,D=null,B=null,z=null,q.set(0,0,o.canvas.width,o.canvas.height),V.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:it,disable:ut,bindFramebuffer:It,useProgram:K,setBlending:vt,setMaterial:yt,setFlipSided:Ft,setCullFace:j,setLineWidth:et,setPolygonOffset:nt,setScissorTest:dt,activeTexture:at,bindTexture:Et,unbindTexture:Tt,compressedTexImage2D:Dt,texImage2D:E,texImage3D:$,texStorage2D:R,texSubImage2D:qt,scissor:J,viewport:mt,reset:pt}}function Sv(o,t,e,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):void 0,m=new WeakMap;let v,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return x?new OffscreenCanvas(R,E):Mr("canvas")}function p(R,E,$,J){let mt=1;if((R.width>J||R.height>J)&&(mt=J/Math.max(R.width,R.height)),mt<1||E===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){const pt=E?Yd:Math.floor,F=pt(mt*R.width),st=pt(mt*R.height);v===void 0&&(v=g(F,st));const Q=$?g(F,st):v;return Q.width=F,Q.height=st,Q.getContext("2d").drawImage(R,0,0,F,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+F+"x"+st+")."),Q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function b(R){return qa(R.width)&&qa(R.height)}function y(R){return a?!1:R.wrapS!==Ce||R.wrapT!==Ce||R.minFilter!==ce&&R.minFilter!==Pe}function M(R,E){return R.generateMipmaps&&E&&R.minFilter!==ce&&R.minFilter!==Pe}function T(R){o.generateMipmap(R)}function _(R,E,$){if(a===!1)return E;if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;return E===6403&&($===5126&&(J=33326),$===5131&&(J=33325),$===5121&&(J=33321)),E===6407&&($===5126&&(J=34837),$===5131&&(J=34843),$===5121&&(J=32849)),E===6408&&($===5126&&(J=34836),$===5131&&(J=34842),$===5121&&(J=32856)),(J===33325||J===33326||J===34842||J===34836)&&t.get("EXT_color_buffer_float"),J}function D(R,E,$){return M(R,$)===!0?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:1}function B(R){return R===ce||R===Ia||R===Da?9728:9729}function z(R){const E=R.target;E.removeEventListener("dispose",z),X(E),E.isVideoTexture&&m.delete(E),r.memory.textures--}function A(R){const E=R.target;E.removeEventListener("dispose",A),C(E)}function X(R){const E=n.get(R);E.__webglInit!==void 0&&(o.deleteTexture(E.__webglTexture),n.remove(R))}function C(R){const E=R.texture,$=n.get(R),J=n.get(E);if(!!R){if(J.__webglTexture!==void 0&&(o.deleteTexture(J.__webglTexture),r.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++)o.deleteFramebuffer($.__webglFramebuffer[mt]),$.__webglDepthbuffer&&o.deleteRenderbuffer($.__webglDepthbuffer[mt]);else o.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&o.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&o.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer&&o.deleteRenderbuffer($.__webglColorRenderbuffer),$.__webglDepthRenderbuffer&&o.deleteRenderbuffer($.__webglDepthRenderbuffer);if(R.isWebGLMultipleRenderTargets)for(let mt=0,pt=E.length;mt<pt;mt++){const F=n.get(E[mt]);F.__webglTexture&&(o.deleteTexture(F.__webglTexture),r.memory.textures--),n.remove(E[mt])}n.remove(E),n.remove(R)}}let I=0;function N(){I=0}function P(){const R=I;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),I+=1,R}function O(R,E){const $=n.get(R);if(R.isVideoTexture&&at(R),R.version>0&&$.__version!==R.version){const J=R.image;if(J===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It($,R,E);return}}e.activeTexture(33984+E),e.bindTexture(3553,$.__webglTexture)}function k(R,E){const $=n.get(R);if(R.version>0&&$.__version!==R.version){It($,R,E);return}e.activeTexture(33984+E),e.bindTexture(35866,$.__webglTexture)}function q(R,E){const $=n.get(R);if(R.version>0&&$.__version!==R.version){It($,R,E);return}e.activeTexture(33984+E),e.bindTexture(32879,$.__webglTexture)}function V(R,E){const $=n.get(R);if(R.version>0&&$.__version!==R.version){K($,R,E);return}e.activeTexture(33984+E),e.bindTexture(34067,$.__webglTexture)}const G={[Po]:10497,[Ce]:33071,[Io]:33648},Y={[ce]:9728,[Ia]:9984,[Da]:9986,[Pe]:9729,[ju]:9985,[wr]:9987};function it(R,E,$){if($?(o.texParameteri(R,10242,G[E.wrapS]),o.texParameteri(R,10243,G[E.wrapT]),(R===32879||R===35866)&&o.texParameteri(R,32882,G[E.wrapR]),o.texParameteri(R,10240,Y[E.magFilter]),o.texParameteri(R,10241,Y[E.minFilter])):(o.texParameteri(R,10242,33071),o.texParameteri(R,10243,33071),(R===32879||R===35866)&&o.texParameteri(R,32882,33071),(E.wrapS!==Ce||E.wrapT!==Ce)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(R,10240,B(E.magFilter)),o.texParameteri(R,10241,B(E.minFilter)),E.minFilter!==ce&&E.minFilter!==Pe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(E.type===En&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Li&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(o.texParameterf(R,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ut(R,E){R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",z),R.__webglTexture=o.createTexture(),r.memory.textures++)}function It(R,E,$){let J=3553;E.isDataTexture2DArray&&(J=35866),E.isDataTexture3D&&(J=32879),ut(R,E),e.activeTexture(33984+$),e.bindTexture(J,R.__webglTexture),o.pixelStorei(37440,E.flipY),o.pixelStorei(37441,E.premultiplyAlpha),o.pixelStorei(3317,E.unpackAlignment),o.pixelStorei(37443,0);const mt=y(E)&&b(E.image)===!1,pt=p(E.image,mt,!1,h),F=b(pt)||a,st=s.convert(E.format);let Q=s.convert(E.type),lt=_(E.internalFormat,st,Q,E.encoding);it(J,E,F);let rt;const ft=E.mipmaps;if(E.isDepthTexture)lt=6402,a?E.type===En?lt=36012:E.type===dr?lt=33190:E.type===Ri?lt=35056:lt=33189:E.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Kn&&lt===6402&&E.type!==ms&&E.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ms,Q=s.convert(E.type)),E.format===Di&&lt===6402&&(lt=34041,E.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ri,Q=s.convert(E.type))),e.texImage2D(3553,0,lt,pt.width,pt.height,0,st,Q,null);else if(E.isDataTexture)if(ft.length>0&&F){for(let gt=0,Ct=ft.length;gt<Ct;gt++)rt=ft[gt],e.texImage2D(3553,gt,lt,rt.width,rt.height,0,st,Q,rt.data);E.generateMipmaps=!1}else e.texImage2D(3553,0,lt,pt.width,pt.height,0,st,Q,pt.data);else if(E.isCompressedTexture)for(let gt=0,Ct=ft.length;gt<Ct;gt++)rt=ft[gt],E.format!==_e&&E.format!==$n?st!==null?e.compressedTexImage2D(3553,gt,lt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):e.texImage2D(3553,gt,lt,rt.width,rt.height,0,st,Q,rt.data);else if(E.isDataTexture2DArray)e.texImage3D(35866,0,lt,pt.width,pt.height,pt.depth,0,st,Q,pt.data);else if(E.isDataTexture3D)e.texImage3D(32879,0,lt,pt.width,pt.height,pt.depth,0,st,Q,pt.data);else{const gt=D(E,pt,F),Ct=a&&E.isVideoTexture!==!0,Qt=R.__version===void 0;if(ft.length>0&&F){Ct&&Qt&&e.texStorage2D(3553,gt,lt,ft[0].width,ft[0].height);for(let Bt=0,Ne=ft.length;Bt<Ne;Bt++)rt=ft[Bt],Ct?e.texSubImage2D(3553,Bt,0,0,st,Q,rt):e.texImage2D(3553,Bt,lt,st,Q,rt);E.generateMipmaps=!1}else Ct?(Qt&&e.texStorage2D(3553,gt,lt,pt.width,pt.height),e.texSubImage2D(3553,0,0,0,st,Q,pt)):e.texImage2D(3553,0,lt,st,Q,pt)}M(E,F)&&T(J),R.__version=E.version,E.onUpdate&&E.onUpdate(E)}function K(R,E,$){if(E.image.length!==6)return;ut(R,E),e.activeTexture(33984+$),e.bindTexture(34067,R.__webglTexture),o.pixelStorei(37440,E.flipY),o.pixelStorei(37441,E.premultiplyAlpha),o.pixelStorei(3317,E.unpackAlignment),o.pixelStorei(37443,0);const J=E&&(E.isCompressedTexture||E.image[0].isCompressedTexture),mt=E.image[0]&&E.image[0].isDataTexture,pt=[];for(let gt=0;gt<6;gt++)!J&&!mt?pt[gt]=p(E.image[gt],!1,!0,c):pt[gt]=mt?E.image[gt].image:E.image[gt];const F=pt[0],st=b(F)||a,Q=s.convert(E.format),lt=s.convert(E.type),rt=_(E.internalFormat,Q,lt,E.encoding);it(34067,E,st);let ft;if(J)for(let gt=0;gt<6;gt++){ft=pt[gt].mipmaps;for(let Ct=0;Ct<ft.length;Ct++){const Qt=ft[Ct];E.format!==_e&&E.format!==$n?Q!==null?e.compressedTexImage2D(34069+gt,Ct,rt,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):e.texImage2D(34069+gt,Ct,rt,Qt.width,Qt.height,0,Q,lt,Qt.data)}}else{ft=E.mipmaps;for(let gt=0;gt<6;gt++)if(mt){e.texImage2D(34069+gt,0,rt,pt[gt].width,pt[gt].height,0,Q,lt,pt[gt].data);for(let Ct=0;Ct<ft.length;Ct++){const Bt=ft[Ct].image[gt].image;e.texImage2D(34069+gt,Ct+1,rt,Bt.width,Bt.height,0,Q,lt,Bt.data)}}else{e.texImage2D(34069+gt,0,rt,Q,lt,pt[gt]);for(let Ct=0;Ct<ft.length;Ct++){const Qt=ft[Ct];e.texImage2D(34069+gt,Ct+1,rt,Q,lt,Qt.image[gt])}}}M(E,st)&&T(34067),R.__version=E.version,E.onUpdate&&E.onUpdate(E)}function At(R,E,$,J,mt){const pt=s.convert($.format),F=s.convert($.type),st=_($.internalFormat,pt,F,$.encoding);n.get(E).__hasExternalTextures||(mt===32879||mt===35866?e.texImage3D(mt,0,st,E.width,E.height,E.depth,0,pt,F,null):e.texImage2D(mt,0,st,E.width,E.height,0,pt,F,null)),e.bindFramebuffer(36160,R),E.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,J,mt,n.get($).__webglTexture,0,dt(E)):o.framebufferTexture2D(36160,J,mt,n.get($).__webglTexture,0),e.bindFramebuffer(36160,null)}function bt(R,E,$){if(o.bindRenderbuffer(36161,R),E.depthBuffer&&!E.stencilBuffer){let J=33189;if($||E.useRenderToTexture){const mt=E.depthTexture;mt&&mt.isDepthTexture&&(mt.type===En?J=36012:mt.type===dr&&(J=33190));const pt=dt(E);E.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,pt,J,E.width,E.height):o.renderbufferStorageMultisample(36161,pt,J,E.width,E.height)}else o.renderbufferStorage(36161,J,E.width,E.height);o.framebufferRenderbuffer(36160,36096,36161,R)}else if(E.depthBuffer&&E.stencilBuffer){const J=dt(E);$&&E.useRenderbuffer?o.renderbufferStorageMultisample(36161,J,35056,E.width,E.height):E.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,J,35056,E.width,E.height):o.renderbufferStorage(36161,34041,E.width,E.height),o.framebufferRenderbuffer(36160,33306,36161,R)}else{const J=E.isWebGLMultipleRenderTargets===!0?E.texture[0]:E.texture,mt=s.convert(J.format),pt=s.convert(J.type),F=_(J.internalFormat,mt,pt,J.encoding),st=dt(E);$&&E.useRenderbuffer?o.renderbufferStorageMultisample(36161,st,F,E.width,E.height):E.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,st,F,E.width,E.height):o.renderbufferStorage(36161,F,E.width,E.height)}o.bindRenderbuffer(36161,null)}function vt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const J=n.get(E.depthTexture).__webglTexture,mt=dt(E);if(E.depthTexture.format===Kn)E.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,mt):o.framebufferTexture2D(36160,36096,3553,J,0);else if(E.depthTexture.format===Di)E.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,mt):o.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function yt(R){const E=n.get(R),$=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,R)}else if($){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(36160,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]=o.createRenderbuffer(),bt(E.__webglDepthbuffer[J],R,!1)}else e.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),bt(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(36160,null)}function Ft(R,E,$){const J=n.get(R);E!==void 0&&At(J.__webglFramebuffer,R,R.texture,36064,3553),$!==void 0&&yt(R)}function j(R){const E=R.texture,$=n.get(R),J=n.get(E);R.addEventListener("dispose",A),R.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=E.version,r.memory.textures++);const mt=R.isWebGLCubeRenderTarget===!0,pt=R.isWebGLMultipleRenderTargets===!0,F=E.isDataTexture3D||E.isDataTexture2DArray,st=b(R)||a;if(a&&E.format===$n&&(E.type===En||E.type===Li)&&(E.format=_e,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),mt){$.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)$.__webglFramebuffer[Q]=o.createFramebuffer()}else if($.__webglFramebuffer=o.createFramebuffer(),pt)if(i.drawBuffers){const Q=R.texture;for(let lt=0,rt=Q.length;lt<rt;lt++){const ft=n.get(Q[lt]);ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(R.useRenderbuffer)if(a){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=o.createRenderbuffer(),o.bindRenderbuffer(36161,$.__webglColorRenderbuffer);const Q=s.convert(E.format),lt=s.convert(E.type),rt=_(E.internalFormat,Q,lt,E.encoding),ft=dt(R);o.renderbufferStorageMultisample(36161,ft,rt,R.width,R.height),e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064,36161,$.__webglColorRenderbuffer),o.bindRenderbuffer(36161,null),R.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),bt($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(mt){e.bindTexture(34067,J.__webglTexture),it(34067,E,st);for(let Q=0;Q<6;Q++)At($.__webglFramebuffer[Q],R,E,36064,34069+Q);M(E,st)&&T(34067),e.unbindTexture()}else if(pt){const Q=R.texture;for(let lt=0,rt=Q.length;lt<rt;lt++){const ft=Q[lt],gt=n.get(ft);e.bindTexture(3553,gt.__webglTexture),it(3553,ft,st),At($.__webglFramebuffer,R,ft,36064+lt,3553),M(ft,st)&&T(3553)}e.unbindTexture()}else{let Q=3553;F&&(a?Q=E.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),e.bindTexture(Q,J.__webglTexture),it(Q,E,st),At($.__webglFramebuffer,R,E,36064,Q),M(E,st)&&T(Q),e.unbindTexture()}R.depthBuffer&&yt(R)}function et(R){const E=b(R)||a,$=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let J=0,mt=$.length;J<mt;J++){const pt=$[J];if(M(pt,E)){const F=R.isWebGLCubeRenderTarget?34067:3553,st=n.get(pt).__webglTexture;e.bindTexture(F,st),T(F),e.unbindTexture()}}}function nt(R){if(R.useRenderbuffer)if(a){const E=R.width,$=R.height;let J=16384;const mt=[36064],pt=R.stencilBuffer?33306:36096;R.depthBuffer&&mt.push(pt),R.ignoreDepthForMultisampleCopy||(R.depthBuffer&&(J|=256),R.stencilBuffer&&(J|=1024));const F=n.get(R);e.bindFramebuffer(36008,F.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,F.__webglFramebuffer),R.ignoreDepthForMultisampleCopy&&(o.invalidateFramebuffer(36008,[pt]),o.invalidateFramebuffer(36009,[pt])),o.blitFramebuffer(0,0,E,$,0,0,E,$,J,9728),o.invalidateFramebuffer(36008,mt),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,F.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function dt(R){return a&&(R.useRenderbuffer||R.useRenderToTexture)?Math.min(d,R.samples):0}function at(R){const E=r.render.frame;m.get(R)!==E&&(m.set(R,E),R.update())}let Et=!1,Tt=!1;function Dt(R,E){R&&R.isWebGLRenderTarget&&(Et===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Et=!0),R=R.texture),O(R,E)}function qt(R,E){R&&R.isWebGLCubeRenderTarget&&(Tt===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Tt=!0),R=R.texture),V(R,E)}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=j,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=At,this.safeSetTexture2D=Dt,this.safeSetTextureCube=qt}function Ev(o,t,e){const n=e.isWebGL2;function i(s){let r;if(s===Rn)return 5121;if(s===Ju)return 32819;if(s===$u)return 32820;if(s===Ku)return 33635;if(s===Xu)return 5120;if(s===Yu)return 5122;if(s===ms)return 5123;if(s===Zu)return 5124;if(s===dr)return 5125;if(s===En)return 5126;if(s===Li)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Qu)return 6406;if(s===$n)return 6407;if(s===_e)return 6408;if(s===td)return 6409;if(s===ed)return 6410;if(s===Kn)return 6402;if(s===Di)return 34041;if(s===id)return 6403;if(s===sd)return 36244;if(s===rd)return 33319;if(s===od)return 33320;if(s===ad)return 36248;if(s===ld)return 36249;if(s===Na||s===Fa||s===za||s===Ba)if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Oa||s===Ua||s===ka||s===Va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cd)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Ha||s===Ga)&&(r=t.get("WEBGL_compressed_texture_etc"),r!==null)){if(s===Ha)return r.COMPRESSED_RGB8_ETC2;if(s===Ga)return r.COMPRESSED_RGBA8_ETC2_EAC}if(s===hd||s===ud||s===dd||s===fd||s===pd||s===md||s===gd||s===vd||s===xd||s===yd||s===_d||s===wd||s===bd||s===Md||s===Ed||s===Td||s===Ad||s===Cd||s===Ld||s===Rd||s===Pd||s===Id||s===Dd||s===Nd||s===Fd||s===zd||s===Bd||s===Od)return r=t.get("WEBGL_compressed_texture_astc"),r!==null?s:null;if(s===Sd)return r=t.get("EXT_texture_compression_bptc"),r!==null?s:null;if(s===Ri)return n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class $c extends ye{constructor(t=[]){super(),this.cameras=t}}$c.prototype.isArrayCamera=!0;class cs extends Vt{constructor(){super(),this.type="Group"}}cs.prototype.isGroup=!0;const Tv={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tv))),c&&t.hand){r=!0;for(const v of t.hand.values()){const x=e.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const p=new cs;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[v.jointName]=p,c.add(p)}const g=c.joints[v.jointName];x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=x.radius),g.visible=x!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class Fo extends pe{constructor(t,e,n,i,s,r,a,l,c,h){if(h=h!==void 0?h:Kn,h!==Kn&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Kn&&(n=ms),n===void 0&&h===Di&&(n=Ri),super(null,i,s,r,a,l,h,n,c),this.image={width:t,height:e},this.magFilter=a!==void 0?a:ce,this.minFilter=l!==void 0?l:ce,this.flipY=!1,this.generateMipmaps=!1}}Fo.prototype.isDepthTexture=!0;class Av extends ei{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor";const l=t.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,h=null,d=null,u=null,f=!1,m=null;const v=e.getContextAttributes();let x=null,g=null;const p=[],b=new Map,y=new ye;y.layers.enable(1),y.viewport=new Gt;const M=new ye;M.layers.enable(2),M.viewport=new Gt;const T=[y,M],_=new $c;_.layers.enable(1),_.layers.enable(2);let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let G=p[V];return G===void 0&&(G=new po,p[V]=G),G.getTargetRaySpace()},this.getControllerGrip=function(V){let G=p[V];return G===void 0&&(G=new po,p[V]=G),G.getGripSpace()},this.getHand=function(V){let G=p[V];return G===void 0&&(G=new po,p[V]=G),G.getHandSpace()};function z(V){const G=b.get(V.inputSource);G&&G.dispatchEvent({type:V.type,data:V.inputSource})}function A(){b.forEach(function(V,G){V.disconnect(G)}),b.clear(),D=null,B=null,t.setRenderTarget(x),u=null,d=null,h=null,i=null,g=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return r},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",A),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,G),i.updateRenderState({baseLayer:u}),g=new Ie(u.framebufferWidth,u.framebufferHeight)}else{f=v.antialias;let G=null,Y=null,it=null;v.depth&&(it=v.stencil?35056:33189,G=v.stencil?Di:Kn,Y=v.stencil?Ri:ms);const ut={colorFormat:v.alpha||f?32856:32849,depthFormat:it,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(ut),i.updateRenderState({layers:[d]}),f?g=new Yo(d.textureWidth,d.textureHeight,{format:_e,type:Rn,depthTexture:new Fo(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,ignoreDepth:d.ignoreDepthValues,useRenderToTexture:l}):g=new Ie(d.textureWidth,d.textureHeight,{format:v.alpha?_e:$n,type:Rn,depthTexture:new Fo(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,ignoreDepth:d.ignoreDepthValues})}this.setFoveation(0),r=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function X(V){const G=i.inputSources;for(let Y=0;Y<p.length;Y++)b.set(G[Y],p[Y]);for(let Y=0;Y<V.removed.length;Y++){const it=V.removed[Y],ut=b.get(it);ut&&(ut.dispatchEvent({type:"disconnected",data:it}),b.delete(it))}for(let Y=0;Y<V.added.length;Y++){const it=V.added[Y],ut=b.get(it);ut&&ut.dispatchEvent({type:"connected",data:it})}}const C=new L,I=new L;function N(V,G,Y){C.setFromMatrixPosition(G.matrixWorld),I.setFromMatrixPosition(Y.matrixWorld);const it=C.distanceTo(I),ut=G.projectionMatrix.elements,It=Y.projectionMatrix.elements,K=ut[14]/(ut[10]-1),At=ut[14]/(ut[10]+1),bt=(ut[9]+1)/ut[5],vt=(ut[9]-1)/ut[5],yt=(ut[8]-1)/ut[0],Ft=(It[8]+1)/It[0],j=K*yt,et=K*Ft,nt=it/(-yt+Ft),dt=nt*-yt;G.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(dt),V.translateZ(nt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const at=K+nt,Et=At+nt,Tt=j-dt,Dt=et+(it-dt),qt=bt*At/Et*at,R=vt*At/Et*at;V.projectionMatrix.makePerspective(Tt,Dt,qt,R,at,Et)}function P(V,G){G===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(G.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.near=M.near=y.near=V.near,_.far=M.far=y.far=V.far,(D!==_.near||B!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),D=_.near,B=_.far);const G=V.parent,Y=_.cameras;P(_,G);for(let ut=0;ut<Y.length;ut++)P(Y[ut],G);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),V.position.copy(_.position),V.quaternion.copy(_.quaternion),V.scale.copy(_.scale),V.matrix.copy(_.matrix),V.matrixWorld.copy(_.matrixWorld);const it=V.children;for(let ut=0,It=it.length;ut<It;ut++)it[ut].updateMatrixWorld(!0);Y.length===2?N(_,y,M):_.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(V){d!==null&&(d.fixedFoveation=V),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=V)};let O=null;function k(V,G){if(c=G.getViewerPose(r),m=G,c!==null){const it=c.views;u!==null&&(t.setRenderTargetFramebuffer(g,u.framebuffer),t.setRenderTarget(g));let ut=!1;it.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let It=0;It<it.length;It++){const K=it[It];let At=null;if(u!==null)At=u.getViewport(K);else{const vt=h.getViewSubImage(d,K);At=vt.viewport,It===0&&(t.setRenderTargetTextures(g,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(g))}const bt=T[It];bt.matrix.fromArray(K.transform.matrix),bt.projectionMatrix.fromArray(K.projectionMatrix),bt.viewport.set(At.x,At.y,At.width,At.height),It===0&&_.matrix.copy(bt.matrix),ut===!0&&_.cameras.push(bt)}}const Y=i.inputSources;for(let it=0;it<p.length;it++){const ut=p[it],It=Y[it];ut.update(It,G,r)}O&&O(V,G),m=null}const q=new zc;q.setAnimationLoop(k),this.setAnimationLoop=function(V){O=V},this.dispose=function(){}}}function Cv(o){function t(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function e(g,p,b,y,M){p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),l(g,p)):p.isMeshToonMaterial?(n(g,p),h(g,p)):p.isMeshPhongMaterial?(n(g,p),c(g,p)):p.isMeshStandardMaterial?(n(g,p),p.isMeshPhysicalMaterial?u(g,p,M):d(g,p)):p.isMeshMatcapMaterial?(n(g,p),f(g,p)):p.isMeshDepthMaterial?(n(g,p),m(g,p)):p.isMeshDistanceMaterial?(n(g,p),v(g,p)):p.isMeshNormalMaterial?(n(g,p),x(g,p)):p.isLineBasicMaterial?(i(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?r(g,p,b,y):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=o.get(p).envMap;b&&(g.envMap.value=b,g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),g.uvTransform.value.copy(y.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uv2Transform.value.copy(M.matrix))}function i(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function r(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix))}function l(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ie&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ie&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ie&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ie&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function d(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ie&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ie&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),o.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,b){d(g,p),g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ie&&g.clearcoatNormalScale.value.negate())),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ie&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ie&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function v(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function x(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ie&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ie&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:e}}function Lv(){const o=Mr("canvas");return o.style.display="block",o}function Ht(o={}){const t=o.canvas!==void 0?o.canvas:Lv(),e=o.context!==void 0?o.context:null,n=o.alpha!==void 0?o.alpha:!1,i=o.depth!==void 0?o.depth:!0,s=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,l=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",h=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let d=null,u=null;const f=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Ee,this.physicallyCorrectLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;const v=this;let x=!1,g=0,p=0,b=null,y=-1,M=null;const T=new Gt,_=new Gt;let D=null,B=t.width,z=t.height,A=1,X=null,C=null;const I=new Gt(0,0,B,z),N=new Gt(0,0,B,z);let P=!1;const O=[],k=new Er;let q=!1,V=!1,G=null;const Y=new _t,it=new L,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return b===null?A:1}let K=e;function At(S,U){for(let W=0;W<S.length;W++){const H=S[W],Z=t.getContext(H,U);if(Z!==null)return Z}return null}try{const S={alpha:n,depth:i,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",Ct,!1),K===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),K=At(U,S),K===null)throw At(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let bt,vt,yt,Ft,j,et,nt,dt,at,Et,Tt,Dt,qt,R,E,$,J,mt,pt,F,st,Q,lt;function rt(){bt=new Km(K),vt=new Wm(K,bt,o),bt.init(vt),Q=new Ev(K,bt,vt),yt=new Mv(K,bt,vt),O[0]=1029,Ft=new eg(K),j=new dv,et=new Sv(K,bt,yt,j,vt,Q,Ft),nt=new jm(v),dt=new $m(v),at=new pf(K,vt),lt=new Hm(K,bt,at,vt),Et=new Qm(K,at,Ft,lt),Tt=new rg(K,Et,at,Ft),pt=new sg(K,vt,et),$=new qm(j),Dt=new uv(v,nt,dt,bt,vt,lt,$),qt=new Cv(j),R=new pv(j),E=new _v(bt,vt),mt=new Vm(v,nt,yt,Tt,a),J=new Jc(v,Tt,vt),F=new Gm(K,bt,Ft,vt),st=new tg(K,bt,Ft,vt),Ft.programs=Dt.programs,v.capabilities=vt,v.extensions=bt,v.properties=j,v.renderLists=R,v.shadowMap=J,v.state=yt,v.info=Ft}rt();const ft=new Av(v,K);this.xr=ft,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const S=bt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=bt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(S){S!==void 0&&(A=S,this.setSize(B,z,!1))},this.getSize=function(S){return S.set(B,z)},this.setSize=function(S,U,W){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,z=U,t.width=Math.floor(S*A),t.height=Math.floor(U*A),W!==!1&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(B*A,z*A).floor()},this.setDrawingBufferSize=function(S,U,W){B=S,z=U,A=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(I)},this.setViewport=function(S,U,W,H){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,U,W,H),yt.viewport(T.copy(I).multiplyScalar(A).floor())},this.getScissor=function(S){return S.copy(N)},this.setScissor=function(S,U,W,H){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,U,W,H),yt.scissor(_.copy(N).multiplyScalar(A).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(S){yt.setScissorTest(P=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){C=S},this.getClearColor=function(S){return S.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(S,U,W){let H=0;(S===void 0||S)&&(H|=16384),(U===void 0||U)&&(H|=256),(W===void 0||W)&&(H|=1024),K.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),R.dispose(),E.dispose(),j.dispose(),nt.dispose(),dt.dispose(),Tt.dispose(),lt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",va),ft.removeEventListener("sessionend",xa),G&&(G.dispose(),G=null),Fn.stop()};function gt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Ft.autoReset,U=J.enabled,W=J.autoUpdate,H=J.needsUpdate,Z=J.type;rt(),Ft.autoReset=S,J.enabled=U,J.autoUpdate=W,J.needsUpdate=H,J.type=Z}function Qt(S){const U=S.target;U.removeEventListener("dispose",Qt),Bt(U)}function Bt(S){Ne(S),j.remove(S)}function Ne(S){const U=j.get(S).programs;U!==void 0&&U.forEach(function(W){Dt.releaseProgram(W)})}this.renderBufferDirect=function(S,U,W,H,Z,Mt){U===null&&(U=ut);const wt=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=iu(S,U,W,H,Z);yt.setMaterial(H,wt);let St=W.index;const zt=W.attributes.position;if(St===null){if(zt===void 0||zt.count===0)return}else if(St.count===0)return;let Rt=1;H.wireframe===!0&&(St=Et.getWireframeAttribute(W),Rt=2),lt.setup(Z,H,Lt,W,St);let Nt,$t=F;St!==null&&(Nt=at.get(St),$t=st,$t.setIndex(Nt));const zn=St!==null?St.count:zt.count,Ot=W.drawRange.start*Rt,Wi=W.drawRange.count*Rt,jt=Mt!==null?Mt.start*Rt:0,Bn=Mt!==null?Mt.count*Rt:1/0,On=Math.max(Ot,jt),Un=Math.min(zn,Ot+Wi,jt+Bn)-1,hn=Math.max(0,Un-On+1);if(hn!==0){if(Z.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*It()),$t.setMode(1)):$t.setMode(4);else if(Z.isLine){let Kt=H.linewidth;Kt===void 0&&(Kt=1),yt.setLineWidth(Kt*It()),Z.isLineSegments?$t.setMode(1):Z.isLineLoop?$t.setMode(2):$t.setMode(3)}else Z.isPoints?$t.setMode(0):Z.isSprite&&$t.setMode(4);if(Z.isInstancedMesh)$t.renderInstances(On,hn,Z.count);else if(W.isInstancedBufferGeometry){const Kt=Math.min(W.instanceCount,W._maxInstanceCount);$t.renderInstances(On,hn,Kt)}else $t.render(On,hn)}},this.compile=function(S,U){u=E.get(S),u.init(),m.push(u),S.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights(v.physicallyCorrectLights),S.traverse(function(W){const H=W.material;if(H)if(Array.isArray(H))for(let Z=0;Z<H.length;Z++){const Mt=H[Z];Nr(Mt,S,W)}else Nr(H,S,W)}),m.pop(),u=null};let Fe=null;function tu(S){Fe&&Fe(S)}function va(){Fn.stop()}function xa(){Fn.start()}const Fn=new zc;Fn.setAnimationLoop(tu),typeof window!="undefined"&&Fn.setContext(window),this.setAnimationLoop=function(S){Fe=S,ft.setAnimationLoop(S),S===null?Fn.stop():Fn.start()},ft.addEventListener("sessionstart",va),ft.addEventListener("sessionend",xa),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(U),U=ft.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,b),u=E.get(S,m.length),u.init(),m.push(u),Y.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),k.setFromProjectionMatrix(Y),V=this.localClippingEnabled,q=$.init(this.clippingPlanes,V,U),d=R.get(S,f.length),d.init(),f.push(d),ya(S,U,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(X,C),q===!0&&$.beginShadows();const W=u.state.shadowsArray;if(J.render(W,S,U),q===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(d,S),u.setupLights(v.physicallyCorrectLights),U.isArrayCamera){const H=U.cameras;for(let Z=0,Mt=H.length;Z<Mt;Z++){const wt=H[Z];_a(d,S,wt,wt.viewport)}}else _a(d,S,U);b!==null&&(et.updateMultisampleRenderTarget(b),et.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,U),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1),lt.resetDefaultState(),y=-1,M=null,m.pop(),m.length>0?u=m[m.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function ya(S,U,W,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){H&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Y);const wt=Tt.update(S),Lt=S.material;Lt.visible&&d.push(S,wt,Lt,W,it.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ft.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ft.render.frame),!S.frustumCulled||k.intersectsObject(S))){H&&it.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Y);const wt=Tt.update(S),Lt=S.material;if(Array.isArray(Lt)){const St=wt.groups;for(let zt=0,Rt=St.length;zt<Rt;zt++){const Nt=St[zt],$t=Lt[Nt.materialIndex];$t&&$t.visible&&d.push(S,wt,$t,W,it.z,Nt)}}else Lt.visible&&d.push(S,wt,Lt,W,it.z,null)}}const Mt=S.children;for(let wt=0,Lt=Mt.length;wt<Lt;wt++)ya(Mt[wt],U,W,H)}function _a(S,U,W,H){const Z=S.opaque,Mt=S.transmissive,wt=S.transparent;u.setupLightsView(W),Mt.length>0&&eu(Z,U,W),H&&yt.viewport(T.copy(H)),Z.length>0&&Cs(Z,U,W),Mt.length>0&&Cs(Mt,U,W),wt.length>0&&Cs(wt,U,W)}function eu(S,U,W){if(G===null){const wt=r===!0&&vt.isWebGL2===!0?Yo:Ie;G=new wt(1024,1024,{generateMipmaps:!0,type:Q.convert(Li)!==null?Li:Rn,minFilter:wr,magFilter:ce,wrapS:Ce,wrapT:Ce,useRenderToTexture:bt.has("WEBGL_multisampled_render_to_texture")})}const H=v.getRenderTarget();v.setRenderTarget(G),v.clear();const Z=v.toneMapping;v.toneMapping=Jn,Cs(S,U,W),v.toneMapping=Z,et.updateMultisampleRenderTarget(G),et.updateRenderTargetMipmap(G),v.setRenderTarget(H)}function Cs(S,U,W){const H=U.isScene===!0?U.overrideMaterial:null;for(let Z=0,Mt=S.length;Z<Mt;Z++){const wt=S[Z],Lt=wt.object,St=wt.geometry,zt=H===null?wt.material:H,Rt=wt.group;Lt.layers.test(W.layers)&&nu(Lt,U,W,St,zt,Rt)}}function nu(S,U,W,H,Z,Mt){S.onBeforeRender(v,U,W,H,Z,Mt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(v,U,W,H,S,Mt),Z.transparent===!0&&Z.side===Ii?(Z.side=ie,Z.needsUpdate=!0,v.renderBufferDirect(W,U,H,Z,S,Mt),Z.side=ps,Z.needsUpdate=!0,v.renderBufferDirect(W,U,H,Z,S,Mt),Z.side=Ii):v.renderBufferDirect(W,U,H,Z,S,Mt),S.onAfterRender(v,U,W,H,Z,Mt)}function Nr(S,U,W){U.isScene!==!0&&(U=ut);const H=j.get(S),Z=u.state.lights,Mt=u.state.shadowsArray,wt=Z.state.version,Lt=Dt.getParameters(S,Z.state,Mt,U,W),St=Dt.getProgramCacheKey(Lt);let zt=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?dt:nt).get(S.envMap||H.environment),zt===void 0&&(S.addEventListener("dispose",Qt),zt=new Map,H.programs=zt);let Rt=zt.get(St);if(Rt!==void 0){if(H.currentProgram===Rt&&H.lightsStateVersion===wt)return wa(S,Lt),Rt}else Lt.uniforms=Dt.getUniforms(S),S.onBuild(W,Lt,v),S.onBeforeCompile(Lt,v),Rt=Dt.acquireProgram(Lt,St),zt.set(St,Rt),H.uniforms=Lt.uniforms;const Nt=H.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=$.uniform),wa(S,Lt),H.needsLights=ru(S),H.lightsStateVersion=wt,H.needsLights&&(Nt.ambientLightColor.value=Z.state.ambient,Nt.lightProbe.value=Z.state.probe,Nt.directionalLights.value=Z.state.directional,Nt.directionalLightShadows.value=Z.state.directionalShadow,Nt.spotLights.value=Z.state.spot,Nt.spotLightShadows.value=Z.state.spotShadow,Nt.rectAreaLights.value=Z.state.rectArea,Nt.ltc_1.value=Z.state.rectAreaLTC1,Nt.ltc_2.value=Z.state.rectAreaLTC2,Nt.pointLights.value=Z.state.point,Nt.pointLightShadows.value=Z.state.pointShadow,Nt.hemisphereLights.value=Z.state.hemi,Nt.directionalShadowMap.value=Z.state.directionalShadowMap,Nt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Nt.spotShadowMap.value=Z.state.spotShadowMap,Nt.spotShadowMatrix.value=Z.state.spotShadowMatrix,Nt.pointShadowMap.value=Z.state.pointShadowMap,Nt.pointShadowMatrix.value=Z.state.pointShadowMatrix);const $t=Rt.getUniforms(),zn=Cn.seqWithValue($t.seq,Nt);return H.currentProgram=Rt,H.uniformsList=zn,Rt}function wa(S,U){const W=j.get(S);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents}function iu(S,U,W,H,Z){U.isScene!==!0&&(U=ut),et.resetTextureUnits();const Mt=U.fog,wt=H.isMeshStandardMaterial?U.environment:null,Lt=b===null?v.outputEncoding:b.texture.encoding,St=(H.isMeshStandardMaterial?dt:nt).get(H.envMap||wt),zt=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Rt=!!H.normalMap&&!!W.attributes.tangent,Nt=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,zn=W.morphAttributes.position?W.morphAttributes.position.length:0,Ot=j.get(H),Wi=u.state.lights;if(q===!0&&(V===!0||S!==M)){const ze=S===M&&H.id===y;$.setState(H,S,ze)}let jt=!1;H.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Wi.state.version||Ot.outputEncoding!==Lt||Z.isInstancedMesh&&Ot.instancing===!1||!Z.isInstancedMesh&&Ot.instancing===!0||Z.isSkinnedMesh&&Ot.skinning===!1||!Z.isSkinnedMesh&&Ot.skinning===!0||Ot.envMap!==St||H.fog&&Ot.fog!==Mt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==$.numPlanes||Ot.numIntersection!==$.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==Rt||Ot.morphTargets!==Nt||Ot.morphNormals!==$t||vt.isWebGL2===!0&&Ot.morphTargetsCount!==zn)&&(jt=!0):(jt=!0,Ot.__version=H.version);let Bn=Ot.currentProgram;jt===!0&&(Bn=Nr(H,U,Z));let On=!1,Un=!1,hn=!1;const Kt=Bn.getUniforms(),qi=Ot.uniforms;if(yt.useProgram(Bn.program)&&(On=!0,Un=!0,hn=!0),H.id!==y&&(y=H.id,Un=!0),On||M!==S){if(Kt.setValue(K,"projectionMatrix",S.projectionMatrix),vt.logarithmicDepthBuffer&&Kt.setValue(K,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,Un=!0,hn=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const ze=Kt.map.cameraPosition;ze!==void 0&&ze.setValue(K,it.setFromMatrixPosition(S.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Kt.setValue(K,"isOrthographic",S.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||Z.isSkinnedMesh)&&Kt.setValue(K,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){Kt.setOptional(K,Z,"bindMatrix"),Kt.setOptional(K,Z,"bindMatrixInverse");const ze=Z.skeleton;ze&&(vt.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),Kt.setValue(K,"boneTexture",ze.boneTexture,et),Kt.setValue(K,"boneTextureSize",ze.boneTextureSize)):Kt.setOptional(K,ze,"boneMatrices"))}return!!W&&(W.morphAttributes.position!==void 0||W.morphAttributes.normal!==void 0)&&pt.update(Z,W,H,Bn),(Un||Ot.receiveShadow!==Z.receiveShadow)&&(Ot.receiveShadow=Z.receiveShadow,Kt.setValue(K,"receiveShadow",Z.receiveShadow)),Un&&(Kt.setValue(K,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&su(qi,hn),Mt&&H.fog&&qt.refreshFogUniforms(qi,Mt),qt.refreshMaterialUniforms(qi,H,A,z,G),Cn.upload(K,Ot.uniformsList,qi,et)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cn.upload(K,Ot.uniformsList,qi,et),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Kt.setValue(K,"center",Z.center),Kt.setValue(K,"modelViewMatrix",Z.modelViewMatrix),Kt.setValue(K,"normalMatrix",Z.normalMatrix),Kt.setValue(K,"modelMatrix",Z.matrixWorld),Bn}function su(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function ru(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,U,W){j.get(S.texture).__webglTexture=U,j.get(S.depthTexture).__webglTexture=W;const H=j.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=W===void 0,H.__autoAllocateDepthBuffer||S.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),S.useRenderToTexture=!1,S.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(S,U){const W=j.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){b=S,g=U,p=W;let H=!0;if(S){const St=j.get(S);St.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(36160,null),H=!1):St.__webglFramebuffer===void 0?et.setupRenderTarget(S):St.__hasExternalTextures&&et.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture)}let Z=null,Mt=!1,wt=!1;if(S){const St=S.texture;(St.isDataTexture3D||St.isDataTexture2DArray)&&(wt=!0);const zt=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=zt[U],Mt=!0):S.useRenderbuffer?Z=j.get(S).__webglMultisampledFramebuffer:Z=zt,T.copy(S.viewport),_.copy(S.scissor),D=S.scissorTest}else T.copy(I).multiplyScalar(A).floor(),_.copy(N).multiplyScalar(A).floor(),D=P;if(yt.bindFramebuffer(36160,Z)&&vt.drawBuffers&&H){let St=!1;if(S)if(S.isWebGLMultipleRenderTargets){const zt=S.texture;if(O.length!==zt.length||O[0]!==36064){for(let Rt=0,Nt=zt.length;Rt<Nt;Rt++)O[Rt]=36064+Rt;O.length=zt.length,St=!0}}else(O.length!==1||O[0]!==36064)&&(O[0]=36064,O.length=1,St=!0);else(O.length!==1||O[0]!==1029)&&(O[0]=1029,O.length=1,St=!0);St&&(vt.isWebGL2?K.drawBuffers(O):bt.get("WEBGL_draw_buffers").drawBuffersWEBGL(O))}if(yt.viewport(T),yt.scissor(_),yt.setScissorTest(D),Mt){const St=j.get(S.texture);K.framebufferTexture2D(36160,36064,34069+U,St.__webglTexture,W)}else if(wt){const St=j.get(S.texture),zt=U||0;K.framebufferTextureLayer(36160,36064,St.__webglTexture,W||0,zt)}y=-1},this.readRenderTargetPixels=function(S,U,W,H,Z,Mt,wt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){yt.bindFramebuffer(36160,Lt);try{const St=S.texture,zt=St.format,Rt=St.type;if(zt!==_e&&Q.convert(zt)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=Rt===Li&&(bt.has("EXT_color_buffer_half_float")||vt.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Rt!==Rn&&Q.convert(Rt)!==K.getParameter(35738)&&!(Rt===En&&(vt.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K.checkFramebufferStatus(36160)===36053?U>=0&&U<=S.width-H&&W>=0&&W<=S.height-Z&&K.readPixels(U,W,H,Z,Q.convert(zt),Q.convert(Rt),Mt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const St=b!==null?j.get(b).__webglFramebuffer:null;yt.bindFramebuffer(36160,St)}}},this.copyFramebufferToTexture=function(S,U,W=0){const H=Math.pow(2,-W),Z=Math.floor(U.image.width*H),Mt=Math.floor(U.image.height*H);let wt=Q.convert(U.format);vt.isWebGL2&&(wt===6407&&(wt=32849),wt===6408&&(wt=32856)),et.setTexture2D(U,0),K.copyTexImage2D(3553,W,wt,S.x,S.y,Z,Mt,0),yt.unbindTexture()},this.copyTextureToTexture=function(S,U,W,H=0){const Z=U.image.width,Mt=U.image.height,wt=Q.convert(W.format),Lt=Q.convert(W.type);et.setTexture2D(W,0),K.pixelStorei(37440,W.flipY),K.pixelStorei(37441,W.premultiplyAlpha),K.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?K.texSubImage2D(3553,H,S.x,S.y,Z,Mt,wt,Lt,U.image.data):U.isCompressedTexture?K.compressedTexSubImage2D(3553,H,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,wt,U.mipmaps[0].data):K.texSubImage2D(3553,H,S.x,S.y,wt,Lt,U.image),H===0&&W.generateMipmaps&&K.generateMipmap(3553),yt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,W,H,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=S.max.x-S.min.x+1,wt=S.max.y-S.min.y+1,Lt=S.max.z-S.min.z+1,St=Q.convert(H.format),zt=Q.convert(H.type);let Rt;if(H.isDataTexture3D)et.setTexture3D(H,0),Rt=32879;else if(H.isDataTexture2DArray)et.setTexture2DArray(H,0),Rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,H.flipY),K.pixelStorei(37441,H.premultiplyAlpha),K.pixelStorei(3317,H.unpackAlignment);const Nt=K.getParameter(3314),$t=K.getParameter(32878),zn=K.getParameter(3316),Ot=K.getParameter(3315),Wi=K.getParameter(32877),jt=W.isCompressedTexture?W.mipmaps[0]:W.image;K.pixelStorei(3314,jt.width),K.pixelStorei(32878,jt.height),K.pixelStorei(3316,S.min.x),K.pixelStorei(3315,S.min.y),K.pixelStorei(32877,S.min.z),W.isDataTexture||W.isDataTexture3D?K.texSubImage3D(Rt,Z,U.x,U.y,U.z,Mt,wt,Lt,St,zt,jt.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Rt,Z,U.x,U.y,U.z,Mt,wt,Lt,St,jt.data)):K.texSubImage3D(Rt,Z,U.x,U.y,U.z,Mt,wt,Lt,St,zt,jt),K.pixelStorei(3314,Nt),K.pixelStorei(32878,$t),K.pixelStorei(3316,zn),K.pixelStorei(3315,Ot),K.pixelStorei(32877,Wi),Z===0&&H.generateMipmaps&&K.generateMipmap(Rt),yt.unbindTexture()},this.initTexture=function(S){et.setTexture2D(S,0),yt.unbindTexture()},this.resetState=function(){g=0,p=0,b=null,yt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ht.prototype.isWebGLRenderer=!0;class Rv extends Ht{}Rv.prototype.isWebGL1Renderer=!0;class na extends Vt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}na.prototype.isScene=!0;class Ms{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ye()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ye()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ye()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Ms.prototype.isInterleavedBuffer=!0;const te=new L;class vs{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)te.x=this.getX(e),te.y=this.getY(e),te.z=this.getZ(e),te.applyMatrix4(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)te.x=this.getX(e),te.y=this.getY(e),te.z=this.getZ(e),te.applyNormalMatrix(t),this.setXYZ(e,te.x,te.y,te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)te.x=this.getX(e),te.y=this.getY(e),te.z=this.getZ(e),te.transformDirection(t),this.setXYZ(e,te.x,te.y,te.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}vs.prototype.isInterleavedBufferAttribute=!0;class Kc extends xe{constructor(t){super(),this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}Kc.prototype.isSpriteMaterial=!0;let yi;const $i=new L,_i=new L,wi=new L,bi=new tt,Ki=new tt,Qc=new _t,Zs=new L,Qi=new L,Js=new L,Tl=new tt,mo=new tt,Al=new tt;class Pv extends Vt{constructor(t){if(super(),this.type="Sprite",yi===void 0){yi=new Zt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ms(e,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new vs(n,3,0,!1)),yi.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=yi,this.material=t!==void 0?t:new Kc,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_i.setFromMatrixScale(this.matrixWorld),Qc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_i.multiplyScalar(-wi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;$s(Zs.set(-.5,-.5,0),wi,r,_i,i,s),$s(Qi.set(.5,-.5,0),wi,r,_i,i,s),$s(Js.set(.5,.5,0),wi,r,_i,i,s),Tl.set(0,0),mo.set(1,0),Al.set(1,1);let a=t.ray.intersectTriangle(Zs,Qi,Js,!1,$i);if(a===null&&($s(Qi.set(-.5,.5,0),wi,r,_i,i,s),mo.set(0,1),a=t.ray.intersectTriangle(Zs,Js,Qi,!1,$i),a===null))return;const l=t.ray.origin.distanceTo($i);l<t.near||l>t.far||e.push({distance:l,point:$i.clone(),uv:ne.getUV($i,Zs,Qi,Js,Tl,mo,Al,new tt),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}Pv.prototype.isSprite=!0;function $s(o,t,e,n,i,s){bi.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(Ki.x=s*bi.x-i*bi.y,Ki.y=i*bi.x+s*bi.y):Ki.copy(bi),o.copy(t),o.x+=Ki.x,o.y+=Ki.y,o.applyMatrix4(Qc)}const Cl=new L,Ll=new Gt,Rl=new Gt,Iv=new L,Pl=new _t;class th extends he{constructor(t,e){super(t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new _t,this.bindMatrixInverse=new _t}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Gt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;Ll.fromBufferAttribute(i.attributes.skinIndex,t),Rl.fromBufferAttribute(i.attributes.skinWeight,t),Cl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const r=Rl.getComponent(s);if(r!==0){const a=Ll.getComponent(s);Pl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Iv.copy(Cl).applyMatrix4(Pl),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}th.prototype.isSkinnedMesh=!0;class Dv extends Vt{constructor(){super(),this.type="Bone"}}Dv.prototype.isBone=!0;class Nv extends pe{constructor(t=null,e=1,n=1,i,s,r,a,l,c=ce,h=ce,d,u){super(null,r,a,l,c,h,i,s,d,u),this.image={data:t,width:e,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Nv.prototype.isDataTexture=!0;class zo extends re{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,n),this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}zo.prototype.isInstancedBufferAttribute=!0;const Il=new _t,Dl=new _t,Ks=[],ts=new he;class Fv extends he{constructor(t,e,n){super(t,e),this.instanceMatrix=new zo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Il),Dl.multiplyMatrices(n,Il),ts.matrixWorld=Dl,ts.raycast(t,Ks);for(let r=0,a=Ks.length;r<a;r++){const l=Ks[r];l.instanceId=s,l.object=this,e.push(l)}Ks.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Fv.prototype.isInstancedMesh=!0;class Ss extends xe{constructor(t){super(),this.type="LineBasicMaterial",this.color=new xt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}Ss.prototype.isLineBasicMaterial=!0;const Nl=new L,Fl=new L,zl=new _t,go=new ni,Qs=new Ui;class ia extends Vt{constructor(t=new Zt,e=new Ss){super(),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Nl.fromBufferAttribute(e,i-1),Fl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Nl.distanceTo(Fl);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=s,t.ray.intersectsSphere(Qs)===!1)return;zl.copy(i).invert(),go.copy(t.ray).applyMatrix4(zl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,d=new L,u=new L,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,x=n.attributes.position;if(m!==null){const g=Math.max(0,r.start),p=Math.min(m.count,r.start+r.count);for(let b=g,y=p-1;b<y;b+=f){const M=m.getX(b),T=m.getX(b+1);if(c.fromBufferAttribute(x,M),h.fromBufferAttribute(x,T),go.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(u);D<t.near||D>t.far||e.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,r.start),p=Math.min(x.count,r.start+r.count);for(let b=g,y=p-1;b<y;b+=f){if(c.fromBufferAttribute(x,b),h.fromBufferAttribute(x,b+1),go.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(u);T<t.near||T>t.far||e.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ia.prototype.isLine=!0;const Bl=new L,Ol=new L;class sa extends ia{constructor(t,e){super(t,e),this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Bl.fromBufferAttribute(e,i),Ol.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bl.distanceTo(Ol);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}sa.prototype.isLineSegments=!0;class zv extends ia{constructor(t,e){super(t,e),this.type="LineLoop"}}zv.prototype.isLineLoop=!0;class eh extends xe{constructor(t){super(),this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}eh.prototype.isPointsMaterial=!0;const Ul=new _t,Bo=new ni,tr=new Ui,er=new L;class Bv extends Vt{constructor(t=new Zt,e=new eh){super(),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(i),tr.radius+=s,t.ray.intersectsSphere(tr)===!1)return;Ul.copy(i).invert(),Bo.copy(t.ray).applyMatrix4(Ul);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=u,v=f;m<v;m++){const x=c.getX(m);er.fromBufferAttribute(d,x),kl(er,x,l,i,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let m=u,v=f;m<v;m++)er.fromBufferAttribute(d,m),kl(er,m,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Bv.prototype.isPoints=!0;function kl(o,t,e,n,i,s,r){const a=Bo.distanceSqToPoint(o);if(a<e){const l=new L;Bo.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class Ov extends pe{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.format=a!==void 0?a:$n,this.minFilter=r!==void 0?r:Pe,this.magFilter=s!==void 0?s:Pe,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Ov.prototype.isVideoTexture=!0;class Uv extends pe{constructor(t,e,n,i,s,r,a,l,c,h,d,u){super(null,r,a,l,c,h,i,s,d,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}Uv.prototype.isCompressedTexture=!0;class kv extends pe{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.needsUpdate=!0}}kv.prototype.isCanvasTexture=!0;new L;new L;new L;new ne;class De{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(r-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=e||(r.isVector2?new tt:new L);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],s=[],r=[],a=new L,l=new _t;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new L)}s[0]=new L,r[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Se(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}r[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Se(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lr extends De{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new tt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}Lr.prototype.isEllipseCurve=!0;class nh extends Lr{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.type="ArcCurve"}}nh.prototype.isArcCurve=!0;function ra(){let o=0,t=0,e=0,n=0;function i(s,r,a,l){o=s,t=a,e=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,d){let u=(r-s)/c-(a-s)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,f*=h,i(r,a,u,f)},calc:function(s){const r=s*s,a=r*s;return o+t*s+e*r+n*a}}}const nr=new L,vo=new ra,xo=new ra,yo=new ra;class ih extends De{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(nr.subVectors(i[0],i[1]).add(i[0]),c=nr);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(nr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=nr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),x<1e-4&&(x=v),vo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,v,x),xo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,v,x),yo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,v,x)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),yo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(vo.calc(l),xo.calc(l),yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}ih.prototype.isCatmullRomCurve3=!0;function Vl(o,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,a=o*o,l=o*a;return(2*e-2*n+s+r)*l+(-3*e+3*n-2*s-r)*a+s*o+e}function Vv(o,t){const e=1-o;return e*e*t}function Hv(o,t){return 2*(1-o)*o*t}function Gv(o,t){return o*o*t}function us(o,t,e,n){return Vv(o,t)+Hv(o,e)+Gv(o,n)}function Wv(o,t){const e=1-o;return e*e*e*t}function qv(o,t){const e=1-o;return 3*e*e*o*t}function jv(o,t){return 3*(1-o)*o*o*t}function Xv(o,t){return o*o*o*t}function ds(o,t,e,n,i){return Wv(o,t)+qv(o,e)+jv(o,n)+Xv(o,i)}class oa extends De{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super(),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ds(t,i.x,s.x,r.x,a.x),ds(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}oa.prototype.isCubicBezierCurve=!0;class sh extends De{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ds(t,i.x,s.x,r.x,a.x),ds(t,i.y,s.y,r.y,a.y),ds(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}sh.prototype.isCubicBezierCurve3=!0;class Rr extends De{constructor(t=new tt,e=new tt){super(),this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new tt;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Rr.prototype.isLineCurve=!0;class Yv extends De{constructor(t=new L,e=new L){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aa extends De{constructor(t=new tt,e=new tt,n=new tt){super(),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(us(t,i.x,s.x,r.x),us(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}aa.prototype.isQuadraticBezierCurve=!0;class rh extends De{constructor(t=new L,e=new L,n=new L){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(us(t,i.x,s.x,r.x),us(t,i.y,s.y,r.y),us(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}rh.prototype.isQuadraticBezierCurve3=!0;class la extends De{constructor(t=[]){super(),this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(Vl(a,l.x,c.x,h.x,d.x),Vl(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new tt().fromArray(i))}return this}}la.prototype.isSplineCurve=!0;var oh=Object.freeze({__proto__:null,ArcCurve:nh,CatmullRomCurve3:ih,CubicBezierCurve:oa,CubicBezierCurve3:sh,EllipseCurve:Lr,LineCurve:Rr,LineCurve3:Yv,QuadraticBezierCurve:aa,QuadraticBezierCurve3:rh,SplineCurve:la});class Zv extends De{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Rr(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r&&r.isEllipseCurve?t*2:r&&(r.isLineCurve||r.isLineCurve3)?1:r&&r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new oh[i.type]().fromJSON(i))}return this}}class Oo extends Zv{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rr(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new aa(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const a=new oa(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new la(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,r,a,l),this}absellipse(t,e,n,i,s,r,a,l){const c=new Lr(t,e,n,i,s,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Es extends Oo{constructor(t){super(t),this.uuid=Ye(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Oo().fromJSON(i))}return this}}const Jv={triangulate:function(o,t,e=2){const n=t&&t.length,i=n?t[0]*e:o.length;let s=ah(o,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,h,d,u,f;if(n&&(s=ex(o,t,s,e)),o.length>80*e){a=c=o[0],l=h=o[1];for(let m=e;m<i;m+=e)d=o[m],u=o[m+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return xs(s,r,e,a,l,f),r}};function ah(o,t,e,n,i){let s,r;if(i===dx(o,t,e,n)>0)for(s=t;s<e;s+=n)r=Hl(s,o[s],o[s+1],r);else for(s=e-n;s>=t;s-=n)r=Hl(s,o[s],o[s+1],r);return r&&Pr(r,r.next)&&(_s(r),r=r.next),r}function Pn(o,t){if(!o)return o;t||(t=o);let e=o,n;do if(n=!1,!e.steiner&&(Pr(e,e.next)||Jt(e.prev,e,e.next)===0)){if(_s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xs(o,t,e,n,i,s,r){if(!o)return;!r&&s&&ox(o,n,i,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?Kv(o,n,i,s):$v(o)){t.push(l.i/e),t.push(o.i/e),t.push(c.i/e),_s(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=Qv(Pn(o),t,e),xs(o,t,e,n,i,s,2)):r===2&&tx(o,t,e,n,i,s):xs(Pn(o),t,e,n,i,s,1);break}}}function $v(o){const t=o.prev,e=o,n=o.next;if(Jt(t,e,n)>=0)return!1;let i=o.next.next;for(;i!==o.prev;){if(Ci(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&Jt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Kv(o,t,e,n){const i=o.prev,s=o,r=o.next;if(Jt(i,s,r)>=0)return!1;const a=i.x<s.x?i.x<r.x?i.x:r.x:s.x<r.x?s.x:r.x,l=i.y<s.y?i.y<r.y?i.y:r.y:s.y<r.y?s.y:r.y,c=i.x>s.x?i.x>r.x?i.x:r.x:s.x>r.x?s.x:r.x,h=i.y>s.y?i.y>r.y?i.y:r.y:s.y>r.y?s.y:r.y,d=Uo(a,l,t,e,n),u=Uo(c,h,t,e,n);let f=o.prevZ,m=o.nextZ;for(;f&&f.z>=d&&m&&m.z<=u;){if(f!==o.prev&&f!==o.next&&Ci(i.x,i.y,s.x,s.y,r.x,r.y,f.x,f.y)&&Jt(f.prev,f,f.next)>=0||(f=f.prevZ,m!==o.prev&&m!==o.next&&Ci(i.x,i.y,s.x,s.y,r.x,r.y,m.x,m.y)&&Jt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=d;){if(f!==o.prev&&f!==o.next&&Ci(i.x,i.y,s.x,s.y,r.x,r.y,f.x,f.y)&&Jt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=u;){if(m!==o.prev&&m!==o.next&&Ci(i.x,i.y,s.x,s.y,r.x,r.y,m.x,m.y)&&Jt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Qv(o,t,e){let n=o;do{const i=n.prev,s=n.next.next;!Pr(i,s)&&lh(i,n,n.next,s)&&ys(i,s)&&ys(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),_s(n),_s(n.next),n=o=s),n=n.next}while(n!==o);return Pn(n)}function tx(o,t,e,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&cx(r,a)){let l=ch(r,a);r=Pn(r,r.next),l=Pn(l,l.next),xs(r,t,e,n,i,s),xs(l,t,e,n,i,s);return}a=a.next}r=r.next}while(r!==o)}function ex(o,t,e,n){const i=[];let s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*n,l=s<r-1?t[s+1]*n:o.length,c=ah(o,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(lx(c));for(i.sort(nx),s=0;s<i.length;s++)ix(i[s],e),e=Pn(e,e.next);return e}function nx(o,t){return o.x-t.x}function ix(o,t){if(t=sx(o,t),t){const e=ch(t,o);Pn(t,t.next),Pn(e,e.next)}}function sx(o,t){let e=t;const n=o.x,i=o.y;let s=-1/0,r;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s){if(s=u,u===n){if(i===e.y)return e;if(i===e.next.y)return e.next}r=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!r)return null;if(n===s)return r;const a=r,l=r.x,c=r.y;let h=1/0,d;e=r;do n>=e.x&&e.x>=l&&n!==e.x&&Ci(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)&&(d=Math.abs(i-e.y)/(n-e.x),ys(e,o)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&rx(r,e)))&&(r=e,h=d)),e=e.next;while(e!==a);return r}function rx(o,t){return Jt(o.prev,o,t.prev)<0&&Jt(t.next,o,o.next)<0}function ox(o,t,e,n){let i=o;do i.z===null&&(i.z=Uo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,ax(i)}function ax(o){let t,e,n,i,s,r,a,l,c=1;do{for(e=o,o=null,s=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(r>1);return o}function Uo(o,t,e,n,i){return o=32767*(o-e)*i,t=32767*(t-n)*i,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function lx(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function Ci(o,t,e,n,i,s,r,a){return(i-r)*(t-a)-(o-r)*(s-a)>=0&&(o-r)*(n-a)-(e-r)*(t-a)>=0&&(e-r)*(s-a)-(i-r)*(n-a)>=0}function cx(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!hx(o,t)&&(ys(o,t)&&ys(t,o)&&ux(o,t)&&(Jt(o.prev,o,t.prev)||Jt(o,t.prev,t))||Pr(o,t)&&Jt(o.prev,o,o.next)>0&&Jt(t.prev,t,t.next)>0)}function Jt(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function Pr(o,t){return o.x===t.x&&o.y===t.y}function lh(o,t,e,n){const i=sr(Jt(o,t,e)),s=sr(Jt(o,t,n)),r=sr(Jt(e,n,o)),a=sr(Jt(e,n,t));return!!(i!==s&&r!==a||i===0&&ir(o,e,t)||s===0&&ir(o,n,t)||r===0&&ir(e,o,n)||a===0&&ir(e,t,n))}function ir(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function sr(o){return o>0?1:o<0?-1:0}function hx(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&lh(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function ys(o,t){return Jt(o.prev,o,o.next)<0?Jt(o,t,o.next)>=0&&Jt(o,o.prev,t)>=0:Jt(o,t,o.prev)<0||Jt(o,o.next,t)<0}function ux(o,t){let e=o,n=!1;const i=(o.x+t.x)/2,s=(o.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==o);return n}function ch(o,t){const e=new ko(o.i,o.x,o.y),n=new ko(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Hl(o,t,e,n){const i=new ko(o,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _s(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function ko(o,t,e){this.i=o,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dx(o,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class Ln{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ln.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Gl(t),Wl(n,t);let r=t.length;e.forEach(Gl);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,Wl(n,e[l]);const a=Jv.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Gl(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Wl(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}class Vi extends Zt{constructor(t=new Es([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new ue(i,3)),this.setAttribute("uv",new ue(s,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:fx;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=e.amount);let b,y=!1,M,T,_,D;g&&(b=g.getSpacedPoints(h),y=!0,u=!1,M=g.computeFrenetFrames(h,!1),T=new L,_=new L,D=new L),u||(x=0,f=0,m=0,v=0);const B=a.extractPoints(c);let z=B.shape;const A=B.holes;if(!Ln.isClockWise(z)){z=z.reverse();for(let j=0,et=A.length;j<et;j++){const nt=A[j];Ln.isClockWise(nt)&&(A[j]=nt.reverse())}}const C=Ln.triangulateShape(z,A),I=z;for(let j=0,et=A.length;j<et;j++){const nt=A[j];z=z.concat(nt)}function N(j,et,nt){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().multiplyScalar(nt).add(j)}const P=z.length,O=C.length;function k(j,et,nt){let dt,at,Et;const Tt=j.x-et.x,Dt=j.y-et.y,qt=nt.x-j.x,R=nt.y-j.y,E=Tt*Tt+Dt*Dt,$=Tt*R-Dt*qt;if(Math.abs($)>Number.EPSILON){const J=Math.sqrt(E),mt=Math.sqrt(qt*qt+R*R),pt=et.x-Dt/J,F=et.y+Tt/J,st=nt.x-R/mt,Q=nt.y+qt/mt,lt=((st-pt)*R-(Q-F)*qt)/(Tt*R-Dt*qt);dt=pt+Tt*lt-j.x,at=F+Dt*lt-j.y;const rt=dt*dt+at*at;if(rt<=2)return new tt(dt,at);Et=Math.sqrt(rt/2)}else{let J=!1;Tt>Number.EPSILON?qt>Number.EPSILON&&(J=!0):Tt<-Number.EPSILON?qt<-Number.EPSILON&&(J=!0):Math.sign(Dt)===Math.sign(R)&&(J=!0),J?(dt=-Dt,at=Tt,Et=Math.sqrt(E)):(dt=Tt,at=Dt,Et=Math.sqrt(E/2))}return new tt(dt/Et,at/Et)}const q=[];for(let j=0,et=I.length,nt=et-1,dt=j+1;j<et;j++,nt++,dt++)nt===et&&(nt=0),dt===et&&(dt=0),q[j]=k(I[j],I[nt],I[dt]);const V=[];let G,Y=q.concat();for(let j=0,et=A.length;j<et;j++){const nt=A[j];G=[];for(let dt=0,at=nt.length,Et=at-1,Tt=dt+1;dt<at;dt++,Et++,Tt++)Et===at&&(Et=0),Tt===at&&(Tt=0),G[dt]=k(nt[dt],nt[Et],nt[Tt]);V.push(G),Y=Y.concat(G)}for(let j=0;j<x;j++){const et=j/x,nt=f*Math.cos(et*Math.PI/2),dt=m*Math.sin(et*Math.PI/2)+v;for(let at=0,Et=I.length;at<Et;at++){const Tt=N(I[at],q[at],dt);At(Tt.x,Tt.y,-nt)}for(let at=0,Et=A.length;at<Et;at++){const Tt=A[at];G=V[at];for(let Dt=0,qt=Tt.length;Dt<qt;Dt++){const R=N(Tt[Dt],G[Dt],dt);At(R.x,R.y,-nt)}}}const it=m+v;for(let j=0;j<P;j++){const et=u?N(z[j],Y[j],it):z[j];y?(_.copy(M.normals[0]).multiplyScalar(et.x),T.copy(M.binormals[0]).multiplyScalar(et.y),D.copy(b[0]).add(_).add(T),At(D.x,D.y,D.z)):At(et.x,et.y,0)}for(let j=1;j<=h;j++)for(let et=0;et<P;et++){const nt=u?N(z[et],Y[et],it):z[et];y?(_.copy(M.normals[j]).multiplyScalar(nt.x),T.copy(M.binormals[j]).multiplyScalar(nt.y),D.copy(b[j]).add(_).add(T),At(D.x,D.y,D.z)):At(nt.x,nt.y,d/h*j)}for(let j=x-1;j>=0;j--){const et=j/x,nt=f*Math.cos(et*Math.PI/2),dt=m*Math.sin(et*Math.PI/2)+v;for(let at=0,Et=I.length;at<Et;at++){const Tt=N(I[at],q[at],dt);At(Tt.x,Tt.y,d+nt)}for(let at=0,Et=A.length;at<Et;at++){const Tt=A[at];G=V[at];for(let Dt=0,qt=Tt.length;Dt<qt;Dt++){const R=N(Tt[Dt],G[Dt],dt);y?At(R.x,R.y+b[h-1].y,b[h-1].x+nt):At(R.x,R.y,d+nt)}}}ut(),It();function ut(){const j=i.length/3;if(u){let et=0,nt=P*et;for(let dt=0;dt<O;dt++){const at=C[dt];bt(at[2]+nt,at[1]+nt,at[0]+nt)}et=h+x*2,nt=P*et;for(let dt=0;dt<O;dt++){const at=C[dt];bt(at[0]+nt,at[1]+nt,at[2]+nt)}}else{for(let et=0;et<O;et++){const nt=C[et];bt(nt[2],nt[1],nt[0])}for(let et=0;et<O;et++){const nt=C[et];bt(nt[0]+P*h,nt[1]+P*h,nt[2]+P*h)}}n.addGroup(j,i.length/3-j,0)}function It(){const j=i.length/3;let et=0;K(I,et),et+=I.length;for(let nt=0,dt=A.length;nt<dt;nt++){const at=A[nt];K(at,et),et+=at.length}n.addGroup(j,i.length/3-j,1)}function K(j,et){let nt=j.length;for(;--nt>=0;){const dt=nt;let at=nt-1;at<0&&(at=j.length-1);for(let Et=0,Tt=h+x*2;Et<Tt;Et++){const Dt=P*Et,qt=P*(Et+1),R=et+dt+Dt,E=et+at+Dt,$=et+at+qt,J=et+dt+qt;vt(R,E,$,J)}}}function At(j,et,nt){l.push(j),l.push(et),l.push(nt)}function bt(j,et,nt){yt(j),yt(et),yt(nt);const dt=i.length/3,at=p.generateTopUV(n,i,dt-3,dt-2,dt-1);Ft(at[0]),Ft(at[1]),Ft(at[2])}function vt(j,et,nt,dt){yt(j),yt(et),yt(dt),yt(et),yt(nt),yt(dt);const at=i.length/3,Et=p.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);Ft(Et[0]),Ft(Et[1]),Ft(Et[3]),Ft(Et[1]),Ft(Et[2]),Ft(Et[3])}function yt(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function Ft(j){s.push(j.x),s.push(j.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return px(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new oh[i.type]().fromJSON(i)),new Vi(n,t.options)}}const fx={generateTopUV:function(o,t,e,n,i){const s=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new tt(s,r),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(o,t,e,n,i,s){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],m=t[i*3+2],v=t[s*3],x=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new tt(r,1-l),new tt(c,1-d),new tt(u,1-m),new tt(v,1-g)]:[new tt(a,1-l),new tt(h,1-d),new tt(f,1-m),new tt(x,1-g)]}};function px(o,t,e){if(e.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const s=o[n];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ca extends Zt{constructor(t=new Es([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ue(i,3)),this.setAttribute("normal",new ue(s,3)),this.setAttribute("uv",new ue(r,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const m=u.holes;Ln.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,g=m.length;x<g;x++){const p=m[x];Ln.isClockWise(p)===!0&&(m[x]=p.reverse())}const v=Ln.triangulateShape(f,m);for(let x=0,g=m.length;x<g;x++){const p=m[x];f=f.concat(p)}for(let x=0,g=f.length;x<g;x++){const p=f[x];i.push(p.x,p.y,0),s.push(0,0,1),r.push(p.x,p.y)}for(let x=0,g=v.length;x<g;x++){const p=v[x],b=p[0]+d,y=p[1]+d,M=p[2]+d;n.push(b,y,M),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return mx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const r=e[t.shapes[i]];n.push(r)}return new ca(n,t.curveSegments)}}function mx(o,t){if(t.shapes=[],Array.isArray(o))for(let e=0,n=o.length;e<n;e++){const i=o[e];t.shapes.push(i.uuid)}else t.shapes.push(o.uuid);return t}class gx extends xe{constructor(t){super(),this.type="ShadowMaterial",this.color=new xt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}gx.prototype.isShadowMaterial=!0;class Zn extends xe{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}Zn.prototype.isMeshStandardMaterial=!0;class vx extends Zn{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}vx.prototype.isMeshPhysicalMaterial=!0;class xx extends xe{constructor(t){super(),this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}xx.prototype.isMeshPhongMaterial=!0;class yx extends xe{constructor(t){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}yx.prototype.isMeshToonMaterial=!0;class _x extends xe{constructor(t){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}_x.prototype.isMeshNormalMaterial=!0;class wx extends xe{constructor(t){super(),this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}wx.prototype.isMeshLambertMaterial=!0;class bx extends xe{constructor(t){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}bx.prototype.isMeshMatcapMaterial=!0;class Mx extends Ss{constructor(t){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}Mx.prototype.isLineDashedMaterial=!0;const Yt={arraySlice:function(o,t,e){return Yt.isTypedArray(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)},convertArray:function(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function t(i,s){return o[i]-o[s]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(o,t,e){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[r++]=o[a+l]}return i},flattenJSON:function(o,t,e,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(t.push(s.time),e.push(r)),s=o[i++];while(s!==void 0)},subclip:function(o,t,e,n,i=30){const s=o.clone();s.name=t;const r=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<e||m>=n)){d.push(c.times[f]);for(let v=0;v<h;++v)u.push(c.values[f*h+v])}}d.length!==0&&(c.times=Yt.convertArray(d,c.times.constructor),c.values=Yt.convertArray(u,c.values.constructor),r.push(c))}s.tracks=r;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(o,t=0,e=o,n=30){n<=0&&(n=30);const i=e.tracks.length,s=t/n;for(let r=0;r<i;++r){const a=e.tracks[r],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=o.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const m=a.times.length-1;let v;if(s<=a.times[0]){const g=h,p=d-h;v=Yt.arraySlice(a.values,g,p)}else if(s>=a.times[m]){const g=m*d+h,p=g+d-h;v=Yt.arraySlice(a.values,g,p)}else{const g=a.createInterpolant(),p=h,b=d-h;g.evaluate(s),v=Yt.arraySlice(g.resultBuffer,p,b)}l==="quaternion"&&new ge().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let g=0;g<x;++g){const p=g*f+u;if(l==="quaternion")ge.multiplyQuaternionsFlat(c.values,p,v,0,c.values,p);else{const b=f-u*2;for(let y=0;y<b;++y)c.values[p+y]-=v[y]}}}return o.blendMode=Tc,o}};class In{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let r;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,s)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}r=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}r=n,n=0;break n}break t}for(;n<r;){const a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,s,t)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}In.prototype.beforeStart_=In.prototype.copySampleValue_;In.prototype.afterEnd_=In.prototype.copySampleValue_;class Sx extends In{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ti,endingEnd:Ti}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Ai:s=t,a=2*e-n;break;case mr:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ai:r=t,l=2*n-e;break;case mr:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),v=m*m,x=v*m,g=-u*x+2*u*v-u*m,p=(1+u)*x+(-1.5-2*u)*v+(-.5+u)*m+1,b=(-1-f)*x+(1.5+f)*v+.5*m,y=f*x-f*v;for(let M=0;M!==a;++M)s[M]=g*r[h+M]+p*r[c+M]+b*r[l+M]+y*r[d+M];return s}}class hh extends In{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=r[c+u]*d+r[l+u]*h;return s}}class Ex extends In{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Je{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yt.convertArray(e,this.TimeBufferType),this.values=Yt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yt.convertArray(t.times,Array),values:Yt.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ex(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sx(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fr:e=this.InterpolantFactoryMethodDiscrete;break;case pr:e=this.InterpolantFactoryMethodLinear;break;case Br:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Br}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=Yt.arraySlice(n,s,r),this.values=Yt.arraySlice(this.values,s*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&Yt.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=Yt.arraySlice(this.times),e=Yt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Br,s=t.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const v=e[d+m];if(v!==e[u+m]||v!==e[f+m]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];const d=a*n,u=r*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=Yt.arraySlice(t,0,r),this.values=Yt.arraySlice(e,0,r*n)):(this.times=t,this.values=e),this}clone(){const t=Yt.arraySlice(this.times,0),e=Yt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=pr;class Hi extends Je{}Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=fr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class uh extends Je{}uh.prototype.ValueTypeName="color";class vr extends Je{}vr.prototype.ValueTypeName="number";class Tx extends In{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ge.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Ts extends Je{InterpolantFactoryMethodLinear(t){return new Tx(this.times,this.values,this.getValueSize(),t)}}Ts.prototype.ValueTypeName="quaternion";Ts.prototype.DefaultInterpolation=pr;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends Je{}Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=fr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends Je{}xr.prototype.ValueTypeName="vector";class ql{constructor(t,e=-1,n,i=qo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ye(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(Cx(n[r]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=n.length;s!==r;++s)e.push(Je.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Yt.getKeyframeOrder(l);l=Yt.sortedArray(l,1,h),c=Yt.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new vr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,m,v){if(f.length!==0){const x=[],g=[];Yt.flattenJSON(f,x,g,m),x.length!==0&&v.push(new d(u,x,g))}},i=[],s=t.name||"default",r=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let v=0;v<u[m].morphTargets.length;v++)f[u[m].morphTargets[v]]=-1;for(const v in f){const x=[],g=[];for(let p=0;p!==u[m].morphTargets.length;++p){const b=u[m];x.push(b.time),g.push(b.morphTarget===v?1:0)}i.push(new vr(".morphTargetInfluence["+v+"]",x,g))}l=f.length*(r||1)}else{const f=".bones["+e[d].name+"]";n(xr,f+".position",u,"pos",i),n(Ts,f+".quaternion",u,"rot",i),n(xr,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ax(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vr;case"vector":case"vector2":case"vector3":case"vector4":return xr;case"color":return uh;case"quaternion":return Ts;case"bool":case"boolean":return Hi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Cx(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Ax(o.type);if(o.times===void 0){const e=[],n=[];Yt.flattenJSON(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const Fi={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Lx{constructor(t,e,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Rx=new Lx;class Nn{constructor(t){this.manager=t!==void 0?t:Rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const nn={};class Px extends Nn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Fi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(nn[t]!==void 0){nn[t].push({onLoad:e,onProgress:n,onError:i});return}nn[t]=[],nn[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r).then(a=>{if(a.status===200||a.status===0){a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=nn[t],c=a.body.getReader(),h=a.headers.get("Content-Length"),d=h?parseInt(h):0,u=d!==0;let f=0;return new ReadableStream({start(m){v();function v(){c.read().then(({done:x,value:g})=>{if(x)m.close();else{f+=g.byteLength;const p=new ProgressEvent("progress",{lengthComputable:u,loaded:f,total:d});for(let b=0,y=l.length;b<y;b++){const M=l[b];M.onProgress&&M.onProgress(p)}m.enqueue(g),v()}})}}})}else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>{const l=new Response(a);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(a=>{Fi.add(t,a);const l=nn[t];delete nn[t];for(let c=0,h=l.length;c<h;c++){const d=l[c];d.onLoad&&d.onLoad(a)}this.manager.itemEnd(t)}).catch(a=>{const l=nn[t];delete nn[t];for(let c=0,h=l.length;c<h;c++){const d=l[c];d.onError&&d.onError(a)}this.manager.itemError(t),this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class dh extends Nn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Fi.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=Mr("img");function l(){h(),Fi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Ix extends Nn{constructor(t){super(t)}load(t,e,n,i){const s=new Sr,r=new dh(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(c){r.load(t[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class Dx extends Nn{constructor(t){super(t)}load(t,e,n,i){const s=new pe,r=new dh(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Ze extends Vt{constructor(t,e=1){super(),this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}Ze.prototype.isLight=!0;class fh extends Ze{constructor(t,e,n){super(t,n),this.type="HemisphereLight",this.position.copy(Vt.DefaultUp),this.updateMatrix(),this.groundColor=new xt(e)}copy(t){return Ze.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}fh.prototype.isHemisphereLight=!0;const jl=new _t,Xl=new L,Yl=new L;class ha{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),Yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yl),e.updateMatrixWorld(),jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ph extends ha{constructor(){super(new ye(50,1,.5,500)),this.focus=1}updateMatrices(t){const e=this.camera,n=Do*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}ph.prototype.isSpotLightShadow=!0;class Nx extends Ze{constructor(t,e,n=0,i=Math.PI/3,s=0,r=1){super(t,e),this.type="SpotLight",this.position.copy(Vt.DefaultUp),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Nx.prototype.isSpotLight=!0;const Zl=new _t,es=new L,_o=new L;class mh extends ha{constructor(){super(new ye(90,1,.5,500)),this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),n.position.copy(es),_o.copy(n.position),_o.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_o),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),Zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl)}}mh.prototype.isPointLightShadow=!0;class Fx extends Ze{constructor(t,e,n=0,i=1){super(t,e),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}Fx.prototype.isPointLight=!0;class gh extends ha{constructor(){super(new Ko(-5,5,5,-5,.5,500))}}gh.prototype.isDirectionalLightShadow=!0;class vh extends Ze{constructor(t,e){super(t,e),this.type="DirectionalLight",this.position.copy(Vt.DefaultUp),this.updateMatrix(),this.target=new Vt,this.shadow=new gh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}vh.prototype.isDirectionalLight=!0;class zx extends Ze{constructor(t,e){super(t,e),this.type="AmbientLight"}}zx.prototype.isAmbientLight=!0;class Bx extends Ze{constructor(t,e,n=10,i=10){super(t,e),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}Bx.prototype.isRectAreaLight=!0;class xh{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new L)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,r=this.coefficients;return e.copy(r[0]).multiplyScalar(.282095),e.addScaledVector(r[1],.488603*i),e.addScaledVector(r[2],.488603*s),e.addScaledVector(r[3],.488603*n),e.addScaledVector(r[4],1.092548*(n*i)),e.addScaledVector(r[5],1.092548*(i*s)),e.addScaledVector(r[6],.315392*(3*s*s-1)),e.addScaledVector(r[7],1.092548*(n*s)),e.addScaledVector(r[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,r=this.coefficients;return e.copy(r[0]).multiplyScalar(.886227),e.addScaledVector(r[1],2*.511664*i),e.addScaledVector(r[2],2*.511664*s),e.addScaledVector(r[3],2*.511664*n),e.addScaledVector(r[4],2*.429043*n*i),e.addScaledVector(r[5],2*.429043*i*s),e.addScaledVector(r[6],.743125*s*s-.247708),e.addScaledVector(r[7],2*.429043*n*s),e.addScaledVector(r[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}xh.prototype.isSphericalHarmonics3=!0;class ua extends Ze{constructor(t=new xh,e=1){super(void 0,e),this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}ua.prototype.isLightProbe=!0;class Ox{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Ux extends Zt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}Ux.prototype.isInstancedBufferGeometry=!0;class kx extends Nn{constructor(t){super(t),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Fi.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Fi.add(t,l),e&&e(l),s.manager.itemEnd(t)}).catch(function(l){i&&i(l),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}}kx.prototype.isImageBitmapLoader=!0;let rr;const Vx={getContext:function(){return rr===void 0&&(rr=new(window.AudioContext||window.webkitAudioContext)),rr},setContext:function(o){rr=o}};class Hx extends Nn{constructor(t){super(t)}load(t,e,n,i){const s=this,r=new Px(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){try{const l=a.slice(0);Vx.getContext().decodeAudioData(l,function(h){e(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}}class Gx extends ua{constructor(t,e,n=1){super(void 0,n);const i=new xt().set(t),s=new xt().set(e),r=new L(i.r,i.g,i.b),a=new L(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(r).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(r).sub(a).multiplyScalar(c)}}Gx.prototype.isHemisphereLightProbe=!0;class Wx extends ua{constructor(t,e=1){super(void 0,e);const n=new xt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Wx.prototype.isAmbientLightProbe=!0;class qx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Jl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Jl(){return(typeof performance=="undefined"?Date:performance).now()}class jx extends Vt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Xx{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,r;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=e}else{r+=e;const a=e/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,r=i;s!==r;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)t[e+r]=t[n+r]}_slerp(t,e,n,i){ge.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const r=this._workIndex*s;ge.multiplyQuaternionsFlat(t,r,t,e,t,n),ge.slerpFlat(t,e,t,e,t,r,i)}_lerp(t,e,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*r+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let r=0;r!==s;++r){const a=e+r;t[a]=t[a]+t[n+r]*i}}}const da="\\[\\]\\.:\\/",Yx=new RegExp("["+da+"]","g"),fa="[^"+da+"]",Zx="[^"+da.replace("\\.","")+"]",Jx=/((?:WC+[\/:])*)/.source.replace("WC",fa),$x=/(WCOD+)?/.source.replace("WCOD",Zx),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fa),Qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fa),t0=new RegExp("^"+Jx+$x+Kx+Qx+"$"),e0=["material","materials","bones"];class n0{constructor(t,e,n){const i=n||kt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class kt{constructor(t,e,n){this.path=e,this.parsedPath=n||kt.parseTrackName(e),this.node=kt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new kt.Composite(t,e,n):new kt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(t){const e=t0.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);e0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=kt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const r=t[i];if(r===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kt.Composite=n0;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class i0{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,r=s.length,a=new Array(r),l={endingStart:Ti,endingEnd:Ti};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=kd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,r=s/i,a=i/s;t.warp(1,r,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/r,c[1]=e/r,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const r=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Tc:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case qo:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const r=n===Vd;if(t===0)return s===-1?i:r&&(s&1)===1?e-i:i;if(n===Ud){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Ai,i.endingEnd=Ai):(t?i.endingStart=this.zeroSlopeAtStart?Ai:Ti:i.endingStart=mr,e?i.endingEnd=this.zeroSlopeAtEnd?Ai:Ti:i.endingEnd=mr)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}class s0 extends ei{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,r=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let m=h[f];if(m!==void 0)r[d]=m;else{if(m=r[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const v=e&&e._propertyBindings[d].binding.parsedPath;m=new Xx(kt.create(n,f,v),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),r[d]=m}a[d].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let r=s[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=r;else{const a=r.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),r.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[e];r===void 0&&(r={},i[e]=r),r[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new hh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let r=typeof t=="string"?ql.findByName(i,t):t;const a=r!==null?r.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=qo),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new i0(this,r,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?ql.findByName(n,t):t,r=s?s.uuid:t,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),r=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}s0.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class r0 extends Ms{constructor(t,e,n=1){super(t,e),this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}r0.prototype.isInstancedInterleavedBuffer=!0;class o0{constructor(t,e,n=0,i=1/0){this.ray=new ni(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Vo(t,this,n,e),n.sort($l),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Vo(t[i],this,n,e);return n.sort($l),n}}function $l(o,t){return o.distance-t.distance}function Vo(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)Vo(i[s],t,e,!0)}}class Kl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xn=new L,or=new _t,wo=new _t;class a0 extends sa{constructor(t){const e=yh(t),n=new Zt,i=[],s=[],r=new xt(0,0,1),a=new xt(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(r.r,r.g,r.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new ue(i,3)),n.setAttribute("color",new ue(s,3));const l=new Ss({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");wo.copy(this.root.matrixWorld).invert();for(let s=0,r=0;s<e.length;s++){const a=e[s];a.parent&&a.parent.isBone&&(or.multiplyMatrices(wo,a.matrixWorld),xn.setFromMatrixPosition(or),i.setXYZ(r,xn.x,xn.y,xn.z),or.multiplyMatrices(wo,a.parent.matrixWorld),xn.setFromMatrixPosition(or),i.setXYZ(r+1,xn.x,xn.y,xn.z),r+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function yh(o){const t=[];o&&o.isBone&&t.push(o);for(let e=0;e<o.children.length;e++)t.push.apply(t,yh(o.children[e]));return t}class l0 extends sa{constructor(t=10,e=10,n=4473924,i=8947848){n=new xt(n),i=new xt(i);const s=e/2,r=t/e,a=t/2,l=[],c=[];for(let u=0,f=0,m=-a;u<=e;u++,m+=r){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const v=u===s?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new Zt;h.setAttribute("position",new ue(l,3)),h.setAttribute("color",new ue(c,3));const d=new Ss({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}}const c0=new Float32Array(1);new Int32Array(c0.buffer);De.create=function(o,t){return console.log("THREE.Curve.create() has been deprecated"),o.prototype=Object.create(De.prototype),o.prototype.constructor=o,o.prototype.getPoint=t,o};Oo.prototype.fromPoints=function(o){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(o)};l0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};a0.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Nn.prototype.extractUrlBase=function(o){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ox.extractUrlBase(o)};Nn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Ve.prototype.center=function(o){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(o)};Ve.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ve.prototype.isIntersectionBox=function(o){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Ve.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};Ve.prototype.size=function(o){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(o)};Ui.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Er.prototype.setFromMatrix=function(o){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(o)};fe.prototype.flattenToArrayOffset=function(o,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,t)};fe.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};fe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};fe.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};fe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};fe.prototype.getInverse=function(o){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};_t.prototype.extractPosition=function(o){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(o)};_t.prototype.flattenToArrayOffset=function(o,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,t)};_t.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};_t.prototype.setRotationFromQuaternion=function(o){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(o)};_t.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};_t.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};_t.prototype.multiplyVector4=function(o){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};_t.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};_t.prototype.rotateAxis=function(o){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),o.transformDirection(this)};_t.prototype.crossVector=function(o){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};_t.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};_t.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};_t.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};_t.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};_t.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};_t.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};_t.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};_t.prototype.makeFrustum=function(o,t,e,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(o,t,n,e,i,s)};_t.prototype.getInverse=function(o){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};cn.prototype.isIntersectionLine=function(o){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(o)};ge.prototype.multiplyVector3=function(o){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),o.applyQuaternion(this)};ge.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};ni.prototype.isIntersectionBox=function(o){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};ni.prototype.isIntersectionPlane=function(o){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(o)};ni.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};ne.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ne.prototype.barycoordFromPoint=function(o,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(o,t)};ne.prototype.midpoint=function(o){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(o)};ne.prototypenormal=function(o){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(o)};ne.prototype.plane=function(o){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(o)};ne.barycoordFromPoint=function(o,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ne.getBarycoord(o,t,e,n,i)};ne.normal=function(o,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ne.getNormal(o,t,e,n)};Es.prototype.extractAllPoints=function(o){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(o)};Es.prototype.extrude=function(o){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Vi(this,o)};Es.prototype.makeGeometry=function(o){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ca(this,o)};tt.prototype.fromAttribute=function(o,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,t,e)};tt.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};tt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(o){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(o)};L.prototype.getScaleFromMatrix=function(o){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(o)};L.prototype.getColumnFromMatrix=function(o,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,o)};L.prototype.applyProjection=function(o){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(o)};L.prototype.fromAttribute=function(o,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,t,e)};L.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Gt.prototype.fromAttribute=function(o,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,t,e)};Gt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Vt.prototype.getChildByName=function(o){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(o)};Vt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Vt.prototype.translate=function(o,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,o)};Vt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Vt.prototype.applyMatrix=function(o){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(Vt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(o){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=o}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});he.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(he.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Hd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});th.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ye.prototype.setLens=function(o,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(o)};Object.defineProperties(Ze.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(o){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=o}},shadowCameraLeft:{set:function(o){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=o}},shadowCameraRight:{set:function(o){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=o}},shadowCameraTop:{set:function(o){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=o}},shadowCameraBottom:{set:function(o){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=o}},shadowCameraNear:{set:function(o){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=o}},shadowCameraFar:{set:function(o){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=o}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(o){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=o}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(o){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=o}},shadowMapHeight:{set:function(o){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=o}}});Object.defineProperties(re.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===gr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(gr)}}});re.prototype.setDynamic=function(o){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?gr:gs),this};re.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},re.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Zt.prototype.addIndex=function(o){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(o)};Zt.prototype.addAttribute=function(o,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(o,new re(arguments[1],arguments[2]))):o==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(o,t)};Zt.prototype.addDrawCall=function(o,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(o,t)};Zt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Zt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Zt.prototype.removeAttribute=function(o){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(o)};Zt.prototype.applyMatrix=function(o){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(Zt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Ms.prototype.setDynamic=function(o){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?gr:gs),this};Ms.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Vi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Vi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Vi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};na.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(xe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new xt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(o){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=o===bc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(o){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=o}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Qn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(o){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=o}}});Ht.prototype.clearTarget=function(o,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(o),this.clear(t,e,n)};Ht.prototype.animate=function(o){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(o)};Ht.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ht.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ht.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ht.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ht.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ht.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ht.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ht.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ht.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ht.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ht.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ht.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ht.prototype.enableScissorTest=function(o){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(o)};Ht.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ht.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ht.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ht.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ht.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ht.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ht.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ht.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ht.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ht.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ht.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=o}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=o}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(o){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=o===!0?br:Ee}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Jc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ie.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=o}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=o}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=o}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=o}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(o){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=o}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(o){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=o}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(o){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=o}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(o){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=o}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(o){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=o}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(o){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=o}}});jx.prototype.load=function(o){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new Hx().load(o,function(n){t.setBuffer(n)}),this};$o.prototype.updateCubeMap=function(o,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(o,t)};$o.prototype.clear=function(o,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(o,t,e,n)};Oi.crossOrigin=void 0;Oi.loadTexture=function(o,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Dx;i.setCrossOrigin(this.crossOrigin);const s=i.load(o,e,void 0,n);return t&&(s.mapping=t),s};Oi.loadTextureCube=function(o,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Ix;i.setCrossOrigin(this.crossOrigin);const s=i.load(o,e,void 0,n);return t&&(s.mapping=t),s};Oi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Oi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);const H_=new Dn(0,0,0,"YXZ"),G_=new L;const W_=Math.PI/2;class Xe{constructor(t=[0,0,0,0,0,0,0,0,0]){this.elements=void 0,this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t=new w){const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e=new w){const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e=new Xe){const n=this.elements,i=t.elements,s=e.elements,r=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],v=i[0],x=i[1],g=i[2],p=i[3],b=i[4],y=i[5],M=i[6],T=i[7],_=i[8];return s[0]=r*v+a*p+l*M,s[1]=r*x+a*b+l*T,s[2]=r*g+a*y+l*_,s[3]=c*v+h*p+d*M,s[4]=c*x+h*b+d*T,s[5]=c*g+h*y+d*_,s[6]=u*v+f*p+m*M,s[7]=u*x+f*b+m*T,s[8]=u*g+f*y+m*_,e}scale(t,e=new Xe){const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e=new w){const s=[];let r,a;for(r=0;r<3*4;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+4*a]=this.elements[r+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(r=c-l,s[r+4*r]===0){for(a=r+1;a<c;a++)if(s[r+4*a]!==0){h=d;do u=d-h,s[u+4*r]+=s[u+4*a];while(--h);break}}if(s[r+4*r]!==0)for(a=r+1;a<c;a++){const f=s[r+4*a]/s[r+4*r];h=d;do u=d-h,s[u+4*a]=u<=r?0:s[u+4*a]-s[u+4*r]*f;while(--h)}}while(--l);if(e.z=s[2*4+3]/s[2*4+2],e.y=(s[1*4+3]-s[1*4+2]*e.z)/s[1*4+1],e.x=(s[0*4+3]-s[0*4+2]*e.z-s[0*4+1]*e.y)/s[0*4+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw"Could not solve equation! Got x=["+e.toString()+"], b=["+t.toString()+"], A=["+this.toString()+"]";return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t=new Xe){const i=h0;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+6*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=6;let d;do{if(s=l-a,i[s+6*s]===0){for(r=s+1;r<l;r++)if(i[s+6*r]!==0){c=h;do d=h-c,i[d+6*s]+=i[d+6*r];while(--c);break}}if(i[s+6*s]!==0)for(r=s+1;r<l;r++){const u=i[s+6*r]/i[s+6*s];c=h;do d=h-c,i[d+6*r]=d<=s?0:i[d+6*r]-i[d+6*s]*u;while(--c)}}while(--a);s=2;do{r=s-1;do{const u=i[s+6*r]/i[s+6*s];c=6;do d=6-c,i[d+6*r]=i[d+6*r]-i[d+6*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+6*s];c=6;do d=6-c,i[d+6*s]=i[d+6*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[3+r+6*s],isNaN(d)||d===1/0)throw"Could not reverse! A=["+this.toString()+"]";t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,a=n+n,l=i+i,c=e*r,h=e*a,d=e*l,u=n*a,f=n*l,m=i*l,v=s*r,x=s*a,g=s*l,p=this.elements;return p[3*0+0]=1-(u+m),p[3*0+1]=h-g,p[3*0+2]=d+x,p[3*1+0]=h+g,p[3*1+1]=1-(c+m),p[3*1+2]=f-v,p[3*2+0]=d-x,p[3*2+1]=f+v,p[3*2+2]=1-(c+u),this}transpose(t=new Xe){const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const h0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t=0,e=0,n=0){this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=e,this.z=n}cross(t,e=new w){const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-r*s,e.z=r*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Xe([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t=new w){const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i)}scale(t,e=new w){const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e=new w){return e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n=new w){return n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t=new w){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=u0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=d0;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return this.x+","+this.y+","+this.z}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e=1e-6){return!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t=1e-6){return!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Ql),Ql.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=void 0;w.UNIT_X=void 0;w.UNIT_Y=void 0;w.UNIT_Z=void 0;w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const u0=new w,d0=new w,Ql=new w;class Le{constructor(t={}){this.lowerBound=void 0,this.upperBound=void 0,this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,tc),c=tc),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Le().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=ec,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=ec,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(m<0||f>m)}}const tc=new w,ec=[new w,new w,new w,new w,new w,new w,new w,new w];class nc{constructor(){this.matrix=void 0,this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class _h{constructor(){this._listeners=void 0}addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class se{constructor(t=0,e=0,n=0,i=1){this.x=void 0,this.y=void 0,this.z=void 0,this.w=void 0,this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return this.x+","+this.y+","+this.z+","+this.w}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t=new w){this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=f0,i=p0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e=new se){const n=this.x,i=this.y,s=this.z,r=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*a+i*c-s*l,e.y=i*h+r*l+s*a-n*c,e.z=s*h+r*c+n*l-i*a,e.w=r*h-n*a-i*l-s*c,e}inverse(t=new se){const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t=new se){return t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e=new w){const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-r*s,u=c*s+r*i-a*n,f=-r*n-a*i-l*s;return e.x=h*c+f*-r+d*-l-u*-a,e.y=d*c+f*-a+u*-r-h*-l,e.z=u*c+f*-l+h*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e="YZX"){let n,i,s;const r=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=r*a+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*a*l,1-2*d-2*f)}break;default:throw new Error("Euler order "+e+" not supported yet.")}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i="XYZ"){const s=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="YXZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="ZXY"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="ZYX"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="YZX"?(this.x=l*r*a+s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a-l*c*h):i==="XZY"&&(this.x=l*r*a-s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a+l*c*h),this}clone(){return new se(this.x,this.y,this.z,this.w)}slerp(t,e,n=new se){const i=this.x,s=this.y,r=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,m,v,x;return f=i*l+s*c+r*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),v=Math.sin((1-e)*u)/m,x=Math.sin(e*u)/m):(v=1-e,x=e),n.x=v*i+x*l,n.y=v*s+x*c,n.z=v*r+x*h,n.w=v*a+x*d,n}integrate(t,e,n,i=new se){const s=t.x*n.x,r=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+r*h-a*c),i.y+=u*(r*d+a*l-s*h),i.z+=u*(a*d+s*c-r*l),i.w+=u*(-s*l-r*c-a*h),i}}const f0=new w,p0=new w,m0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ht{constructor(t={}){this.id=void 0,this.type=void 0,this.boundingSphereRadius=void 0,this.collisionResponse=void 0,this.collisionFilterGroup=void 0,this.collisionFilterMask=void 0,this.material=void 0,this.body=void 0,this.id=ht.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type}volume(){throw"volume() not implemented for shape type "+this.type}calculateLocalInertia(t,e){throw"calculateLocalInertia() not implemented for shape type "+this.type}calculateWorldAABB(t,e,n,i){throw"calculateWorldAABB() not implemented for shape type "+this.type}}ht.idCounter=0;ht.types=m0;class Ut{constructor(t={}){this.position=void 0,this.quaternion=void 0,this.position=new w,this.quaternion=new se,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ut.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ut.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e=new w){return this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i=new w){return n.vsub(t,i),e.conjugate(ic),ic.vmult(i,i),i}static pointToWorldFrame(t,e,n,i=new w){return e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n=new w){return t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i=new w){return e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const ic=new se;class fs extends ht{constructor(t={}){const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:ht.types.CONVEXPOLYHEDRON}),this.vertices=void 0,this.faces=void 0,this.faceNormals=void 0,this.worldVertices=void 0,this.worldVerticesNeedsUpdate=void 0,this.worldFaceNormals=void 0,this.worldFaceNormalsNeedsUpdate=void 0,this.uniqueAxes=void 0,this.uniqueEdges=void 0,this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==t.length;s++){const r=t[s],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[r[l]].vsub(e[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error("Vertex "+this.faces[t][i]+" not found!");const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(".faceNormals["+t+"] = Vec3("+e.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(let i=0;i<this.faces[t].length;i++)console.warn(".vertices["+this.faces[t][i]+"] = Vec3("+this.vertices[this.faces[t][i]].toString()+")")}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];fs.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new w,r=new w;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,a,l,c){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const v=h.dot(r);v>u&&(u=v,d=m)}const f=[];for(let m=0;m<n.faces[d].length;m++){const v=n.vertices[n.faces[d][m]],x=new w;x.copy(v),s.vmult(x,x),i.vadd(x,x),f.push(x)}d>=0&&this.clipFaceAgainstHull(r,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,r,a,l){const c=new w,h=new w,d=new w,u=new w,f=new w,m=new w;let v=Number.MAX_VALUE;const x=this;if(x.uniqueAxes)for(let g=0;g!==x.uniqueAxes.length;g++){n.vmult(x.uniqueAxes[g],c);const p=x.testSepAxis(c,t,e,n,i,s);if(p===!1)return!1;p<v&&(v=p,r.copy(c))}else{const g=a?a.length:x.faces.length;for(let p=0;p<g;p++){const b=a?a[p]:p;c.copy(x.faceNormals[b]),n.vmult(c,c);const y=x.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,r.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],h);const p=x.testSepAxis(h,t,e,n,i,s);if(p===!1)return!1;p<v&&(v=p,r.copy(h))}else{const g=l?l.length:t.faces.length;for(let p=0;p<g;p++){const b=l?l[p]:p;h.copy(t.faceNormals[b]),s.vmult(h,h);const y=x.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,r.copy(h))}}for(let g=0;g!==x.uniqueEdges.length;g++){n.vmult(x.uniqueEdges[g],u);for(let p=0;p!==t.uniqueEdges.length;p++)if(s.vmult(t.uniqueEdges[p],f),u.cross(f,m),!m.almostZero()){m.normalize();const b=x.testSepAxis(m,t,e,n,i,s);if(b===!1)return!1;b<v&&(v=b,r.copy(m))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const a=this;fs.project(a,t,n,i,bo),fs.project(e,t,s,r,Mo);const l=bo[0],c=bo[1],h=Mo[0],d=Mo[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,a){const l=new w,c=new w,h=new w,d=new w,u=new w,f=new w,m=new w,v=new w,x=this,g=[],p=i,b=g;let y=-1,M=Number.MAX_VALUE;for(let z=0;z<x.faces.length;z++){l.copy(x.faceNormals[z]),n.vmult(l,l);const A=l.dot(t);A<M&&(M=A,y=z)}if(y<0)return;const T=x.faces[y];T.connectedFaces=[];for(let z=0;z<x.faces.length;z++)for(let A=0;A<x.faces[z].length;A++)T.indexOf(x.faces[z][A])!==-1&&z!==y&&T.connectedFaces.indexOf(z)===-1&&T.connectedFaces.push(z);const _=T.length;for(let z=0;z<_;z++){const A=x.vertices[T[z]],X=x.vertices[T[(z+1)%_]];A.vsub(X,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(A),n.vmult(f,f),e.vadd(f,f);const C=T.connectedFaces[z];m.copy(this.faceNormals[C]);const I=this.getPlaneConstantOfFace(C);v.copy(m),n.vmult(v,v);const N=I-v.dot(e);for(this.clipFaceAgainstPlane(p,b,v,N);p.length;)p.shift();for(;b.length;)p.push(b.shift())}m.copy(this.faceNormals[y]);const D=this.getPlaneConstantOfFace(y);v.copy(m),n.vmult(v,v);const B=D-v.dot(e);for(let z=0;z<p.length;z++){let A=v.dot(p[z])+B;if(A<=s&&(console.log("clamped: depth="+A+" to minDist="+s),A=s),A<=r){const X=p[z];if(A<=1e-6){const C={point:X,normal:v,depth:A};a.push(C)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],r=n.dot(c)+i,s<0)if(r<0){const d=new w;d.copy(c),e.push(d)}else{const d=new w;l.lerp(c,s/(s-r),d),e.push(d)}else if(r<0){const d=new w;l.lerp(c,s/(s-r),d),e.push(d),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,a,l,c,h,d,u=new w;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const m=u;(r===void 0||m.x<r)&&(r=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(r,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t=new w){const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new w;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=e[n[r][0]],c=new w;t.vsub(l,c);const h=a.dot(c),d=new w;s.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const r=t.vertices.length,a=g0;let l=0,c=0;const h=v0,d=t.vertices;h.setZero(),Ut.vectorToLocalFrame(n,i,e,a),Ut.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<r;f++){const m=d[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const bo=[],Mo=[],g0=new w,v0=new w;class zi extends ht{constructor(t){super({type:ht.types.BOX}),this.halfExtents=void 0,this.convexPolyhedronRepresentation=void 0,this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new fs({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e=new w){return zi.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)yn.set(s[r][0],s[r][1],s[r][2]),e.vmult(yn,yn),t.vadd(yn,yn),n(yn.x,yn.y,yn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;He[0].set(s.x,s.y,s.z),He[1].set(-s.x,s.y,s.z),He[2].set(-s.x,-s.y,s.z),He[3].set(-s.x,-s.y,-s.z),He[4].set(s.x,-s.y,-s.z),He[5].set(s.x,s.y,-s.z),He[6].set(-s.x,s.y,-s.z),He[7].set(s.x,-s.y,s.z);const r=He[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=He[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const yn=new w,He=[new w,new w,new w,new w,new w,new w,new w,new w],pa={DYNAMIC:1,STATIC:2,KINEMATIC:4},ma={AWAKE:0,SLEEPY:1,SLEEPING:2};class ct extends _h{constructor(t={}){super(),this.id=void 0,this.index=void 0,this.world=void 0,this.preStep=void 0,this.postStep=void 0,this.vlambda=void 0,this.collisionFilterGroup=void 0,this.collisionFilterMask=void 0,this.collisionResponse=void 0,this.position=void 0,this.previousPosition=void 0,this.interpolatedPosition=void 0,this.initPosition=void 0,this.velocity=void 0,this.initVelocity=void 0,this.force=void 0,this.mass=void 0,this.invMass=void 0,this.material=void 0,this.linearDamping=void 0,this.type=void 0,this.allowSleep=void 0,this.sleepState=void 0,this.sleepSpeedLimit=void 0,this.sleepTimeLimit=void 0,this.timeLastSleepy=void 0,this.wakeUpAfterNarrowphase=void 0,this.torque=void 0,this.quaternion=void 0,this.initQuaternion=void 0,this.previousQuaternion=void 0,this.interpolatedQuaternion=void 0,this.angularVelocity=void 0,this.initAngularVelocity=void 0,this.shapes=void 0,this.shapeOffsets=void 0,this.shapeOrientations=void 0,this.inertia=void 0,this.invInertia=void 0,this.invInertiaWorld=void 0,this.invMassSolve=void 0,this.invInertiaSolve=void 0,this.invInertiaWorldSolve=void 0,this.fixedRotation=void 0,this.angularDamping=void 0,this.linearFactor=void 0,this.angularFactor=void 0,this.aabb=void 0,this.aabbNeedsUpdate=void 0,this.boundingRadius=void 0,this.wlambda=void 0,this.isTrigger=void 0,this.id=ct.idCounter++,this.index=-1,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ct.STATIC:ct.DYNAMIC,typeof t.type==typeof ct.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep!="undefined"?t.allowSleep:!0,this.sleepState=ct.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit!="undefined"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit!="undefined"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new se,this.initQuaternion=new se,this.previousQuaternion=new se,this.interpolatedQuaternion=new se,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Xe,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Xe,this.fixedRotation=typeof t.fixedRotation!="undefined"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping!="undefined"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Le,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=Boolean(t.isTrigger),t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ct.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ct.SLEEPING&&this.dispatchEvent(ct.wakeupEvent)}sleep(){this.sleepState=ct.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ct.AWAKE&&n<i?(this.sleepState=ct.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ct.sleepyEvent)):e===ct.SLEEPY&&n>i?this.wakeUp():e===ct.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ct.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ct.SLEEPING||this.type===ct.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e=new w){return t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e=new w){return this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e=new w){return this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e=new w){return this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new w,s=new se;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const a=e[s].length(),l=r.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=x0,r=y0,a=this.quaternion,l=this.aabb,c=_0;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=w0,i=b0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e=new w){if(this.type!==ct.DYNAMIC)return;this.sleepState===ct.SLEEPING&&this.wakeUp();const n=M0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e=new w){if(this.type!==ct.DYNAMIC)return;const n=S0,i=E0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ct.DYNAMIC&&(this.sleepState===ct.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e=new w){if(this.type!==ct.DYNAMIC)return;this.sleepState===ct.SLEEPING&&this.wakeUp();const n=e,i=T0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=A0;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e=new w){if(this.type!==ct.DYNAMIC)return;const n=C0,i=L0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=R0;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),zi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ct.DYNAMIC||this.type===ct.KINEMATIC)||this.sleepState===ct.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const m=d.elements,v=this.angularFactor,x=l.x*v.x,g=l.y*v.y,p=l.z*v.z;s.x+=t*(m[0]*x+m[1]*g+m[2]*p),s.y+=t*(m[3]*x+m[4]*g+m[5]*p),s.z+=t*(m[6]*x+m[7]*g+m[8]*p),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ct.idCounter=0;ct.COLLIDE_EVENT_NAME="collide";ct.DYNAMIC=pa.DYNAMIC;ct.STATIC=pa.STATIC;ct.KINEMATIC=pa.KINEMATIC;ct.AWAKE=ma.AWAKE;ct.SLEEPY=ma.SLEEPY;ct.SLEEPING=ma.SLEEPING;ct.wakeupEvent={type:"wakeup"};ct.sleepyEvent={type:"sleepy"};ct.sleepEvent={type:"sleep"};const x0=new w,y0=new se,_0=new Le,w0=new Xe,b0=new Xe,M0=new w,S0=new w,E0=new w,T0=new w,A0=new w,C0=new w,L0=new w,R0=new w;class P0{constructor(){this.world=void 0,this.useBoundingBoxes=void 0,this.dirty=void 0,this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&ct.STATIC)!==0||t.sleepState===ct.SLEEPING)&&((e.type&ct.STATIC)!==0||e.sleepState===ct.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=I0;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=D0,i=N0,s=F0,r=t.length;for(let a=0;a!==r;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const l=i[a].id,c=s[a].id,h=l<c?l+","+c:c+","+l;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new w;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const I0=new w,D0={keys:[]},N0=[],F0=[];new w;class wh extends P0{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],a=i[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n=[]){for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Ho{constructor(){this.rayFromWorld=void 0,this.rayToWorld=void 0,this.hitNormalWorld=void 0,this.hitPointWorld=void 0,this.hasHit=void 0,this.shape=void 0,this.body=void 0,this.hitFaceIndex=void 0,this.distance=void 0,this.shouldStop=void 0,this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let bh,Mh,Sh,Eh,Th,Ah,Ch;const ga={CLOSEST:1,ANY:2,ALL:4};bh=ht.types.SPHERE;Mh=ht.types.PLANE;Sh=ht.types.BOX;Eh=ht.types.CYLINDER;Th=ht.types.CONVEXPOLYHEDRON;Ah=ht.types.HEIGHTFIELD;Ch=ht.types.TRIMESH;class ee{get[bh](){return this._intersectSphere}get[Mh](){return this._intersectPlane}get[Sh](){return this._intersectBox}get[Eh](){return this._intersectConvex}get[Th](){return this._intersectConvex}get[Ah](){return this._intersectHeightfield}get[Ch](){return this._intersectTrimesh}constructor(t=new w,e=new w){this.from=void 0,this.to=void 0,this.direction=void 0,this.precision=void 0,this.checkCollisionResponse=void 0,this.skipBackfaces=void 0,this.collisionFilterMask=void 0,this.collisionFilterGroup=void 0,this.mode=void 0,this.result=void 0,this.hasHit=void 0,this.callback=void 0,this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ee.ANY,this.result=new Ho,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ee.ANY,this.result=e.result||new Ho,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask!="undefined"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup!="undefined"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse!="undefined"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(sc),So.length=0,t.broadphase.aabbQuery(t,sc,So),this.intersectBodies(So),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=z0,s=B0;for(let r=0,a=t.shapes.length;r<a;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if($0(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,a=this.to,l=this.direction,c=new w(0,0,1);e.vmult(c,c);const h=new w;r.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new w,v=new w,x=new w;r.vsub(n,m);const g=-c.dot(m)/f;l.scale(g,v),r.vadd(v,x),this.reportIntersection(c,x,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=O0;r.from.copy(this.from),r.to.copy(this.to),Ut.pointToLocalFrame(n,e,r.from,r.from),Ut.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const a=U0;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Le;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(f,m,!1),Ut.pointToWorldFrame(n,e,t.pillarOffset,ar),this._intersectConvex(t.pillarConvex,e,ar,i,s,rc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),Ut.pointToWorldFrame(n,e,t.pillarOffset,ar),this._intersectConvex(t.pillarConvex,e,ar,i,s,rc)}}}_intersectSphere(t,e,n,i,s){const r=this.from,a=this.to,l=t.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,f=k0,m=V0;if(!(u<0))if(u===0)r.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),x=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(r.lerp(a,v,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;x>=0&&x<=1&&(r.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const a=H0,l=oc,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,v=this.to,x=m.distanceTo(v),g=c?c.length:h.length,p=this.result;for(let b=0;!p.shouldStop&&b<g;b++){const y=c?c[b]:b,M=h[y],T=u[y],_=e,D=n;l.copy(d[M[0]]),_.vmult(l,l),l.vadd(D,l),l.vsub(m,l),_.vmult(T,a);const B=f.dot(a);if(Math.abs(B)<this.precision)continue;const z=a.dot(l)/B;if(!(z<0)){f.scale(z,be),be.vadd(m,be),ke.copy(d[M[0]]),_.vmult(ke,ke),D.vadd(ke,ke);for(let A=1;!p.shouldStop&&A<M.length-1;A++){Ge.copy(d[M[A]]),We.copy(d[M[A+1]]),_.vmult(Ge,Ge),_.vmult(We,We),D.vadd(Ge,Ge),D.vadd(We,We);const X=be.distanceTo(m);!(ee.pointInTriangle(be,ke,Ge,We)||ee.pointInTriangle(be,Ge,ke,We))||X>x||this.reportIntersection(a,be,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,r){const a=G0,l=Z0,c=J0,h=oc,d=W0,u=q0,f=j0,m=Y0,v=X0,x=t.indices;t.vertices;const g=this.from,p=this.to,b=this.direction;c.position.copy(n),c.quaternion.copy(e),Ut.vectorToLocalFrame(n,e,b,d),Ut.pointToLocalFrame(n,e,g,u),Ut.pointToLocalFrame(n,e,p,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const y=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let M=0,T=l.length;!this.result.shouldStop&&M!==T;M++){const _=l[M];t.getNormal(_,a),t.getVertex(x[_*3],ke),ke.vsub(u,h);const D=d.dot(a),B=a.dot(h)/D;if(B<0)continue;d.scale(B,be),be.vadd(u,be),t.getVertex(x[_*3+1],Ge),t.getVertex(x[_*3+2],We);const z=be.distanceSquared(u);!(ee.pointInTriangle(be,Ge,ke,We)||ee.pointInTriangle(be,ke,Ge,We))||z>y||(Ut.vectorToWorldFrame(e,a,v),Ut.pointToWorldFrame(n,e,be,m),this.reportIntersection(v,m,s,i,_))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,a=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s!="undefined"?s:-1,this.mode){case ee.ALL:this.hasHit=!0,c.set(r,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ee.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l));break;case ee.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Yn),n.vsub(e,ns),t.vsub(e,Eo);const s=Yn.dot(Yn),r=Yn.dot(ns),a=Yn.dot(Eo),l=ns.dot(ns),c=ns.dot(Eo);let h,d;return(h=l*a-r*c)>=0&&(d=s*c-r*a)>=0&&h+d<s*l-r*r}}ee.CLOSEST=ga.CLOSEST;ee.ANY=ga.ANY;ee.ALL=ga.ALL;const sc=new Le,So=[],ns=new w,Eo=new w,z0=new w,B0=new se,be=new w,ke=new w,Ge=new w,We=new w,rc={faceList:[0]},ar=new w,O0=new ee,U0=[],k0=new w,V0=new w,H0=new w,oc=new w,G0=new w,W0=new w,q0=new w,j0=new w,X0=new w,Y0=new w;new Le;const Z0=[],J0=new Ut,Yn=new w,lr=new w;function $0(o,t,e){e.vsub(o,Yn);const n=Yn.dot(t);return t.scale(n,lr),lr.vadd(o,lr),e.distanceTo(lr)}class K0{static defaults(t={},e){for(let n in e)n in t||(t[n]=e[n]);return t}}class ac{constructor(){this.spatial=void 0,this.rotational=void 0,this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class As{constructor(t,e,n=-1e6,i=1e6){this.id=void 0,this.minForce=void 0,this.maxForce=void 0,this.bi=void 0,this.bj=void 0,this.si=void 0,this.sj=void 0,this.a=void 0,this.b=void 0,this.eps=void 0,this.jacobianElementA=void 0,this.jacobianElementB=void 0,this.enabled=void 0,this.multiplier=void 0,this.id=As.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ac,this.jacobianElementB=new ac,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,lc),a.scale(h,cc),n.invInertiaWorldSolve.vmult(r,hc),i.invInertiaWorldSolve.vmult(l,uc),t.multiplyVectors(lc,hc)+e.multiplyVectors(cc,uc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return a.vmult(t.rotational,cr),c+=cr.dot(t.rotational),l.vmult(e.rotational,cr),c+=cr.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=Q0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}As.idCounter=0;const lc=new w,cc=new w,hc=new w,uc=new w,cr=new w,Q0=new w;class ty extends As{constructor(t,e,n=1e6){super(t,e,0,n),this.restitution=void 0,this.ri=void 0,this.rj=void 0,this.ni=void 0,this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,l=ey,c=ny,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=iy,v=this.jacobianElementA,x=this.jacobianElementB,g=this.ni;r.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),x.spatial.copy(g),x.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(r,m);const p=g.dot(m),b=this.restitution+1,y=b*u.dot(g)-b*h.dot(g)+f.dot(c)-d.dot(l),M=this.computeGiMf();return-p*e-y*n-t*M}getImpactVelocityAlongNormal(){const t=sy,e=ry,n=oy,i=ay,s=ly;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const ey=new w,ny=new w,iy=new w,sy=new w,ry=new w,oy=new w,ay=new w,ly=new w;new w;new w;new w;new w;new w;new w;class dc extends As{constructor(t,e,n){super(t,e,-n,n),this.ri=void 0,this.rj=void 0,this.t=void 0,this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=cy,r=hy,a=this.t;n.cross(a,s),i.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const cy=new w,hy=new w;class Ir{constructor(t,e,n){this.id=void 0,this.materials=void 0,this.friction=void 0,this.restitution=void 0,this.contactEquationStiffness=void 0,this.contactEquationRelaxation=void 0,this.frictionEquationStiffness=void 0,this.frictionEquationRelaxation=void 0,n=K0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ir.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ir.idCounter=0;class Dr{constructor(t={}){this.name=void 0,this.id=void 0,this.friction=void 0,this.restitution=void 0;let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Dr.idCounter++,this.friction=typeof t.friction!="undefined"?t.friction:-1,this.restitution=typeof t.restitution!="undefined"?t.restitution:-1}}Dr.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new ee;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class uy extends ht{constructor(){super({type:ht.types.PLANE}),this.worldNormal=void 0,this.worldNormalNeedsUpdate=void 0,this.boundingSphereRadius=void 0,this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e=new w){return e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){sn.set(0,0,1),e.vmult(sn,sn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),sn.x===1?i.x=t.x:sn.x===-1&&(n.x=t.x),sn.y===1?i.y=t.y:sn.y===-1&&(n.y=t.y),sn.z===1?i.z=t.z:sn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const sn=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Le;new w;new Le;new w;new w;new w;new w;new w;new w;new w;new Le;new w;new Ut;new Le;class dy{constructor(){this.equations=void 0,this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class fy extends dy{constructor(){super(),this.iterations=void 0,this.tolerance=void 0,this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=e.bodies,c=l.length,h=t;let d,u,f,m,v,x;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const g=my,p=gy,b=py;g.length=a,p.length=a,b.length=a;for(let y=0;y!==a;y++){const M=r[y];b[y]=0,p[y]=M.computeB(h),g[y]=1/M.computeC()}if(a!==0){for(let T=0;T!==c;T++){const _=l[T],D=_.vlambda,B=_.wlambda;D.set(0,0,0),B.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let T=0;T!==a;T++){const _=r[T];d=p[T],u=g[T],x=b[T],v=_.computeGWlambda(),f=u*(d-v-_.eps*x),x+f<_.minForce?f=_.minForce-x:x+f>_.maxForce&&(f=_.maxForce-x),b[T]+=f,m+=f>0?f:-f,_.addToWlambda(f)}if(m*m<s)break}for(let T=0;T!==c;T++){const _=l[T],D=_.velocity,B=_.angularVelocity;_.vlambda.vmul(_.linearFactor,_.vlambda),D.vadd(_.vlambda,D),_.wlambda.vmul(_.angularFactor,_.wlambda),B.vadd(_.wlambda,B)}let y=r.length;const M=1/h;for(;y--;)r[y].multiplier=b[y]*M}return n}}const py=[],my=[],gy=[];class vy{constructor(){this.objects=[],this.type=Object}release(...t){const e=t.length;for(let n=0;n!==e;n++)this.objects.push(t[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class xy extends vy{constructor(...t){super(...t),this.type=w}constructObject(){return new w}}let Lh,Rh,Ph,Ih,Dh,Nh,Fh,zh,Bh,Oh,Uh,kh,Vh,Hh,Gh,Wh,qh,jh,Xh,Yh,Zh,Jh,$h,Kh,Qh;const Xt={sphereSphere:ht.types.SPHERE,spherePlane:ht.types.SPHERE|ht.types.PLANE,boxBox:ht.types.BOX|ht.types.BOX,sphereBox:ht.types.SPHERE|ht.types.BOX,planeBox:ht.types.PLANE|ht.types.BOX,convexConvex:ht.types.CONVEXPOLYHEDRON,sphereConvex:ht.types.SPHERE|ht.types.CONVEXPOLYHEDRON,planeConvex:ht.types.PLANE|ht.types.CONVEXPOLYHEDRON,boxConvex:ht.types.BOX|ht.types.CONVEXPOLYHEDRON,sphereHeightfield:ht.types.SPHERE|ht.types.HEIGHTFIELD,boxHeightfield:ht.types.BOX|ht.types.HEIGHTFIELD,convexHeightfield:ht.types.CONVEXPOLYHEDRON|ht.types.HEIGHTFIELD,sphereParticle:ht.types.PARTICLE|ht.types.SPHERE,planeParticle:ht.types.PLANE|ht.types.PARTICLE,boxParticle:ht.types.BOX|ht.types.PARTICLE,convexParticle:ht.types.PARTICLE|ht.types.CONVEXPOLYHEDRON,cylinderCylinder:ht.types.CYLINDER,sphereCylinder:ht.types.SPHERE|ht.types.CYLINDER,planeCylinder:ht.types.PLANE|ht.types.CYLINDER,boxCylinder:ht.types.BOX|ht.types.CYLINDER,convexCylinder:ht.types.CONVEXPOLYHEDRON|ht.types.CYLINDER,heightfieldCylinder:ht.types.HEIGHTFIELD|ht.types.CYLINDER,particleCylinder:ht.types.PARTICLE|ht.types.CYLINDER,sphereTrimesh:ht.types.SPHERE|ht.types.TRIMESH,planeTrimesh:ht.types.PLANE|ht.types.TRIMESH};Lh=Xt.sphereSphere;Rh=Xt.spherePlane;Ph=Xt.boxBox;Ih=Xt.sphereBox;Dh=Xt.planeBox;Nh=Xt.convexConvex;Fh=Xt.sphereConvex;zh=Xt.planeConvex;Bh=Xt.boxConvex;Oh=Xt.sphereHeightfield;Uh=Xt.boxHeightfield;kh=Xt.convexHeightfield;Vh=Xt.sphereParticle;Hh=Xt.planeParticle;Gh=Xt.boxParticle;Wh=Xt.convexParticle;qh=Xt.cylinderCylinder;jh=Xt.sphereCylinder;Xh=Xt.planeCylinder;Yh=Xt.boxCylinder;Zh=Xt.convexCylinder;Jh=Xt.heightfieldCylinder;$h=Xt.particleCylinder;Kh=Xt.sphereTrimesh;Qh=Xt.planeTrimesh;class yy{get[Lh](){return this.sphereSphere}get[Rh](){return this.spherePlane}get[Ph](){return this.boxBox}get[Ih](){return this.sphereBox}get[Dh](){return this.planeBox}get[Nh](){return this.convexConvex}get[Fh](){return this.sphereConvex}get[zh](){return this.planeConvex}get[Bh](){return this.boxConvex}get[Oh](){return this.sphereHeightfield}get[Uh](){return this.boxHeightfield}get[kh](){return this.convexHeightfield}get[Vh](){return this.sphereParticle}get[Hh](){return this.planeParticle}get[Gh](){return this.boxParticle}get[Wh](){return this.convexParticle}get[qh](){return this.convexConvex}get[jh](){return this.sphereConvex}get[Xh](){return this.planeConvex}get[Yh](){return this.boxConvex}get[Zh](){return this.convexConvex}get[Jh](){return this.heightfieldCylinder}get[$h](){return this.particleCylinder}get[Kh](){return this.sphereTrimesh}get[Qh](){return this.planeTrimesh}constructor(t){this.contactPointPool=void 0,this.frictionEquationPool=void 0,this.result=void 0,this.frictionResult=void 0,this.v3pool=void 0,this.world=void 0,this.currentContactMaterial=void 0,this.enableFrictionReduction=void 0,this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new xy,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new ty(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*a.gravity.length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,v=m.length?m.pop():new dc(n,i,u*f),x=m.length?m.pop():new dc(n,i,u*f);return v.bi=x.bi=n,v.bj=x.bj=i,v.minForce=x.minForce=-u*f,v.maxForce=x.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),x.ri.copy(t.ri),x.rj.copy(t.rj),t.ni.tangents(v.t,x.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=x.enabled=t.enabled,e.push(v,x),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];qn.setZero(),Mi.setZero(),Si.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(qn.vadd(e.ni,qn),Mi.vadd(e.ri,Mi),Si.vadd(e.rj,Si)):(qn.vsub(e.ni,qn),Mi.vadd(e.rj,Mi),Si.vadd(e.ri,Si));const r=1/t;Mi.scale(r,n.ri),Si.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),qn.normalize(),qn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const l=by,c=My,h=_y,d=wy;for(let u=0,f=t.length;u!==f;u++){const m=t[u],v=e[u];let x=null;m.material&&v.material&&(x=n.getContactMaterial(m.material,v.material)||null);const g=m.type&ct.KINEMATIC&&v.type&ct.STATIC||m.type&ct.STATIC&&v.type&ct.KINEMATIC||m.type&ct.KINEMATIC&&v.type&ct.KINEMATIC;for(let p=0;p<m.shapes.length;p++){m.quaternion.mult(m.shapeOrientations[p],l),m.quaternion.vmult(m.shapeOffsets[p],h),h.vadd(m.position,h);const b=m.shapes[p];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],c),v.quaternion.vmult(v.shapeOffsets[y],d),d.vadd(v.position,d);const M=v.shapes[y];if(!(b.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&b.collisionFilterGroup)||h.distanceTo(d)>b.boundingSphereRadius+M.boundingSphereRadius)continue;let T=null;b.material&&M.material&&(T=n.getContactMaterial(b.material,M.material)||null),this.currentContactMaterial=T||x||n.defaultContactMaterial;const _=b.type|M.type,D=this[_];if(D){let B=!1;b.type<M.type?B=D.call(this,b,M,h,d,l,c,m,v,b,M,g):B=D.call(this,M,b,d,h,c,l,v,m,b,M,g),B&&g&&(n.shapeOverlapKeeper.set(b.id,M.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(t,e,n,i,s,r,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,r,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,hr),u.ni.scale(u.ni.dot(hr),fc),hr.vsub(fc,u.rj),-hr.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,d)}sphereBox(t,e,n,i,s,r,a,l,c,h,d){const u=this.v3pool,f=Zy;n.vsub(i,ur),e.getSideNormals(f,r);const m=t.radius;let v=!1;const x=$y,g=Ky,p=Qy;let b=null,y=0,M=0,T=0,_=null;for(let P=0,O=f.length;P!==O&&v===!1;P++){const k=jy;k.copy(f[P]);const q=k.length();k.normalize();const V=ur.dot(k);if(V<q+m&&V>0){const G=Xy,Y=Yy;G.copy(f[(P+1)%3]),Y.copy(f[(P+2)%3]);const it=G.length(),ut=Y.length();G.normalize(),Y.normalize();const It=ur.dot(G),K=ur.dot(Y);if(It<it&&It>-it&&K<ut&&K>-ut){const At=Math.abs(V-q-m);if((_===null||At<_)&&(_=At,M=It,T=K,b=q,x.copy(k),g.copy(G),p.copy(Y),y++,d))return!0}}}if(y){v=!0;const P=this.createContactEquation(a,l,t,e,c,h);x.scale(-m,P.ri),P.ni.copy(x),P.ni.negate(P.ni),x.scale(b,x),g.scale(M,g),x.vadd(g,x),p.scale(T,p),x.vadd(p,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),P.rj.vadd(i,P.rj),P.rj.vsub(l.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}let D=u.get();const B=Jy;for(let P=0;P!==2&&!v;P++)for(let O=0;O!==2&&!v;O++)for(let k=0;k!==2&&!v;k++)if(D.set(0,0,0),P?D.vadd(f[0],D):D.vsub(f[0],D),O?D.vadd(f[1],D):D.vsub(f[1],D),k?D.vadd(f[2],D):D.vsub(f[2],D),i.vadd(D,B),B.vsub(n,B),B.lengthSquared()<m*m){if(d)return!0;v=!0;const q=this.createContactEquation(a,l,t,e,c,h);q.ri.copy(B),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(m,q.ri),q.rj.copy(D),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(D),D=null;const z=u.get(),A=u.get(),X=u.get(),C=u.get(),I=u.get(),N=f.length;for(let P=0;P!==N&&!v;P++)for(let O=0;O!==N&&!v;O++)if(P%3!==O%3){f[O].cross(f[P],z),z.normalize(),f[P].vadd(f[O],A),X.copy(n),X.vsub(A,X),X.vsub(i,X);const k=X.dot(z);z.scale(k,C);let q=0;for(;q===P%3||q===O%3;)q++;I.copy(n),I.vsub(C,I),I.vsub(A,I),I.vsub(i,I);const V=Math.abs(k),G=I.length();if(V<f[q].length()&&G<m){if(d)return!0;v=!0;const Y=this.createContactEquation(a,l,t,e,c,h);A.vadd(C,Y.rj),Y.rj.copy(Y.rj),I.negate(Y.ni),Y.ni.normalize(),Y.ri.copy(Y.rj),Y.ri.vadd(i,Y.ri),Y.ri.vsub(n,Y.ri),Y.ri.normalize(),Y.ri.scale(m,Y.ri),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(l.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}u.release(z,A,X,C,I)}planeBox(t,e,n,i,s,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,d)}convexConvex(t,e,n,i,s,r,a,l,c,h,d,u,f){const m=p_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,m,u,f)){const v=[],x=m_;t.clipAgainstHull(n,s,e,i,r,m,-100,100,v);let g=0;for(let p=0;p!==v.length;p++){if(d)return!0;const b=this.createContactEquation(a,l,t,e,c,h),y=b.ri,M=b.rj;m.negate(b.ni),v[p].normal.negate(x),x.scale(v[p].depth,x),v[p].point.vadd(x,y),M.copy(v[p].point),y.vsub(n,y),M.vsub(i,M),y.vadd(n,y),y.vsub(a.position,y),M.vadd(i,M),M.vsub(l.position,M),this.result.push(b),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,r,a,l,c,h,d){const u=this.v3pool;n.vsub(i,t_);const f=e.faceNormals,m=e.faces,v=e.vertices,x=t.radius;let g=!1;for(let p=0;p!==v.length;p++){const b=v[p],y=s_;r.vmult(b,y),i.vadd(y,y);const M=i_;if(y.vsub(n,M),M.lengthSquared()<x*x){if(d)return!0;g=!0;const T=this.createContactEquation(a,l,t,e,c,h);T.ri.copy(M),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(x,T.ri),y.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let p=0,b=m.length;p!==b&&g===!1;p++){const y=f[p],M=m[p],T=r_;r.vmult(y,T);const _=o_;r.vmult(v[M[0]],_),_.vadd(i,_);const D=a_;T.scale(-x,D),n.vadd(D,D);const B=l_;D.vsub(_,B);const z=B.dot(T),A=c_;if(n.vsub(_,A),z<0&&A.dot(T)>0){const X=[];for(let C=0,I=M.length;C!==I;C++){const N=u.get();r.vmult(v[M[C]],N),i.vadd(N,N),X.push(N)}if(qy(X,T,n)){if(d)return!0;g=!0;const C=this.createContactEquation(a,l,t,e,c,h);T.scale(-x,C.ri),T.negate(C.ni);const I=u.get();T.scale(-z,I);const N=u.get();T.scale(-x,N),n.vsub(i,C.rj),C.rj.vadd(N,C.rj),C.rj.vadd(I,C.rj),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),u.release(I),u.release(N),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);for(let P=0,O=X.length;P!==O;P++)u.release(X[P]);return}else for(let C=0;C!==M.length;C++){const I=u.get(),N=u.get();r.vmult(v[M[(C+1)%M.length]],I),r.vmult(v[M[(C+2)%M.length]],N),i.vadd(I,I),i.vadd(N,N);const P=e_;N.vsub(I,P);const O=n_;P.unit(O);const k=u.get(),q=u.get();n.vsub(I,q);const V=q.dot(O);O.scale(V,k),k.vadd(I,k);const G=u.get();if(k.vsub(n,G),V>0&&V*V<P.lengthSquared()&&G.lengthSquared()<x*x){if(d)return!0;const Y=this.createContactEquation(a,l,t,e,c,h);k.vsub(i,Y.rj),k.vsub(n,Y.ni),Y.ni.normalize(),Y.ni.scale(x,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(l.position,Y.rj),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult);for(let it=0,ut=X.length;it!==ut;it++)u.release(X[it]);u.release(I),u.release(N),u.release(k),u.release(G),u.release(q);return}u.release(I),u.release(N),u.release(k),u.release(G),u.release(q)}for(let C=0,I=X.length;C!==I;C++)u.release(X[C])}}}planeConvex(t,e,n,i,s,r,a,l,c,h,d){const u=h_,f=u_;f.set(0,0,1),s.vmult(f,f);let m=0;const v=d_;for(let x=0;x!==e.vertices.length;x++)if(u.copy(e.vertices[x]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;const p=this.createContactEquation(a,l,t,e,c,h),b=f_;f.scale(f.dot(v),b),u.vsub(b,b),b.vsub(n,p.ri),p.ni.copy(f),u.vsub(i,p.rj),p.ri.vadd(n,p.ri),p.ri.vsub(a.position,p.ri),p.rj.vadd(i,p.rj),p.rj.vsub(l.position,p.rj),this.result.push(p),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(p,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,r,a,l,c,h,d){const u=e.data,f=t.radius,m=e.elementSize,v=A_,x=T_;Ut.pointToLocalFrame(i,r,n,x);let g=Math.floor((x.x-f)/m)-1,p=Math.ceil((x.x+f)/m)+1,b=Math.floor((x.y-f)/m)-1,y=Math.ceil((x.y+f)/m)+1;if(p<0||y<0||g>u.length||b>u[0].length)return;g<0&&(g=0),p<0&&(p=0),b<0&&(b=0),y<0&&(y=0),g>=u.length&&(g=u.length-1),p>=u.length&&(p=u.length-1),y>=u[0].length&&(y=u[0].length-1),b>=u[0].length&&(b=u[0].length-1);const M=[];e.getRectMinMax(g,b,p,y,M);const T=M[0],_=M[1];if(x.z-f>_||x.z+f<T)return;const D=this.result;for(let B=g;B<p;B++)for(let z=b;z<y;z++){const A=D.length;let X=!1;if(e.getConvexTrianglePillar(B,z,!1),Ut.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(X=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,l,t,e,d)),d&&X||(e.getConvexTrianglePillar(B,z,!0),Ut.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(X=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,l,t,e,d)),d&&X))return!0;if(D.length-A>2)return}}boxHeightfield(t,e,n,i,s,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,r,a,l,c,h,d){const u=e.data,f=e.elementSize,m=t.boundingSphereRadius,v=S_,x=E_,g=M_;Ut.pointToLocalFrame(i,r,n,g);let p=Math.floor((g.x-m)/f)-1,b=Math.ceil((g.x+m)/f)+1,y=Math.floor((g.y-m)/f)-1,M=Math.ceil((g.y+m)/f)+1;if(b<0||M<0||p>u.length||y>u[0].length)return;p<0&&(p=0),b<0&&(b=0),y<0&&(y=0),M<0&&(M=0),p>=u.length&&(p=u.length-1),b>=u.length&&(b=u.length-1),M>=u[0].length&&(M=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const T=[];e.getRectMinMax(p,y,b,M,T);const _=T[0],D=T[1];if(!(g.z-m>D||g.z+m<_))for(let B=p;B<b;B++)for(let z=y;z<M;z++){let A=!1;if(e.getConvexTrianglePillar(B,z,!1),Ut.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(A=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,l,null,null,d,x,null)),d&&A||(e.getConvexTrianglePillar(B,z,!0),Ut.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(A=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,l,null,null,d,x,null)),d&&A))return!0}}sphereParticle(t,e,n,i,s,r,a,l,c,h,d){const u=y_;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const m=this.createContactEquation(l,a,e,t,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,r,a,l,c,h,d){const u=g_;u.set(0,0,1),a.quaternion.vmult(u,u);const f=v_;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const x=x_;u.scale(u.dot(i),x),i.vsub(x,x),v.rj.copy(x),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,d)}convexParticle(t,e,n,i,s,r,a,l,c,h,d){let u=-1;const f=w_,m=b_;let v=null;const x=__;if(x.copy(i),x.vsub(n,x),s.conjugate(pc),pc.vmult(x,x),t.pointIsInside(x)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,p=t.faces.length;g!==p;g++){const b=[t.worldVertices[t.faces[g][0]]],y=t.worldFaceNormals[g];i.vsub(b[0],mc);const M=-y.dot(mc);if(v===null||Math.abs(M)<Math.abs(v)){if(d)return!0;v=M,u=g,f.copy(y)}}if(u!==-1){const g=this.createContactEquation(l,a,e,t,c,h);f.scale(v,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),f.negate(g.ni),g.ri.set(0,0,0);const p=g.ri,b=g.rj;p.vadd(i,p),p.vsub(l.position,p),b.vadd(n,b),b.vsub(a.position,b),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,r,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,r,a,l,c,h,d){return this.convexParticle(e,t,i,n,r,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,r,a,l,c,h,d){const u=Py,f=Iy,m=Dy,v=Ny,x=Fy,g=zy,p=ky,b=Ry,y=Cy,M=Vy;Ut.pointToLocalFrame(i,r,n,x);const T=t.radius;p.lowerBound.set(x.x-T,x.y-T,x.z-T),p.upperBound.set(x.x+T,x.y+T,x.z+T),e.getTrianglesInAABB(p,M);const _=Ly,D=t.radius*t.radius;for(let C=0;C<M.length;C++)for(let I=0;I<3;I++)if(e.getVertex(e.indices[M[C]*3+I],_),_.vsub(x,y),y.lengthSquared()<=D){if(b.copy(_),Ut.pointToWorldFrame(i,r,b,_),_.vsub(n,y),d)return!0;let N=this.createContactEquation(a,l,t,e,c,h);N.ni.copy(y),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.copy(_),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let C=0;C<M.length;C++)for(let I=0;I<3;I++){e.getVertex(e.indices[M[C]*3+I],u),e.getVertex(e.indices[M[C]*3+(I+1)%3],f),f.vsub(u,m),x.vsub(f,g);const N=g.dot(m);x.vsub(u,g);let P=g.dot(m);if(P>0&&N<0&&(x.vsub(u,g),v.copy(m),v.normalize(),P=g.dot(v),v.scale(P,g),g.vadd(u,g),g.distanceTo(x)<t.radius)){if(d)return!0;const k=this.createContactEquation(a,l,t,e,c,h);g.vsub(x,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),Ut.pointToWorldFrame(i,r,g,g),g.vsub(l.position,k.rj),Ut.vectorToWorldFrame(r,k.ni,k.ni),Ut.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const B=By,z=Oy,A=Uy,X=Ay;for(let C=0,I=M.length;C!==I;C++){e.getTriangleVertices(M[C],B,z,A),e.getNormal(M[C],X),x.vsub(B,g);let N=g.dot(X);if(X.scale(N,g),x.vsub(g,g),N=g.distanceTo(x),ee.pointInTriangle(g,B,z,A)&&N<t.radius){if(d)return!0;let P=this.createContactEquation(a,l,t,e,c,h);g.vsub(x,P.ni),P.ni.normalize(),P.ni.scale(t.radius,P.ri),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),Ut.pointToWorldFrame(i,r,g,g),g.vsub(l.position,P.rj),Ut.vectorToWorldFrame(r,P.ni,P.ni),Ut.vectorToWorldFrame(r,P.ri,P.ri),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,i,s,r,a,l,c,h,d){const u=new w,f=Sy;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const v=new w;v.copy(u),Ut.pointToWorldFrame(i,r,v,u);const x=Ey;if(u.vsub(n,x),f.dot(x)<=0){if(d)return!0;const p=this.createContactEquation(a,l,t,e,c,h);p.ni.copy(f);const b=Ty;f.scale(x.dot(f),b),u.vsub(b,b),p.ri.copy(b),p.ri.vsub(a.position,p.ri),p.rj.copy(u),p.rj.vsub(l.position,p.rj),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}}}const qn=new w,Mi=new w,Si=new w,_y=new w,wy=new w,by=new se,My=new se,Sy=new w,Ey=new w,Ty=new w,Ay=new w,Cy=new w,Ly=new w,Ry=new w,Py=new w,Iy=new w,Dy=new w,Ny=new w,Fy=new w,zy=new w,By=new w,Oy=new w,Uy=new w,ky=new Le,Vy=[],hr=new w,fc=new w,Hy=new w,Gy=new w,Wy=new w;function qy(o,t,e){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=Hy;o[(s+1)%i].vsub(r,a);const l=Gy;a.cross(t,l);const c=Wy;e.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const ur=new w,jy=new w,Xy=new w,Yy=new w,Zy=[new w,new w,new w,new w,new w,new w],Jy=new w,$y=new w,Ky=new w,Qy=new w,t_=new w,e_=new w,n_=new w,i_=new w,s_=new w,r_=new w,o_=new w,a_=new w,l_=new w,c_=new w,h_=new w,u_=new w,d_=new w,f_=new w,p_=new w,m_=new w,g_=new w,v_=new w,x_=new w,y_=new w,pc=new se,__=new w,w_=new w,mc=new w,b_=new w,M_=new w,S_=new w,E_=[0],T_=new w,A_=new w;class gc{constructor(){this.current=void 0,this.previous=void 0,this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||vc(t,h)}a=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||vc(e,h)}}}function vc(o,t){o.push((t&4294901760)>>16,t&65535)}class C_{constructor(){this.data={keys:[]}}get(t,e){if(t>e){const n=e;e=t,t=n}return this.data[t+"-"+e]}set(t,e,n){if(t>e){const s=e;e=t,t=s}const i=t+"-"+e;this.get(t,e)||this.data.keys.push(i),this.data[i]=n}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class L_ extends _h{constructor(t={}){super(),this.dt=void 0,this.allowSleep=void 0,this.contacts=void 0,this.frictionEquations=void 0,this.quatNormalizeSkip=void 0,this.quatNormalizeFast=void 0,this.time=void 0,this.stepnumber=void 0,this.default_dt=void 0,this.nextId=void 0,this.gravity=void 0,this.broadphase=void 0,this.bodies=void 0,this.hasActiveBodies=void 0,this.solver=void 0,this.constraints=void 0,this.narrowphase=void 0,this.collisionMatrix=void 0,this.collisionMatrixPrevious=void 0,this.bodyOverlapKeeper=void 0,this.shapeOverlapKeeper=void 0,this.materials=void 0,this.contactmaterials=void 0,this.contactMaterialTable=void 0,this.defaultMaterial=void 0,this.defaultContactMaterial=void 0,this.doProfiling=void 0,this.profile=void 0,this.accumulator=void 0,this.subsystems=void 0,this.addBodyEvent=void 0,this.removeBodyEvent=void 0,this.idToBodyMap=void 0,this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),this.broadphase=t.broadphase!==void 0?t.broadphase:new wh,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new fy,this.constraints=[],this.narrowphase=new yy(this),this.collisionMatrix=new nc,this.collisionMatrixPrevious=new nc,this.bodyOverlapKeeper=new gc,this.shapeOverlapKeeper=new gc,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new C_,this.defaultMaterial=new Dr("default"),this.defaultContactMaterial=new Ir(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}numObjects(){return this.bodies.length}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ho?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n={},i){return n.mode=ee.ALL,n.from=t,n.to=e,n.callback=i,To.intersectWorld(this,n)}raycastAny(t,e,n={},i){return n.mode=ee.ANY,n.from=t,n.to=e,n.result=i,To.intersectWorld(this,n)}raycastClosest(t,e,n={},i){return n.mode=ee.CLOSEST,n.from=t,n.to=e,n.result=i,To.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ct&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addMaterial(t){this.materials.push(t)}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}step(t,e,n=10){if(e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=le.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(le.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=N_,i=F_,s=this.numObjects(),r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=ct.DYNAMIC;let u=-1/0;const f=this.constraints,m=D_;l.length();const v=l.x,x=l.y,g=l.z;let p=0;for(c&&(u=le.now()),p=0;p!==s;p++){const C=r[p];if(C.type===d){const I=C.force,N=C.mass;I.x+=N*v,I.y+=N*x,I.z+=N*g}}for(let C=0,I=this.subsystems.length;C!==I;C++)this.subsystems[C].update();c&&(u=le.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=le.now()-u);let b=f.length;for(p=0;p!==b;p++){const C=f[p];if(!C.collideConnected)for(let I=n.length-1;I>=0;I-=1)(C.bodyA===n[I]&&C.bodyB===i[I]||C.bodyB===n[I]&&C.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),c&&(u=le.now());const y=I_,M=e.length;for(p=0;p!==M;p++)y.push(e[p]);e.length=0;const T=this.frictionEquations.length;for(p=0;p!==T;p++)m.push(this.frictionEquations[p]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,m),c&&(h.narrowphase=le.now()-u),c&&(u=le.now()),p=0;p<this.frictionEquations.length;p++)a.addEquation(this.frictionEquations[p]);const _=e.length;for(let C=0;C!==_;C++){const I=e[C],N=I.bi,P=I.bj,O=I.si,k=I.sj;let q;if(N.material&&P.material?q=this.getContactMaterial(N.material,P.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,N.material&&P.material&&(N.material.friction>=0&&P.material.friction>=0&&N.material.friction*P.material.friction,N.material.restitution>=0&&P.material.restitution>=0&&(I.restitution=N.material.restitution*P.material.restitution)),a.addEquation(I),N.allowSleep&&N.type===ct.DYNAMIC&&N.sleepState===ct.SLEEPING&&P.sleepState===ct.AWAKE&&P.type!==ct.STATIC){const V=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),G=P.sleepSpeedLimit**2;V>=G*2&&(N.wakeUpAfterNarrowphase=!0)}if(P.allowSleep&&P.type===ct.DYNAMIC&&P.sleepState===ct.SLEEPING&&N.sleepState===ct.AWAKE&&N.type!==ct.STATIC){const V=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),G=N.sleepSpeedLimit**2;V>=G*2&&(P.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,P,!0),this.collisionMatrixPrevious.get(N,P)||(is.body=P,is.contact=I,N.dispatchEvent(is),is.body=N,P.dispatchEvent(is)),this.bodyOverlapKeeper.set(N.id,P.id),this.shapeOverlapKeeper.set(O.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=le.now()-u,u=le.now()),p=0;p!==s;p++){const C=r[p];C.wakeUpAfterNarrowphase&&(C.wakeUp(),C.wakeUpAfterNarrowphase=!1)}for(b=f.length,p=0;p!==b;p++){const C=f[p];C.update();for(let I=0,N=C.equations.length;I!==N;I++){const P=C.equations[I];a.addEquation(P)}}a.solve(t,this),c&&(h.solve=le.now()-u),a.removeAllEquations();const D=Math.pow;for(p=0;p!==s;p++){const C=r[p];if(C.type&d){const I=D(1-C.linearDamping,t),N=C.velocity;N.scale(I,N);const P=C.angularVelocity;if(P){const O=D(1-C.angularDamping,t);P.scale(O,P)}}}for(this.dispatchEvent(P_),p=0;p!==s;p++){const C=r[p];C.preStep&&C.preStep.call(C)}c&&(u=le.now());const z=this.stepnumber%(this.quatNormalizeSkip+1)===0,A=this.quatNormalizeFast;for(p=0;p!==s;p++)r[p].integrate(t,z,A);for(this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=le.now()-u),this.stepnumber+=1,this.dispatchEvent(R_),p=0;p!==s;p++){const C=r[p],I=C.postStep;I&&I.call(C)}let X=!0;if(this.allowSleep)for(X=!1,p=0;p!==s;p++){const C=r[p];C.sleepTick(this.time),C.sleepState!==ct.SLEEPING&&(X=!0)}this.hasActiveBodies=X}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(rn,on),t){for(let s=0,r=rn.length;s<r;s+=2)ss.bodyA=this.getBodyById(rn[s]),ss.bodyB=this.getBodyById(rn[s+1]),this.dispatchEvent(ss);ss.bodyA=ss.bodyB=null}if(e){for(let s=0,r=on.length;s<r;s+=2)rs.bodyA=this.getBodyById(on[s]),rs.bodyB=this.getBodyById(on[s+1]),this.dispatchEvent(rs);rs.bodyA=rs.bodyB=null}rn.length=on.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(rn,on),n){for(let s=0,r=rn.length;s<r;s+=2){const a=this.getShapeById(rn[s]),l=this.getShapeById(rn[s+1]);an.shapeA=a,an.shapeB=l,a&&(an.bodyA=a.body),l&&(an.bodyB=l.body),this.dispatchEvent(an)}an.bodyA=an.bodyB=an.shapeA=an.shapeB=null}if(i){for(let s=0,r=on.length;s<r;s+=2){const a=this.getShapeById(on[s]),l=this.getShapeById(on[s+1]);ln.shapeA=a,ln.shapeB=l,a&&(ln.bodyA=a.body),l&&(ln.bodyB=l.body),this.dispatchEvent(ln)}ln.bodyA=ln.bodyB=ln.shapeA=ln.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Le;const To=new ee,le=globalThis.performance||{};if(!le.now){let o=Date.now();le.timing&&le.timing.navigationStart&&(o=le.timing.navigationStart),le.now=()=>Date.now()-o}const R_={type:"postStep"},P_={type:"preStep"},is={type:ct.COLLIDE_EVENT_NAME,body:null,contact:null},I_=[],D_=[],N_=[],F_=[],rn=[],on=[],ss={type:"beginContact",bodyA:null,bodyB:null},rs={type:"endContact",bodyA:null,bodyB:null},an={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ln={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class z_{constructor(t,e,n){Ls(this,"PI_2",Math.PI/2);Ls(this,"twoPI",Math.PI*2);Ls(this,"downAxis",new L(0,-1,0));this.object=t,this.camera=e,this.domElement=n,this.offset=new L,this.cameraQuat=new ge().setFromUnitVectors(e.up,new L(0,1,0)),this.cameraQuatInv=this.cameraQuat.inverse(),this.spherical=new Kl,this.sphericalDelta=new Kl,this.minDistance=0,this.maxDistance=20,this.distanceStepSize=1,this.currentDistance=6,this.distanceTheshold=5,this.isLocked=!1,this.isGrounded=!1,this.move={left:0,right:0,up:0,down:0,forward:0,backward:0},this.acceleration=12,this.canMove=!0,document.addEventListener("mousedown",async i=>{i.stopPropagation(),this.onMouseDown()}),document.addEventListener("contextmenu",async i=>{i.preventDefault(),this.onMouseDown()}),document.addEventListener("pointerlockchange",async()=>{this.onPointerLockChange()}),document.addEventListener("mousemove",async i=>{this.onMouseMove(i)}),document.addEventListener("keydown",async i=>{this.onKeyDown(i)}),document.addEventListener("keyup",async i=>{this.onKeyUp(i)}),document.addEventListener("wheel",async i=>{this.onWheel(i)}),this.isLocked=!0,this.onMouseMove(new MouseEvent("mousemove",{movementX:0,movementY:0})),this.isLocked=!1}onMouseMove(t){if(this.isLocked===!1)return;const e=t.movementX||0,n=t.movementY||0,i=new L().copy(this.object.position);this.sphericalDelta.theta=this.twoPI*e/this.domElement.clientHeight,this.sphericalDelta.phi=this.twoPI*n/this.domElement.clientHeight,this.offset.copy(this.camera.position).sub(i),this.offset.applyQuaternion(this.cameraQuat),this.spherical.setFromVector3(this.offset),this.spherical.theta-=this.sphericalDelta.theta,this.spherical.phi-=this.sphericalDelta.phi,this.spherical.phi=Math.max(0,Math.min(Math.PI,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius=this.currentDistance,this.offset.setFromSpherical(this.spherical),this.offset.applyQuaternion(this.cameraQuatInv),this.update()}onMouseDown(){this.isLocked||this.domElement.requestPointerLock()}onPointerLockChange(){document.pointerLockElement===this.domElement?this.isLocked=!0:this.isLocked=!1}onKeyDown(t){if(this.canMove)switch(t.key){case"a":this.move.left=1;break;case"d":this.move.right=1;break;case"w":this.move.forward=1;break;case"s":this.move.backward=1;break;case" ":this.isGrounded&&(this.move.up=1);break;case"e":this.spawnCube();break}}onKeyUp(t){switch(t.key){case"a":this.move.left=0;break;case"d":this.move.right=0;break;case"w":this.move.forward=0;break;case"s":this.move.backward=0;break;case" ":this.move.up=0;break}}onWheel(t){const e=t.deltaY>0?this.distanceStepSize:-this.distanceStepSize;this.currentDistance>=this.minDistance-e&&this.currentDistance<=this.maxDistance-e&&(this.currentDistance+=e),this.onMouseMove(new MouseEvent("mousemove",{movementX:0,movementY:0}))}getPlayerDirection(){return new L(-this.move.left+this.move.right,0,-this.move.forward+this.move.backward).normalize()}update(){const t=this.getPlayerDirection().applyQuaternion(this.object.quaternion).multiplyScalar(this.acceleration);this.object.velocity.set(t.x,this.object.velocity.y,t.z),this.move.up&&this.isGrounded?this.object.velocity.y=10:this.isGrounded&&(this.object.velocity.y=0);const e=new L().copy(this.object.position);this.camera.position.copy(e).add(this.offset),this.camera.lookAt(e);try{const s=new o0(e,this.downAxis,0,1.1).intersectObjects([this.camera.parent],!0);if(s.length>0){if(this.canMove)switch(s[0].object.name){case"floor":document.dispatchEvent(new CustomEvent("player",{detail:s[0]})),this.canMove=!1;break;case"randomCube":document.dispatchEvent(new CustomEvent("player",{detail:s[0]}));break;default:break}this.isGrounded=!0}else this.isGrounded=!1}catch{}const n=new Dn().setFromQuaternion(this.camera.quaternion);n.reorder("YXZ"),n.x=0;const i=new ge().setFromEuler(n);this.object.quaternion.set(i.x,i.y,i.z,i.w)}}function B_(o,t,e){const n=new Zn({color:11184810}),i=new ii(2,2,2);for(let s=0;s<100;s++){const r=new he(i,n),a=50,l=Math.random()<.5?-1:1,c=Math.random()<.5?-1:1,h=l*Math.random()*a,d=1,u=c*Math.random()*a;r.position.set(h,d,u),r.name="randomCube",r.castShadow=!0,r.receiveShadow=!0,o.add(r);const f=new zi(new w(1,1,1)),m=new ct({mass:0});m.position.set(h,d,u),m.addShape(f),t.addBody(m),r.userData.physics=m,e.push(r)}}const{document:xc,window:Ao}=mu;function yc(o){let t,e;return{c(){t=_n("h1"),e=wn("Dead."),this.h()},l(n){t=bn(n,"H1",{class:!0});var i=Mn(t);e=Sn(i,"Dead."),i.forEach(Me),this.h()},h(){_c(t,"class","text-red-800")},m(n,i){os(n,t,i),ae(t,e)},d(n){n&&Me(t)}}}function O_(o){let t,e,n,i,s,r,a,l,c,h,d,u,f,m,v,x,g,p,b,y,M,T,_,D=o[3]&&yc();return{c(){t=kn(),e=_n("canvas"),n=kn(),i=_n("div"),s=_n("h1"),r=wn("Highscore: "),a=wn(o[1]),l=kn(),c=_n("h1"),h=wn("Score: "),d=wn(o[0]),u=kn(),f=_n("p"),m=wn("Use the 'wasd' keys to move around"),v=kn(),x=_n("p"),g=wn("Press space to jump"),p=kn(),b=_n("p"),y=wn("Press 'r' to restart"),M=kn(),D&&D.c(),this.h()},l(B){du('[data-svelte="svelte-1uqsw9u"]',xc.head).forEach(Me),t=Vn(B),e=bn(B,"CANVAS",{}),Mn(e).forEach(Me),n=Vn(B),i=bn(B,"DIV",{class:!0});var A=Mn(i);s=bn(A,"H1",{});var X=Mn(s);r=Sn(X,"Highscore: "),a=Sn(X,o[1]),X.forEach(Me),l=Vn(A),c=bn(A,"H1",{});var C=Mn(c);h=Sn(C,"Score: "),d=Sn(C,o[0]),C.forEach(Me),u=Vn(A),f=bn(A,"P",{});var I=Mn(f);m=Sn(I,"Use the 'wasd' keys to move around"),I.forEach(Me),v=Vn(A),x=bn(A,"P",{});var N=Mn(x);g=Sn(N,"Press space to jump"),N.forEach(Me),p=Vn(A),b=bn(A,"P",{});var P=Mn(b);y=Sn(P,"Press 'r' to restart"),P.forEach(Me),M=Vn(A),D&&D.l(A),A.forEach(Me),this.h()},h(){xc.title="The Floor is Lava!",_c(i,"class","absolute top-0")},m(B,z){os(B,t,z),os(B,e,z),o[10](e),os(B,n,z),os(B,i,z),ae(i,s),ae(s,r),ae(s,a),ae(i,l),ae(i,c),ae(c,h),ae(c,d),ae(i,u),ae(i,f),ae(f,m),ae(i,v),ae(i,x),ae(x,g),ae(i,p),ae(i,b),ae(b,y),ae(i,M),D&&D.m(i,null),T||(_=[zr(Ao,"focus",o[8]),zr(Ao,"resize",o[7]),zr(Ao,"keypress",o[9])],T=!0)},p(B,[z]){z&2&&Sa(a,B[1]),z&1&&Sa(d,B[0]),B[3]?D||(D=yc(),D.c(),D.m(i,null)):D&&(D.d(1),D=null)},i:Ea,o:Ea,d(B){B&&Me(t),B&&Me(e),o[10](null),B&&Me(n),B&&Me(i),D&&D.d(),T=!1,fu(_)}}}const jn=100;function U_(o,t,e){let n=0,i=0,s=!1,r=!1,a,l,c,h,d,u=[];const f=new qx(!0),m=new L_;m.gravity.set(0,-24,0),m.broadphase=new wh;const v=new na;v.background=new xt(11184810);const x=new vh;x.position.set(jn,jn,jn),x.castShadow=!0,x.shadow.mapSize=new tt(2048,2048),x.shadow.camera.left=-jn,x.shadow.camera.right=jn,x.shadow.camera.top=jn,x.shadow.camera.bottom=-jn,v.add(x);const g=new fh(11184810,11184810,.7);v.add(g);const p=new Tr(100,100,1,1);p.rotateX(-Math.PI/2);let b=new Zn({color:16711680});const y=new he(p,b);y.name="floor",y.receiveShadow=!0,v.add(y);const M=new uy,T=new ct({mass:0});T.addShape(M),T.quaternion.setFromAxisAngle(new w(1,0,0),-Math.PI/2),m.addBody(T);const _=new ii(2,2,2);b=new Zn({color:65280});const D=new he(_,b);D.castShadow=!0,D.receiveShadow=!0,D.name="player",v.add(D);const B=new zi(new w(1,1,1));h=new ct({mass:10}),h.position.set(0,10,0),h.addShape(B),m.addBody(h);function z(){if(requestAnimationFrame(z),s){const k=f.getDelta();m.step(k),d.canMove?(D.position.x=h.position.x,D.position.y=h.position.y,D.position.z=h.position.z):D.position.y>-2&&(D.position.y-=.01),D.quaternion.x=h.quaternion.x,D.quaternion.y=h.quaternion.y,D.quaternion.z=h.quaternion.z,D.quaternion.w=h.quaternion.w,u.forEach(q=>{const V=q.userData.physics.position;q.position.x=V.x,q.position.y=V.y,q.position.z=V.z;const G=q.userData.physics.quaternion;q.quaternion.x=G.x,q.quaternion.y=G.y,q.quaternion.z=G.z,q.quaternion.w=G.w,q.material.color.r<.5&&(V.y<-2?v.remove(q):V.y-=.01)}),d.update(),l.render(v,c)}}function A(){e(2,s=!0),e(3,r=!1),d.canMove=!0,e(0,n=0),u.forEach(k=>{m.removeBody(k.userData.physics),v.remove(k)}),h.position.set(0,10,0),B_(v,m,u),X()}function X(){b=new Zn({color:11184810});const k=new he(_,b);k.position.y+=1,k.castShadow=!0,k.receiveShadow=!0,k.name="randomCube",v.add(k);const q=new zi(new w(1,1,1)),V=new ct({mass:0});V.position.set(0,1,0),V.addShape(q),m.addBody(V),k.userData.physics=V,u.push(k)}function C(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function I(k){const q=k.detail.object,V=q.material.color;q.name==="floor"?(e(3,r=!0),n>=i&&(localStorage.setItem("highscore",n),e(1,i=n))):q.name==="randomCube"&&V.r>.5&&(e(0,n+=1),q.material=new Zn({color:3355443}))}pu(()=>(localStorage.getItem("highscore")==null?localStorage.setItem("highscore",0):e(1,i=localStorage.getItem("highscore")),l=new Ht({canvas:a,logarithmicDepthBuffer:!0}),l.shadowMap.enabled=!0,l.setSize(window.innerWidth,window.innerHeight),c=new ye(90,window.innerWidth/window.innerHeight,.01,1e3),c.position.set(10,10,10),v.add(c),d=new z_(h,c,l.domElement),document.addEventListener("player",I),A(),z(),()=>{document.removeEventListener("player",I),c=null,l.forceContextLoss(),l.dispose(),cancelAnimationFrame(z)}));const N=()=>{document.visibilityState==="hidden"?(e(2,s=!1),f.stop()):(f.start(),e(2,s=!0))},P=k=>{k.key=="r"&&A()};function O(k){gu[k?"unshift":"push"](()=>{a=k,e(4,a)})}return[n,i,s,r,a,f,A,C,N,P,O]}class q_ extends cu{constructor(t){super(),hu(this,t,U_,O_,uu,{})}}export{q_ as default};
