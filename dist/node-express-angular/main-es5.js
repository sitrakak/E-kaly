function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/admin/admin.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/admin/admin.component.ts ***!
    \************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/entities/commande/commande.service */
    "./src/app/entities/commande/commande.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminComponent_tr_46_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var livreur_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", livreur_r3._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](livreur_r3.nom);
      }
    }

    function AdminComponent_tr_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminComponent_tr_46_option_11_Template, 2, 2, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tr_46_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var commande_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onsubmit(commande_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Assigner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var commande_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.nom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.quantite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.prixUnitaire * commande_r1.quantite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.Client);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.livreur);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.livreurs);
      }
    }

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(activatedRoute, user, router, commandeserv) {
        _classCallCheck(this, AdminComponent);

        this.activatedRoute = activatedRoute;
        this.user = user;
        this.router = router;
        this.commandeserv = commandeserv;
        this.commandes = [];
        this.livreurs = [];
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.error = false;
        this.livreur = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.createdCommande = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_admin"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "admin") {
              this.user.deconnexion("token_admin");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_user"];
              this.email = item["email"];
              this.nom = item["nom"];
            }
          }

          this.loadAll();
        }
      }, {
        key: "onsubmit",
        value: function onsubmit(commande) {
          if (this.livreur.value != " ") {
            if (confirm("Assigner ce livreur pour ce commande") == true) {
              this.commandeserv.assigner(commande._id, this.livreur.value);
            } else {}
          }
        }
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this = this;

          this.commandeserv.commande().then(function (result) {
            _this.commandes = result;
          });
          this.user.livreur().then(function (result) {
            _this.livreurs = result;
          });
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_admin");
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_4__["CommandeService"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      outputs: {
        createdCommande: "createdCommande"
      },
      decls: 51,
      vars: 1,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "admin", 1, "logo"], [1, "menu-toggle"], ["href", "admin", 1, "focus"], [1, "mid"], ["href", "admin/resto"], ["href", "admin/livreur"], ["href", "admin/benefice"], [3, "click"], [1, "clearfix"], [1, "content-table"], [4, "ngFor", "ngForOf"], [1, "footer"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Commande");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Commandes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Livreur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Benefice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_29_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Plat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "quantite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Prix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "livreur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AdminComponent_tr_46_Template, 15, 6, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commandes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -400px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]{\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 10px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n    padding-top: 150px;\r\n\tmin-width: 400px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: #00CED1;\r\n\tmargin: 100px;\r\n\tcolor: white;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n\tpadding: 2px 40px;\r\n\theight: 60px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\tbackground-color: #f3f3f3;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n    margin-top: 340px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    \r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 140px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtJQUNmLGtCQUFrQjtDQUNyQixnQkFBZ0I7QUFDakI7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LGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxMDAwMDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxhY2thZGRlciBJVEM7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubmF2IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5taWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAxM2Q1MTtcclxufVxyXG5cclxubmF2IHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC0zcHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogdGVhbDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBFMEU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyBpbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbmhlYWRlciAucnMgLmltZzEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudC10YWJsZXtcclxuXHRib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAxMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuXHRtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcbi5jb250ZW50LXRhYmxlIGlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0d2lkdGg6IDQwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGVudC10YWJsZSB0aGVhZCB0aHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDBDRUQxO1xyXG5cdG1hcmdpbjogMTAwcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGVudC10YWJsZSB0ZCx0aHtcclxuXHRwYWRkaW5nOiAycHggNDBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgdGJvZHkgdHJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMzQwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uY2hpZmZyZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogQ29jb2dvb3NlIFBybyBTZW1pTGlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSAxMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSAyJTtcclxuICAgIH1cclxuICAgIG5hdiB1bCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgdG9wO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIC5ycyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg1NXB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjQwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NXB4KSB7XHJcbiAgICBuYXYgdWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIGxpIGEge1xyXG4gICAgICAgIG1hcmdpbjogLTNweCAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxMzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyMzBweDtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcZjBjOSc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXGYwNWMnO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmF2LmFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogOTJweDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaSBhLmZvY3Vze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSBhOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY3NXB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuc291cy10aXRyZTMge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIC5zb3VzLXRpdHJlMyBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSBwIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_4__["CommandeService"]
        }];
      }, {
        createdCommande: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/benefice/benefice.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/benefice/benefice.component.ts ***!
    \******************************************************/

  /*! exports provided: BeneficeRestoComponent */

  /***/
  function srcAppAdminBeneficeBeneficeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneficeRestoComponent", function () {
      return BeneficeRestoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/entities/plat/plat.service */
    "./src/app/entities/plat/plat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/entities/commande/commande.service */
    "./src/app/entities/commande/commande.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BeneficeRestoComponent_tr_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var commande_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.quantite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.quantite * commande_r1.totalPrix - commande_r1.quantite * commande_r1.totalRevient);
      }
    }

    var BeneficeRestoComponent = /*#__PURE__*/function () {
      function BeneficeRestoComponent(platserv, activatedRoute, user, router, commandeserv) {
        _classCallCheck(this, BeneficeRestoComponent);

        this.platserv = platserv;
        this.activatedRoute = activatedRoute;
        this.user = user;
        this.router = router;
        this.commandeserv = commandeserv;
        this.commandes = [];
        this.idResto = "";
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.error = false;
        this.quantite = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.createdCommande = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BeneficeRestoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_admin"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "admin") {
              this.user.deconnexion("token_admin");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_user"];
              this.email = item["email"];
              this.nom = item["nom"];
            }
          }

          this.loadAll();
        }
      }, {
        key: "onsubmit",
        value: function onsubmit(plat) {}
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this2 = this;

          this.commandeserv.beneficeResto().then(function (result) {
            _this2.commandes = result;
          });
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_admin");
        }
      }]);

      return BeneficeRestoComponent;
    }();

    BeneficeRestoComponent.ɵfac = function BeneficeRestoComponent_Factory(t) {
      return new (t || BeneficeRestoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_2__["PlatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_5__["CommandeService"]));
    };

    BeneficeRestoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BeneficeRestoComponent,
      selectors: [["app-benefice"]],
      outputs: {
        createdCommande: "createdCommande"
      },
      decls: 47,
      vars: 1,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "admin", 1, "logo"], [1, "menu-toggle"], ["href", "admin"], [1, "mid"], ["href", "admin/resto"], ["href", "admin/livreur"], ["href", "admin/benefice", 1, "focus"], [3, "click"], [1, "clearfix"], [1, "content-table"], [4, "ngFor", "ngForOf"], [1, "footer"]],
      template: function BeneficeRestoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Livreur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Commandes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Livreur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Benefice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeneficeRestoComponent_Template_a_click_29_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Quantite vendu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Benefice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BeneficeRestoComponent_tr_42_Template, 7, 3, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commandes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -400px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]{\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 10px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n    padding-top: 150px;\r\n\tmin-width: 400px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: #00CED1;\r\n\tmargin: 100px;\r\n\tcolor: white;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n\tpadding: 2px 40px;\r\n\theight: 60px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\tbackground-color: #f3f3f3;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n    margin-top: 340px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    \r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 140px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVuZWZpY2UvYmVuZWZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtJQUNmLGtCQUFrQjtDQUNyQixnQkFBZ0I7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WTtRQUNaLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9iZW5lZmljZS9iZW5lZmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxMDAwMDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxhY2thZGRlciBJVEM7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubmF2IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5taWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAxM2Q1MTtcclxufVxyXG5cclxubmF2IHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC0zcHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogdGVhbDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBFMEU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyBpbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbmhlYWRlciAucnMgLmltZzEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudC10YWJsZXtcclxuXHRib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAxMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuXHRtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcbi5jb250ZW50LXRhYmxlIGlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0d2lkdGg6IDQwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGVudC10YWJsZSB0aGVhZCB0aHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDBDRUQxO1xyXG5cdG1hcmdpbjogMTAwcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGVudC10YWJsZSB0ZCx0aHtcclxuXHRwYWRkaW5nOiAycHggNDBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgdGJvZHkgdHJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMzQwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uY2hpZmZyZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogQ29jb2dvb3NlIFBybyBTZW1pTGlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSAxMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSAyJTtcclxuICAgIH1cclxuICAgIG5hdiB1bCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgdG9wO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIC5ycyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg1NXB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjQwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NXB4KSB7XHJcbiAgICBuYXYgdWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIGxpIGEge1xyXG4gICAgICAgIG1hcmdpbjogLTNweCAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxMzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyMzBweDtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcZjBjOSc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXGYwNWMnO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmF2LmFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogOTJweDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaSBhLmZvY3Vze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSBhOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY3NXB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuc291cy10aXRyZTMge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIC5zb3VzLXRpdHJlMyBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSBwIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeneficeRestoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-benefice',
          templateUrl: './benefice.component.html',
          styleUrls: ['./benefice.component.css']
        }]
      }], function () {
        return [{
          type: src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_2__["PlatService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_5__["CommandeService"]
        }];
      }, {
        createdCommande: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin/admin/admin.component */
    "./src/app/admin/admin/admin.component.ts");
    /* harmony import */


    var _admin_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/benefice/benefice.component */
    "./src/app/admin/benefice/benefice.component.ts");
    /* harmony import */


    var _client_client_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./client/client/client.component */
    "./src/app/client/client/client.component.ts");
    /* harmony import */


    var _client_commande_commande_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./client/commande/commande.component */
    "./src/app/client/commande/commande.component.ts");
    /* harmony import */


    var _client_livrer_livrer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./client/livrer/livrer.component */
    "./src/app/client/livrer/livrer.component.ts");
    /* harmony import */


    var _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./inscription/inscription.component */
    "./src/app/inscription/inscription.component.ts");
    /* harmony import */


    var _livreur_livreur_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./livreur/livreur.component */
    "./src/app/livreur/livreur.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _restaurant_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./restaurant/benefice/benefice.component */
    "./src/app/restaurant/benefice/benefice.component.ts");
    /* harmony import */


    var _restaurant_commande_commande_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./restaurant/commande/commande.component */
    "./src/app/restaurant/commande/commande.component.ts");
    /* harmony import */


    var _restaurant_liste_plat_restaurant_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./restaurant/liste-plat/restaurant.component */
    "./src/app/restaurant/liste-plat/restaurant.component.ts");
    /* harmony import */


    var _restaurant_new_plat_new_plat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./restaurant/new-plat/new-plat.component */
    "./src/app/restaurant/new-plat/new-plat.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login/:email',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'restaurant',
      component: _restaurant_liste_plat_restaurant_component__WEBPACK_IMPORTED_MODULE_12__["RestaurantComponent"]
    }, {
      path: 'client',
      component: _client_client_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"]
    }, {
      path: 'commande/:id',
      component: _client_commande_commande_component__WEBPACK_IMPORTED_MODULE_5__["CommandeComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
    }, {
      path: 'livreur',
      component: _livreur_livreur_component__WEBPACK_IMPORTED_MODULE_8__["LivreurComponent"]
    }, {
      path: 'plat/nouveau',
      component: _restaurant_new_plat_new_plat_component__WEBPACK_IMPORTED_MODULE_13__["NewPlatComponent"]
    }, {
      path: 'inscription',
      component: _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_7__["InscriptionComponent"]
    }, {
      path: 'commande-en-cours',
      component: _client_livrer_livrer_component__WEBPACK_IMPORTED_MODULE_6__["LivrerComponent"]
    }, {
      path: 'restaurant/commande',
      component: _restaurant_commande_commande_component__WEBPACK_IMPORTED_MODULE_11__["CommandeRestaurantComponent"]
    }, {
      path: 'restaurant/benefice',
      component: _restaurant_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_10__["BeneficeComponent"]
    }, {
      path: 'admin/benefice',
      component: _admin_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_3__["BeneficeRestoComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/status.service */
    "./src/app/shared/status.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(statusService) {
        _classCallCheck(this, AppComponent);

        this.statusService = statusService;
        this.title = 'node-express-angular';
        this.status = 'DOWN';
        this.createdProduct = null;
      } // Get the server status when starting the view.


      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.statusService.getStatus().then(function (result) {
            _this3.status = result.status;
          });
        } // Get the new product created.

      }, {
        key: "onCreatedProduct",
        value: function onCreatedProduct(createdProduct) {
          this.createdProduct = createdProduct;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _shared_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product/product-list/product-list.component */
    "./src/app/product/product-list/product-list.component.ts");
    /* harmony import */


    var _product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product/product-create/product-create.component */
    "./src/app/product/product-create/product-create.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _restaurant_liste_plat_restaurant_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./restaurant/liste-plat/restaurant.component */
    "./src/app/restaurant/liste-plat/restaurant.component.ts");
    /* harmony import */


    var _client_client_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./client/client/client.component */
    "./src/app/client/client/client.component.ts");
    /* harmony import */


    var _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./inscription/inscription.component */
    "./src/app/inscription/inscription.component.ts");
    /* harmony import */


    var _restaurant_new_plat_new_plat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./restaurant/new-plat/new-plat.component */
    "./src/app/restaurant/new-plat/new-plat.component.ts");
    /* harmony import */


    var _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin/admin/admin.component */
    "./src/app/admin/admin/admin.component.ts");
    /* harmony import */


    var _livreur_livreur_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./livreur/livreur.component */
    "./src/app/livreur/livreur.component.ts");
    /* harmony import */


    var _client_commande_commande_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./client/commande/commande.component */
    "./src/app/client/commande/commande.component.ts");
    /* harmony import */


    var _restaurant_commande_commande_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./restaurant/commande/commande.component */
    "./src/app/restaurant/commande/commande.component.ts");
    /* harmony import */


    var _client_livrer_livrer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./client/livrer/livrer.component */
    "./src/app/client/livrer/livrer.component.ts");
    /* harmony import */


    var _restaurant_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./restaurant/benefice/benefice.component */
    "./src/app/restaurant/benefice/benefice.component.ts");
    /* harmony import */


    var _admin_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin/benefice/benefice.component */
    "./src/app/admin/benefice/benefice.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], _product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_6__["ProductCreateComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _restaurant_liste_plat_restaurant_component__WEBPACK_IMPORTED_MODULE_9__["RestaurantComponent"], _client_client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"], _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_11__["InscriptionComponent"], _restaurant_new_plat_new_plat_component__WEBPACK_IMPORTED_MODULE_12__["NewPlatComponent"], _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"], _livreur_livreur_component__WEBPACK_IMPORTED_MODULE_14__["LivreurComponent"], _client_commande_commande_component__WEBPACK_IMPORTED_MODULE_15__["CommandeComponent"], _restaurant_commande_commande_component__WEBPACK_IMPORTED_MODULE_16__["CommandeRestaurantComponent"], _client_livrer_livrer_component__WEBPACK_IMPORTED_MODULE_17__["LivrerComponent"], _restaurant_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_18__["BeneficeComponent"], _admin_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_19__["BeneficeRestoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], _product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_6__["ProductCreateComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _restaurant_liste_plat_restaurant_component__WEBPACK_IMPORTED_MODULE_9__["RestaurantComponent"], _client_client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"], _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_11__["InscriptionComponent"], _restaurant_new_plat_new_plat_component__WEBPACK_IMPORTED_MODULE_12__["NewPlatComponent"], _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"], _livreur_livreur_component__WEBPACK_IMPORTED_MODULE_14__["LivreurComponent"], _client_commande_commande_component__WEBPACK_IMPORTED_MODULE_15__["CommandeComponent"], _restaurant_commande_commande_component__WEBPACK_IMPORTED_MODULE_16__["CommandeRestaurantComponent"], _client_livrer_livrer_component__WEBPACK_IMPORTED_MODULE_17__["LivrerComponent"], _restaurant_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_18__["BeneficeComponent"], _admin_benefice_benefice_component__WEBPACK_IMPORTED_MODULE_19__["BeneficeRestoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/client/client.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/client/client/client.component.ts ***!
    \***************************************************/

  /*! exports provided: ClientComponent */

  /***/
  function srcAppClientClientClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientComponent", function () {
      return ClientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ClientComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rest_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "commande/", rest_r1._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rest_r1.nom);
      }
    }

    var ClientComponent = /*#__PURE__*/function () {
      function ClientComponent(router, user) {
        _classCallCheck(this, ClientComponent);

        this.router = router;
        this.user = user;
        this.resto = [];
        this.id_user = '';
        this.email = '';
        this.nom = '';
      }

      _createClass(ClientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_client"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "client") {
              this.user.deconnexion("token_client");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_user"];
              this.email = item["email"];
              this.nom = item["nom"];
            }
          }

          this.loadAll();
        }
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this4 = this;

          this.user.resto().then(function (result) {
            _this4.resto = result;
          });
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_client");
        }
      }]);

      return ClientComponent;
    }();

    ClientComponent.ɵfac = function ClientComponent_Factory(t) {
      return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientComponent,
      selectors: [["app-client"]],
      decls: 37,
      vars: 1,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "client", 1, "logo"], [1, "menu-toggle"], ["href", "client", 1, "focus"], [1, "mid"], ["href", "commande-en-cours"], [3, "click"], [1, "clearfix"], [1, "titre"], ["alt", "header", "src", "assets/pictogrammes/elements/resto.webp", 1, "header"], [1, "titre1"], [1, "we_care"], [1, "half", "clearfix"], ["class", "div", 4, "ngFor", "ngForOf"], [1, "div"], [1, "plat"], [3, "href"], ["alt", "header ", "src", "assets/pictogrammes/elements/resto.webp ", 1, "header"]],
      template: function ClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Liste Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Commander");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Commande en cours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientComponent_Template_a_click_23_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "E-kaly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Satisfait ou rembourser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ClientComponent_div_33_Template, 6, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resto);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'cocogoose', sans-serif;\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -380px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 550px;\r\n    margin: 92px 0px;\r\n    background-color: blue;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 550px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center 22%;\r\n       object-position: center 22%;\r\n    opacity: 0.6;\r\n}\r\n\r\n.titre1[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 190px;\r\n    color: white;\r\n    font-weight: normal;\r\n    font-family: Blackadder ITC;\r\n    font-size: 70px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 290px;\r\n    color: white;\r\n    font-weight: normal;\r\n    font-size: 30px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    text-align: center;\r\n    background-color: white;\r\n    border-radius: 25px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.half[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n    width: 100%;\r\n}\r\n\r\n.div[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    margin: 4%;\r\n    margin-top: 0%;\r\n    height: 300px;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n\r\n.div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 250px;\r\n    background-color: white;\r\n}\r\n\r\n.div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 250px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    margin: 1.5%;\r\n    color: white;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n    height: 70px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 140px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    \r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n\t.div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]{\r\n\t\theight: 200px;\r\n\t}\r\n    .div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\t\theight: 200px;\r\n\t}\r\n    .div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 25px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\t.div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]{\r\n\t\theight: 160px;\r\n\t}\r\n    .div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\t\theight: 160px;\r\n\t}\r\n    .div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\t.div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]{\r\n\t\theight: 110px;\r\n\t}\r\n    .div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\t\theight: 110px;\r\n\t}\r\n    .div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n\t.div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]{\r\n\t\theight: 80px;\r\n\t}\r\n    .div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\t\theight: 80px;\r\n\t}\r\n    .div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1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VTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFNBQVM7UUFDVCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBR0E7Q0FDQztFQUNDLGFBQWE7Q0FDZDtJQUNHO0VBQ0YsYUFBYTtDQUNkO0lBQ0c7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBQ0E7Q0FDQztFQUNDLGFBQWE7Q0FDZDtJQUNHO0VBQ0YsYUFBYTtDQUNkO0lBQ0c7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBQ0E7Q0FDQztFQUNDLGFBQWE7Q0FDZDtJQUNHO0VBQ0YsYUFBYTtDQUNkO0lBQ0c7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBQ0E7Q0FDQztFQUNDLFlBQVk7Q0FDYjtJQUNHO0VBQ0YsWUFBWTtDQUNiO0lBQ0c7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jbGllbnQvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogJ2NvY29nb29zZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxMDAwMDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxhY2thZGRlciBJVEM7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubmF2IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5taWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAxM2Q1MTtcclxufVxyXG5cclxubmF2IHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC0zcHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogdGVhbDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBFMEU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyBpbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbmhlYWRlciAucnMgLmltZzEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udGl0cmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgbWFyZ2luOiA5MnB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0cmUgLmhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDIyJTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnRpdHJlMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE5MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGFja2FkZGVyIElUQztcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG5cclxuLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjkwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4udGl0cmUgLnNvdXMtdGl0cmUge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4udGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi50aXRyZSAuc291cy10aXRyZSBwIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmhhbGYge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2IC5wbGF0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGl2IC5wbGF0IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmRpdiBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW46IDEuNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuZm9vdGVyIHAge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jaGlmZnJlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDb2NvZ29vc2UgUHJvIFNlbWlMaWdodDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDEyJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDIlO1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTcwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSB0b3A7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgLnJzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODU1cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxNDBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyNDBweDtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcclxuICAgIG5hdiB1bCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwgbGkgYSB7XHJcbiAgICAgICAgbWFyZ2luOiAtM3B4IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDIzMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGU6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnXFxmMGM5JztcclxuICAgICAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUuYWN0aXZlOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcZjA1Yyc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogOTJweDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmF2IHVsIGxpIGEuZm9jdXN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjc1cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxMTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5zb3VzLXRpdHJlMyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLnNvdXMtdGl0cmUzIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBmb290ZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSB7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5zb3VzLXRpdHJlIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSBwIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuXHQuZGl2IC5wbGF0e1xyXG5cdFx0aGVpZ2h0OiAyMDBweDtcclxuXHR9XHJcbiAgICAuZGl2IC5wbGF0IGltZ3tcclxuXHRcdGhlaWdodDogMjAwcHg7XHJcblx0fVxyXG4gICAgLmRpdiBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdC5kaXYgLnBsYXR7XHJcblx0XHRoZWlnaHQ6IDE2MHB4O1xyXG5cdH1cclxuICAgIC5kaXYgLnBsYXQgaW1ne1xyXG5cdFx0aGVpZ2h0OiAxNjBweDtcclxuXHR9XHJcbiAgICAuZGl2IGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblx0LmRpdiAucGxhdHtcclxuXHRcdGhlaWdodDogMTEwcHg7XHJcblx0fVxyXG4gICAgLmRpdiAucGxhdCBpbWd7XHJcblx0XHRoZWlnaHQ6IDExMHB4O1xyXG5cdH1cclxuICAgIC5kaXYgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHQuZGl2IC5wbGF0e1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdH1cclxuICAgIC5kaXYgLnBsYXQgaW1ne1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdH1cclxuICAgIC5kaXYgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client',
          templateUrl: './client.component.html',
          styleUrls: ['./client.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/commande/commande.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/client/commande/commande.component.ts ***!
    \*******************************************************/

  /*! exports provided: CommandeComponent */

  /***/
  function srcAppClientCommandeCommandeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandeComponent", function () {
      return CommandeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_entities_commande_commande_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/entities/commande/commande.model */
    "./src/app/entities/commande/commande.model.ts");
    /* harmony import */


    var src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/entities/plat/plat.service */
    "./src/app/entities/plat/plat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/entities/commande/commande.service */
    "./src/app/entities/commande/commande.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CommandeComponent_tr_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommandeComponent_tr_36_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var plat_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onsubmit(plat_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Commander");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var plat_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plat_r1.nom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plat_r1.prixVente);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.quantite);
      }
    }

    var CommandeComponent = /*#__PURE__*/function () {
      function CommandeComponent(platserv, activatedRoute, user, router, commandeserv) {
        _classCallCheck(this, CommandeComponent);

        this.platserv = platserv;
        this.activatedRoute = activatedRoute;
        this.user = user;
        this.router = router;
        this.commandeserv = commandeserv;
        this.plats = [];
        this.idResto = "";
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.error = false;
        this.quantite = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.createdCommande = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CommandeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_client"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "client") {
              this.user.deconnexion("token_client");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_user"];
              this.email = item["email"];
              this.nom = item["nom"];
            }
          }

          this.loadAll();
        }
      }, {
        key: "onsubmit",
        value: function onsubmit(plat) {
          var _this5 = this;

          var commande = new src_app_entities_commande_commande_model__WEBPACK_IMPORTED_MODULE_2__["Commande"](this.id_user, this.email, plat._id, plat.idResto, plat.nom, this.quantite.value, plat.prixVente, plat.prixRevient, false, null, null);

          if (this.quantite.value > 0) {
            if (confirm("Voulez vous vraiment commander " + this.quantite.value + " " + plat.nom + "?") == true) {
              this.commandeserv.Commander(commande).then(function (result) {
                if (result === undefined) {
                  _this5.error = true;
                } else {
                  _this5.error = false;

                  _this5.createdCommande.emit(result);
                }
              });
            } else {}
          }
        }
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this6 = this;

          this.idResto = this.activatedRoute.snapshot.params["id"];
          this.platserv.plat(this.idResto).then(function (result) {
            _this6.plats = result;
          });
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_client");
        }
      }]);

      return CommandeComponent;
    }();

    CommandeComponent.ɵfac = function CommandeComponent_Factory(t) {
      return new (t || CommandeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_3__["PlatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_6__["CommandeService"]));
    };

    CommandeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommandeComponent,
      selectors: [["app-commande"]],
      outputs: {
        createdCommande: "createdCommande"
      },
      decls: 41,
      vars: 1,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "client", 1, "logo"], [1, "menu-toggle"], ["href", "client", 1, "focus"], [1, "mid"], ["href", "commande-en-cours"], [3, "click"], [1, "clearfix"], [1, "content-table"], [4, "ngFor", "ngForOf"], [1, "footer"], ["id", "quantite", "type", "number", "placeholder", "0", 3, "formControl"]],
      template: function CommandeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Commande");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Commander");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Commande en cours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommandeComponent_Template_a_click_23_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Prix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Quantite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CommandeComponent_tr_36_Template, 10, 3, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.plats);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -380px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]{\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 10px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n    padding-top: 150px;\r\n\tmin-width: 400px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: #00CED1;\r\n\tmargin: 100px;\r\n\tcolor: white;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n\tpadding: 2px 40px;\r\n\theight: 60px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\tbackground-color: #f3f3f3;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n    margin-top: 340px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    \r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 140px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NvbW1hbmRlL2NvbW1hbmRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixrQkFBa0I7SUFDZixrQkFBa0I7Q0FDckIsZ0JBQWdCO0FBQ2pCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQixXQUFXO0FBQ1o7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixZQUFZO0NBQ1osZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO1FBQ0ksMkJBQXdCO1dBQXhCLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwwQkFBdUI7V0FBdkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkJBQXdCO1dBQXhCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULGFBQWE7UUFDYix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGNBQWM7UUFDZCxTQUFTO0lBQ2I7SUFDQTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50L2NvbW1hbmRlL2NvbW1hbmRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjMDEzZDUxO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDEwMDAwMDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGFja2FkZGVyIElUQztcclxuICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zODBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5uYXYgdWwgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGhlaWdodDogMTFweDtcclxufVxyXG5cclxubmF2IHVsIGxpLm1pZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDEzZDUxO1xyXG59XHJcblxyXG5uYXYgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogLTNweCAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiB0ZWFsO1xyXG59XHJcblxyXG5oZWFkZXIgLnJzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEUwRTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5oZWFkZXIgLnJzIGltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyAuaW1nMSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXRhYmxle1xyXG5cdGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG5cdG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgaW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uY29udGVudC10YWJsZSBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250ZW50LXRhYmxlIHRoZWFkIHRoe1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMENFRDE7XHJcblx0bWFyZ2luOiAxMDBweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb250ZW50LXRhYmxlIHRkLHRoe1xyXG5cdHBhZGRpbmc6IDJweCA0MHB4O1xyXG5cdGhlaWdodDogNjBweDtcclxufVxyXG4uY29udGVudC10YWJsZSB0Ym9keSB0cntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzNDBweDtcclxufVxyXG5cclxuZm9vdGVyIHAge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jaGlmZnJlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDb2NvZ29vc2UgUHJvIFNlbWlMaWdodDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDEyJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDIlO1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTcwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSB0b3A7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgLnJzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODU1cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxNDBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyNDBweDtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcclxuICAgIG5hdiB1bCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwgbGkgYSB7XHJcbiAgICAgICAgbWFyZ2luOiAtM3B4IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDIzMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGU6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnXFxmMGM5JztcclxuICAgICAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUuYWN0aXZlOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcZjA1Yyc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuYXYuYWN0aXZlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiA5MnB4O1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHVsIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHVsIGxpIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIGxpIGEuZm9jdXN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjc1cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxMTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5zb3VzLXRpdHJlMyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLnNvdXMtdGl0cmUzIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBmb290ZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSB7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5zb3VzLXRpdHJlIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSBwIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-commande',
          templateUrl: './commande.component.html',
          styleUrls: ['./commande.component.css']
        }]
      }], function () {
        return [{
          type: src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_3__["PlatService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_6__["CommandeService"]
        }];
      }, {
        createdCommande: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/client/livrer/livrer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/client/livrer/livrer.component.ts ***!
    \***************************************************/

  /*! exports provided: LivrerComponent */

  /***/
  function srcAppClientLivrerLivrerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LivrerComponent", function () {
      return LivrerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/entities/commande/commande.service */
    "./src/app/entities/commande/commande.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LivrerComponent_tr_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var commande_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.nom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.quantite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.prixUnitaire * commande_r1.quantite);
      }
    }

    var LivrerComponent = /*#__PURE__*/function () {
      function LivrerComponent(activatedRoute, user, router, commande) {
        _classCallCheck(this, LivrerComponent);

        this.activatedRoute = activatedRoute;
        this.user = user;
        this.router = router;
        this.commande = commande;
        this.commandes = [];
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.error = false;
      }

      _createClass(LivrerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_client"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "client") {
              this.user.deconnexion("token_client");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_user"];
              this.email = item["email"];
              this.nom = item["nom"];
            }
          }

          this.loadAll();
        }
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this7 = this;

          this.commande.CommandeClient(this.id_user).then(function (result) {
            _this7.commandes = result;
          });
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_client");
        }
      }]);

      return LivrerComponent;
    }();

    LivrerComponent.ɵfac = function LivrerComponent_Factory(t) {
      return new (t || LivrerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_3__["CommandeService"]));
    };

    LivrerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LivrerComponent,
      selectors: [["app-livrer"]],
      decls: 41,
      vars: 1,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "client", 1, "logo"], [1, "menu-toggle"], ["href", "client"], [1, "mid"], ["href", "commande-en-cours", 1, "focus"], [3, "click"], [1, "clearfix"], [1, "content-table"], [4, "ngFor", "ngForOf"], [1, "footer"]],
      template: function LivrerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Commande en cours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Commander");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Commande en cours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LivrerComponent_Template_a_click_23_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Plat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "quantite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Prix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, LivrerComponent_tr_36_Template, 7, 3, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commandes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-right: 380px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]{\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 10px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n    padding-top: 150px;\r\n\tmin-width: 400px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: #00CED1;\r\n\tmargin: 100px;\r\n\tcolor: white;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n\tpadding: 2px 40px;\r\n\theight: 60px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\tbackground-color: #f3f3f3;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n    margin-top: 340px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 140px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2xpdnJlci9saXZyZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtJQUNmLGtCQUFrQjtDQUNyQixnQkFBZ0I7QUFD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Q1osa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9saXZyZXIvbGl2cmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjMDEzZDUxO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDEwMDAwMDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGFja2FkZGVyIElUQztcclxuICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzODBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5uYXYgdWwgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGhlaWdodDogMTFweDtcclxufVxyXG5cclxubmF2IHVsIGxpLm1pZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDEzZDUxO1xyXG59XHJcblxyXG5uYXYgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogLTNweCAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiB0ZWFsO1xyXG59XHJcblxyXG5oZWFkZXIgLnJzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEUwRTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5oZWFkZXIgLnJzIGltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyAuaW1nMSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXRhYmxle1xyXG5cdGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG5cdG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgaW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHR3aWR0aDogNDBweDtcclxufVxyXG4uY29udGVudC10YWJsZSBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250ZW50LXRhYmxlIHRoZWFkIHRoe1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMENFRDE7XHJcblx0bWFyZ2luOiAxMDBweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb250ZW50LXRhYmxlIHRkLHRoe1xyXG5cdHBhZGRpbmc6IDJweCA0MHB4O1xyXG5cdGhlaWdodDogNjBweDtcclxufVxyXG4uY29udGVudC10YWJsZSB0Ym9keSB0cntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzNDBweDtcclxufVxyXG5cclxuZm9vdGVyIHAge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jaGlmZnJlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDb2NvZ29vc2UgUHJvIFNlbWlMaWdodDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDEyJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDIlO1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTcwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSB0b3A7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgLnJzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODU1cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxNDBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyNDBweDtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcclxuICAgIG5hdiB1bCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwgbGkgYSB7XHJcbiAgICAgICAgbWFyZ2luOiAtM3B4IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDIzMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGU6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnXFxmMGM5JztcclxuICAgICAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUuYWN0aXZlOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcZjA1Yyc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogOTJweDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaSBhLmZvY3Vze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSBhOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY3NXB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuc291cy10aXRyZTMge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIC5zb3VzLXRpdHJlMyBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSBwIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LivrerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-livrer',
          templateUrl: './livrer.component.html',
          styleUrls: ['./livrer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_3__["CommandeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/entities/commande/commande.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/entities/commande/commande.model.ts ***!
    \*****************************************************/

  /*! exports provided: Commande */

  /***/
  function srcAppEntitiesCommandeCommandeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Commande", function () {
      return Commande;
    });

    var Commande = function Commande(idClient, Client, idPlat, idResto, nom, quantite, prixUnitaire, prixRevient, livrer, livreur, date, _id) {
      _classCallCheck(this, Commande);

      this.idClient = idClient;
      this.Client = Client;
      this.idPlat = idPlat;
      this.idResto = idResto;
      this.nom = nom;
      this.quantite = quantite;
      this.prixUnitaire = prixUnitaire;
      this.prixRevient = prixRevient;
      this.livrer = livrer;
      this.livreur = livreur;
      this.date = date;
      this._id = _id;
      this._id = _id ? _id : null;
      this.idClient = idClient;
      this.Client = Client;
      this.idPlat = idPlat;
      this.idResto = idResto;
      this.nom = nom;
      this.quantite = quantite;
      this.prixUnitaire = prixUnitaire;
      this.prixRevient = prixRevient;
      this.livrer = livrer;
      this.livreur = livreur;
      this.date = date;
    };
    /***/

  },

  /***/
  "./src/app/entities/commande/commande.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/entities/commande/commande.service.ts ***!
    \*******************************************************/

  /*! exports provided: CommandeService */

  /***/
  function srcAppEntitiesCommandeCommandeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandeService", function () {
      return CommandeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var CommandeService = /*#__PURE__*/function () {
      function CommandeService(http) {
        _classCallCheck(this, CommandeService);

        this.http = http;
        this.CommandesUrl = '/api/commande';
      } //get resto


      _createClass(CommandeService, [{
        key: "commande",
        value: function commande() {
          return this.http.get("".concat(this.CommandesUrl, "/all")).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //benefice par plat

      }, {
        key: "benefice",
        value: function benefice(id) {
          return this.http.get("".concat(this.CommandesUrl, "/benefice/").concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //benefice par resto

      }, {
        key: "beneficeResto",
        value: function beneficeResto() {
          return this.http.get("".concat(this.CommandesUrl, "/beneficeResto")).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //Commander

      }, {
        key: "Commander",
        value: function Commander(commande) {
          return this.http.post(this.CommandesUrl, commande).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Get Commandes by idClient

      }, {
        key: "CommandeClient",
        value: function CommandeClient(id) {
          return this.http.get("".concat(this.CommandesUrl, "/").concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Get Commandes by Resto

      }, {
        key: "CommandeResto",
        value: function CommandeResto(id) {
          return this.http.get("api/restaurant/commande/".concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Get Commandes a livrer

      }, {
        key: "livraison",
        value: function livraison(livreur) {
          return this.http.get("".concat(this.CommandesUrl, "/livrer/").concat(livreur)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Livrer

      }, {
        key: "livrer",
        value: function livrer(id) {
          return this.http.get("api/livrer/".concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Assigner livreur

      }, {
        key: "assigner",
        value: function assigner(id, livreur) {
          return this.http.get("".concat(this.CommandesUrl, "/assigner/").concat(id, "/").concat(livreur)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        }
      }, {
        key: "error",
        value: function error(_error) {
          var message = _error.message ? _error.message : _error.status ? "".concat(_error.status, " - ").concat(_error.statusText) : 'Server error';
          console.error(message);
        }
      }]);

      return CommandeService;
    }();

    CommandeService.ɵfac = function CommandeService_Factory(t) {
      return new (t || CommandeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    CommandeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommandeService,
      factory: CommandeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/entities/plat/plat.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/entities/plat/plat.model.ts ***!
    \*********************************************/

  /*! exports provided: Plat */

  /***/
  function srcAppEntitiesPlatPlatModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Plat", function () {
      return Plat;
    });

    var Plat = function Plat(image, nom, prixRevient, prixVente, visible, idResto, _id) {
      _classCallCheck(this, Plat);

      this.image = image;
      this.nom = nom;
      this.prixRevient = prixRevient;
      this.prixVente = prixVente;
      this.visible = visible;
      this.idResto = idResto;
      this._id = _id;
      this._id = _id ? _id : null;
      this.image = image;
      this.nom = nom;
      this.prixRevient = prixRevient;
      this.prixVente = prixVente;
      this.visible = visible;
      this.idResto = idResto;
    };
    /***/

  },

  /***/
  "./src/app/entities/plat/plat.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/entities/plat/plat.service.ts ***!
    \***********************************************/

  /*! exports provided: PlatService */

  /***/
  function srcAppEntitiesPlatPlatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatService", function () {
      return PlatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var PlatService = /*#__PURE__*/function () {
      function PlatService(http) {
        _classCallCheck(this, PlatService);

        this.http = http;
        this.PlatsUrl = '/api/plat';
      } // Get Plats by idResto


      _createClass(PlatService, [{
        key: "plat",
        value: function plat(id) {
          return this.http.get("".concat(this.PlatsUrl, "/").concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Create Plat

      }, {
        key: "create",
        value: function create(Plat) {
          return this.http.post(this.PlatsUrl, Plat).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Delete a Plat

      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.PlatsUrl, "/").concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //send Mail

      }, {
        key: "sendMail",
        value: function sendMail(Plat) {
          return this.http.post("".concat(this.PlatsUrl, "/sendmail"), Plat).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Error handling

      }, {
        key: "error",
        value: function error(_error2) {
          var message = _error2.message ? _error2.message : _error2.status ? "".concat(_error2.status, " - ").concat(_error2.statusText) : 'Server error';
          console.error(message);
        }
      }]);

      return PlatService;
    }();

    PlatService.ɵfac = function PlatService_Factory(t) {
      return new (t || PlatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    PlatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PlatService,
      factory: PlatService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/entities/product/product.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/entities/product/product.model.ts ***!
    \***************************************************/

  /*! exports provided: Product */

  /***/
  function srcAppEntitiesProductProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product(name, brand, _id) {
      _classCallCheck(this, Product);

      this.name = name;
      this.brand = brand;
      this._id = _id;
      this._id = _id ? _id : null;
      this.name = name;
      this.brand = brand;
    };
    /***/

  },

  /***/
  "./src/app/entities/product/product.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/entities/product/product.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppEntitiesProductProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.productsUrl = '/api/products';
      } // Get products


      _createClass(ProductService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.productsUrl).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Create product

      }, {
        key: "create",
        value: function create(product) {
          return this.http.post(this.productsUrl, product).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Delete a product

      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.productsUrl, "/").concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Error handling

      }, {
        key: "error",
        value: function error(_error3) {
          var message = _error3.message ? _error3.message : _error3.status ? "".concat(_error3.status, " - ").concat(_error3.statusText) : 'Server error';
          console.error(message);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/entities/user/user.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/entities/user/user.model.ts ***!
    \*********************************************/

  /*! exports provided: User, LoginUser */

  /***/
  function srcAppEntitiesUserUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginUser", function () {
      return LoginUser;
    });

    var User = function User(email, nom, adresse, valide, profil, mdp, _id) {
      _classCallCheck(this, User);

      this.email = email;
      this.nom = nom;
      this.adresse = adresse;
      this.valide = valide;
      this.profil = profil;
      this.mdp = mdp;
      this._id = _id;
      this._id = _id ? _id : null;
      this.email = email;
      this.nom = nom;
      this.adresse = adresse;
      this.valide = valide;
      this.profil = profil;
      this.mdp = mdp;
    };

    var LoginUser = function LoginUser(email, mdp) {
      _classCallCheck(this, LoginUser);

      this.email = email;
      this.mdp = mdp;
      this.email = email;
      this.mdp = mdp;
    };
    /***/

  },

  /***/
  "./src/app/entities/user/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/entities/user/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppEntitiesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.UsersUrl = '/api/user';
      } // Get Users


      _createClass(UserService, [{
        key: "get",
        value: function get() {
          return this.http.get(this.UsersUrl).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //get resto

      }, {
        key: "resto",
        value: function resto() {
          return this.http.get("".concat(this.UsersUrl, "/resto")).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //get livreur

      }, {
        key: "livreur",
        value: function livreur() {
          return this.http.get("".concat(this.UsersUrl, "/livreur")).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Create User

      }, {
        key: "create",
        value: function create(User) {
          return this.http.post(this.UsersUrl, User).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Login

      }, {
        key: "login",
        value: function login(User) {
          return this.http.post("".concat(this.UsersUrl, "/login"), User).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Logout

      }, {
        key: "delete_token",
        value: function delete_token(id) {
          return this.http["delete"]("".concat(this.UsersUrl, "/token/").concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        }
      }, {
        key: "deconnexion",
        value: function deconnexion(token) {
          var item = JSON.parse(localStorage.getItem(token));
          var id_user = item["id_user"];
          this.delete_token(id_user);
          localStorage.removeItem(token);
          window.location.reload();
        } // Delete a User

      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(this.UsersUrl, "/").concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //send Mail

      }, {
        key: "validercompte",
        value: function validercompte(email) {
          return this.http.get("".concat(this.UsersUrl, "/valider/").concat(email)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //mail existant

      }, {
        key: "mail",
        value: function mail(email) {
          return this.http.get("".concat(this.UsersUrl, "/").concat(email)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //Resto by id

      }, {
        key: "restoById",
        value: function restoById(id) {
          return this.http.get("".concat(this.UsersUrl, "/resto/").concat(id)).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } //send Mail

      }, {
        key: "sendMail",
        value: function sendMail(User) {
          return this.http.post("".concat(this.UsersUrl, "/sendmail"), User).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Error handling

      }, {
        key: "error",
        value: function error(_error4) {
          var message = _error4.message ? _error4.message : _error4.status ? "".concat(_error4.status, " - ").concat(_error4.statusText) : 'Server error';
          console.error(message);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/inscription/inscription.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/inscription/inscription.component.ts ***!
    \******************************************************/

  /*! exports provided: InscriptionComponent */

  /***/
  function srcAppInscriptionInscriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionComponent", function () {
      return InscriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_entities_user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/entities/user/user.model */
    "./src/app/entities/user/user.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InscriptionComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Un message de confirmation a ete envoye sur votre email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InscriptionComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ce compte existe deja ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var InscriptionComponent = /*#__PURE__*/function () {
      function InscriptionComponent(UserService, formBuilder, router) {
        _classCallCheck(this, InscriptionComponent);

        this.UserService = UserService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.succes = false;
        this.erreur = false;
        this.email = '';
        this.nom = '';
        this.adresse = '';
        this.valide = false;
        this.profil = 'client';
        this.mdp = '';
        this.cmdp = '';
        this.error = false;
        this.createdUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      } // Init the form when starting the view.


      _createClass(InscriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        } // Manage the submit action and create the new User.

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          var user = new src_app_entities_user_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](this.UserForm.value['email'], this.UserForm.value['nom'], this.UserForm.value['adresse'], this.UserForm.value['valide'], this.UserForm.value['profil'], this.UserForm.value['mdp'], null);

          if (this.UserForm.value['mdp'] == this.UserForm.value['cmdp']) {
            this.succes = false;
            this.erreur = false;
            this.UserService.mail(this.UserForm.value['email']).then(function (result) {
              _this8.mail = result;
            });

            if (!this.mail) {
              this.UserService.create(user).then(function (result) {
                if (result === undefined) {
                  _this8.error = true;
                } else {
                  _this8.error = false;

                  _this8.createdUser.emit(result);
                }
              });
              this.UserService.sendMail(user).then(function (result) {
                if (result === undefined) {
                  _this8.error = true;
                } else {
                  _this8.error = false;

                  _this8.createdUser.emit(result);
                }
              });
              this.succes = true;
            } else {
              this.erreur = true;
            }
          }
        } // Hide the error message.

      }, {
        key: "hideError",
        value: function hideError() {
          this.error = false;
        } // Init the creation form.

      }, {
        key: "initForm",
        value: function initForm() {
          this.UserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            adresse: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.adresse, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            valide: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.valide, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            profil: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.profil, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            mdp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.mdp, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cmdp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.cmdp, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }]);

      return InscriptionComponent;
    }();

    InscriptionComponent.ɵfac = function InscriptionComponent_Factory(t) {
      return new (t || InscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    InscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InscriptionComponent,
      selectors: [["app-inscription"]],
      outputs: {
        createdUser: "createdUser"
      },
      decls: 46,
      vars: 4,
      consts: [["lang", "en-US"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "size-1140"], ["href", "#", 1, "logo"], [1, "rs"], [1, "lien"], ["href", "login"], [1, "row"], [1, "inscription"], [2, "color", "red"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "customform", 3, "formGroup", "ngSubmit"], ["formControlName", "email", "id", "email", "type", "email"], ["formControlName", "nom", "id", "nom", "type", "text"], ["formControlName", "adresse", "id", "adresse", "type", "text"], ["formControlName", "mdp", "id", "mdp", "type", "password"], ["formControlName", "cmdp", "id", "cmdp", "type", "password"], ["type", "submit", 3, "disabled"], [1, "footer"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"]],
      template: function InscriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Inscription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inscription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Connexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Inscription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, InscriptionComponent_div_21_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InscriptionComponent_div_22_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InscriptionComponent_Template_form_ngSubmit_23_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Adresse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mot de passe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Confirmer mot de passe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Valider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.succes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erreur);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.UserForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.UserForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\n.lien[_ngcontent-%COMP%] {\r\n    margin-top: 80px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.lien[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-family: cocogoose;\r\n    color: white;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    margin: 5%;\r\n}\r\n\r\n.lien[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.inscription[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    margin-top: 100px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: white;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.inscription[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    margin-top: -100px;\r\n}\r\n\r\n.inscription[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    border: none;\r\n    border-bottom: 1px solid #013d51;\r\n    outline: none;\r\n}\r\n\r\n.inscription[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n}\r\n\r\n.inscription[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    background-color: #013d51;\r\n    border: none;\r\n    border-radius: 20px;\r\n    color: white;\r\n    width: 150px;\r\n    margin-left: 30%;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.inscription[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: white;\r\n    border: 1px solid #013d51;\r\n    color: #013d51;\r\n}\r\n\r\n.inscription[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #013d51;\r\n    font-size: 20px;\r\n}\r\n\r\n.inscription[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-left: 10%;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    margin-bottom: -4px;\r\n    margin-top: 100px;\r\n    margin-left: 90%;\r\n    width: 6%;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    width: 102%;\r\n    background-color: white;\r\n    height: 70px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    color: #013d51;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9pbnNjcmlwdGlvbi9pbnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDEwMDAwMDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsYWNrYWRkZXIgSVRDO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5saWVuIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxpZW4gYSB7XHJcbiAgICBmb250LWZhbWlseTogY29jb2dvb3NlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4ubGllbiBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uaW5zY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW5zY3JpcHRpb24gaW1nIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbn1cclxuXHJcbi5pbnNjcmlwdGlvbiBpbnB1dCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMTNkNTE7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaW5zY3JpcHRpb24gaW5wdXQsXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5pbnNjcmlwdGlvbiBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmluc2NyaXB0aW9uIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMTNkNTE7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuLmluc2NyaXB0aW9uIGgyLFxyXG5wLFxyXG5sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmluc2NyaXB0aW9uIGgyOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ucmFkaW8ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcclxuICAgIHdpZHRoOiA2JTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inscription',
          templateUrl: './inscription.component.html',
          styleUrls: ['./inscription.component.css']
        }]
      }], function () {
        return [{
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        createdUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/livreur/livreur.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/livreur/livreur.component.ts ***!
    \**********************************************/

  /*! exports provided: LivreurComponent */

  /***/
  function srcAppLivreurLivreurComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LivreurComponent", function () {
      return LivreurComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var _entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../entities/commande/commande.service */
    "./src/app/entities/commande/commande.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LivreurComponent_tr_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LivreurComponent_tr_33_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var commande_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onsubmit(commande_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Livrer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var commande_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.nom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.quantite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.prixUnitaire * commande_r1.quantite);
      }
    }

    var LivreurComponent = /*#__PURE__*/function () {
      function LivreurComponent(activatedRoute, user, router, commandeserv) {
        _classCallCheck(this, LivreurComponent);

        this.activatedRoute = activatedRoute;
        this.user = user;
        this.router = router;
        this.commandeserv = commandeserv;
        this.commandes = [];
        this.idResto = "";
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.error = false;
        this.quantite = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
      }

      _createClass(LivreurComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_livreur"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "livreur") {
              this.user.deconnexion("token_livreur");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_user"];
              this.email = item["email"];
              this.nom = item["nom"];
            }
          }

          this.loadAll();
        }
      }, {
        key: "onsubmit",
        value: function onsubmit(commande) {
          if (confirm("Livrer cette commande?") == true) {
            this.commandeserv.livrer(commande._id);
          } else {}
        }
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this9 = this;

          this.idResto = this.activatedRoute.snapshot.params["id"];
          this.commandeserv.livraison(this.id_user).then(function (result) {
            _this9.commandes = result;
          });
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_livreur");
        }
      }]);

      return LivreurComponent;
    }();

    LivreurComponent.ɵfac = function LivreurComponent_Factory(t) {
      return new (t || LivreurComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_4__["CommandeService"]));
    };

    LivreurComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LivreurComponent,
      selectors: [["app-livreur"]],
      decls: 38,
      vars: 1,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "livreur", 1, "logo"], [1, "menu-toggle"], ["href", "livreur", 1, "focus"], [1, "mid"], [3, "click"], [1, "clearfix"], [1, "content-table"], [4, "ngFor", "ngForOf"], [1, "footer"]],
      template: function LivreurComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Livreur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Livreur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Livraison");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LivreurComponent_Template_a_click_20_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Plat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "quantite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Prix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LivreurComponent_tr_33_Template, 10, 3, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commandes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-right: 380px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]{\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 10px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n    padding-top: 150px;\r\n\tmin-width: 400px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: #00CED1;\r\n\tmargin: 100px;\r\n\tcolor: white;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n\tpadding: 2px 40px;\r\n\theight: 60px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\tbackground-color: #f3f3f3;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n    margin-top: 340px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 95px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGl2cmV1ci9saXZyZXVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixrQkFBa0I7SUFDZixrQkFBa0I7Q0FDckIsZ0JBQWdCO0FBQ2pCOztB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QUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9saXZyZXVyL2xpdnJldXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTAwMDAwO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsYWNrYWRkZXIgSVRDO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbm5hdiB1bCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG5uYXYgdWwgbGkubWlkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMTNkNTE7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAtM3B4IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uYXYgdWwgbGkgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6IHRlYWw7XHJcbn1cclxuXHJcbmhlYWRlciAucnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IwRTBFNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmhlYWRlciAucnMgaW1nIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG59XHJcblxyXG5oZWFkZXIgLnJzIC5pbWcxIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtdGFibGV7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuXHRib3JkZXItc3BhY2luZzogMTBweDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcblx0bWluLXdpZHRoOiA0MDBweDtcclxufVxyXG4uY29udGVudC10YWJsZSBpbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdHdpZHRoOiA0MHB4O1xyXG59XHJcbi5jb250ZW50LXRhYmxlIGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgdGhlYWQgdGh7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwQ0VEMTtcclxuXHRtYXJnaW46IDEwMHB4O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgdGQsdGh7XHJcblx0cGFkZGluZzogMnB4IDQwcHg7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5jb250ZW50LXRhYmxlIHRib2R5IHRye1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDM0MHB4O1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmNoaWZmcmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IENvY29nb29zZSBQcm8gU2VtaUxpZ2h0O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE3MHB4KSB7XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMTIlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSB7XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMiU7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIHRvcDtcclxuICAgIH1cclxuICAgIGhlYWRlciAucnMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTVweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDI0MHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODVweCkge1xyXG4gICAgbmF2IHVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaSBhIHtcclxuICAgICAgICBtYXJnaW46IC0zcHggMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjMwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXGYwYzknO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZS5hY3RpdmU6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnXFxmMDVjJztcclxuICAgICAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBuYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiA5MnB4O1xyXG4gICAgICAgIGhlaWdodDogOTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwgbGkgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwgbGkgYS5mb2N1c3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwgbGkgYTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NzVweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDE3MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLnNvdXMtdGl0cmUzIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAuc291cy10aXRyZTMgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGZvb3RlciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5zb3VzLXRpdHJlIHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5zb3VzLXRpdHJlIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LivreurComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-livreur',
          templateUrl: './livreur.component.html',
          styleUrls: ['./livreur.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_4__["CommandeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _entities_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../entities/user/user.model */
    "./src/app/entities/user/user.model.ts");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ou mot de passe incorrect ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(UserService, activatedRoute, router) {
        _classCallCheck(this, LoginComponent);

        this.UserService = UserService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.email = '';
        this.mdp = '';
        this.message = "";
        this.user = [];
        this.error = false;
        this.erreur = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          var mail = this.activatedRoute.snapshot.params["email"];

          if (mail != null) {
            this.UserService.validercompte(mail);
            this.router.navigate(['/login']);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          var user = new _entities_user_user_model__WEBPACK_IMPORTED_MODULE_2__["LoginUser"](this.UserForm.value['email'], this.UserForm.value['mdp']); //  console.log(this.email);
          // console.log(user);

          this.UserService.login(user).then(function (result) {
            if (result === undefined) {
              _this10.erreur = false;
              _this10.error = true;
              _this10.erreur = true;
            } else {
              _this10.error = false;

              if (result["status"] == "NON") {
                _this10.erreur = false;
                console.log("NONONON");
                _this10.message = result["message"];
                _this10.erreur = true;
              } else if (result["status"] == "OK") {
                console.log("YES");
                _this10.message = result["message"];
                console.log(result);

                if (result["profil"] == "client") {
                  localStorage.setItem("token_client", JSON.stringify(result));
                  var item = JSON.parse(localStorage.getItem("token_client"));

                  _this10.router.navigateByUrl("/client");
                }

                if (result["profil"] == "resto") {
                  localStorage.setItem("token_resto", JSON.stringify(result));

                  var _item = JSON.parse(localStorage.getItem("token_resto"));

                  _this10.router.navigateByUrl("/restaurant");
                }

                if (result["profil"] == "admin") {
                  localStorage.setItem("token_admin", JSON.stringify(result));

                  var _item2 = JSON.parse(localStorage.getItem("token_admin"));

                  _this10.router.navigateByUrl("/admin");
                }

                if (result["profil"] == "livreur") {
                  localStorage.setItem("token_livreur", JSON.stringify(result));

                  var _item3 = JSON.parse(localStorage.getItem("token_livreur"));

                  _this10.router.navigateByUrl("/livreur");
                } //console.log("ITO"+item["token"]);

              } // this.createdUser.emit(result);
              //this.refresh();

            }
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.UserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            mdp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.mdp, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 39,
      vars: 3,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "#", 1, "logo"], [1, "rs"], [1, "lien"], [1, "row"], [1, "connexion"], ["src", ""], [2, "color", "red"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "customform", 3, "formGroup", "ngSubmit"], ["formControlName", "email", "id", "email", "type", "text "], ["formControlName", "mdp", "id", "mdp", "type", "password"], ["type", "submit", 3, "disabled"], [1, "s-12", "l-7"], ["href", "inscription "], [1, "footer"], ["role", "alert", 1, "alert", "alert-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Connexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Connexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_21_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mot de passe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Valider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ou inscrivez vous!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erreur);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.UserForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.UserForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\n.lien[_ngcontent-%COMP%] {\r\n    margin-top: 80px;\r\n}\r\n\r\n.lien[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-family: cocogoose;\r\n    color: white;\r\n    font-size: 18px;\r\n    margin: 5%;\r\n}\r\n\r\n.lien[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.connexion[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    margin-top: 150px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: white;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.connexion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    margin-top: -100px;\r\n}\r\n\r\n.connexion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    border: none;\r\n    border-bottom: 1px solid #013d51;\r\n    outline: none;\r\n}\r\n\r\n.connexion[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n}\r\n\r\n.connexion[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    background-color: #013d51;\r\n    border: none;\r\n    border-radius: 20px;\r\n    color: white;\r\n    width: 150px;\r\n    margin-left: 30%;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.connexion[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: white;\r\n    border: 1px solid #013d51;\r\n    color: #013d51;\r\n}\r\n\r\n.connexion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #013d51;\r\n    font-size: 20px;\r\n}\r\n\r\n.connexion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    margin-bottom: -4px;\r\n    margin-top: 170px;\r\n    margin-left: 90%;\r\n    width: 6%;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    width: 102%;\r\n    background-color: white;\r\n    height: 70px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    color: #013d51;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDEwMDAwMDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsYWNrYWRkZXIgSVRDO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5saWVuIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5saWVuIGEge1xyXG4gICAgZm9udC1mYW1pbHk6IGNvY29nb29zZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi5saWVuIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5jb25uZXhpb24ge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29ubmV4aW9uIGltZyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG59XHJcblxyXG4uY29ubmV4aW9uIGlucHV0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAxM2Q1MTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb25uZXhpb24gaW5wdXQsXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5jb25uZXhpb24gYnV0dG9uIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb25uZXhpb24gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAxM2Q1MTtcclxuICAgIGNvbG9yOiAjMDEzZDUxO1xyXG59XHJcblxyXG4uY29ubmV4aW9uIGgyLFxyXG5wLFxyXG5sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNvbm5leGlvbiBoMjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xyXG4gICAgd2lkdGg6IDYlO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuZm9vdGVyIHAge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiAjMDEzZDUxO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product/product-create/product-create.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/product/product-create/product-create.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProductCreateComponent */

  /***/
  function srcAppProductProductCreateProductCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function () {
      return ProductCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_entities_product_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/entities/product/product.model */
    "./src/app/entities/product/product.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_entities_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/entities/product/product.service */
    "./src/app/entities/product/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductCreateComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCreateComponent_div_2_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.hideError();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Warning!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Error creating product. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProductCreateComponent = /*#__PURE__*/function () {
      function ProductCreateComponent(productService, formBuilder) {
        _classCallCheck(this, ProductCreateComponent);

        this.productService = productService;
        this.formBuilder = formBuilder;
        this.name = '';
        this.brand = '';
        this.error = false;
        this.createdProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      } // Init the form when starting the view.


      _createClass(ProductCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        } // Manage the submit action and create the new product.

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          var product = new src_app_entities_product_product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](this.productForm.value['name'], this.productForm.value['brand'], null);
          this.productService.create(product).then(function (result) {
            if (result === undefined) {
              _this11.error = true;
            } else {
              _this11.error = false;

              _this11.createdProduct.emit(result);
            }
          });
        } // Hide the error message.

      }, {
        key: "hideError",
        value: function hideError() {
          this.error = false;
        } // Init the creation form.

      }, {
        key: "initForm",
        value: function initForm() {
          this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.brand, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }]);

      return ProductCreateComponent;
    }();

    ProductCreateComponent.ɵfac = function ProductCreateComponent_Factory(t) {
      return new (t || ProductCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    ProductCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductCreateComponent,
      selectors: [["app-product-create"]],
      outputs: {
        createdProduct: "createdProduct"
      },
      decls: 18,
      vars: 3,
      consts: [[4, "ngIf"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name", 1, "col-sm-2", "control-label"], [1, "col-sm-10"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "brand", 1, "col-sm-2", "control-label"], ["type", "text", "id", "brand", "formControlName", "brand", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 3, "click"]],
      template: function ProductCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create a product:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductCreateComponent_div_2_Template, 10, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductCreateComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.productForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1jcmVhdGUvcHJvZHVjdC1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-create',
          templateUrl: './product-create.component.html',
          styleUrls: ['./product-create.component.css']
        }]
      }], function () {
        return [{
          type: src_app_entities_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, {
        createdProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/product/product-list/product-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/product/product-list/product-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_entities_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/entities/product/product.service */
    "./src/app/entities/product/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductListComponent_table_2_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_table_2_tr_10_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var product_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4["delete"](product_r3._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.brand);
      }
    }

    function ProductListComponent_table_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Brand");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductListComponent_table_2_tr_10_Template, 8, 2, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.products);
      }
    }

    function ProductListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Information:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The product collection is empty.\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(productService) {
        _classCallCheck(this, ProductListComponent);

        this.productService = productService;
        this.products = [];
        this.productToDisplay = null;
      } // Load all the products when starting the view.


      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAll();
        } // If new product created, we add it to the list.

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.productToDisplay !== null) {
            this.products.push(this.productToDisplay);
          }
        } // Delete a product. 

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this12 = this;

          this.productService["delete"](id).then(function (result) {
            return _this12.loadAll();
          });
        } // Load all products.

      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this13 = this;

          this.productService.get().then(function (result) {
            _this13.products = result;
          });
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      inputs: {
        productToDisplay: "productToDisplay"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 2,
      consts: [["class", "table", 4, "ngIf"], ["class", "alert alert-info", "role", "info", 4, "ngIf"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "delete", 3, "click"], ["role", "info", 1, "alert", "alert-info"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-exclamation-sign"], [1, "sr-only"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Products:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductListComponent_table_2_Template, 11, 1, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductListComponent_div_3_Template, 5, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".delete[_ngcontent-%COMP%] {\n    color: red !important;\n    font-weight: bold;\n    cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZSB7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.css']
        }]
      }], function () {
        return [{
          type: src_app_entities_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }];
      }, {
        productToDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/restaurant/benefice/benefice.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/restaurant/benefice/benefice.component.ts ***!
    \***********************************************************/

  /*! exports provided: BeneficeComponent */

  /***/
  function srcAppRestaurantBeneficeBeneficeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeneficeComponent", function () {
      return BeneficeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/entities/plat/plat.service */
    "./src/app/entities/plat/plat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/entities/commande/commande.service */
    "./src/app/entities/commande/commande.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BeneficeComponent_tr_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var commande_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.quantite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.quantite * commande_r1.totalPrix - commande_r1.quantite * commande_r1.totalRevient);
      }
    }

    var BeneficeComponent = /*#__PURE__*/function () {
      function BeneficeComponent(platserv, activatedRoute, user, router, commandeserv) {
        _classCallCheck(this, BeneficeComponent);

        this.platserv = platserv;
        this.activatedRoute = activatedRoute;
        this.user = user;
        this.router = router;
        this.commandeserv = commandeserv;
        this.commandes = [];
        this.idResto = "";
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.error = false;
        this.quantite = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.createdCommande = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BeneficeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_resto"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "resto") {
              this.user.deconnexion("token_resto");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_user"];
              this.email = item["email"];
              this.nom = item["nom"];
            }
          }

          this.loadAll();
        }
      }, {
        key: "onsubmit",
        value: function onsubmit(plat) {}
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this14 = this;

          this.commandeserv.benefice(this.id_user).then(function (result) {
            _this14.commandes = result;
          });
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_resto");
        }
      }]);

      return BeneficeComponent;
    }();

    BeneficeComponent.ɵfac = function BeneficeComponent_Factory(t) {
      return new (t || BeneficeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_2__["PlatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_5__["CommandeService"]));
    };

    BeneficeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BeneficeComponent,
      selectors: [["app-benefice"]],
      outputs: {
        createdCommande: "createdCommande"
      },
      decls: 47,
      vars: 1,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "livreur", 1, "logo"], [1, "menu-toggle"], ["href", "restaurant"], [1, "mid"], ["href", "plat/nouveau"], ["href", "restaurant/commande"], ["href", "restaurant/benefice", 1, "focus"], [3, "click"], [1, "clearfix"], [1, "content-table"], [4, "ngFor", "ngForOf"], [1, "footer"]],
      template: function BeneficeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Livreur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Plats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nouveaux-plats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Commande");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Benefices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeneficeComponent_Template_a_click_29_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Plat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Quantite vendu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Benefice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BeneficeComponent_tr_42_Template, 7, 3, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commandes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -230px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]{\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 10px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n    padding-top: 150px;\r\n\tmin-width: 400px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: #00CED1;\r\n\tmargin: 100px;\r\n\tcolor: white;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n\tpadding: 2px 40px;\r\n\theight: 60px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\tbackground-color: #f3f3f3;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n    margin-top: 340px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 210px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9iZW5lZmljZS9iZW5lZmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsa0JBQWtCO0lBQ2Ysa0JBQWtCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckIsV0FBVztBQUNaOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsWUFBWTtDQUNaLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtBQUNiOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLDJCQUF3QjtXQUF4Qix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMEJBQXVCO1dBQXZCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJCQUF3QjtXQUF4Qix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULGFBQWE7UUFDYix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGNBQWM7UUFDZCxTQUFTO0lBQ2I7SUFDQTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudC9iZW5lZmljZS9iZW5lZmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxMDAwMDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxhY2thZGRlciBJVEM7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubmF2IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5taWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAxM2Q1MTtcclxufVxyXG5cclxubmF2IHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC0zcHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogdGVhbDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBFMEU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyBpbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbmhlYWRlciAucnMgLmltZzEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudC10YWJsZXtcclxuXHRib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAxMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuXHRtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcbi5jb250ZW50LXRhYmxlIGlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0d2lkdGg6IDQwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGVudC10YWJsZSB0aGVhZCB0aHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDBDRUQxO1xyXG5cdG1hcmdpbjogMTAwcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGVudC10YWJsZSB0ZCx0aHtcclxuXHRwYWRkaW5nOiAycHggNDBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgdGJvZHkgdHJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMzQwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uY2hpZmZyZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogQ29jb2dvb3NlIFBybyBTZW1pTGlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSAxMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSAyJTtcclxuICAgIH1cclxuICAgIG5hdiB1bCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgdG9wO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIC5ycyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg1NXB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjQwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NXB4KSB7XHJcbiAgICBuYXYgdWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIGxpIGEge1xyXG4gICAgICAgIG1hcmdpbjogLTNweCAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxMzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyMzBweDtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcZjBjOSc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXGYwNWMnO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0b3A6IDkycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwgbGkgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwgbGkgYS5mb2N1c3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwgbGkgYTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NzVweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDE3MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLnNvdXMtdGl0cmUzIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAuc291cy10aXRyZTMgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGZvb3RlciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5zb3VzLXRpdHJlIHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5zb3VzLXRpdHJlIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeneficeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-benefice',
          templateUrl: './benefice.component.html',
          styleUrls: ['./benefice.component.css']
        }]
      }], function () {
        return [{
          type: src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_2__["PlatService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_5__["CommandeService"]
        }];
      }, {
        createdCommande: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/restaurant/commande/commande.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/restaurant/commande/commande.component.ts ***!
    \***********************************************************/

  /*! exports provided: CommandeRestaurantComponent */

  /***/
  function srcAppRestaurantCommandeCommandeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandeRestaurantComponent", function () {
      return CommandeRestaurantComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");
    /* harmony import */


    var src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/entities/commande/commande.service */
    "./src/app/entities/commande/commande.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CommandeRestaurantComponent_tr_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var commande_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.nom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.quantite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.prixUnitaire * commande_r1.quantite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](commande_r1.Client);
      }
    }

    var CommandeRestaurantComponent = /*#__PURE__*/function () {
      function CommandeRestaurantComponent(formBuilder, activatedRoute, router, user, commandeserv) {
        _classCallCheck(this, CommandeRestaurantComponent);

        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = user;
        this.commandeserv = commandeserv;
        this.commandes = [];
        this.idResto = "";
        this.id_user = '';
        this.email = '';
      }

      _createClass(CommandeRestaurantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('.menu-toggle').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.menu-toggle').toggleClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_resto"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "resto") {
              this.user.deconnexion("token_resto");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_user"];
              this.email = item["email"];
            }
          }

          this.loadAll();
        }
      }, {
        key: "onsubmit",
        value: function onsubmit(commande) {}
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this15 = this;

          this.commandeserv.CommandeResto(this.id_user).then(function (result) {
            _this15.commandes = result;
          });
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_resto");
        }
      }]);

      return CommandeRestaurantComponent;
    }();

    CommandeRestaurantComponent.ɵfac = function CommandeRestaurantComponent_Factory(t) {
      return new (t || CommandeRestaurantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_5__["CommandeService"]));
    };

    CommandeRestaurantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommandeRestaurantComponent,
      selectors: [["app-commande"]],
      decls: 49,
      vars: 1,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "livreur", 1, "logo"], [1, "menu-toggle"], ["href", "restaurant"], [1, "mid"], ["href", "plat/nouveau"], ["href", "restaurant/commande", 1, "focus"], ["href", "restaurant/benefice"], [3, "click"], [1, "clearfix"], [1, "content-table"], [4, "ngFor", "ngForOf"], [1, "footer"]],
      template: function CommandeRestaurantComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Livreur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Plats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nouveaux-plats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Commande");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Benefices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommandeRestaurantComponent_Template_a_click_29_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Plat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "quantite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Prix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CommandeRestaurantComponent_tr_44_Template, 9, 4, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commandes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -230px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]{\r\n\tborder-collapse: separate;\r\n\tborder-spacing: 10px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n    padding-top: 150px;\r\n\tmin-width: 400px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\twidth: 40px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tbackground-color: #00CED1;\r\n\tmargin: 100px;\r\n\tcolor: white;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n\tpadding: 2px 40px;\r\n\theight: 60px;\r\n}\r\n\r\n.content-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n\tbackground-color: #f3f3f3;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n    margin-top: 340px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 210px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9jb21tYW5kZS9jb21tYW5kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsa0JBQWtCO0lBQ2Ysa0JBQWtCO0NBQ3JCLGdC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LFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudC9jb21tYW5kZS9jb21tYW5kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxMDAwMDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxhY2thZGRlciBJVEM7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubmF2IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5taWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAxM2Q1MTtcclxufVxyXG5cclxubmF2IHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC0zcHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogdGVhbDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBFMEU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyBpbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbmhlYWRlciAucnMgLmltZzEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudC10YWJsZXtcclxuXHRib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAxMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuXHRtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcbi5jb250ZW50LXRhYmxlIGlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0d2lkdGg6IDQwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGVudC10YWJsZSB0aGVhZCB0aHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDBDRUQxO1xyXG5cdG1hcmdpbjogMTAwcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGVudC10YWJsZSB0ZCx0aHtcclxuXHRwYWRkaW5nOiAycHggNDBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGFibGUgdGJvZHkgdHJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMzQwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uY2hpZmZyZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogQ29jb2dvb3NlIFBybyBTZW1pTGlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSAxMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSAyJTtcclxuICAgIH1cclxuICAgIG5hdiB1bCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgdG9wO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIC5ycyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg1NXB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjQwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NXB4KSB7XHJcbiAgICBuYXYgdWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIGxpIGEge1xyXG4gICAgICAgIG1hcmdpbjogLTNweCAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxMzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyMzBweDtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcZjBjOSc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXGYwNWMnO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0b3A6IDkycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwgbGkgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwgbGkgYS5mb2N1c3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUgdWwgbGkgYTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NzVweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDE3MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLnNvdXMtdGl0cmUzIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAuc291cy10aXRyZTMgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGZvb3RlciBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5zb3VzLXRpdHJlIHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5zb3VzLXRpdHJlIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandeRestaurantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-commande',
          templateUrl: './commande.component.html',
          styleUrls: ['./commande.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_entities_commande_commande_service__WEBPACK_IMPORTED_MODULE_5__["CommandeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/restaurant/liste-plat/restaurant.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/restaurant/liste-plat/restaurant.component.ts ***!
    \***************************************************************/

  /*! exports provided: RestaurantComponent */

  /***/
  function srcAppRestaurantListePlatRestaurantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function () {
      return RestaurantComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");

    var RestaurantComponent = /*#__PURE__*/function () {
      function RestaurantComponent(router, user) {
        _classCallCheck(this, RestaurantComponent);

        this.router = router;
        this.user = user;
        this.id_user = '';
        this.email = '';
        this.nom = '';
      }

      _createClass(RestaurantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('.menu-toggle').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.menu-toggle').toggleClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1__('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_resto"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "resto") {
              this.user.deconnexion("token_resto");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_User"];
              this.email = item["email"];
              this.nom = item["nom"];
            }
          }
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_resto");
        }
      }]);

      return RestaurantComponent;
    }();

    RestaurantComponent.ɵfac = function RestaurantComponent_Factory(t) {
      return new (t || RestaurantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    RestaurantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RestaurantComponent,
      selectors: [["app-restaurant"]],
      decls: 67,
      vars: 0,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "restaurant", 1, "logo"], [1, "menu-toggle"], ["href", "restaurant", 1, "focus"], [1, "mid"], ["href", "plat/nouveau"], ["href", "restaurant/commande"], ["href", "restaurant/benefice"], [3, "click"], [1, "clearfix"], [1, "titre"], ["alt", "header", "src", "assets/pictogrammes/elements/resto.webp", 1, "header"], [1, "titre1"], [1, "we_care"], [1, "half", "clearfix"], [1, "div"], [1, "plat"]],
      template: function RestaurantComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Agence de communication Minucia Madagascar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Plats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nouveaux-plats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Commande");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Benefices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RestaurantComponent_Template_a_click_29_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "E-kaly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Satisfait ou rembourser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Supprimer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Supprimer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Supprimer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Supprimer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -230px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 550px;\r\n    margin: 92px 0px;\r\n    background-color: blue;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 550px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center 22%;\r\n       object-position: center 22%;\r\n    opacity: 0.6;\r\n}\r\n\r\n.titre1[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 190px;\r\n    color: white;\r\n    font-weight: normal;\r\n    font-family: Blackadder ITC;\r\n    font-size: 70px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 290px;\r\n    color: white;\r\n    font-weight: normal;\r\n    font-size: 30px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    text-align: center;\r\n    background-color: white;\r\n    border-radius: 25px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.half[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n    width: 100%;\r\n}\r\n\r\n.div[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    margin: 4%;\r\n    margin-top: 0%;\r\n    height: 300px;\r\n    float: left;\r\n}\r\n\r\n.div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 250px;\r\n    background-color: white;\r\n}\r\n\r\n.div[_ngcontent-%COMP%]   .plat[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 250px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    border: 1px solid #013d51;\r\n    border-radius: 5px;\r\n    margin: 1.5%;\r\n    background-color: white;\r\n}\r\n\r\n.div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: #013d51;\r\n    color: white;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n    height: 70px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 210px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9saXN0ZS1wbGF0L3Jlc3RhdXJhbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVC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QUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFNBQVM7UUFDVCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50L2xpc3RlLXBsYXQvcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxMDAwMDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmxhY2thZGRlciBJVEM7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubmF2IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5taWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAxM2Q1MTtcclxufVxyXG5cclxubmF2IHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC0zcHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogdGVhbDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBFMEU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaGVhZGVyIC5ycyBpbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbmhlYWRlciAucnMgLmltZzEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udGl0cmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgbWFyZ2luOiA5MnB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0cmUgLmhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIDIyJTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnRpdHJlMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE5MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGFja2FkZGVyIElUQztcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG5cclxuLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjkwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4udGl0cmUgLnNvdXMtdGl0cmUge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4udGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi50aXRyZSAuc291cy10aXRyZSBwIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmhhbGYge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZGl2IC5wbGF0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGl2IC5wbGF0IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmRpdiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMTNkNTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDEuNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRpdiBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmNoaWZmcmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IENvY29nb29zZSBQcm8gU2VtaUxpZ2h0O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE3MHB4KSB7XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMTIlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSB7XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMiU7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIHRvcDtcclxuICAgIH1cclxuICAgIGhlYWRlciAucnMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTVweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDI0MHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODVweCkge1xyXG4gICAgbmF2IHVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaSBhIHtcclxuICAgICAgICBtYXJnaW46IC0zcHggMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MzBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjMwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXGYwYzknO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZS5hY3RpdmU6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnXFxmMDVjJztcclxuICAgICAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBuYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiA5MnB4O1xyXG4gICAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHVsIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHVsIGxpIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIGxpIGEuZm9jdXN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBuYXYuYWN0aXZlIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjc1cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxMTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5zb3VzLXRpdHJlMyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLnNvdXMtdGl0cmUzIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBmb290ZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSB7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5zb3VzLXRpdHJlIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSBwIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestaurantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-restaurant',
          templateUrl: './restaurant.component.html',
          styleUrls: ['./restaurant.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/restaurant/new-plat/new-plat.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/restaurant/new-plat/new-plat.component.ts ***!
    \***********************************************************/

  /*! exports provided: NewPlatComponent */

  /***/
  function srcAppRestaurantNewPlatNewPlatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPlatComponent", function () {
      return NewPlatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_entities_plat_plat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/entities/plat/plat.model */
    "./src/app/entities/plat/plat.model.ts");
    /* harmony import */


    var src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/entities/plat/plat.service */
    "./src/app/entities/plat/plat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/entities/user/user.service */
    "./src/app/entities/user/user.service.ts");

    var NewPlatComponent = /*#__PURE__*/function () {
      function NewPlatComponent(PlatService, formBuilder, router, user) {
        _classCallCheck(this, NewPlatComponent);

        this.PlatService = PlatService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.user = user;
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.prixVente = '';
        this.prixRevient = '';
        this.visible = '';
        this.error = false;
        this.createdPlat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      } // Init the form when starting the view.


      _createClass(NewPlatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          jquery__WEBPACK_IMPORTED_MODULE_2__('.menu-toggle').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.menu-toggle').toggleClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_2__('nav').toggleClass('active');
          });
          var item = JSON.parse(localStorage.getItem("token_resto"));

          if (!item) {
            this.router.navigate(['/login']);
          } else {
            if (item["profil"] != "resto") {
              this.user.deconnexion("token_resto");
              this.router.navigate(['/login']);
            } else {
              this.id_user = item["id_user"];
              this.email = item["email"];
            }
          }
        } // Manage the submit action and create the new Plat.

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this16 = this;

          if (this.PlatForm.value['visible'] == "true") {
            var plat = new src_app_entities_plat_plat_model__WEBPACK_IMPORTED_MODULE_3__["Plat"](null, this.PlatForm.value['nom'], this.PlatForm.value['prixRevient'], this.PlatForm.value['prixVente'], true, this.id_user, null);
            this.PlatService.create(plat).then(function (result) {
              if (result === undefined) {
                _this16.error = true;
              } else {
                _this16.error = false;

                _this16.createdPlat.emit(result);
              }
            });
          } else {
            var _plat = new src_app_entities_plat_plat_model__WEBPACK_IMPORTED_MODULE_3__["Plat"](null, this.PlatForm.value['nom'], this.PlatForm.value['prixRevient'], this.PlatForm.value['prixVente'], false, this.id_user, null);

            this.PlatService.create(_plat).then(function (result) {
              if (result === undefined) {
                _this16.error = true;
              } else {
                _this16.error = false;

                _this16.createdPlat.emit(result);
              }
            });
          }

          this.router.navigate(['/restaurant']);
        } // Hide the error message.

      }, {
        key: "hideError",
        value: function hideError() {
          this.error = false;
        }
      }, {
        key: "deconnexion",
        value: function deconnexion() {
          this.user.deconnexion("token_resto");
        } // Init the creation form.

      }, {
        key: "initForm",
        value: function initForm() {
          this.PlatForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            prixRevient: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.prixRevient, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            prixVente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.prixVente, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            visible: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.visible, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }]);

      return NewPlatComponent;
    }();

    NewPlatComponent.ɵfac = function NewPlatComponent_Factory(t) {
      return new (t || NewPlatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_4__["PlatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
    };

    NewPlatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewPlatComponent,
      selectors: [["app-new-plat"]],
      outputs: {
        createdPlat: "createdPlat"
      },
      decls: 61,
      vars: 2,
      consts: [["lang", "en-US"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "HTML, CSS, JavaScript"], ["name", "author", "content", "Hajanirivo Sitraka"], ["rel", "stylesheet", "type", "text/css", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "size-1140"], ["href", "restaurant", 1, "logo"], [1, "menu-toggle"], ["href", "restaurant"], [1, "mid"], ["href", "plat/nouveau", 1, "focus"], ["href", "restaurant/commande"], ["href", "restaurant/benefice"], [3, "click"], [1, "clearfix"], [1, "lien"], [1, "row"], [1, "form"], [2, "color", "red"], [1, "customform", 3, "formGroup", "ngSubmit"], ["formControlName", "nom", "id", "nom", "type", "text"], ["formControlName", "prixRevient", "id", "prixRevient", "type", "number"], ["formControlName", "prixVente", "id", "prixVente", "type", "number"], ["formControlName", "visible"], ["value", "true"], ["value", "false"], ["type", "submit", 3, "disabled"], ["src", "", 1, "footer"]],
      template: function NewPlatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nouveau plat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Plats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nouveaux-plats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Commande");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Benefices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPlatComponent_Template_a_click_29_listener() {
            return ctx.deconnexion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Deconnexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewPlatComponent_Template_form_ngSubmit_38_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "nom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "prix revient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "prix vente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "visible sur le site e-kaly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Non visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Valider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Copyright 2022 \xA9 Hajanirivo Sitraka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.PlatForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.PlatForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: #013d51;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #013d51;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    transition: 0.6s;\r\n    background-color: white;\r\n    z-index: 100000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding-left: 8%;\r\n    font-size: 40px;\r\n    font-family: Blackadder ITC;\r\n    color: #013d51;\r\n    text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: -230px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    height: 11px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mid[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    list-style: none;\r\n    border-left: 3px solid #013d51;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: -3px 20px;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    font-weight: bolder;\r\n    color: #013d51;\r\n    cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n    color: teal;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n    background-color: #B0E0E6;\r\n    border-radius: 20px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 550px;\r\n    margin: 92px 0px;\r\n    background-color: blue;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 550px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center 22%;\r\n       object-position: center 22%;\r\n    opacity: 0.6;\r\n}\r\n\r\n.titre1[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 190px;\r\n    color: white;\r\n    font-weight: normal;\r\n    font-family: Blackadder ITC;\r\n    font-size: 70px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 290px;\r\n    color: white;\r\n    font-weight: normal;\r\n    font-size: 30px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    text-align: center;\r\n    background-color: white;\r\n    border-radius: 25px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.lien[_ngcontent-%COMP%] {\r\n    margin-top: 80px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.lien[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-family: cocogoose;\r\n    color: white;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    margin: 5%;\r\n}\r\n\r\n.lien[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    margin-top: 100px;\r\n    margin-left: 35%;\r\n    background-color: white;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    margin-top: -100px;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    border: none;\r\n    border-bottom: 1px solid #013d51;\r\n    outline: none;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], label[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    background-color: #013d51;\r\n    border: none;\r\n    border-radius: 20px;\r\n    color: white;\r\n    width: 150px;\r\n    margin-left: 30%;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: white;\r\n    border: 1px solid #013d51;\r\n    color: #013d51;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #013d51;\r\n    font-size: 20px;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-left: 10%;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n    text-align: center;\r\n    background-color: white;\r\n    height: 70px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n.chiffre[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-family: Cocogoose Pro SemiLight;\r\n}\r\n\r\n@media (max-width: 1170px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 12%;\r\n           object-position: 50% 12%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% 2%;\r\n           object-position: 50% 2%;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        -o-object-position: 50% top;\r\n           object-position: 50% top;\r\n    }\r\n    header[_ngcontent-%COMP%]   .rs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 855px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 140px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 240px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        padding-left: 5%;\r\n    }\r\n}\r\n\r\n@media (max-width: 785px) {\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin: -3px 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 430px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 130px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 8%;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 40px;\r\n        height: 40px;\r\n        margin-left: 40%;\r\n        cursor: pointer;\r\n        text-align: center;\r\n        font-size: 30px;\r\n        color: #013d51;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%]:before {\r\n        content: '\\f0c9';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    .menu-toggle.active[_ngcontent-%COMP%]:before {\r\n        content: '\\f05c';\r\n        font-family: fontAwesome;\r\n        line-height: 40px;\r\n    }\r\n    nav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    nav.active[_ngcontent-%COMP%] {\r\n        display: block;\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 92px;\r\n        height: 210px;\r\n        background-color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        display: block;\r\n        border: none;\r\n        padding: 0px;\r\n        padding: 20px;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #013d51;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        padding: 15px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%]{\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n    nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        background-color: #013d51;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 380px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 110px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 80px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 170px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 60px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n    }\r\n    .sous-titre3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 12px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .titre[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n        height: 250px;\r\n    }\r\n    .menu-toggle[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n    .titre1[_ngcontent-%COMP%] {\r\n        top: 50px;\r\n        font-size: 35px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .we_care[_ngcontent-%COMP%] {\r\n        top: 150px;\r\n        width: 350px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n        text-align: center;\r\n        background-color: white;\r\n        border-radius: 25px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n    .titre[_ngcontent-%COMP%]   .sous-titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .form[_ngcontent-%COMP%] {\r\n        margin-left: 30%;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .form[_ngcontent-%COMP%] {\r\n        margin-left: 25%;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .form[_ngcontent-%COMP%] {\r\n        margin-left: 15%;\r\n    }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n    .form[_ngcontent-%COMP%] {\r\n        margin-left: 2%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC9uZXctcGxhdC9uZXctcGxhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFD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STtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQvbmV3LXBsYXQvbmV3LXBsYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTAwMDAwO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEJsYWNrYWRkZXIgSVRDO1xyXG4gICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbm5hdiB1bCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG5uYXYgdWwgbGkubWlkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMTNkNTE7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAtM3B4IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uYXYgdWwgbGkgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6IHRlYWw7XHJcbn1cclxuXHJcbmhlYWRlciAucnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IwRTBFNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmhlYWRlciAucnMgaW1nIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG59XHJcblxyXG5oZWFkZXIgLnJzIC5pbWcxIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnRpdHJlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIG1hcmdpbjogOTJweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciAyMiU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi50aXRyZTEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LWZhbWlseTogQmxhY2thZGRlciBJVEM7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuXHJcbi50aXRyZSAud2VfY2FyZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI5MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnRpdHJlIC5zb3VzLXRpdHJlIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLnRpdHJlIC5zb3VzLXRpdHJlIHAge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4udGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5saWVuIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxpZW4gYSB7XHJcbiAgICBmb250LWZhbWlseTogY29jb2dvb3NlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4ubGllbiBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0gaW1nIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbn1cclxuXHJcbi5mb3JtIGlucHV0LFxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDEzZDUxO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0gaW5wdXQsXHJcbmxhYmVsLFxyXG5zZWxlY3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLmZvcm0gYnV0dG9uIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2Q1MTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMTNkNTE7XHJcbiAgICBjb2xvcjogIzAxM2Q1MTtcclxufVxyXG5cclxuLmZvcm0gaDIsXHJcbnAsXHJcbmxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDEzZDUxO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybSBoMjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnJhZGlvIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuZm9vdGVyIHAge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jaGlmZnJlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDb2NvZ29vc2UgUHJvIFNlbWlMaWdodDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDEyJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDIlO1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTcwcHgpIHtcclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSB0b3A7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgLnJzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODU1cHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiAxNDBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAyNDBweDtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcclxuICAgIG5hdiB1bCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBuYXYgdWwgbGkgYSB7XHJcbiAgICAgICAgbWFyZ2luOiAtM3B4IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC53ZV9jYXJlIHtcclxuICAgICAgICB0b3A6IDIzMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIH1cclxuICAgIC5tZW51LXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMTNkNTE7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGU6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnXFxmMGM5JztcclxuICAgICAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGUuYWN0aXZlOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcZjA1Yyc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogOTJweDtcclxuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogIzAxM2Q1MTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIG5hdiB1bCBsaSBhLmZvY3Vze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNkNTE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2LmFjdGl2ZSB1bCBsaSBhOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzZDUxO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY3NXB4KSB7XHJcbiAgICAudGl0cmUge1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgIH1cclxuICAgIC50aXRyZTEge1xyXG4gICAgICAgIHRvcDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnRpdHJlIHtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUxIHtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLndlX2NhcmUge1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuc291cy10aXRyZTMge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIC5zb3VzLXRpdHJlMyBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC50aXRyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgfVxyXG4gICAgLnRpdHJlMSB7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAud2VfY2FyZSB7XHJcbiAgICAgICAgdG9wOiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIH1cclxuICAgIC50aXRyZSAuc291cy10aXRyZSBwIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0cmUgLnNvdXMtdGl0cmUgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPlatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-plat',
          templateUrl: './new-plat.component.html',
          styleUrls: ['./new-plat.component.css']
        }]
      }], function () {
        return [{
          type: src_app_entities_plat_plat_service__WEBPACK_IMPORTED_MODULE_4__["PlatService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }];
      }, {
        createdPlat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/status.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/status.service.ts ***!
    \******************************************/

  /*! exports provided: StatusService */

  /***/
  function srcAppSharedStatusServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusService", function () {
      return StatusService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var StatusService = /*#__PURE__*/function () {
      function StatusService(http) {
        _classCallCheck(this, StatusService);

        this.http = http;
        this.statusUrl = '/api/status';
      } // Get the status


      _createClass(StatusService, [{
        key: "getStatus",
        value: function getStatus() {
          return this.http.get(this.statusUrl).toPromise().then(function (response) {
            return response.json();
          })["catch"](this.error);
        } // Error handling

      }, {
        key: "error",
        value: function error(_error5) {
          var message = _error5.message ? _error5.message : _error5.status ? "".concat(_error5.status, " - ").concat(_error5.statusText) : 'Server error';
          console.error(message);
        }
      }]);

      return StatusService;
    }();

    StatusService.ɵfac = function StatusService_Factory(t) {
      return new (t || StatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    StatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StatusService,
      factory: StatusService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\M1\Mr Rojo\projet\m1p9mean-Sitraka\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map