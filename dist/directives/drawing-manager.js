"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_map_directive_1 = require("./base-map-directive");
var ngui_map_component_1 = require("../components/ngui-map.component");
var INPUTS = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = (function (_super) {
    __extends(DrawingManager, _super);
    function DrawingManager(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'DrawingManager', INPUTS, OUTPUTS) || this;
        _this.initialized$ = new core_1.EventEmitter();
        _this.libraryName = 'drawing';
        return _this;
    }
    return DrawingManager;
}(base_map_directive_1.BaseMapDirective));
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DrawingManager.prototype, "initialized$", void 0);
DrawingManager = __decorate([
    core_1.Directive({
        selector: 'ngui-map > drawing-manager',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __metadata("design:paramtypes", [ngui_map_component_1.NguiMapComponent])
], DrawingManager);
exports.DrawingManager = DrawingManager;
//# sourceMappingURL=drawing-manager.js.map