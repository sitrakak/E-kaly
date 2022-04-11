"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var plat_service_1 = require("./plat.service");
describe('PlatService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(plat_service_1.PlatService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
