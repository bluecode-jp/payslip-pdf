﻿import { jsPDF } from 'jspdf'
var font =
var callAddFont = function () {
  this.addFileToVFS('Koruri-Semibold-bold.ttf', font)
  this.addFont('Koruri-Semibold-bold.ttf', 'Koruri-Semibold', 'bold')
}
jsPDF.API.events.push(['addFonts', callAddFont])