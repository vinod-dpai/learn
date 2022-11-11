import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import Certificate from './Certificate';

const Failed = () => (
  <div style={{ padding: '0 2rem', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <Certificate />
    </PDFViewer>
  </div>
);

export default Failed;
