# PARTHENOS Workshop for CEE countries
# Compiling parliamentary corpora, Hands-on (Tomaž Erjavec and Andrej Pančur)

## How to get source data:

- Focused web crawl 
- Web scraping (e.g. Beautiful Soup: tutorial at [Programming Historian](https://programminghistorian.org/en/lessons/intro-to-beautiful-soup))
- Directly from the parliamentary office!
- Examples for each country in this GitHub repository :-)

## To begin with, an example from Parla-CLARIN

[Parla-CLARIN](https://github.com/clarin-eric/parla-clarin) example in [this repository](https://github.com/DARIAH-SI/CPC/tree/master/parla-clarin).

Open Parla-CLARIN-Exemplar.docx

## Basic annotation in Word file

We will use: DOCX to TEI to HTML Conversion: [http://nl.ijs.si/tei/convert/](http://nl.ijs.si/tei/convert/).
[OxGarage](https://oxgarage2.tei-c.org/)-like service, based on [TEI Stylesheets](https://tei-c.org/Tools/Stylesheets/)

Save a [template.docx](http://nl.ijs.si/tei/convert/profiles/jsi/docx/template.docx) as
a template (see [tutorial](https://support.office.com/en-us/article/save-a-word-document-as-a-template-cb17846d-ecec-49d4-82ea-a6f5e3e8b9ae)).

Apply new Word Template to Parla-CLARIN-Exemplar.docx [tutorial](https://www.extendoffice.com/documents/word/4524-word-apply-template-to-existing-document.html).

- Paragraph level styles
- Character level styles

- Using standard Word formatting
- Using named tei:* styles ([see also](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml?odd=docbook.odd&root=2.9.10))
- Using special extensions for some named tei:* styles, e.g. tei:sp

## Automatic conversion to TEI

Submit Parla-CLARIN-Exemplar.docx with JSI profile and return:

- URL
- zip

## Additional annotation in TEI document

Get [Oxygen XML Editor](https://www.oxygenxml.com/xml_editor/download_oxygenxml_editor.html). 
Get [Trial License Key](https://www.oxygenxml.com/xml_editor/register.html) for all products.

## Example of semi-automatic annotation with XSLT stylesheets

Change tei:sp/tei:l in tei:sp/tei:p

Convert from TEI drama to TEI speech

## Publish your corpus

Research data in CLARIN repository, e.g. [http://hdl.handle.net/11356/1167](http://hdl.handle.net/11356/1167)

With [teiPublisher](https://teipublisher.com)

Slovenian example: [https://exist.sistory.si/exist/apps/parla/](https://exist.sistory.si/exist/apps/parla/)

Concordancer: [siParl](https://www.clarin.si/noske/run.cgi/corp_info?corpname=siparl&struct_attr_stats=1) in NoSkech Engine
