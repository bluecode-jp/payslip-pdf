﻿import { jsPDF } from 'jspdf'
var font =
var callAddFont = function () {
  this.addFileToVFS('Koruri-Regular-normal.ttf', font)
  this.addFont('Koruri-Regular-normal.ttf', 'Koruri-Regular', 'normal')
}
jsPDF.API.events.push(['addFonts', callAddFont])