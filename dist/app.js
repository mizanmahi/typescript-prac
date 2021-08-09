"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function RenderTemplate(template, selectorId) {
    return function (target) {
        const selectedEl = document.getElementById(selectorId);
        if (selectorId) {
            selectedEl.innerHTML = template;
        }
    };
}
let Component = class Component {
};
Component = __decorate([
    RenderTemplate('<h1>Your Render template decorator is working!</h1>', 'app')
], Component);
function Log(target, propName) {
    console.log({ propName, target });
    console.log('Prperty decorator');
}
function LogMethod(target, targetName, descriptor) {
    console.log({ target, targetName, descriptor });
    console.log('Method decorator');
}
function LogAccessor(target, targetName, descriptor) {
    console.log({ target, targetName, descriptor });
    console.log('Accessor decorator');
}
class ProDuct {
    constructor(_price, t) {
        this._price = _price;
        this.title = t;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Price must be greater than 0');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log,
    __metadata("design:type", String)
], ProDuct.prototype, "title", void 0);
__decorate([
    LogAccessor,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ProDuct.prototype, "price", null);
__decorate([
    LogMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProDuct.prototype, "getPriceWithTax", null);
function BindThis(target, propName, descriptor) {
}
class Printer {
    constructor() {
        this.message = 'Hi There!';
    }
    log() {
        console.log(this.message);
    }
}
__decorate([
    BindThis,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Printer.prototype, "log", null);
const print1 = new Printer();
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener('click', print1.log);
