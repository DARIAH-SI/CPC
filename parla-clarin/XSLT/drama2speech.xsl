<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    xmlns="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="xs tei"
    version="2.0">
    
    <xsl:output method="xml" indent="yes"/>
    
    <!-- XSLT multi-pass technique -->
    <xsl:template match="/">
        <xsl:variable name="var1">
            <xsl:apply-templates mode="pass1"/>
        </xsl:variable>
        <xsl:variable name="var2">
            <xsl:apply-templates select="$var1" mode="pass2"/>
        </xsl:variable>
        <xsl:copy-of select="$var2"/>
    </xsl:template>
    
    <!-- Identity Transform: Pass 1 -->
    <xsl:template match="@* | node()" mode="pass1">
        <xsl:copy>
            <xsl:apply-templates select="@* | node()" mode="pass1"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="tei:p[matches(.,'^\(.*\)$')]" mode="pass1">
        <xsl:analyze-string select="normalize-space(.)" regex="^(\()(.*)(\))$">
            <xsl:matching-substring>
                <note>
                    <xsl:value-of select="normalize-space(regex-group(2))"/>
                </note>
            </xsl:matching-substring>
            <xsl:non-matching-substring>
                <p>
                    <xsl:value-of select="normalize-space(.)"/>
                </p>
            </xsl:non-matching-substring>
        </xsl:analyze-string>
    </xsl:template>
    
    <!-- Identity Transform: Pass 2 -->
    <xsl:template match="@* | node()" mode="pass2">
        <xsl:copy>
            <xsl:apply-templates select="@* | node()" mode="pass2"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="tei:sp" mode="pass2">
        <u>
            <xsl:apply-templates mode="pass2"/>
        </u>
    </xsl:template>
    
    <xsl:template match="tei:speaker" mode="pass2">
        <note type="speaker">
            <xsl:apply-templates mode="pass2"/>
        </note>
    </xsl:template>
    
    <xsl:template match="tei:sp/tei:p" mode="pass2">
        <seg>
            <xsl:apply-templates mode="pass2"/>
        </seg>
    </xsl:template>
    
    
    
</xsl:stylesheet>