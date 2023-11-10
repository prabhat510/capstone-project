"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 3244:
/*!*************************************************!*\
  !*** ./src/app/add-book/add-book..component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookComponent": () => (/* binding */ AddBookComponent)
/* harmony export */ });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../urls */ 5984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/books.service */ 639);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







const _c0 = ["titleInput"];
const _c1 = ["authorInput"];
const _c2 = ["publisherInput"];
const _c3 = ["dateInput"];
const _c4 = ["genreInput"];
const _c5 = ["descriptionInput"];
const _c6 = ["imageInput"];
function AddBookComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBookComponent_div_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
} }
function AddBookComponent_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBookComponent_div_1_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid author name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBookComponent_div_1_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid publisher name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBookComponent_div_1_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " choose a valid date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBookComponent_div_1_small_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid genre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBookComponent_div_1_small_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBookComponent_div_1_small_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid image link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBookComponent_div_1_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBookComponent_div_1_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c7 = function (a0, a1) { return { "no-padding": a0, "bg-color": a1 }; };
function AddBookComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add New Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AddBookComponent_div_1_p_4_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddBookComponent_div_1_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.submitBook(_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10)(8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Book Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddBookComponent_div_1_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.book_form.title = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddBookComponent_div_1_small_12_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Author:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddBookComponent_div_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.book_form.author = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AddBookComponent_div_1_small_18_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10)(20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Publisher:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddBookComponent_div_1_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.book_form.publisher = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AddBookComponent_div_1_small_24_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10)(26, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Date published:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddBookComponent_div_1_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.book_form.date_published = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddBookComponent_div_1_small_30_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10)(32, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Genre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "select", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddBookComponent_div_1_Template_select_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.book_form.genre = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "select genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "fiction");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "autobiography");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "science");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "mathematics");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "medicine");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " technology & engineering ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "finance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "art");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "self-help book");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "thriller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, AddBookComponent_div_1_small_64_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 10)(66, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "textarea", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddBookComponent_div_1_Template_textarea_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.book_form.description = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, AddBookComponent_div_1_small_70_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 10)(72, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Image link:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddBookComponent_div_1_Template_input_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.book_form.image = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, AddBookComponent_div_1_small_76_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, AddBookComponent_div_1_span_78_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, AddBookComponent_div_1_div_79_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](69);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](75);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.touched && _r4.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.touched && _r6.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.publisher);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.touched && _r8.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.date_published);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.touched && _r10.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.touched && _r12.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.touched && _r14.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r16.touched && _r16.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](18, _c7, ctx_r1.showLoader, ctx_r1.showLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.showLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showLoader);
} }
class AddBookComponent {
    constructor(bookservice, router, activatedroute) {
        this.bookservice = bookservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.showLoader = false;
        this.errorMessage = '';
        this.loading = true;
        this.bookId_param = '';
        // book attributes---two way data binding
        this.book_form = {
            title: '',
            author: '',
            publisher: '',
            genre: '',
            description: '',
            image: '',
            date_published: '',
        };
    }
    ngOnInit() {
        this.activatedroute.queryParamMap.subscribe((params) => (this.bookId_param = params.get('id')));
        console.log('book id param', this.bookId_param);
        if (this.bookId_param) {
            this.bookservice
                .getBook(`${(0,_urls__WEBPACK_IMPORTED_MODULE_0__.getServiceUrl)().bookServiceAPI}/books/${this.bookId_param}`)
                .subscribe((data) => {
                this.populateDom(data);
                this.loading = false;
            });
            // once we got the book that we need to edit, we will populate the dom with the previous data
        }
        else {
            this.loading = false;
        }
    }
    ngAfterViewInit() {
        this.titleInput.nativeElement.focus();
    }
    checkInvalidForm() {
        console.log('checkInvalidForm called ');
        if (!this.book_form.title) {
            this.titleInput.nativeElement.focus();
        }
        else if (!this.book_form.author) {
            this.authorInput.nativeElement.focus();
        }
        else if (!this.book_form.publisher) {
            this.publisherInput.nativeElement.focus();
        }
        else if (!this.book_form.genre) {
            this.genreInput.nativeElement.focus();
        }
        else if (!this.book_form.image) {
            this.imageInput.nativeElement.focus();
        }
    }
    populateDom(data) {
        this.book_form.title = data.title;
        this.book_form.author = data.author;
        this.book_form.publisher = data.publisher;
        this.book_form.genre = data.genre;
        this.book_form.description = data.description;
        this.book_form.date_published = data.date_published;
        this.book_form.image = data.image;
    }
    submitBook(bok_form) {
        this.showLoader = true;
        if (bok_form.valid) {
            this.bookservice
                .addBook(`${(0,_urls__WEBPACK_IMPORTED_MODULE_0__.getServiceUrl)().bookServiceAPI}/books/add/book`, this.book_form)
                .subscribe((data) => console.log(data));
            // redirecting to home page
            setTimeout(() => {
                this.router.navigate(['']).catch((error => {
                    console.log('error navigating from addBook component', error);
                }));
            }, 1000);
        }
        else {
            this.errorMessage = 'Please fill all the fields';
            this.checkInvalidForm();
            this.showLoader = false;
        }
    }
    updateBook() {
        this.bookservice
            .updateBook(`${(0,_urls__WEBPACK_IMPORTED_MODULE_0__.getServiceUrl)().bookServiceAPI}/books/edit/${this.bookId_param}`, this.book_form)
            .subscribe((data) => console.log(data));
        this.router.navigate(['/book', this.bookId_param]);
    }
}
AddBookComponent.ɵfac = function AddBookComponent_Factory(t) { return new (t || AddBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_books_service__WEBPACK_IMPORTED_MODULE_1__.BooksService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
AddBookComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddBookComponent, selectors: [["app-add-book"]], viewQuery: function AddBookComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.titleInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.authorInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.publisherInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dateInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.genreInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.descriptionInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imageInput = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "loader", 4, "ngIf"], ["class", "book-form", 4, "ngIf"], [1, "loader"], ["src", "assets/loading-state.gif", "alt", "loading spinner"], [1, "book-form"], [2, "text-align", "center"], [1, "error-message"], ["class", "error", 4, "ngIf"], [3, "ngSubmit"], ["bok_form", "ngForm"], [1, "input-row"], [1, "label"], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "title..", "name", "title", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["titleInput", ""], ["class", "error-message", 4, "ngIf"], ["for", "exampleFormControlInput1", 1, "label"], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "author..", "name", "author", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["authorInput", ""], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "publisher..", "name", "publisher", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["publisherInput", ""], ["type", "date", "id", "exampleFormControlInput1", "placeholder", "published on..", "name", "date", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["dateInput", ""], ["aria-label", ".form-select-sm example", "name", "genre", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["genreInput", ""], ["selected", ""], ["value", "fiction"], ["value", "autobiography"], ["value", "science"], ["value", "history"], ["value", "mathematics"], ["value", "law"], ["value", "medicine"], ["value", "technology & engineering"], ["value", "finance"], ["value", "art"], ["value", "travel"], ["value", "self-help book"], ["value", "thriller"], ["cols", "20", "rows", "7", "type", "text", "id", "exampleFormControlInput1", "placeholder", "enter description", "name", "description", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["descriptionInput", ""], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "image link..", "name", "image url", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["imageInput", ""], ["type", "submit", 1, "button", 3, "ngClass"], [4, "ngIf"], ["class", "mobile-loader", 4, "ngIf"], [1, "error"], [1, "mobile-loader"]], template: function AddBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddBookComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddBookComponent_div_1_Template, 80, 21, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: [".book-form[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 50px auto;\n  background-color: #ffffff;\n  padding: 30px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, .4);\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: red;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 7px;\n}\n\n.input-row[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 7px;\n  color: black;\n  letter-spacing: 1px;\n  transition: background-color 0.2s;\n  cursor: pointer;\n  border: 1px solid black;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #067306;\n  color: #fff;\n}\n\n@media (max-width: 576px) {\n  button[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .book-form[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin-top: calc(50vh - 171px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoiYWRkLWJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLWZvcm0ge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA1cHggcmdiYSgwLCAwLCAwLCAuNCk7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweDtcbn1cblxuLmlucHV0LXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjczMDY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuYm9vay1mb3JtIHtcbiAgICB3aWR0aDogMzIwcHg7XG4gIH1cbn1cblxuLmxvYWRlciB7XG4gIG1hcmdpbi10b3A6IGNhbGMoNTB2aCAtIDE3MXB4KTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7760:
/*!**************************************************!*\
  !*** ./src/app/alert-box/alert-box.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertBoxComponent": () => (/* binding */ AlertBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);



class AlertBoxComponent {
    constructor(authService, renderer, elementRef) {
        this.authService = authService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.message = 'are you sure you want to logout?';
    }
    confirmLogOut(logoutUser) {
        const body = this.elementRef.nativeElement.ownerDocument.body;
        if (logoutUser) {
            this.authService.emitLogout();
        }
        else {
            this.authService.emitCancelLogout();
        }
        this.renderer.setStyle(body, 'overflow', 'visible');
    }
}
AlertBoxComponent.ɵfac = function AlertBoxComponent_Factory(t) { return new (t || AlertBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
AlertBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertBoxComponent, selectors: [["app-alert-box"]], inputs: { message: "message" }, decls: 16, vars: 1, consts: [[1, "alert-parent"], [1, "alert-box"], [1, "box-header"], [1, "cross-icon", 3, "click"], ["src", "assets/question.png", "alt", "", 1, "question-img"], [1, "box-content"], [1, "alert-msg"], [1, "btn-container"], [3, "click"]], template: function AlertBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "alert-box works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertBoxComponent_Template_span_click_5_listener() { return ctx.confirmLogOut(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u2715");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertBoxComponent_Template_button_click_12_listener() { return ctx.confirmLogOut(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertBoxComponent_Template_button_click_14_listener() { return ctx.confirmLogOut(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".alert-box[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 250px;\n    background-color: #fff;\n    border-radius: 5px;\n    z-index: 2000;\n    box-shadow:0px 0px 65px 0px rgba(0, 0, 0, 0.43);\n}\n.alert-parent[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 4000;\n}\n.box-header[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    justify-content: center;\n    display: flex;\n    position: relative;\n    background: #d4f2ff;\n    height: 130px;\n    align-items: center;\n}\n.alert-msg[_ngcontent-%COMP%] {\npadding: 0px 20px;\n}\nbutton[_ngcontent-%COMP%] {\n    color: #fff;\n    height: 30px;\n    width: 100px;\n    border: none;\n    border-radius: 10px;\n}\nbutton[_ngcontent-%COMP%]:nth-child(1) {\n    background-color: rgb(19, 157, 212);\n}\nbutton[_ngcontent-%COMP%]:nth-child(2) {\n    background-color: rgb(255, 42, 0)\n}\n.question-img[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100px;\n}\n.cross-icon[_ngcontent-%COMP%] {\n    font-size: 22px;\n    position: absolute;\n    left: 90%;\n    top: 5px;\n    cursor: pointer;\n}\n.btn-container[_ngcontent-%COMP%] {\n    padding: 20px;\n    display: flex;\n    gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0FBQ2IiLCJmaWxlIjoiYWxlcnQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMjAwMDtcbiAgICBib3gtc2hhZG93OjBweCAwcHggNjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQzKTtcbn1cbi5hbGVydC1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHotaW5kZXg6IDQwMDA7XG59XG4uYm94LWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZDRmMmZmO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFsZXJ0LW1zZyB7XG5wYWRkaW5nOiAwcHggMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYnV0dG9uOm50aC1jaGlsZCgxKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxNTcsIDIxMik7XG59XG5idXR0b246bnRoLWNoaWxkKDIpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0MiwgMClcbn1cbi5xdWVzdGlvbi1pbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY3Jvc3MtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA5MCU7XG4gICAgdG9wOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG59Il19 */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-book/add-book..component */ 3244);
/* harmony import */ var _book_detail_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-detail/book.component */ 5270);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-login/login.component */ 5116);
/* harmony import */ var _user_registration_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-registration/register.component */ 968);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-book/update-book.component */ 2858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
    },
    {
        path: 'book/:id', component: _book_detail_book_component__WEBPACK_IMPORTED_MODULE_1__.BookComponent,
    },
    {
        path: 'add-book', component: _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_0__.AddBookComponent,
        // when we try to navigate to this route, AuthGuard is executed, if it returns true navigation is allowed otherwise it 
        // redirects us to login page
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
    },
    {
        path: 'update-book', component: _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_6__.UpdateBookComponent,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
    },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: 'register', component: _user_registration_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token-storage-service.service */ 8773);
/* harmony import */ var _navbar_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/nav.component */ 7364);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-box/alert-box.component */ 7760);












function AppComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header")(1, "app-nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("logOutInitialted", function AppComponent_header_0_Template_app_nav_logOutInitialted_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.showAlertBox = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_app_alert_box_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-alert-box");
} }
class AppComponent {
    constructor(router, authService, tokenService, platformId) {
        this.router = router;
        this.authService = authService;
        this.tokenService = tokenService;
        this.platformId = platformId;
        this.showAlertBox = false;
        this.displayHeader = false;
        this.isBrowser = false;
        this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(platformId);
    }
    ngOnInit() {
        if (this.isBrowser) {
            this.authService.authStatusSubject$.subscribe(res => {
                if (res.type === 'auth' && (res.value === 'cancel' || res.value === 'logout')) {
                    this.showAlertBox = false;
                }
            });
            // this code fetches the current active route dynamically
            this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd))
                .subscribe(route => {
                const routeEvent = route;
                if (routeEvent.url.includes('login') || routeEvent.url.includes('register')) {
                    this.displayHeader = false;
                }
                else {
                    this.displayHeader = true;
                    this.tokenService.setToken('route', routeEvent.url);
                }
            });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[4, "ngIf"], [1, "site-content"], [3, "logOutInitialted"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_header_0_Template, 2, 0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_app_alert_box_5_Template, 1, 0, "app-alert-box", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.displayHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAlertBox);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _navbar_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_4__.AlertBoxComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.site-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 60px; \n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLnNpdGUtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctdG9wOiA2MHB4OyBcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/books.service */ 639);
/* harmony import */ var _book_detail_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-detail/book.component */ 5270);
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-book/add-book..component */ 3244);
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-login/login.component */ 5116);
/* harmony import */ var _user_registration_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-registration/register.component */ 968);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/token-interceptor.service */ 3742);
/* harmony import */ var _navbar_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/nav.component */ 7364);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-book/update-book.component */ 2858);
/* harmony import */ var _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./alert-box/alert-box.component */ 7760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);




















// the HTTP_INTERCEPTORS module is used to send the token to the backend and verify the token using the TokenInterceptorService 
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_services_books_service__WEBPACK_IMPORTED_MODULE_4__.BooksService, _auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS,
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__.TokenInterceptor,
            multi: true
        }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _book_detail_book_component__WEBPACK_IMPORTED_MODULE_5__.BookComponent,
        _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_6__.AddBookComponent,
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent,
        _user_registration_register_component__WEBPACK_IMPORTED_MODULE_8__.RegisterComponent,
        _navbar_nav_component__WEBPACK_IMPORTED_MODULE_11__.NavComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__.FooterComponent,
        _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_13__.UpdateBookComponent,
        _alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_14__.AlertBoxComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule] }); })();


/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token-storage-service.service */ 8773);





class AuthGuard {
    constructor(authservice, router, tokenService) {
        this.authservice = authservice;
        this.router = router;
        this.tokenService = tokenService;
    }
    // the route guard returns true or false, if the user is logged in it will return true otherwise will navigate it to login page
    canActivate() {
        if (this.authservice.isLoggedIn) {
            return true;
        }
        else {
            const payload = { token: this.tokenService.getToken('refresh_token') };
            this.authservice.getNewAccessToken(payload)
                .subscribe({
                next: res => {
                    this.authservice.setUserData(res);
                    this.router.navigate(['']);
                },
                error: error => {
                    console.log('error fetching new token', error);
                    this.authservice.clearUserData();
                    this.router.navigate(['/login']);
                }
            });
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageServiceService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5270:
/*!***********************************************!*\
  !*** ./src/app/book-detail/book.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookComponent": () => (/* binding */ BookComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../urls */ 5984);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/books.service */ 639);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);








function BookComponent_div_0_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 14)(2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookComponent_div_0_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.changeBook()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookComponent_div_0_div_32_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.removeBook()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function BookComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6)(5, "div", 7)(6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 9)(10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "author:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 9)(15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "genre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 9)(21, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "published by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 9)(27, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "published on:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, BookComponent_div_0_div_32_Template, 10, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13)(34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "About the Book:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.book.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 8, ctx_r0.book.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.book.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 10, ctx_r0.book.genre));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 12, ctx_r0.book.publisher));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 14, ctx_r0.book.date_published));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.book.description);
} }
function BookComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class BookComponent {
    constructor(activatedroute, bookservice, router, authservice, platformId) {
        this.activatedroute = activatedroute;
        this.bookservice = bookservice;
        this.router = router;
        this.authservice = authservice;
        this.platformId = platformId;
        this.loading = true;
        this.isAdmin = false;
        this.bookId = '';
        this.isBrowser = false;
        this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(platformId);
    }
    ngOnInit() {
        if (this.isBrowser) {
            const isLoggedIn = this.authservice.isLoggedIn;
            this.bookId = this.activatedroute.snapshot.paramMap.get('id');
            this.isAdmin = isLoggedIn && JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')).isAdmin : false;
            this.bookservice.getBook(`${(0,_urls__WEBPACK_IMPORTED_MODULE_0__.getServiceUrl)().bookServiceAPI}/books/${this.bookId}`).subscribe(data => {
                this.book = data;
                this.loading = false;
                this.bookservice.scrollToTop();
            });
        }
    }
    removeBook() {
        this.bookservice.deleteBook(`${(0,_urls__WEBPACK_IMPORTED_MODULE_0__.getServiceUrl)().bookServiceAPI}/books/remove/${this.bookId}`).subscribe();
        setTimeout(() => {
            this.router.navigate(['']).then(() => window.location.reload());
        }, 1000);
    }
    changeBook() {
        this.router.navigate(['/update-book'], { queryParams: { id: this.bookId } });
    }
}
BookComponent.ɵfac = function BookComponent_Factory(t) { return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_books_service__WEBPACK_IMPORTED_MODULE_1__.BooksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID)); };
BookComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BookComponent, selectors: [["app-book"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["class", "loader", 4, "ngIf"], [1, "container"], [1, "book-container"], [1, "book-image"], ["alt", "book image", 3, "src"], [1, "book-data"], [1, "book-metadata"], [1, "book-title"], [1, "data-row"], [1, "placeholder"], [1, "value"], [4, "ngIf"], [1, "about-section"], [1, "action-buttons"], ["type", "button", 1, "button", "edit-button", 3, "click"], ["src", "assets/icons8-edit-64.png", "alt", "edit book icon"], ["type", "button", 1, "button", "remove-button", 3, "click"], ["src", "assets/icons8-trash-64.png", "alt", "delete book icon"], [1, "loader"], ["src", "assets/loading-state.gif", "alt", "loading spinner"]], template: function BookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BookComponent_div_0_Template, 38, 16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: [".book-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  gap: 50px;\n}\n.book-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.book-image[_ngcontent-%COMP%] {\n  box-shadow: 5px 5px 12px lightgray;\n  margin-bottom: 15px;\n  margin-left: 10%;\n  height: 250px;\n  width: 250px;\n}\n.book-data[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.book-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.data-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.placeholder[_ngcontent-%COMP%] {\n  color: #333;\n  width: 120px;\n}\nh5[_ngcontent-%COMP%], p[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n}\n.value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 576px) {\n  .book-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    margin-left: 0;\n  }\n  .book-image[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .book-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    align-self: flex-start;\n  }\n  .book-metadata[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 85vw;\n  }\n  .book-metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .data-row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n \n}\n@media (min-width: 577px) and (max-width: 767px) {\n  .book-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    margin-left: 0;\n  }\n  .book-image[_ngcontent-%COMP%] {\n    height: 250px;\n  margin-left: 0%;\n\n  }\n  .book-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n \n  .book-metadata[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .book-metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .data-row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.about-section[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 20px;\n  text-align: center;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 90px;\n  transition: background-color 0.2s;\n  letter-spacing: 1px;\n  cursor: pointer;\n  border: none;\n}\n.edit-button[_ngcontent-%COMP%] {\n  background-color: #333;\n  margin-right: 10px;\n}\n.remove-button[_ngcontent-%COMP%] {\n  background-color: #d43131;\n}\n.remove-button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #ff0000;\n  border: none;\n}\n.loader[_ngcontent-%COMP%] {\n  margin-top: calc(50vh - 171px);\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n@media (max-width: 576px) {\n  button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n  }  \n  .book-image[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBOzs7RUFHRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxPQUFPO0FBQ1Q7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7SUFDZixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztFQUNiOztBQUVGO0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmLGVBQWU7O0VBRWY7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6ImJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGdhcDogNTBweDtcbn1cbi5ib29rLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYm9vay1pbWFnZSB7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTJweCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5ib29rLWRhdGEge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJvb2stdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kYXRhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzMzMztcbiAgd2lkdGg6IDEyMHB4O1xufVxuaDUsXG5wLFxuc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi52YWx1ZSB7XG4gIGZsZXg6IDE7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYm9vay1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuYm9vay1pbWFnZSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAuYm9vay10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLmJvb2stbWV0YWRhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4NXZ3O1xuICB9XG4gIC5ib29rLW1ldGFkYXRhIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuZGF0YS1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzdweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ib29rLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5ib29rLWltYWdlIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogMCU7XG5cbiAgfVxuICAuYm9vay10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gXG4gIC5ib29rLW1ldGFkYXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuYm9vay1tZXRhZGF0YSBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmRhdGEtcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYWJvdXQtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDkwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZWRpdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucmVtb3ZlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDMxMzE7XG59XG4ucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5sb2FkZXIge1xuICBtYXJnaW4tdG9wOiBjYWxjKDUwdmggLSAxNzFweCk7XG59XG5idXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuYnV0dG9uIHNwYW4gaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIGJ1dHRvbiBzcGFuIGltZyB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICB9ICBcbiAgLmJvb2staW1hZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () { return ["/"]; };
class FooterComponent {
    ngOnInit() {
        this.year = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 34, vars: 3, consts: [[1, "footer-area"], [1, "footer"], [1, "brand-name"], [3, "routerLink"], [1, "contact-info"], [1, "contacts"], ["href", "https://www.linkedin.com/in/prabhatbhargav/", "target", "_blank", "rel", "noopener", 1, "contact-link"], ["src", "/assets/linkedin.png", "alt", "", "srcset", ""], [1, "contact-link-text"], ["href", "https://github.com/prabhat510", "target", "_blank", "rel", "noopener", 1, "contact-link"], ["src", "/assets/github.png", "alt", "", "srcset", ""], ["href", "mailto:prabhatbhargava510@gmail.com", 1, "contact-link"], ["src", "/assets/gmail.png", "alt", "", "srcset", ""], [1, "footer-form"], ["for", ""], ["type", "text", "placeholder", "Email"], ["name", "", "id", "", "cols", "10", "rows", "3", "placeholder", "Your Query"], [1, "copyright"], [2, "color", "purple"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BookStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "gmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13)(23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Get In Touch:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15)(26, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17)(30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Prabhat Bhargav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9", ctx.year, " All Rights Reserved | Made By ");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".footer-area[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0px 0px 2px black;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 15px;\n  color: black;\n  display: flex;\n  justify-content: space-around;\n}\n\n.contact-info[_ngcontent-%COMP%], .footer-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer-form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .contact-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .brand-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  margin-bottom: 20px;\n}\n\n.brand-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: inherit;\n  text-decoration: none;\n  margin-bottom: 13px;\n}\n\n.contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n}\n\n.footer-form[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.footer-form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child):not(:first-child) {\n  margin-bottom: 10px;\n  padding: 6px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 1px solid #ffffff;\n  background-color: black;\n  height: 35px;\n  padding: 6px;\n  transition: .2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #333;\n}\n\n@media (max-width: 1023px) {\n  .footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .contacts[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    border-bottom: 1px solid #ffffff;\n  }\n  .contact-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .footer-form[_ngcontent-%COMP%] {\n    width: 400px !important;\n    margin-top: 10px;\n  }\n}\n\n@media (max-width: 568px) {\n  .footer-form[_ngcontent-%COMP%] {\n    width: 300px !important;\n    margin-top: 10px;\n  }\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  padding: 10px 0;\n  color: black;\n  border-top: 1px solid #ccc;\n}\n\n.contact-link-text[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translate(5%, 50%);\n  font-weight:500 !important;\n}\n\n.contact-link-text[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  top: 110%;\n  height: 2px;\n  width: 0%;\n  background: #333;\n  transition: 0.2s ease-out; \n}\n\n.contact-link-text[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gsU0FBUztFQUNULGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCBibGFjaztcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5jb250YWN0LWluZm8sXG4uZm9vdGVyLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9vdGVyLWZvcm0gc3Bhbixcbi5jb250YWN0LWluZm8gc3Bhbixcbi5icmFuZC1uYW1lIHNwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5icmFuZC1uYW1lIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250YWN0LWluZm8gYSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG5cbi5jb250YWN0LWluZm8gYSBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZm9vdGVyLWZvcm0ge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5mb290ZXItZm9ybT4qOm5vdCg6bGFzdC1jaGlsZCk6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuZm9vdGVyIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgfVxuICAuY29udGFjdC1pbmZvIHNwYW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZm9vdGVyLWZvcm0ge1xuICAgIHdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5mb290ZXItZm9ybSB7XG4gICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cbi5jb250YWN0LWxpbmstdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDUwJSk7XG4gIGZvbnQtd2VpZ2h0OjUwMCAhaW1wb3J0YW50O1xufVxuLmNvbnRhY3QtbGluay10ZXh0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDExMCU7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMCU7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7IFxufVxuXG4uY29udGFjdC1saW5rLXRleHQ6aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../urls */ 5984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/books.service */ 639);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);







const _c0 = function (a1) { return ["/book", a1]; };
const _c1 = function () { return { "color": "rgb(51,51,51)" }; };
function HomeComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11)(4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const book_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, book_r5._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", book_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, book_r5.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 7, book_r5.author), " ");
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HomeComponent_div_2_div_1_Template, 10, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r0.books, ctx_r0.filterTerm));
} }
function HomeComponent_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_3_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.loadBooks()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.goToTop()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Back To Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HomeComponent_div_3_button_3_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loadMoreOptionAvailable);
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(booksservice) {
        this.booksservice = booksservice;
        this.books = [];
        this.filterTerm = '';
        this.loading = true;
        this.offset = 0;
        this.limit = 12;
        this.loadingMoreBooks = false;
        this.pendingBooksCount = 0;
        this.loadMoreOptionAvailable = true;
    }
    ngOnInit() {
        this.loadBooks();
    }
    onSelect(event) {
        console.log(event.target.value);
        this.booksservice.getAllBooks(`${(0,_urls__WEBPACK_IMPORTED_MODULE_0__.getServiceUrl)().bookServiceAPI}/home/${event.target.value}`).subscribe(data => this.books = data);
    }
    loadBooks() {
        if (!this.loading) {
            this.loadingMoreBooks = true;
        }
        this.booksservice.getAllBooks(`${(0,_urls__WEBPACK_IMPORTED_MODULE_0__.getServiceUrl)().bookServiceAPI}/books?offset=${this.offset}&limit=${this.limit}`).subscribe((data) => {
            this.books = this.books.concat(data.books);
            this.offset += this.limit;
            if (this.loading) {
                this.pendingBooksCount = data.totalCount;
                this.loading = false;
            }
            else {
                this.loadingMoreBooks = false;
            }
            this.pendingBooksCount -= this.books.length;
            if (this.pendingBooksCount <= 0)
                this.loadMoreOptionAvailable = false;
            console.log('total count and pending count', data.totalCount, this.pendingBooksCount);
        });
    }
    goToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_books_service__WEBPACK_IMPORTED_MODULE_1__.BooksService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 5, consts: [[1, "search"], ["type", "search", "placeholder", "Search for books, authors and genre", "aria-label", "Search", 1, "search-input", 3, "ngModel", "ngModelChange"], ["class", "book-container", 4, "ngIf"], ["class", "btn-container", 4, "ngIf"], ["class", "loader2", 4, "ngIf"], ["class", "loader", 4, "ngIf"], [1, "book-container"], ["class", "book", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "book", 3, "routerLink"], [1, "sub-container"], ["alt", "book image", "loading", "lazy", 1, "cover-image", 3, "src"], [1, "book-info"], [1, "book-title"], [3, "ngStyle"], [1, "btn-container"], ["type", "button", 1, "button", "topBtn", 3, "click"], ["type", "button", "class", "button loadmoreBtn", 3, "click", 4, "ngIf"], ["type", "button", 1, "button", "loadmoreBtn", 3, "click"], [1, "loader2"], ["src", "assets/loading-state.gif", "alt", "loading spinner"], [1, "loader"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_1_listener($event) { return ctx.filterTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 2, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadingMoreBooks);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadingMoreBooks);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipe], styles: [".search[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px;\n  height: 40px;\n  width: 300px;\n}\n\n.book-container[_ngcontent-%COMP%] {\n  margin: 50px;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-auto-rows: minmax(320px, auto);\n  gap: 20px;\n}\n\n.book-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: space-around;\n}\n\n.book-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.book-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.book[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 10px;\n  box-shadow: 5px 5px 12px lightgray;\n  padding: 5px 8px 0px 8px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n\n.book-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n.book[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  z-index: 999;\n}\n\n.cover-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sub-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n\n\n@media (min-width: 768px) and (max-width: 1023px) {\n  .book-container[_ngcontent-%COMP%] {\n    margin: 30px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-rows: minmax(280px, auto);\n    gap: 15px;\n  }\n}\n\n@media (min-width: 577px) and (max-width: 768px) {\n  .book-container[_ngcontent-%COMP%] {\n    margin: 30px;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: minmax(280px, auto);\n    gap: 15px;\n  }\n\n  .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n\n@media (max-width: 576px) {\n  .book-container[_ngcontent-%COMP%] {\n    margin: 20px;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: minmax(150px, auto);\n    gap: 10px;\n  }\n\n  nav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-left: 5vw;\n  }\n\n  .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 4px;\n    width: 200px;\n    height: 35px;\n  }\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin-top: calc(50vh - 220px);\n}\n\n.topBtn[_ngcontent-%COMP%]:hover {\n  background: #333;\n  color: #fff;\n}\n\n.loadmoreBtn[_ngcontent-%COMP%] {\n  background: #333;\n  color: #fff;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n  gap: 15px;\n}\n\n.btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n\n  outline: 2px solid #000000;\n  padding: 10px;\n}\n\n.search-input[_ngcontent-%COMP%]::placeholder {\n  letter-spacing: 0.3px;\n}\n\n@media (max-width: 768px) {\n  .search-input[_ngcontent-%COMP%]::placeholder {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQ0FBbUM7RUFDbkMsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQSxxQ0FBcUM7O0FBRXJDO0VBQ0U7SUFDRSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLG1DQUFtQztJQUNuQyxTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7O0VBRVosMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNlYXJjaCBpbnB1dCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5ib29rLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgzMjBweCwgYXV0byk7XG4gIGdhcDogMjBweDtcbn1cblxuLmJvb2staW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5ib29rLWluZm8gc3Ryb25nIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYm9vay1pbmZvIHAge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5ib29rIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTJweCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweCA4cHggMHB4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYm9vay10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmJvb2s6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5jb3Zlci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3ViLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4vKiA1NzZweCwgNzY4cHgsIDk5MnB4LCBhbmQgMTIwMHB4LiAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLmJvb2stY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDI4MHB4LCBhdXRvKTtcbiAgICBnYXA6IDE1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3N3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJvb2stY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDI4MHB4LCBhdXRvKTtcbiAgICBnYXA6IDE1cHg7XG4gIH1cblxuICAuc2VhcmNoIGlucHV0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5ib29rLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxNTBweCwgYXV0byk7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgbmF2IGlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogNXZ3O1xuICB9XG5cbiAgLnNlYXJjaCBpbnB1dCB7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuLmxvYWRlciB7XG4gIG1hcmdpbi10b3A6IGNhbGMoNTB2aCAtIDIyMHB4KTtcbn1cblxuLnRvcEJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9hZG1vcmVCdG4ge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uYnRuLWNvbnRhaW5lciBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG5cbiAgb3V0bGluZTogMnB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 7364:
/*!*****************************************!*\
  !*** ./src/app/navbar/nav.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token-storage-service.service */ 8773);







const _c0 = function () { return ["/add-book"]; };
function NavComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_li_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.toggleMenu()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add book");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function NavComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_li_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.logoutUser()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
const _c1 = function () { return ["/register"]; };
function NavComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.toggleMenu()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/login"]; };
function NavComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 18)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_li_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.toggleMenu()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/"]; };
const _c4 = function (a0) { return { "cross": a0 }; };
const _c5 = function (a0) { return { "active": a0 }; };
const _c6 = function (a0) { return { "show": a0 }; };
class NavComponent {
    constructor(authservice, router, tokenService, elementRef, renderer, platformId) {
        this.authservice = authservice;
        this.router = router;
        this.tokenService = tokenService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.platformId = platformId;
        this.logOutInitialted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.showMenu = false;
        this.isAdmin = false;
        this.isLoggedIn = false;
        this.isBrowser = false;
        this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(platformId);
    }
    ngOnInit() {
        if (this.isBrowser) {
            this.isLoggedIn = this.authservice.isLoggedIn;
            this.userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : '';
            this.authservice.authStatusSubject$.subscribe((res) => {
                if (res.type === 'auth' && res.value === 'logout') {
                    this.signOut();
                }
                else if (res.type === 'userData') {
                    this.isLoggedIn = this.authservice.isLoggedIn;
                    this.userData = res.value;
                    this.isAdmin = this.userData.isAdmin;
                    console.log('user details emitted', res);
                }
            });
        }
    }
    signOut() {
        this.isLoggedIn = false;
        const data = {
            token: this.tokenService.getToken('refresh_token')
        };
        this.authservice.logoutUser(data)
            .subscribe({
            next: (res) => console.log('user logged out successfully', res),
            error: (error) => console.log('error logging out', error)
        });
        setTimeout(() => {
            this.router.navigate(['/login']);
        }, 1000);
    }
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
    logoutUser() {
        const body = this.elementRef.nativeElement.ownerDocument.body;
        this.renderer.setStyle(body, 'overflow', 'hidden');
        this.logOutInitialted.emit();
        this.toggleMenu();
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], outputs: { logOutInitialted: "logOutInitialted" }, decls: 13, vars: 15, consts: [[1, "navbar"], [1, "brand-title", 3, "routerLink"], ["href", "javascript:void(0);", 1, "toggle-button", 3, "ngClass", "click"], [1, "bar", "bar-1"], [1, "bar", "bar-2"], [1, "bar", "bar-3"], [1, "navbar-links", 3, "ngClass"], [3, "ngClass"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item welcome-user", 4, "ngIf"], ["class", "nav-item nav-link", 4, "ngIf"], ["class", "nav-item welcome-user nav-link", 4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink", "click"], [1, "nav-item", "welcome-user"], ["href", "javascript:void(0);", 3, "click"], [1, "nav-item", "nav-link"], [3, "routerLink", "click"], [1, "nav-item", "welcome-user", "nav-link"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "BookStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_a_click_3_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 3)(5, "span", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavComponent_li_9_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NavComponent_li_10_Template, 3, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NavComponent_li_11_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NavComponent_li_12_Template, 3, 2, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c4, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c5, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c6, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && (ctx.userData == null ? null : ctx.userData.isAdmin));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 2000;\n}\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #fff;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0px 0px 2px black;\n}\n.navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n.navbar-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  transition: all 0.2s ease-in-out;\n}\n.navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n  padding: 1rem;\n  display: block;\n  transition: all 0.2s ease-in-out;\n}\n.navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.navbar-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #555;\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 1rem;\n  display: none;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30px;\n  height: 21px;\n}\n.toggle-button[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 100%;\n  background-color: black;\n  border-radius: 10px;\n}\n@media (max-width: 1023px) {\n  .toggle-button[_ngcontent-%COMP%] {\n    display: flex;\n    top: 0.5rem;\n  }\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .navbar-links[_ngcontent-%COMP%] {\n    height: -moz-fit-content;\n    height: fit-content;\n    width: 100%;\n  }\n  .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    width: 100%;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: none;\n  }\n  .navbar-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .navbar-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .navbar-links.active[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .toggle-button[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    border-radius: 8px;\n  }\n  .bar[_ngcontent-%COMP%] {\n    position: absolute;\n    transition: 0.2s ease-in-out;\n  }\n  .bar-1[_ngcontent-%COMP%] {\n    top: 0px;\n    transform: rotate(0deg);\n  }\n  .bar-2[_ngcontent-%COMP%] {\n    top: 9px;\n    transform: rotate(0deg);\n  }\n  .bar-3[_ngcontent-%COMP%] {\n    top: 18px;\n    transform: rotate(0deg);\n  }\n  .cross[_ngcontent-%COMP%]   .bar-2[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .cross[_ngcontent-%COMP%]   .bar-1[_ngcontent-%COMP%] {\n    top: 9px;\n    transform: rotate(-45deg);\n  }\n  .cross[_ngcontent-%COMP%]   .bar-3[_ngcontent-%COMP%] {\n    top: 9px;\n    transform: rotate(45deg);\n  }\n\n\n\n  \n  \n  .navbar-links.active[_ngcontent-%COMP%]   ul.show[_ngcontent-%COMP%] {\n    display: block;\n  }\n  \n  .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n  }\n  \n  .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-decoration: none;\n    color: #333;\n    transition: background-color 0.3s ease;\n    display: none;\n  }\n  \n  .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #f2f2f2;\n  }\n  \n  .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.welcome-user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #ff0000;\n  }\n  \n  .navbar-links.active[_ngcontent-%COMP%]   ul.show[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    opacity: 0;\n    animation: fadeIn 0.5s ease forwards;\n  }\n  \n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n      transform: translateY(-10px);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFFBQVE7SUFDUix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFFBQVE7SUFDUix3QkFBd0I7RUFDMUI7Ozs7OztFQU1BO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsYUFBYTtFQUNmOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0JBQXdCO0lBQzFCO0VBQ0Y7O0FBRUYiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDIwMDA7XG59XG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCBibGFjaztcbn1cbi5uYXZiYXItbGlua3MgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnJhbmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXItbGlua3MgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubmF2YmFyLWxpbmtzIHVsIGxpIGEge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uYXZiYXItbGlua3MgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLWxpbmtzIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cbi50b2dnbGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNzVyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIxcHg7XG59XG4udG9nZ2xlLWJ1dHRvbiAuYmFyIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuQG1lZGlhICh3aWR0aDw9MTAyM3B4KSB7XG4gIC50b2dnbGUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRvcDogMC41cmVtO1xuICB9XG4gIC5uYXZiYXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLm5hdmJhci1saW5rcyB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubmF2YmFyLWxpbmtzIHVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm5hdmJhci1saW5rcyBsaSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5uYXZiYXItbGlua3MgbGkgYSB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIH1cbiAgLm5hdmJhci1saW5rcy5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJyYW5kLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAudG9nZ2xlLWJ1dHRvbiAuYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgLmJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmJhci0xIHtcbiAgICB0b3A6IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAuYmFyLTIge1xuICAgIHRvcDogOXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIC5iYXItMyB7XG4gICAgdG9wOiAxOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIC5jcm9zcyAuYmFyLTIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLmNyb3NzIC5iYXItMSB7XG4gICAgdG9wOiA5cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAuY3Jvc3MgLmJhci0zIHtcbiAgICB0b3A6IDlweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cblxuXG5cbiAgXG4gIFxuICAubmF2YmFyLWxpbmtzLmFjdGl2ZSB1bC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLm5hdmJhci1saW5rcyB1bCBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5uYXZiYXItbGlua3MgdWwgbGkgYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLm5hdmJhci1saW5rcyB1bCBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICB9XG4gIFxuICAubmF2YmFyLWxpbmtzIHVsIGxpLndlbGNvbWUtdXNlciBhIHtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgfVxuICBcbiAgLm5hdmJhci1saW5rcy5hY3RpdmUgdWwuc2hvdyBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZSBmb3J3YXJkcztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG4gIFxufVxuIl19 */"] });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-cookies */ 9916);
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../urls */ 5984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-storage-service.service */ 8773);






class AuthService {
    constructor(httpclient, tokenService) {
        this.httpclient = httpclient;
        this.tokenService = tokenService;
        this.authStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.authStatusSubject$ = this.authStatusSubject.asObservable();
    }
    emitLogout() {
        this.authStatusSubject.next({ type: 'auth', value: 'logout' });
    }
    emitCancelLogout() {
        this.authStatusSubject.next({ type: 'auth', value: 'cancel' });
    }
    emitUserLoggedIn(userData) {
        this.authStatusSubject.next({ type: 'userData', value: userData });
    }
    getAccessToken() {
        return this.tokenService.getToken('token');
    }
    getRefreshToken() {
        return this.tokenService.getToken('refresh_token');
    }
    getCurrentRoute() {
        return this.tokenService.getToken('route') || null;
    }
    get isLoggedIn() {
        // when the token is set and it has not expired then user is logged in 
        const accessToken = ng2_cookies__WEBPACK_IMPORTED_MODULE_0__.Cookie.get('token');
        const expiry = localStorage.getItem('expiresIn');
        console.log('accessToken is', accessToken);
        if (expiry && accessToken) {
            if (expiry > new Date().toISOString()) {
                console.log('token is valid');
                return true;
            }
        }
        console.log('token has expired');
        return false;
    }
    setUserData(data) {
        this.tokenService.setToken('token', data.accessToken);
        this.tokenService.setToken('refresh_token', data.refreshToken);
        localStorage.setItem('expiresIn', data.expiresIn);
    }
    clearUserData() {
        this.tokenService.deleteAllTokens();
        localStorage.clear();
    }
    registerUser(user) {
        const url = `${(0,_urls__WEBPACK_IMPORTED_MODULE_1__.getServiceUrl)().bookServiceAPI}/auth/register/user`;
        return this.httpclient.post(url, user);
    }
    loginUser(user) {
        const url = `${(0,_urls__WEBPACK_IMPORTED_MODULE_1__.getServiceUrl)().authServiceAPI}/auth/login`;
        return this.httpclient.post(url, user);
    }
    getNewAccessToken(data) {
        const url = `${(0,_urls__WEBPACK_IMPORTED_MODULE_1__.getServiceUrl)().authServiceAPI}/auth/token`;
        return this.httpclient.post(url, data);
    }
    logoutUser(data) {
        const url = `${(0,_urls__WEBPACK_IMPORTED_MODULE_1__.getServiceUrl)().authServiceAPI}/auth/logout`;
        this.clearUserData();
        // always subscribe to the observables, if they are not subscribed request is not send to the server
        return this.httpclient.delete(url, { body: data });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_token_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageServiceService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 639:
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksService": () => (/* binding */ BooksService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class BooksService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    getAllBooks(url) {
        return this.httpclient.get(url);
    }
    getBook(url) {
        return this.httpclient.get(url);
    }
    deleteBook(url) {
        console.log('deletebook called');
        return this.httpclient.delete(url);
    }
    addBook(url, body) {
        return this.httpclient.post(url, body);
    }
    updateBook(url, body) {
        return this.httpclient.put(url, body);
    }
    scrollToTop() {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }
}
BooksService.ɵfac = function BooksService_Factory(t) { return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BooksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BooksService, factory: BooksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3742:
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-storage-service.service */ 8773);






class TokenInterceptor {
    constructor(authService, // Replace with your authentication service
    tokenService) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    intercept(request, next) {
        const accessToken = this.authService.getAccessToken();
        if (accessToken) {
            request = this.addAccessTokenToRequest(request, accessToken);
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            if (!request.url.includes('login') && !request.url.includes('logout') && error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                // Token expired or unauthorized
                if (!this.refreshTokenInProgress) {
                    this.refreshTokenInProgress = true;
                    this.refreshTokenSubject.next(null);
                    // Call your refresh token method and obtain a new access token
                    return this.authService.getNewAccessToken({ token: this.authService.getRefreshToken() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((newAccessToken) => {
                        console.log('newAccessToken response', newAccessToken);
                        this.refreshTokenInProgress = false;
                        this.refreshTokenSubject.next(newAccessToken);
                        request = this.addAccessTokenToRequest(request, newAccessToken.accessToken);
                        this.authService.setUserData(newAccessToken);
                        return next.handle(request);
                    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((refreshError) => {
                        this.authService.logoutUser({ token: this.authService.getRefreshToken() }); // Log the user out if refresh token fails
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(refreshError));
                    }));
                }
                else {
                    // Wait for the new token and then retry the request
                    return this.refreshTokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((token) => token !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((newAccessToken) => {
                        request = this.addAccessTokenToRequest(request, newAccessToken);
                        return next.handle(request);
                    }));
                }
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error));
            }
        }));
    }
    addAccessTokenToRequest(request, accessToken) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageServiceService)); };
TokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ 8773:
/*!***********************************************************!*\
  !*** ./src/app/services/token-storage-service.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageServiceService": () => (/* binding */ TokenStorageServiceService)
/* harmony export */ });
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-cookies */ 9916);
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class TokenStorageServiceService {
    getToken(key) {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_0__.Cookie.get(key);
    }
    setToken(key, value) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_0__.Cookie.set(key, value);
    }
    removeToken(key) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_0__.Cookie["delete"](key);
    }
    deleteAllTokens() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_0__.Cookie.deleteAll();
    }
}
TokenStorageServiceService.ɵfac = function TokenStorageServiceService_Factory(t) { return new (t || TokenStorageServiceService)(); };
TokenStorageServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenStorageServiceService, factory: TokenStorageServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2858:
/*!******************************************************!*\
  !*** ./src/app/update-book/update-book.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateBookComponent": () => (/* binding */ UpdateBookComponent)
/* harmony export */ });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../urls */ 5984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/books.service */ 639);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







const _c0 = ["titleInput"];
const _c1 = ["authorInput"];
const _c2 = ["publisherInput"];
const _c3 = ["dateInput"];
const _c4 = ["genreInput"];
const _c5 = ["descriptionInput"];
const _c6 = ["imageInput"];
function UpdateBookComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateBookComponent_div_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
} }
function UpdateBookComponent_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateBookComponent_div_1_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid author name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateBookComponent_div_1_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid publisher name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateBookComponent_div_1_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " choose a valid date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateBookComponent_div_1_small_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid genre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateBookComponent_div_1_small_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateBookComponent_div_1_small_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " enter a valid image link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateBookComponent_div_1_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateBookComponent_div_1_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c7 = function (a0, a1) { return { "no-padding": a0, "bg-color": a1 }; };
function UpdateBookComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add New Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, UpdateBookComponent_div_1_p_4_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UpdateBookComponent_div_1_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.updateBook(_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10)(8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Book Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_div_1_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.book_form.title = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, UpdateBookComponent_div_1_small_12_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Author:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_div_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.book_form.author = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, UpdateBookComponent_div_1_small_18_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10)(20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Publisher:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_div_1_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.book_form.publisher = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, UpdateBookComponent_div_1_small_24_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10)(26, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Date published:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_div_1_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.book_form.date_published = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, UpdateBookComponent_div_1_small_30_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10)(32, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Genre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "select", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_div_1_Template_select_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.book_form.genre = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "select genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "fiction");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "autobiography");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "science");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "mathematics");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "law");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "medicine");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "technology & engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "finance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "art");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "self-help book");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "thriller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, UpdateBookComponent_div_1_small_64_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 10)(66, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "textarea", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_div_1_Template_textarea_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.book_form.description = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, UpdateBookComponent_div_1_small_70_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 10)(72, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Image link:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_div_1_Template_input_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.book_form.image = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, UpdateBookComponent_div_1_small_76_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, UpdateBookComponent_div_1_span_78_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, UpdateBookComponent_div_1_div_79_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](69);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](75);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.touched && _r4.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.touched && _r6.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.publisher);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.touched && _r8.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.date_published);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.touched && _r10.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.touched && _r12.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.touched && _r14.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.book_form.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r16.touched && _r16.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](18, _c7, ctx_r1.showLoader, ctx_r1.showLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.showLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showLoader);
} }
class UpdateBookComponent {
    constructor(bookservice, router, activatedroute) {
        this.bookservice = bookservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.showLoader = false;
        this.errorMessage = '';
        this.loading = true;
        this.bookId_param = '';
        // book attributes---two way data binding
        this.book_form = {
            title: '',
            author: '',
            publisher: '',
            genre: '',
            description: '',
            image: '',
            date_published: ''
        };
    }
    ngOnInit() {
        this.activatedroute.queryParamMap.subscribe(params => this.bookId_param = params.get('id'));
        console.log('book id param', this.bookId_param);
        if (this.bookId_param) {
            this.bookservice.getBook(`${(0,_urls__WEBPACK_IMPORTED_MODULE_0__.getServiceUrl)().bookServiceAPI}/books/${this.bookId_param}`).subscribe(data => {
                this.populateDom(data);
                this.loading = false;
                this.bookservice.scrollToTop();
            });
            // once we got the book that we need to edit, we will populate the dom with the previous data
        }
        else {
            this.loading = false;
            this.bookservice.scrollToTop();
        }
    }
    checkInvalidForm() {
        if (!this.book_form.title) {
            this.titleInput.nativeElement.focus();
        }
        else if (!this.book_form.author) {
            this.authorInput.nativeElement.focus();
        }
        else if (!this.book_form.publisher) {
            this.publisherInput.nativeElement.focus();
        }
        else if (!this.book_form.genre) {
            this.genreInput.nativeElement.focus();
        }
        else if (!this.book_form.image) {
            this.imageInput.nativeElement.focus();
        }
    }
    populateDom(data) {
        this.book_form.title = data.title;
        this.book_form.author = data.author;
        this.book_form.publisher = data.publisher;
        this.book_form.genre = data.genre;
        this.book_form.description = data.description;
        this.book_form.date_published = data.date_published;
        this.book_form.image = data.image;
    }
    updateBook(bok_form) {
        this.showLoader = true;
        if (bok_form.valid) {
            this.bookservice.updateBook(`${(0,_urls__WEBPACK_IMPORTED_MODULE_0__.getServiceUrl)().bookServiceAPI}/books/edit/${this.bookId_param}`, this.book_form).subscribe(data => console.log(data));
            setTimeout(() => {
                this.router.navigateByUrl(`/book/${this.bookId_param}`).catch(error => {
                    this.showLoader = false;
                    console.log('error navigating', error);
                });
            }, 1000);
        }
        else {
            this.errorMessage = "Please fill all the fields";
            this.checkInvalidForm();
            this.showLoader = false;
        }
    }
}
UpdateBookComponent.ɵfac = function UpdateBookComponent_Factory(t) { return new (t || UpdateBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_books_service__WEBPACK_IMPORTED_MODULE_1__.BooksService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
UpdateBookComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UpdateBookComponent, selectors: [["app-update-book"]], viewQuery: function UpdateBookComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.titleInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.authorInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.publisherInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dateInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.genreInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.descriptionInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imageInput = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "loader", 4, "ngIf"], ["class", "book-form", 4, "ngIf"], [1, "loader"], ["src", "assets/loading-state.gif", "alt", "loading spinner"], [1, "book-form"], [2, "text-align", "center"], [1, "error-message"], ["class", "error", 4, "ngIf"], [3, "ngSubmit"], ["bok_form", "ngForm"], [1, "input-row"], [1, "label"], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "title..", "name", "title", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["titleInput", ""], ["class", "error-message", 4, "ngIf"], ["for", "exampleFormControlInput1", 1, "label"], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "author..", "name", "author", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["authorInput", ""], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "publisher..", "name", "publisher", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["publisherInput", ""], ["type", "date", "id", "exampleFormControlInput1", "placeholder", "published on..", "name", "date", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["dateInput", ""], ["aria-label", ".form-select-sm example", "name", "genre", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["genreInput", ""], ["selected", ""], ["value", "fiction"], ["value", "autobiography"], ["value", "science"], ["value", "history"], ["value", "mathematics"], ["value", "law"], ["value", "medicine"], ["value", "technology & engineering"], ["value", "finance"], ["value", "art"], ["value", "travel"], ["value", "self-help book"], ["value", "thriller"], ["cols", "20", "rows", "7", "type", "text", "id", "exampleFormControlInput1", "placeholder", "enter description", "name", "description", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["descriptionInput", ""], ["type", "text", "id", "exampleFormControlInput1", "placeholder", "image link..", "name", "image url", "ngModel", "", "required", "", 1, "text-input", 3, "ngModel", "ngModelChange"], ["imageInput", ""], ["type", "submit", 1, "button", 3, "ngClass"], [4, "ngIf"], ["class", "mobile-loader", 4, "ngIf"], [1, "error"], [1, "mobile-loader"]], template: function UpdateBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, UpdateBookComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UpdateBookComponent_div_1_Template, 80, 21, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.book-form[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 50px auto;\n  background-color: #ffffff;\n  padding: 30px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, .4);\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: red;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 7px;\n}\n\n.input-row[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  padding: 7px;\n  letter-spacing: 1px;\n  transition: background-color 0.2s;\n  cursor: pointer;\n  border: 1px solid black;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #067306;\n  color: #fff;\n}\n\n@media (max-width: 576px) {\n\n  label[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 5px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .book-form[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin-top: calc(50vh - 171px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFDL0M7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBOzs7RUFHRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBOztFQUVFOztJQUVFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InVwZGF0ZS1ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYm9vay1mb3JtIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggNXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xufVxuZm9ybSAgaW5wdXQsIGZvcm0gc2VsZWN0IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuc21hbGwge1xuICBjb2xvcjogcmVkO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi5pbnB1dC1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogN3B4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MzA2O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG5cbiAgbGFiZWwsXG4gIGlucHV0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmJvb2stZm9ybSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5cbi5sb2FkZXIge1xuICBtYXJnaW4tdG9wOiBjYWxjKDUwdmggLSAxNzFweCk7XG59Il19 */"] });


/***/ }),

/***/ 5984:
/*!*************************!*\
  !*** ./src/app/urls.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServiceUrl": () => (/* binding */ getServiceUrl)
/* harmony export */ });
function getServiceUrl() {
    return {
        bookServiceAPI: "https://bookstore-service.et.r.appspot.com/api",
        authServiceAPI: "https://authservice-402805.et.r.appspot.com/api",
    };
}


/***/ }),

/***/ 5116:
/*!***********************************************!*\
  !*** ./src/app/user-login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token-storage-service.service */ 8773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







const _c0 = ["usrname"];
const _c1 = ["passwrd"];
function LoginComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function LoginComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "this field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "this field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "active": a0 }; };
const _c3 = function (a0, a1) { return { "no-padding": a0, "bg-color": a1 }; };
const _c4 = function () { return ["/register"]; };
class LoginComponent {
    constructor(authservice, router, tokenService) {
        this.authservice = authservice;
        this.router = router;
        this.tokenService = tokenService;
        this.errorMessage = '';
        this.login_form = {
            username: '',
            password: ''
        };
        this.showLoader = false;
    }
    ngAfterViewInit() {
        this.usrname.nativeElement.focus();
    }
    signinUser(usrForm) {
        this.showLoader = true;
        if (usrForm.valid) {
            this.authservice.loginUser(this.login_form)
                .subscribe({
                next: data => this.proccessUserData(data),
                error: error => {
                    if (error.status === 404) {
                        this.errorMessage = 'Please check your credentials!';
                        this.showLoader = false;
                    }
                }
            });
        }
        else {
            usrForm.control.markAllAsTouched();
            this.errorMessage = "Please fill all the fields";
            this.checkInvalidForm();
            this.showLoader = false;
        }
    }
    proccessUserData(data) {
        // when credentials are correct
        if (data) {
            const redirectTo = this.authservice.getCurrentRoute();
            localStorage.setItem('userData', JSON.stringify(data.user));
            this.authservice.setUserData(data);
            this.authservice.emitUserLoggedIn(data.user);
            if (redirectTo !== null) {
                this.router.navigate(['/' + redirectTo]);
            }
            else {
                this.router.navigate(['']);
            }
        }
        this.showLoader = false;
    }
    checkInvalidForm() {
        if (!this.login_form.username) {
            this.usrname.nativeElement.focus();
        }
        else if (!this.login_form.password) {
            this.passwrd.nativeElement.focus();
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageServiceService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.usrname = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.passwrd = _t.first);
    } }, decls: 30, vars: 24, consts: [[1, "login-container"], [1, "header"], ["src", "assets/enter.png", "alt", "", 1, "header-icon"], [1, "error-message"], ["class", "error", 4, "ngIf"], [3, "ngSubmit"], ["usrForm", "ngForm"], [1, "input-row"], ["id", "usrname", "type", "text", "aria-describedby", "emailHelp", "placeholder", "Enter username", "name", "username", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["usrname", ""], ["for", "usrname", 3, "ngClass"], [4, "ngIf"], ["id", "password", "type", "password", "placeholder", "Password", "name", "password", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["passwrd", ""], ["for", "password", 3, "ngClass"], ["type", "submit", 1, "button", 3, "ngClass", "disabled"], ["class", "mobile-loader", 4, "ngIf"], [1, "register"], [2, "text-decoration", "underline", "cursor", "pointer"], [3, "routerLink"], [1, "error"], [1, "mobile-loader"], ["src", "assets/loading-state.gif", "alt", "loading spinner"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login to BookStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LoginComponent_p_6_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.signinUser(_r1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.login_form.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_small_14_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7)(16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.login_form.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginComponent_small_20_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7)(22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginComponent_span_23_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " don't have an account?\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "strong", 18)(28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.login_form.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c2, ctx.login_form.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.login_form.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c2, ctx.login_form.password));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c3, ctx.showLoader, ctx.showLoader))("disabled", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c4));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["[_nghost-%COMP%] {\n  display: block;\n  flex: 1;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.login-container[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 50px auto;\n  background-color: #ffffff;\n  padding: 30px 0px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, .4);\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n.input-row[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  margin-bottom: 20px;\n  width: 60%;\n}\n.input-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 14px;\n  color: gray;\n  transition: all 0.2s ease;\n  letter-spacing: .3px;\n}\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .active[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  transform: translateY(-17px);\n  background-color: #ffffff;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1.2px solid black;\n  color: black;\n  width: 100%;\n  padding: 6px;\n  transition: background-color 0.4s;\n  letter-spacing: 1px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #333;\n}\n.register[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n}\n@media (max-width: 576px) {\n  *[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  input[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n  button[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .login-container[_ngcontent-%COMP%] {\n    width: 300px;\n    margin-top: 20px;\n  }\n  .input-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    top: 7px;\n  }\n}\nh2[_ngcontent-%COMP%] {\n  font-size: larger;\n  text-align: center;\n  color: rgb(0, 0, 0, 0.8);\n}\n.header[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsT0FBTztBQUNUO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFFBQVE7RUFDVjtBQUNGO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xufVxuLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDMwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA1cHggcmdiYSgwLCAwLCAwLCAuNCk7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweDtcbn1cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG4uaW5wdXQtcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uaW5wdXQtcm93IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAuM3B4O1xufVxuaW5wdXQ6Zm9jdXMgKyBsYWJlbCwgLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE3cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDEuMnB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cztcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICBpbnB1dCB7XG4gICAgcGFkZGluZzogNnB4O1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5pbnB1dC1yb3cgbGFiZWwge1xuICAgIHRvcDogN3B4O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xufVxuXG4uaGVhZGVyIHtcbiAgZ2FwOiAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 968:
/*!*********************************************************!*\
  !*** ./src/app/user-registration/register.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






const _c0 = ["_name"];
const _c1 = ["_username"];
const _c2 = ["_email"];
const _c3 = ["_password"];
const _c4 = ["_isAdmin"];
function RegisterComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function RegisterComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c5 = function (a0) { return { "active": a0 }; };
const _c6 = function (a0, a1) { return { "no-padding": a0, "bg-color": a1 }; };
const _c7 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.errorMessage = '';
        this.registration_form = {
            name: '',
            username: '',
            email: '',
            password: '',
            isAdmin: false
        };
        this.showLoader = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this._name.nativeElement.focus();
    }
    checkInvalidForm() {
        console.log('checkInvalidForm called ');
        if (!this.registration_form.name) {
            this._name.nativeElement.focus();
        }
        else if (!this.registration_form.username) {
            this._username.nativeElement.focus();
        }
        else if (!this.registration_form.email) {
            this._email.nativeElement.focus();
        }
        else if (!this.registration_form.password) {
            this._password.nativeElement.focus();
        }
        else if (!this.registration_form.isAdmin) {
            this._isAdmin.nativeElement.focus();
        }
    }
    toggleValue() {
        this.registration_form.isAdmin = !this.registration_form.isAdmin;
    }
    validateUser(data) {
        if (data.status === 409) {
            this.errorMessage = data.message;
            this.showLoader = false;
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    createUser(registration_form) {
        this.showLoader = true;
        if (registration_form.valid) {
            this.authservice.registerUser(this.registration_form)
                .subscribe({
                next: (data) => {
                    this.validateUser(data);
                },
                error: (error) => {
                    this.showLoader = false;
                    this.errorMessage = "something went wrong!";
                    console.log('error', error);
                }
            });
        }
        else {
            registration_form.control.markAllAsTouched();
            this.errorMessage = "please fill all the fields";
            this.checkInvalidForm();
            this.showLoader = false;
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._name = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._username = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._email = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._password = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._isAdmin = _t.first);
    } }, decls: 43, vars: 26, consts: [[1, "signup-container"], [1, "header"], ["src", "assets/register.png", "alt", "", 1, "header-icon"], [1, "error-message", 2, "margin-bottom", "15px"], ["class", "error", 4, "ngIf"], [3, "ngSubmit"], ["registr_form", "ngForm"], [1, "input-row"], ["id", "nme", "type", "text", "aria-describedby", "emailHelp", "name", "name", "placeholder", "Name", "required", "", 3, "ngModel", "ngModelChange"], ["_name", ""], ["for", "nme", 1, "input-label", 3, "ngClass"], ["id", "username", "type", "text", "aria-describedby", "emailHelp", "name", "username", "placeholder", "Username", "required", "", 3, "ngModel", "ngModelChange"], ["_username", ""], ["for", "username", 1, "input-label", 3, "ngClass"], ["id", "email", "type", "email", "aria-describedby", "emailHelp", "name", "email", "placeholder", "Email", "required", "", 3, "ngModel", "ngModelChange"], ["_email", ""], ["for", "email", 1, "input-label", 3, "ngClass"], ["id", "password", "type", "password", "name", "password", "placeholder", "Password", "required", "", 3, "ngModel", "ngModelChange"], ["_password", ""], ["for", "password", 1, "input-label", 3, "ngClass"], ["type", "checkbox", "value", "admin", "name", "isadmin", "id", "admin", 3, "change"], ["_isAdmin", ""], ["for", "admin"], ["type", "submit", 1, "button", 3, "ngClass", "disabled"], [4, "ngIf"], ["class", "mobile-loader", 4, "ngIf"], [1, "login"], [2, "text-decoration", "underline", "cursor", "pointer"], [3, "routerLink"], [1, "error"], [1, "mobile-loader"], ["src", "assets/loading-state.gif", "alt", "loading spinner"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterComponent_p_6_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.createUser(_r1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.registration_form.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.registration_form.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) { return ctx.registration_form.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7)(25, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_25_listener($event) { return ctx.registration_form.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7)(30, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_30_listener() { return ctx.toggleValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " register as admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7)(35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RegisterComponent_span_36_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, RegisterComponent_div_37_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " already have account?\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "strong", 27)(41, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registration_form.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c5, ctx.registration_form.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registration_form.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c5, ctx.registration_form.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registration_form.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c5, ctx.registration_form.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.registration_form.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c5, ctx.registration_form.password));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c6, ctx.showLoader, ctx.showLoader))("disabled", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c7));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.input-row[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  margin-bottom: 20px;\n  width: 60%;\n}\n\n.input-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 14px;\n  color: gray;\n  transition: all 0.3s ease;\n  letter-spacing: .3px;\n}\n\ninput[_ngcontent-%COMP%]:focus:not([type='checkbox']) + label[_ngcontent-%COMP%], .active[_ngcontent-%COMP%] {\n  transform: translateY(-17px);\n  font-size: 12px;\n  background-color: #ffffff;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px;\n}\n\n.signup-container[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 50px auto;\n  background-color: #ffffff;\n  padding: 30px 0px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, .4);\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 1.2px solid black;\n  color: black;\n  padding: 6px;\n  transition: background-color 0.6s;\n  letter-spacing: 1px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #333;\n}\n\n.login[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 5px;\n}\n\n@media (max-width: 576px) {\n  *[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  input[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: larger;\n  text-align: center;\n  color: rgb(0, 0, 0, 0.8);\n}\n\n@media (min-width: 577px) and (max-width: 1023px) {\n  .signup-container[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n\n}\n\n@media (max-width:576px) {\n  .signup-container[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  .input-label[_ngcontent-%COMP%] {\n    top: 7px;\n  }  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFJQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFFBQVE7RUFDVjtBQUNGIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG59XG5cbi5pbnB1dC1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmlucHV0LWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAuM3B4O1xufVxuXG5pbnB1dDpmb2N1czpub3QoW3R5cGU9J2NoZWNrYm94J10pK2xhYmVsLFxuLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTdweCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaW5wdXQsXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogN3B4O1xufVxuXG5cblxuLnNpZ251cC1jb250YWluZXIge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggNXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMS4ycHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnM7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4ubG9naW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gIH1cblxuICBidXR0b24ge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcbn1cblxuQG1lZGlhICh3aWR0aCA+IDU3NnB4KSBhbmQgKHdpZHRoPDEwMjRweCkge1xuICAuc2lnbnVwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgLnNpZ251cC1jb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5pbnB1dC1sYWJlbCB7XG4gICAgdG9wOiA3cHg7XG4gIH0gIFxufVxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map