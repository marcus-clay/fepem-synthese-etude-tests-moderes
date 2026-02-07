import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def docx_to_text(path):
    ns = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
    z = zipfile.ZipFile(path)
    tree = ET.fromstring(z.read('word/document.xml'))
    lines = []
    for p in tree.iter('{%s}p' % ns):
        t = ''.join([x.text for x in p.iter('{%s}t' % ns) if x.text])
        if t:
            lines.append(t)
    z.close()
    return '\n'.join(lines)

docdir = 'src/documentation'
files = [
    'FEPEM_Synthese_Test_Kidisti_SPE_V2.docx',
    'FEPEM_Synthese_Test_Severine_PE_290126.docx',
    'FEPEM_Synthese_Test_Daniel_SPE_300126.docx',
    'FEPEM_Synthese_Test_Isabelle_PE_300126.docx',
    'FEPEM_Synthese_Test_Veronique_PE_020226.docx',
    'FEPEM_Synthese_Test_Megane_SPE_030226.docx',
    'FEPEM_Synthese_Test_AnneSophie_PE_040226.docx',
]

for f in files:
    path = os.path.join(docdir, f)
    print('=' * 80)
    print(f'FILE: {f}')
    print('=' * 80)
    try:
        text = docx_to_text(path)
        print(text)
    except Exception as e:
        print(f'ERROR: {e}')
    print()
