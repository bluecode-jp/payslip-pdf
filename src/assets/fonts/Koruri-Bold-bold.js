﻿import { jsPDF } from 'jspdf'
var font =
var callAddFont = function () {
  this.addFileToVFS('Koruri-Bold-bold.ttf', font)
  this.addFont('Koruri-Bold-bold.ttf', 'Koruri-Bold', 'bold')
}
jsPDF.API.events.push(['addFonts', callAddFont])