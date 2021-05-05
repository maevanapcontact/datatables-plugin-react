"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Generate a random ID
var generateID = function generateID() {
  return "_" + Math.random().toString(36).substr(2, 9);
};

// Normalize a string
var normalizeText = function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
};

exports.generateID = generateID;
exports.normalizeText = normalizeText;