import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import Certificate from './Certificate';

const Passed = () => (
  <PDFViewer>
    <Certificate />
  </PDFViewer>
);

export default Passed;
