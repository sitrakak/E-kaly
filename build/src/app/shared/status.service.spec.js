"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var status_service_1 = require("./status.service");
describe('StatusService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(status_service_1.StatusService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
