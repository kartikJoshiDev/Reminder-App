(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{reMG:function(e,t,i){"use strict";i.r(t),i.d(t,"NotesModule",(function(){return F}));var o=i("ofXK"),n=i("tyNb"),r=i("3Pt+"),s=i("fXoL"),c=i("2Vo4");let a=(()=>{class e{constructor(e,t){this.document=e,this.platformId=t,this.documentIsAccessible=Object(o.m)(this.platformId)}check(e){return!!this.documentIsAccessible&&(e=encodeURIComponent(e),this.getCookieRegExp(e).test(this.document.cookie))}get(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);const t=this.getCookieRegExp(e).exec(this.document.cookie);return this.safeDecodeURIComponent(t[1])}return""}getAll(){if(!this.documentIsAccessible)return{};const e={},t=this.document;return t.cookie&&""!==t.cookie&&t.cookie.split(";").forEach(t=>{const[i,o]=t.split("=");e[this.safeDecodeURIComponent(i.replace(/^ /,""))]=this.safeDecodeURIComponent(o)}),e}set(e,t,i,o,n,r,s){if(!this.documentIsAccessible)return;if("number"==typeof i||i instanceof Date||o||n||r||s)return void this.set(e,t,{expires:i,path:o,domain:n,secure:r,sameSite:s||"Lax"});let c=encodeURIComponent(e)+"="+encodeURIComponent(t)+";";const a=i||{};a.expires&&(c+="number"==typeof a.expires?"expires="+new Date((new Date).getTime()+1e3*a.expires*60*60*24).toUTCString()+";":"expires="+a.expires.toUTCString()+";"),a.path&&(c+="path="+a.path+";"),a.domain&&(c+="domain="+a.domain+";"),!1===a.secure&&"None"===a.sameSite&&(a.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),a.secure&&(c+="secure;"),a.sameSite||(a.sameSite="Lax"),c+="sameSite="+a.sameSite+";",this.document.cookie=c}delete(e,t,i,o,n="Lax"){if(!this.documentIsAccessible)return;const r=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:r,path:t,domain:i,secure:o,sameSite:n})}deleteAll(e,t,i,o="Lax"){if(!this.documentIsAccessible)return;const n=this.getAll();for(const r in n)n.hasOwnProperty(r)&&this.delete(r,e,t,i,o)}getCookieRegExp(e){const t=e.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+t+"|;\\s*"+t+")=(.*?)(?:;|$)","g")}safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch(t){return e}}}return e.\u0275fac=function(t){return new(t||e)(s.Qb(o.c),s.Qb(s.B))},e.\u0275prov=Object(s.Fb)({factory:function(){return new e(Object(s.Qb)(o.c),Object(s.Qb)(s.B))},token:e,providedIn:"root"}),e})(),b=(()=>{class e{constructor(e){this.cookieService=e,this.storageKeys={SESSION:"medlSession",PERMISSION:"permissions"}}setLocalStorageData(e,t){const i=new Date;if(i.setTime(i.getTime()+1e11),this.cookieService.set(e,t,i,"/","kartikJoshiDev.github.io/ReminderApp/",!0,"Strict"),"null"===t&&this.cookieService.delete(e),"medlSession"===e&&"null"===t)for(const o in this.storageKeys)this.cookieService.getAll()&&this.cookieService.getAll()[this.storageKeys[o]]&&this.cookieService.deleteAll("/","/")}getLocalStorageData(e){return this.cookieService.getAll()&&this.cookieService.getAll()[e]?this.cookieService.get(e):"null"}getAllStorageData(){return this.cookieService.getAll()}}return e.\u0275fac=function(t){return new(t||e)(s.Qb(a))},e.\u0275prov=s.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),l=(()=>{class e{constructor(e){this._sharedService=e,this.note=new c.a([]);var t=this._sharedService.getLocalStorageData("Reminder");console.log(" Data from Storage : ",t),"null"!==t&&this.note.next(JSON.parse(t))}addNote(e){console.log("value : ",e),this.note.next([...this.note.value,e]),console.log("Data Store : ",this.note.value),this._sharedService.setLocalStorageData("Reminder",JSON.stringify(this.note.value))}getNote(){return this.note.asObservable()}removeNote(e){var t=[...this.note.value];t.splice(t.indexOf(e),1),this.note.next(t),this._sharedService.setLocalStorageData("Reminder",JSON.stringify(this.note.value))}filterNote(e){return this.note.value.filter(t=>t.subject==e)}getNoteIndex(e){console.log("Note collection : ",this.note.value,"/n","Note :",e);var t=[...this.note.value],i=0;for(let o of t){if(o.subject==e.subject)return i;if(i++,t.length==i)return-1}}updateNote(e,t){var i=[...this.note.value];i[t]=e,this.note.next(i),this._sharedService.setLocalStorageData("Reminder",JSON.stringify(this.note.value))}}return e.\u0275fac=function(t){return new(t||e)(s.Qb(b))},e.\u0275prov=s.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function u(e,t){1&e&&(s.Mb(0,"div",11),s.fc(1," Subject is been required*. "),s.Lb())}function d(e,t){1&e&&(s.Mb(0,"div",11),s.fc(1," limit is only of 10 character max. "),s.Lb())}function m(e,t){if(1&e&&(s.Mb(0,"div"),s.dc(1,u,2,0,"div",10),s.dc(2,d,2,0,"div",10),s.Lb()),2&e){const e=s.Wb();s.zb(1),s.Xb("ngIf",e.subject.hasError("required")),s.zb(1),s.Xb("ngIf",e.subject.hasError("maxlength"))}}function h(e,t){1&e&&(s.Mb(0,"div",11),s.fc(1," Description is been required*. "),s.Lb())}function f(e,t){1&e&&(s.Mb(0,"div",11),s.fc(1," limit is only of 100 character max. "),s.Lb())}function p(e,t){if(1&e&&(s.Mb(0,"div"),s.dc(1,h,2,0,"div",10),s.dc(2,f,2,0,"div",10),s.Lb()),2&e){const e=s.Wb();s.zb(1),s.Xb("ngIf",e.description.hasError("required")),s.zb(1),s.Xb("ngIf",e.description.hasError("maxlength"))}}let g=(()=>{class e{constructor(e,t,i,o){this.fb=e,this.route=t,this.commonService=i,this._location=o}ngOnInit(){this.route.queryParams.subscribe(e=>{this.note=e}),this.formValidation(),this.provideNote(),this.showValue()}formValidation(){this.noteForm=this.fb.group({subject:["",[r.j.required,r.j.maxLength(30)]],description:["",[r.j.required,r.j.maxLength(200)]]})}get subject(){return this.noteForm.get("subject")}get description(){return this.noteForm.get("description")}provideNote(){this.index=this.commonService.getNoteIndex(this.note),console.log("Index : ",this.index)}showValue(){this.noteForm.patchValue({subject:this.note.subject,description:this.note.description})}formSubmit(){this.isSubmitted=!0,this.noteForm.valid&&(this.commonService.updateNote(this.noteForm.value,this.index),this._location.back(),this.isSubmitted=!1)}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(r.b),s.Jb(n.a),s.Jb(l),s.Jb(o.f))},e.\u0275cmp=s.Db({type:e,selectors:[["app-edit-note"]],decls:16,vars:3,consts:[[1,"row"],[1,"col-sm-12"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","formControlName","subject","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter Subject Here",1,"form-control"],[4,"ngIf"],["for","exampleInputPassword1"],["type","text","formControlName","description","id","exampleInputPassword1","placeholder","Enter Your Note Here",1,"form-control"],["type","submit",1,"btn","btn-primary"],["class","invalid invalid-feedback",4,"ngIf"],[1,"invalid","invalid-feedback"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"form",2),s.Ub("ngSubmit",(function(){return t.formSubmit()})),s.Mb(3,"div",3),s.Mb(4,"label",4),s.fc(5,"Subject"),s.Lb(),s.Kb(6,"input",5),s.dc(7,m,3,2,"div",6),s.Lb(),s.Mb(8,"div",3),s.Mb(9,"label",7),s.fc(10,"Description"),s.Lb(),s.Kb(11,"textarea",8),s.dc(12,p,3,2,"div",6),s.Lb(),s.Mb(13,"button",9),s.fc(14,"Submit"),s.Lb(),s.Lb(),s.Kb(15,"hr"),s.Lb(),s.Lb()),2&e&&(s.zb(2),s.Xb("formGroup",t.noteForm),s.zb(5),s.Xb("ngIf",t.subject.invalid&&(t.subject.touched||t.isSubmitted)),s.zb(5),s.Xb("ngIf",t.description.invalid&&(t.description.touched||t.isSubmitted)))},directives:[r.k,r.g,r.d,r.a,r.f,r.c,o.i],styles:[".invalid[_ngcontent-%COMP%]{display:inline}"]}),e})();function v(e,t){1&e&&(s.Mb(0,"div",11),s.fc(1," Subject is been required*. "),s.Lb())}function S(e,t){1&e&&(s.Mb(0,"div",11),s.fc(1," limit is only of 10 character max. "),s.Lb())}function L(e,t){if(1&e&&(s.Mb(0,"div"),s.dc(1,v,2,0,"div",10),s.dc(2,S,2,0,"div",10),s.Lb()),2&e){const e=s.Wb();s.zb(1),s.Xb("ngIf",e.subject.hasError("required")),s.zb(1),s.Xb("ngIf",e.subject.hasError("maxlength"))}}function x(e,t){1&e&&(s.Mb(0,"div",11),s.fc(1," Description is been required*. "),s.Lb())}function I(e,t){1&e&&(s.Mb(0,"div",11),s.fc(1," limit is only of 100 character max. "),s.Lb())}function N(e,t){if(1&e&&(s.Mb(0,"div"),s.dc(1,x,2,0,"div",10),s.dc(2,I,2,0,"div",10),s.Lb()),2&e){const e=s.Wb();s.zb(1),s.Xb("ngIf",e.description.hasError("required")),s.zb(1),s.Xb("ngIf",e.description.hasError("maxlength"))}}let M=(()=>{class e{constructor(e,t){this.fb=e,this.commonService=t}ngOnInit(){this.formValidation()}get subject(){return this.noteForm.get("subject")}get description(){return this.noteForm.get("description")}formValidation(){this.noteForm=this.fb.group({subject:["",[r.j.required,r.j.maxLength(30)]],description:["",[r.j.required,r.j.maxLength(200)]]})}formSubmit(){this.isSubmitted=!0,this.noteForm.valid&&(console.log("noteForm Value :",this.noteForm.value),this.commonService.addNote(this.noteForm.value),this.isSubmitted=!1,this.noteForm.reset())}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(r.b),s.Jb(l))},e.\u0275cmp=s.Db({type:e,selectors:[["app-add-note"]],decls:16,vars:3,consts:[[1,"row"],[1,"col-sm-12"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","formControlName","subject","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter Subject Here",1,"form-control"],[4,"ngIf"],["for","exampleInputPassword1"],["type","text","formControlName","description","id","exampleInputPassword1","placeholder","Enter Your Note Here",1,"form-control"],["type","submit",1,"btn","btn-primary"],["class","invalid invalid-feedback",4,"ngIf"],[1,"invalid","invalid-feedback"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"form",2),s.Ub("ngSubmit",(function(){return t.formSubmit()})),s.Mb(3,"div",3),s.Mb(4,"label",4),s.fc(5,"Subject"),s.Lb(),s.Kb(6,"input",5),s.dc(7,L,3,2,"div",6),s.Lb(),s.Mb(8,"div",3),s.Mb(9,"label",7),s.fc(10,"Description"),s.Lb(),s.Kb(11,"textarea",8),s.dc(12,N,3,2,"div",6),s.Lb(),s.Mb(13,"button",9),s.fc(14,"Submit"),s.Lb(),s.Lb(),s.Kb(15,"hr"),s.Lb(),s.Lb()),2&e&&(s.zb(2),s.Xb("formGroup",t.noteForm),s.zb(5),s.Xb("ngIf",t.subject.invalid&&(t.subject.touched||t.isSubmitted)),s.zb(5),s.Xb("ngIf",t.description.invalid&&(t.description.touched||t.isSubmitted)))},directives:[r.k,r.g,r.d,r.a,r.f,r.c,o.i],styles:[".invalid[_ngcontent-%COMP%]{display:inline}"]}),e})(),y=(()=>{class e{constructor(){this.filterValue=new s.n}ngOnInit(){}searchContent(){console.log("Value : ",this.searchNote),this.filterValue.emit(this.searchNote)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-filter-box"]],inputs:{searchNote:["searchSubject","searchNote"]},outputs:{filterValue:"filterValue"},decls:3,vars:1,consts:[[1,"row"],[1,"col","col-sm-12","mb-1"],["type","text","name","search","placeholder","Search Through Subject",1,"form-control",3,"ngModel","ngModelChange","keyup"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"input",2),s.Ub("ngModelChange",(function(e){return t.searchNote=e}))("keyup",(function(){return t.searchContent()})),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.zb(2),s.Xb("ngModel",t.searchNote))},directives:[r.a,r.f,r.h],styles:[""]}),e})();function j(e,t){if(1&e){const e=s.Nb();s.Mb(0,"div",4),s.Mb(1,"div",5),s.Ub("click",(function(){s.ac(e);const i=t.$implicit;return s.Wb(2).editNote(i)})),s.Mb(2,"h3"),s.fc(3),s.Lb(),s.Mb(4,"p"),s.fc(5),s.Lb(),s.Lb(),s.Mb(6,"div",6),s.Mb(7,"button",7),s.Ub("click",(function(){s.ac(e);const i=t.$implicit;return s.Wb(2).removeNote(i)})),s.fc(8,"X"),s.Lb(),s.Lb(),s.Lb()}if(2&e){const e=t.$implicit;s.zb(3),s.gc(null==e?null:e.subject),s.zb(2),s.gc(null==e?null:e.description)}}function k(e,t){if(1&e){const e=s.Nb();s.Mb(0,"div"),s.Mb(1,"app-filter-box",2),s.Ub("filterValue",(function(t){return s.ac(e),s.Wb().filterNote(t)})),s.Lb(),s.dc(2,j,9,2,"div",3),s.Lb()}if(2&e){const e=s.Wb();s.zb(1),s.Xb("searchSubject",e.searchNote),s.zb(1),s.Xb("ngForOf",e.noteList)}}function w(e,t){1&e&&(s.Mb(0,"div",4),s.Mb(1,"div",8),s.Mb(2,"h6"),s.fc(3,"No Reminders Found"),s.Lb(),s.Lb(),s.Lb())}const D=[{path:"",component:(()=>{class e{constructor(e,t){this.commonService=e,this.route=t}ngOnInit(){this.noteList=[],this.searchNote="",this.getNoteList()}getNoteList(){this.commonService.getNote().subscribe(e=>{console.log("Data Here : ",e),this.noteList=e})}removeNote(e){this.commonService.removeNote(e)}filterNote(e){console.log("Here It Is"),""!=e.trim()?(this.noteList=this.commonService.filterNote(e),console.log("NoteList New :",this.commonService.filterNote(e))):this.getNoteList()}editNote(e){console.log("note : ",e),this.route.navigate(["/note/editNote"],{queryParams:e})}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(l),s.Jb(n.b))},e.\u0275cmp=s.Db({type:e,selectors:[["app-notes-list"]],decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["noDataFound",""],[3,"searchSubject","filterValue"],["class","row bg-light",4,"ngFor","ngForOf"],[1,"row","bg-light"],[1,"col-10","mt-2",3,"click"],[1,"col-2","mt-2"],[1,"text-danger",2,"background-color","#ffffff","border","0px",3,"click"],[1,"col-12","text-center"]],template:function(e,t){if(1&e&&(s.Kb(0,"app-add-note"),s.dc(1,k,3,2,"div",0),s.dc(2,w,4,0,"ng-template",null,1,s.ec)),2&e){const e=s.Zb(3);s.zb(1),s.Xb("ngIf",t.noteList.length>0)("ngIfElse",e)}},directives:[M,o.i,y,o.h],styles:[""]}),e})()},{path:"editNote",component:g}];let C=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[n.c.forChild(D)],n.c]}),e})();var E=i("PCNd");let F=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[o.b,E.a,C]]}),e})()}}]);