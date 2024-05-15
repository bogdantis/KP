<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body style="background-image: url(''); background-size:cover;">
    <h2 style="text-align:center; color:blue;">Расписание</h2>
    <xsl:for-each select="schedule/day">
      <h3 style="color:green;"><xsl:value-of select="@name"/></h3>
      <table border="1" style="width:100%; border-collapse:collapse;">
        <tr style="background-color:green;">
          <th>Время</th>
          <th>Курс</th>
          <th>Инструктор</th>
        </tr>
        <xsl:for-each select="event">
        <tr>
          <td style="padding:15px;"><xsl:value-of select="time"/></td>
          <td style="padding:15px;"><xsl:value-of select="course"/></td>
          <td style="padding:15px;"><xsl:value-of select="instructor"/></td>
        </tr>
        </xsl:for-each>
      </table>
      <br/>
    </xsl:for-each>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>