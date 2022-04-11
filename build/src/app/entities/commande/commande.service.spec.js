"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var commande_service_1 = require("./commande.service");
describe('CommandeService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(commande_service_1.CommandeService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
