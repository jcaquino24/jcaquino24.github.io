function getContent(fragmentId, callback) {


  var pages = {
    home: `<h1>HOME</h1>`,
    creoh: `<div id="creoh">
        <h1>VALMED DIRECTORY</h1>
        <table>
            <tr class="table-name">
                <h3>CREOH</h3>
            </tr>
            <tr class="Table-header">
                <td>First Name</td>
                <td>Last Name</td>
                <td>Position</td>
                <td>Office #</td>
                <td>Extension</td>
                <td>Cell Phone #</td>
                <td>Email Address</td>
                <td>Location</td>
            </tr>
            <tr class="table-content">
                <td>Joe</td>
                <td>Zicherman</td>
                <td>Chief Executive Officer</td>
                <td>718-821-0570</td>
                <td>104</td>
                <td>347-630-1609</td>
                <td>jzicherman@creoh.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Mo</td>
                <td>Rothstein</td>
                <td>Chief Operating Officer</td>
                <td>718-821-0570</td>
                <td>108</td>
                <td>347-359-6140</td>
                <td>mr@creoh.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>David</td>
                <td>Katz</td>
                <td>Director of Business Development</td>
                <td>718-821-0570</td>
                <td>302</td>
                <td>732-213-7012</td>
                <td>dkatz@creoh.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Esther</td>
                <td>Levy</td>
                <td>Senior Project Manager</td>
                <td>718-821-0570</td>
                <td>301</td>
                <td>848-444-0327</td>
                <td>elevy@creoh.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Yoni</td>
                <td>Skaist</td>
                <td>Project Manager</td>
                <td>718-821-0570</td>
                <td>306</td>
                <td>443-813-6906</td>
                <td>yskaist@creoh.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Shana</td>
                <td>Feuer</td>
                <td>Project Manager</td>
                <td>718-821-0570</td>
                <td>304</td>
                <td>347-977-7001</td>
                <td>sfeuer@creoh.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Becky</td>
                <td>Friedman</td>
                <td>Bookeeper</td>
                <td>718-821-0570</td>
                <td>303</td>
                <td>314-520-1693</td>
                <td>becky@creoh.com</td>
                <td>ST. LOUIS</td>
            </tr>
        </table>

        <table>
            <tr class="table-name">
                <h3>Valmar Surgical</h3>
            </tr>
            <tr class="Table-header">
                <td>First Name</td>
                <td>Last Name</td>
                <td>Position</td>
                <td>Office #</td>
                <td>Extension</td>
                <td>Cell Phone #</td>
                <td>Email Address</td>
                <td>Location</td>
            </tr>
            <tr class="table-content">
                <td>Devora</td>
                <td>Blumenkrantz</td>
                <td>Supplyline</td>
                <td></td>
                <td>603</td>
                <td></td>
                <td>dblumenkrantz@supplylinemedical.com</td>
                <td></td>
            </tr>
            <tr class="table-content">
                <td>Moshe</td>
                <td>Rosenshein</td>
                <td>Supplyline Operations Manager</td>
                <td></td>
                <td>607</td>
                <td></td>
                <td>mrosenshein@supplylinemedical.com</td>
                <td></td>
            </tr>
            <tr class="table-content">
                <td>Rachel</td>
                <td>Schwab</td>
                <td>HR Director</td>
                <td>516-596-3070</td>
                <td>103</td>
                <td>201-968-8084</td>
                <td>rschwab@thevalmedgroup.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Adina</td>
                <td>Epstien</td>
                <td>Accounts Receivable Representative</td>
                <td>516-596-3070</td>
                <td>114</td>
                <td>732-503-7259</td>
                <td>aepstein@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Goldy</td>
                <td>Rosenblum</td>
                <td></td>
                <td>516-596-3070</td>
                <td>101</td>
                <td>732-503-6098</td>
                <td>grosenblum@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Borys</td>
                <td>Godunov</td>
                <td>Assistant Warehouse Manager</td>
                <td>516-596-3070</td>
                <td></td>
                <td>608-616-0189</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Miri</td>
                <td>Halberstadt</td>
                <td>Authorization Specialist</td>
                <td>516-596-3070</td>
                <td>105</td>
                <td>732-597-4875</td>
                <td>mhalberstadt@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Fraidy</td>
                <td>Perlow</td>
                <td>Authorization Specialist</td>
                <td>516-596-3070</td>
                <td>109</td>
                <td>848-373-4844</td>
                <td>fperlow@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Elisha</td>
                <td>Bernsein</td>
                <td>Billing Specialist</td>
                <td>516-596-3070</td>
                <td>122</td>
                <td></td>
                <td>ebernstein@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Raizel</td>
                <td>Joseph</td>
                <td>Billing Specialist</td>
                <td>516-596-3070</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="table-content">
                <td>Malky</td>
                <td>Kaminsky</td>
                <td>Billing Specialist</td>
                <td>516-596-3070</td>
                <td>110</td>
                <td></td>
                <td>mkaminsky@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Judah</td>
                <td>Strauss</td>
                <td>Controller</td>
                <td>516-596-3070</td>
                <td>117</td>
                <td>201-655-4531</td>
                <td>jstrauss@thevalmedgroup.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Chevy</td>
                <td>Kahan</td>
                <td>Customer Service Representative</td>
                <td>516-596-3070</td>
                <td>123</td>
                <td></td>
                <td>ckahan@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Esti</td>
                <td></td>
                <td>Customer Service Representative</td>
                <td>516-596-3070</td>
                <td>603</td>
                <td></td>
                <td>erudnicki@supplylinemedical.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Jenna</td>
                <td>Griffiths</td>
                <td>Customer Service Representative</td>
                <td>516-596-3070</td>
                <td>115</td>
                <td>732-267-4683</td>
                <td>jgriffiths@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Devorah</td>
                <td>Lefkowitz</td>
                <td>Customer Service Representative</td>
                <td>516-596-3070</td>
                <td>118</td>
                <td>848-240-7984</td>
                <td>dlefkowitz@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Fraidy</td>
                <td>Krupenia</td>
                <td>Customer Service Representative</td>
                <td>516-596-3070</td>
                <td>120</td>
                <td>347-938-7998</td>
                <td>fkrupenia@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Cristina</td>
                <td>Santo</td>
                <td>Customer Service Representative</td>
                <td>516-596-3070</td>
                <td>119</td>
                <td>908-565-0808</td>
                <td>csanto@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Kaila</td>
                <td>Saltzman / Wolpin</td>
                <td></td>
                <td>516-596-3070</td>
                <td>125</td>
                <td></td>
                <td>kailawolpin51@gmail.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Georgiana</td>
                <td>Wilson</td>
                <td>Customer Service Representative</td>
                <td></td>
                <td>102</td>
                <td>848-863-1259</td>
                <td>gwilson@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Keyri</td>
                <td>Cabrera</td>
                <td>Customer Service Representative - Bronx</td>
                <td>516-596-3070</td>
                <td>505</td>
                <td>607-481-5841</td>
                <td>kcabrera@valmarsurgical.com</td>
                <td>BRONX OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Jasmine</td>
                <td>Herrera</td>
                <td>Customer Service Representative - Bronx</td>
                <td>516-596-3070</td>
                <td>503</td>
                <td>646-698-9987</td>
                <td>jherrera@valmarsurgical.com</td>
                <td>BRONX OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Catalyn</td>
                <td>Perez</td>
                <td>Customer Service Representative - Bronx</td>
                <td>516-596-3070</td>
                <td>504</td>
                <td>646-940-5175</td>
                <td>cperez@valmarsurgical.com</td>
                <td>BRONX OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Gitty</td>
                <td>Kaufman</td>
                <td>Customer Service Supervisor</td>
                <td>516-596-3070</td>
                <td>112</td>
                <td>732-266-0598</td>
                <td>gkaufman@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Kaya</td>
                <td>Borenstein</td>
                <td>Director of Accounts Receivable</td>
                <td>516-596-3070</td>
                <td>106</td>
                <td>732-330-6459</td>
                <td>kborenstein@valmarsurgical.com</td>
                <td>CHICAGO</td>
            </tr>
            <tr class="table-content">
                <td>Mayer</td>
                <td>Helman</td>
                <td>Director of Operations</td>
                <td>516-596-3070</td>
                <td>107</td>
                <td>845-662-4421</td>
                <td>mayer@thevalmedgroup.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Malky</td>
                <td>Kohn</td>
                <td>Finance</td>
                <td>516-596-3070</td>
                <td>124</td>
                <td></td>
                <td>Mkohn@thevalmedgroup.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Levi</td>
                <td>Eisenberg</td>
                <td>Office Manager - Bronx Location</td>
                <td>516-596-3070</td>
                <td>203</td>
                <td>646-266-6506</td>
                <td>leisenberg@valmarsurgical.com</td>
                <td>BRONX OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Yehuda</td>
                <td>Silberberg</td>
                <td>Purchasing</td>
                <td>516-596-3070</td>
                <td>113</td>
                <td>917-275-5248</td>
                <td>ysilberberg@thevalmedgroup.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Mark</td>
                <td>Czermak</td>
                <td>Warehouse Manager</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>917-399-1444</td>
                <td>aziz@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Yousif</td>
                <td>Salim</td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>646-610-0397</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Kareem</td>
                <td>Alzindani</td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>347-635-3166</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Maged</td>
                <td>Alaudi</td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>718-612-3783</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Ricardo</td>
                <td></td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>347-303-2162</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Vincent</td>
                <td>Carrera</td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td></td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Mustafa</td>
                <td>Evans</td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>347-336-4972</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Asurarachchi</td>
                <td>Kalindu</td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>347-600-4724</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Ricardo</td>
                <td>Mendieta</td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>646-643-4618</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Angel</td>
                <td>Perez</td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>917-982-4637</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Benjy</td>
                <td>Gross</td>
                <td>Sales rep</td>
                <td>516-596-3070</td>
                <td></td>
                <td>848-240-4009</td>
                <td>jspira@valmarsurgical.com</td>
                <td></td>
            </tr>
            <tr class="table-content">
                <td>Jake</td>
                <td>Spira</td>
                <td>Sales rep</td>
                <td>516-596-3070</td>
                <td></td>
                <td>917-982-4637</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Miriam</td>
                <td>Koslowitz</td>
                <td>Accounts Receivable Representative</td>
                <td>516-596-3070</td>
                <td>114</td>
                <td>732-864-4492</td>
                <td>mkoslowitz@valmarsurgical.com</td>
                <td>LAKEWOOD OFFICE</td>
            </tr>
            <tr class="table-content">
                <td>Nicholas</td>
                <td>Romano</td>
                <td>Warehouse Technician</td>
                <td>516-596-3070</td>
                <td>202</td>
                <td>718-419-8571</td>
                <td>warehouse@valmarsurgical.com</td>
                <td>WAREHOUSE</td>
            </tr>
            <tr class="table-content">
                <td>Becky</td>
                <td>Friedman</td>
                <td>Bookeeper</td>
                <td>718-821-0570</td>
                <td>303</td>
                <td>314-520-1693</td>
                <td>becky@valmarsurgical.com</td>
                <td>ST. LOUIS</td>
            </tr>
            <tr class="table-content">
                <td>Joe</td>
                <td>Zicherman</td>
                <td>Chief Executive Office</td>
                <td>718-821-0570</td>
                <td>104</td>
                <td>347-630-1609</td>
                <td>joe@thevalmedgroup.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
            <tr class="table-content">
                <td>Mo</td>
                <td>Rothstein</td>
                <td>Chief Operating Officer</td>
                <td>718-821-0570</td>
                <td>108</td>
                <td>347 -359 -6140</td>
                <td>mr@thevalmedgroup.com</td>
                <td>LAKEWOOD OFFICE </td>
            </tr>
        </table>

        <table>
        <tr class="table-name">
            <h3>Supply Line Medical</h3>
        </tr>
        <tr class="Table-header">
            <td>First Name</td>
            <td>Last Name</td>
            <td>Position</td>
            <td>Office #</td>
            <td>Extension</td>
            <td>Cell Phone #</td>
            <td>Email Address</td>
            <td>Location</td>
        </tr>
        <tr class="table-content">
            <td>Joe</td>
            <td>Zicherman</td>
            <td>Chief Executive Office</td>
            <td>856-4-supply</td>
            <td>104</td>
            <td>347-630-1609</td>
            <td>joe@thevalmedgroup.com</td>
            <td>LAKEWOOD OFFICE</td>
        </tr>
        <tr class="table-content">
            <td>Mo</td>
            <td>Rothstein</td>
            <td>Chief Operating Officer</td>
            <td>856-4-supply</td>
            <td>108</td>
            <td>347-359-6140</td>
            <td>mr@thevalmedgroup.com</td>
            <td>LAKEWOOD OFFICE</td>
        </tr>
        <tr class="table-content">
            <td>Mayer</td>
            <td>Helman</td>
            <td>Director of Operations</td>
            <td>856-4-supply</td>
            <td>107</td>
            <td>845-662-4421</td>
            <td>mayer@thevalmedgroup</td>
            <td>LAKEWOOD OFFICE</td>
        </tr>
        <tr class="table-content">
            <td>Noach</td>
            <td>Stern</td>
            <td>Director of Sales and Marketing</td>
            <td>856-4-supply</td>
            <td>601</td>
            <td>917-612-9680</td>
            <td>nstern@supplylinemedical.com</td>
            <td>LAKEWOOD OFFICE</td>
        </tr>
        <tr class="table-content">
            <td>Yehuda</td>
            <td>Silberberg</td>
            <td>Purchasing</td>
            <td>516-596-3070</td>
            <td>113</td>
            <td>917-275-5248</td>
            <td>ysilberberg@thevalmedgroup.com</td>
            <td>LAKEWOOD OFFICE</td>
        </tr>
        <tr class="table-content">
            <td>Sam</td>
            <td>Davidowitz</td>
            <td>Operation Manager for SupplyLine​</td>
            <td>516-596-3070</td>
            <td>605</td>
            <td>201-968-8084</td>
            <td>sdavidowitz@supplylinemedical.com</td>
            <td>LAKEWOOD OFFICE</td>
        </tr>
        <tr class="table-content">
            <td>Miriam</td>
            <td>Koslowitz</td>
            <td>Accounts Receivable Representative</td>
            <td>856-4-supply</td>
            <td>602</td>
            <td>732-864-4492</td>
            <td>mkoslowitz@supplylinemedical.com</td>
            <td>LAKEWOOD OFFICE</td>
        </tr>
        <tr class="table-content">
            <td>Hindy</td>
            <td>Miller</td>
            <td>Customer Service Representative</td>
            <td>856-4-supply</td>
            <td>604</td>
            <td>732-674-5582</td>
            <td>hmiller@supplylinemedical.com</td>
            <td>LAKEWOOD OFFICE</td>
        </tr>
        <tr class="table-content">
            <td>Esty</td>
            <td>Rudnicki</td>
            <td>Customer Service Representative</td>
            <td>856-4-supply</td>
            <td>603</td>
            <td>929-387-0872</td>
            <td>erudnicki@supplylinemedical.com</td>
            <td>LAKEWOOD OFFICE</td>
        </tr>
        <tr class="table-content">
            <td>Esti</td>
            <td>Young</td>
            <td></td>
            <td></td>
            <td>126</td>
            <td></td>
            <td>eyoung@thevalmedgroup.com</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Niel</td>
            <td>Stern</td>
            <td></td>
            <td></td>
            <td>601</td>
            <td></td>
            <td>nstern@supplylinemedical.com</td>
            <td></td>
        </tr>
        </table></div>`,
    medicare: `<div id="medicare">
        <table>
    <tr class="table-name">
        <h1>MEDICARE / MEDICAID</h1>
    </tr>

    <tr class="Table-header">
        <td class="title">MEDICARE - 80%</td>
        <td class="title">MEDICAID - 100%</td>
    </tr>
    <tr class="table-content">
        <td>Cane E0100</td>
        <td>All Medicare covered items</td>
    </tr>
    <tr class="table-content">
        <td>Crutches E110</td>
        <td>Incontinence supplies</td>
    </tr>
    <tr class="table-content">
        <td>Walker E0143</td>
        <td>Overbed Table E0274</td>
    </tr>
    <tr class="table-content">
        <td>Bariatric walker E0149</td>
        <td>Raised toilet seat E0244</td>
    </tr>
    <tr class="table-content">
        <td>Rollator (up to 35") E0143 + E0156</td>
        <td>Shower chair E0240</td>
    </tr>
    <tr class="table-content">
        <td>Bariatric walker/ rollator E0149 + E0156
            Height Range: 31.5"-37.5"</td>
        <td>Transfer tub bench E0247</td>
    </tr>
    <tr class="table-content">
        <td>Wheelchair K0001</td>
        <td>Bariatric TTB- E0248</td>
    </tr>
    <tr class="table-content">
        <td>Wheelchair Heavy Duty K0007</td>
        <td>Grab bar E0241</td>
    </tr>
    <tr class="table-content">
        <td>Commode E0163</td>
        <td>Tub Rail E0246</td>
    </tr>
    <tr class="table-content">
        <td>Semi Electric bed E0260</td>
        <td>Toilet Safety Rails E0246</td>
    </tr>
    <tr class="table-content">
        <td>Gel Overlay Mattress E0185</td>
        <td>Stockings</td>
    </tr>
    <tr class="table-content">
        <td>Alternating pressure pad E0181</td>
        <td>Orthopedic shoes L3216/L3221
            note: We don't process shoes for MEDICAID NY</td>
    </tr>
    <tr class="table-content">
        <td>Low Air loss mattress E0277</td>
        <td>BP Monitor</td>
    </tr>
    <tr class="table-content">
        <td>Hoyer Lift E0630</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Enteral Feeding</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Transfer board E0705</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Back Brace L0642</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Knee Brace L1833</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Ankle Brace L1906</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Wrist splint L3807/L3908</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Elbow Brace</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Oxygen Concentrators E1390</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Bi-pap/C-Pap</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Heel Lift L3310</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Stockings- A6531 only</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Diabetic shoes and inserts A5500, A5513</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Foot Inserts- L3000</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Glucometer E0607</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Lancing Device A4258</td>
        <td></td>
    </tr>
    <tr class="table-content">
        <td>Diabetic supply</td>
        <td></td>
    </tr>



</table></div>`,
    bcp: `<h1>Business Continuity</h1>
    <div id="business-continuity">

        <div>
        <div class="first-image">
            <img src="assets/bcp1.png">
        </div>

        <div class="second-image">
            <img src="assets/bcp2.png">
        </div>
        </div>
        <div>
        <div class="text-content">
            <h3>Agent must:</h3>
                <p>Determine if member's issue is answerable without using Brightree.</p>
            <h3>Examples are:</h3>
                <li>What brands we have</li>
                <li>Can we change a certain item size</li>
                <li>Fax number for an insurance company</li>
                <li>What time does my scheduled delivery for today will arrive</li>
        </div>

        <div class="text-content">
            <h3>If concern of the member is needing Brightree we must:</h3>
                <li>Gather best call back number</li>
                <li>Get patient DOB</li>
                <li>Commit a callback once system is up</li>
                <p><strong>Recommeded Script:</strong> "Hi, we are unable to process your request this moment as our system is updating. I assure you that I will be calling you back within the day and ensure to process your request once we have our system back up and running"</p>
                <li>Agents are refrained from saying that our system is DOWN. It connotes negativity. I think system UPDATE sounds a bit better.</li>
                <li>Agents should not ask members to call us back. We do not have an ETA of system issue resolution</li>
        </div>

        <div class="text-content">
           <h3>Call back procedure:</h3>
                <li>Check member's account</li>
                <li>Process the member's request</li>
                <li>Call member back</li>
                <p><strong>Recommended Script:</strong> "Hi, I'm calling back to let you know that your items will be delivered tomorrow between 9am-5pm. Thank you for your patience"​</p>
                <p><strong>Note:</strong> It is a must to review member's account before calling them back so they would not have to repeat themselves again as part of providing seamless customer service</p>
        </div>

        <div class="text-content">
            <h3>Supervisor must:</h3>
                <li>Gather numbers to be called back</li>
                <li>Continuous checking if BT is up</li>
                <li>Immediate announcement if system is already up</li>
                <li>Ensure all numbers gathered are called back accoring to the order they were received</li>
        </div>
        </div>
    </div>`,
    escalation: `<div id="escalation-process">
        <h1>Escalation Process</h1>
        <table>
    <tr class="table-name">
        <h3>Valmar Escalation Process Guidelines</h3>
    </tr>

    <tr class="Table-header">
        <td class="title">What</td>
    </tr>
    <tr class="table-content">
        <td>Valmar Escalation Process</td>
    </tr>
    <tr class="Table-header">
        <td class="title">Goal</td>
    </tr>
    <tr class="table-content">
        <td>To equip agents with call handling skills to better address customers/patients complaints and escalation</td>
    </tr>
    <tr class="Table-header">
        <td class="title">Scenario:</td>
    </tr>
    <tr class="table-content">
        <td>I'd like to speak to a supervisor</td>
    </tr>
    <tr class="Table-header">
        <td class="title">Possible Reasons:</td>
    </tr>
    <tr class="table-content">
        <td>Missing delivery items</td>
    </tr>
    <tr class="table-content">
        <td>Expedite delivery due to supplies running out</td>
    </tr>
    <tr class="table-content">
        <td>Incorrect address on file resulting to missed delivery</td>
    </tr>
    <tr class="table-content">
        <td>Missed delivery due to no one at home to sign </td>
    </tr>
    <tr class="table-content">
        <td>Customers insisting on next day delivery</td>
    </tr>
    <tr class="table-content">
        <td>Wants to file a complaint </td>
    </tr>
    <tr class="Table-header">
        <td class="title">Proposed Process:</td>
    </tr>
    <tr class="table-content">
        <td>Agents are to pacify and de-escalate the caller atleast twice before passing the call to a supervisor </td>
    </tr>
    <tr class="Table-header">
        <td class="title">How:</td>
    </tr>
    <tr class="table-content">
        <td>Take ownership of the call with confidence statements and softskills</td>
    </tr>

    <tr class="Table-header">
        <td class="title">Proposed Call Scirpt:</td>
    </tr>
    <tr class="table-content">
        <td>"I understand you want to speak with a supervisor. I assure you that I can resolve this for you in no time at all. Tell me more about the missing delivery items"</td>
    </tr>
    <tr class="table-content">
        <td>"I can get my supervisor for you, on the other hand while I have you on the line, I'd like to let you know that I can resolve this for you. I understand you wanted to get your items as soon as possible correct?"</td>
    </tr>
    <tr class="table-content">
        <td>"I'm sorry to hear that and I understand how frustrated you are about the incorrect address delivery. My supervisor will be with you shortly. Meanwhile, I have you at 1711 Broadway ave, Hewlett NY..is this now the correct delivery address?"</td>
    </tr>
    <tr class="table-content">
        <td>"In behalf of the company,'id like to apologize about the missed delivery. Yes definitely I can get my supervisor for you. Momentarily you mentioned that you will be home on Monday correct? I am happy to inform you that I can have the items delivered
            on Monday itself"</td>
    </tr>
    <tr class="table-content">
        <td>"My supervisor will be with you shortly. I'm sorry for the trouble. On the other hand I guarantee that I can have the items delivered to you tomorrow. I can process this right now without you talking to my supervisor"</td>
    </tr>
    <tr class="table-content">
        <td>"I'm sorry and I understand that you want to file a complaint. I assure you that I am the right person to speak with. I will be taking notes of your complaint and forward this as soon as possible. Can you tell me more about it?"</td>
    </tr>

</table>
<img src="assets/operationprocess.png">
        </div>`,
    callflow: `<div id="call-flow">
        <h1>Valmar Call Flow Guide</h1>

        <h3>Delivery Date/Status: Order Delivered</h3>
        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob1.png" alt=""></a>
                <h4>Enter the DOB</h4>
            </div>

            <div>
                <a><img src="assets/dob2.png" alt=""></a>
                <h4>Click the patient name</h4>
            </div>

            <div>
                <a><img src="assets/dob3.png" alt=""></a>
                <h4>Will lead you to the summary tab</h4>
            </div>
        </div>

        <div class="order-delivered-script">
            <p><strong>Opening Script:</strong> Hi good morning/afternoon/evening thank you for calling Valmar Surgical my name is ___ how can I help you?</p>
            <p><strong>Caller:</strong> I'm looking to check the status of my delivery</p>
            <p><strong>Agent:</strong> Soft skills/assurance – Sure defenitely I'd be happy to check this for you</p>
            <p><strong>Agent:</strong> May I have your name/member's name or Patient ID and DOB please? Thank you</p>
        </div>


        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob4.png" alt=""></a>
                <h4>Click on Orders Tab, last page or<br>Schld Dt and click Order ID</h4>
            </div>

            <div>
                <a><img src="assets/dob5.png" alt=""></a>
                <h4>You'll see order delivered date and time</h4>
            </div>

            <div>
                <a><img src="assets/dob6.png" alt=""></a>
                <h4>Click Notes tab, choose the drop down<br> and leave accurate notes</h4>
            </div>
        </div>

        <div class="order-delivered-script">
            <p><strong>Agent:</strong> Mr. Member I can see that order was delivered to your address on 11/14/2019 at around 10:14am​</p>
            <p><strong>Caller:</strong> Great thanks!</p>
            <p><strong>Agent:</strong> Is there anything else I can help you with? If none:</p>
            <p><strong>Agent:</strong> Thanks for choosing Valmar Surgical, have a great day!</p>
        </div>


        <h3>Delivery Date/Status: I did not receive all my orders/missing items (Active Insurance)</h3>
        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob7.png" alt=""></a>
                <h4>Check all items is in SO</h4>
            </div>

            <div>
                <a><img src="assets/dob8.png" alt=""></a>
                <h4>Check if PAR for item is active​</h4>
            </div>

            <div>
                <a><img src="assets/dob9.png" alt=""></a>
                <h4>Email WH of SO and item missing​</h4>
            </div>

        </div>


        <div class="Order-delivered-img">


            <div style="text-align:center;">
                <a><img src="assets/dob10.png" alt=""></a>
                <h4>Click Notes tab, choose the drop down (Issue with order) and leave accurate notes.<br> Write in the comments of the WH reply and callback member to update​</h4>
            </div>
        </div>


        <div class="order-delivered-script">
            <p><strong>Agent:</strong> What items are you missing,how many bags, did you open the box, what did you receive?</p>
            <p><strong>Caller:</strong> I'm missing the chux</p>
            <p><strong>Agent:</strong> (Apologize) I'd like to apologize for the missing item rest assured you'll get it today/tomorrow as we're sending our driver back</p>
            <p><strong>Note:</strong> Send to AZIZ and copy Gitty Kaufman on the email </p>
        </div>



        <h3>Delivery Date/Status: I did not receive all my orders/missing items (Expired Insurance)</h3>
        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob11.png" alt=""></a>
                <h4>Check all items if these are accurate</h4>
            </div>

            <div>
                <a><img src="assets/dob12.png" alt=""></a>
                <h4>Check if PAR for item is active.<br> If not advise to call insurance</h4>
            </div>

            <div>
                <a><img src="assets/dob13.png" alt=""></a>
                <h4>lick Notes tab, choose the drop down (Issue with order)<br> and leave accurate notes</h4>
            </div>

        </div>



        <div class="order-delivered-script">
            <p><strong>Agent:</strong> What items are you missing?</p>
            <p><strong>Caller:</strong> I'm missing the chux</p>
            <p><strong>Agent:</strong> I'd like to apologize for the missing item. It seems that the authorization for your chux have expired. Please call your insurance provider to send us another auth</p>
        </div>

        <h3>Delivery Date/Status: When will I get my supplies/orders?</h3>

        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob14.png" alt=""></a>
                <h4>Go to Orders Tab, click last page. <br>You'll see order does not have DOS yet
                </h4>
            </div>

            <div>
                <a><img src="assets/dob15.png" alt=""></a>
                <h4>Click on order number,<br> set up preferred date and provide details to member
                </h4>
            </div>


        </div>

        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob16.png" alt=""></a>
                <h4>Fill in the City,reference and complete the WIP</h4>
            </div>

            <div>
                <a><img src="assets/dob17.png" alt=""></a>
                <h4>Click Notes tab, choose the drop down (Del Status)<br> and leave accurate notes</h4>
            </div>


        </div>
        <div class="order-delivered-script">
            <p><strong>Agent:</strong> I'm happy to let you know that you'll get your order tomorrow, the Inspire diaper between 9-5pm. Is your address still at_____ and same phone number?</p>
            <p><strong>Caller:</strong> Yes</p>
            <p><strong>Agent:</strong> (Set expectations) Please have someone available to receive the order upon delivery</p>
        </div>


        <h3>Delivery Date/Status: “Can I get it sooner?" *Note that WH provides available nearest date for delivery</h3>

        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob18.png" alt=""></a>
                <h4>Go to Orders Tab, click last page.<br> You'll see order does not have DOS yet
                </h4>
            </div>

            <div>
                <a><img src="assets/dob19.png" alt=""></a>
                <h4>Click on order number,<br> set up preferred date and provide details to member
                </h4>
            </div>
        </div>

        <div class="Order-delivered-img">
            <div>
                <h5>If member does not agree on the set date, we email WH of the sales order and we call back and update the member </h5>
                <a><img src="assets/dob20.png" alt=""></a>
                <h4>Click Notes tab, choose the drop down (Del Status)<br> and leave accurate notes
                </h4>
            </div>
        </div>

        <div class="order-delivered-script">
            <p><strong>Agent:</strong> I'm happy to let you know that you'll get your order tomorrow, the Inspire diaper between 9-5pm. Is your address still at_____ and same phone number?</p>
            <p><strong>Caller:</strong> Yes</p>
            <p><strong>Agent:</strong> (Set expectations) Please have someone available to receive the order upon delivery</p>
        </div>

        <h3>Returning a Call - "Someone called me from this number and I'm returning a call"</h3>

        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob21.png" alt=""></a>
                <h4>Go to Notes Tab,check last interaction and<br> you'll see last status on the notes
                </h4>
            </div>

            <div>
                <a><img src="assets/dob22.png" alt=""></a>
                <h4>Click on order number, set up preferred date<br> and provide details to member
                </h4>
            </div>

            <div>
                <a><img src="assets/dob23.png" alt=""></a>
                <h4>Click Notes tab, choose the drop down <br>(Returning a Call) and leave accurate notes
                </h4>
            </div>

        </div>

        <div class="order-delivered-script">
            <p><strong>Agent:</strong> I'm happy to let you know that you'll get your order tomorrow, the Inspire diaper between 9-5pm. Is your address still at_____ and same phone number?</p>
            <p><strong>Caller:</strong> Yes</p>
            <p><strong>Agent:</strong> (Set expectations) Please have someone available to receive the order upon delivery</p>
            <p><strong>Note:</strong> Return callers varies and there would be times that member may be looking for an onshore rep, we then transfer</p>
        </div>

        <h3>Stop Auth/ Hold/Skip Delivery:</h3>

        <div class="Order-delivered-img">

            <div>
                <a><img src="assets/dob24.png" alt=""></a>
                <h4>If order is open - void it <br>and select reason for void (for just this month)
                </h4>
            </div>

            <div>
                <a><img src="assets/dob25.png" alt=""></a>
                <h4>Click on active template and enter a number equal<br> to the run date for stop order this month and all months <br>(cancel open order if any)
                </h4>
            </div>


        </div>

        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob26.png" alt=""></a>
                <h4>For 1 month (future), <br>uncheck future month and remove 1 from total end period
                </h4>
            </div>

            <div>
                <a><img src="assets/dob27.png" alt=""></a>
                <h4>Click Notes tab, choose the drop down <br>Stop Auth/Hold and leave accurate notes
                </h4>
            </div>

        </div>

        <div class="order-delivered-script">
            <p><strong>Agent:</strong> I can assist you with that, but may I know the reason why?</p>
            <p><strong>Caller:</strong> We still have plenty of diapers</p>
            <p><strong>Agent:</strong> (Set expectations) I have now stopped the delivery for your diapers starting this month until further notice. Please call us back if there would be any changes</p>
        </div>

        <div class="Order-delivered-img">

            <div>

                <h3>PT has multiple supply and wanted to skip delivery for specific supply for a month.<br> Authorization is active for more than 2 months</h3>
                <h4>What to do?</h4>
                <a><img src="assets/dob28.png" alt=""></a>
                <h4>Update template delivery note</h4>
            </div>

        </div>

        <div class="Order-delivered-img">

            <div>

                <h3>PT has multiple supply and wanted to stop delivery for specific supply moving forward</h3>
                <h4>What to do?</h4>
                <a><img src="assets/dob29.png" alt=""></a>
                <h4>Update template, remove supply from the template</h4>
            </div>

        </div>

        <h3>Authorization / Script Confirmation:</h3>

        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob30.png" alt=""></a>
                <h4>Go to Notes Tab, check the notes for Script/Clinicals Received.<br> Confirm with member
                </h4>
            </div>

            <div>
                <a><img src="assets/dob31.png" alt=""></a>
                <h4>Click on PARs, validate items for auth <br>and confirm auth received to member
                </h4>
            </div>

            <div>
                <a><img src="assets/dob32.png" alt=""></a>
                <h4>Click Notes tab, choose the drop down <br>(Auth/Script Confirmation) and leave accurate notes
                </h4>
            </div>


        </div>

        <div class="order-delivered-script">
            <p><strong>Agent:</strong> I'm happy to inform you that we have received the script / auth for your orders </p>
            <p><strong>Note:</strong> There are also other methods to check per insurance e.g. CPHL is in the spreadsheet sent daily, Agewell and HomeFirst can be in the PARs, notes and shared inbox</p>
        </div>

        <h3>Change in Patient Information: </h3>

        <div class="Order-delivered-img">
            <div>
                <a><img src="assets/dob33.png" alt=""></a>
                <h4>Go to Personal Tab and update member personal information <br>What can you update: <br> Last and first name, DOB, Facility, billing address, phone number, insurance and delivery address
                </h4>
            </div>

            <div>
                <a><img src="assets/dob34.png" alt=""></a>
                <h4>Check for open orders and update the address as well
                </h4>
            </div>

            <div>
                <a><img src="assets/dob35.png" alt=""></a>
                <h4>Click Notes tab, choose the drop down<br> (Change in PT info) and leave accurate notes
                </h4>
            </div>


        </div>

        <div class="order-delivered-script">
            <p><strong>Agent:</strong> I'd be happy to help you change your address/name,deilvery address ,DOB etc</p>
        </div>

        <div>
            <h4>Important Notes for WIPs:</h4>
            <li>7.1 ORDER SET UP-SCHEDULED DELIVERY - assigned to themselves</li>
            <li>7.2 ORDER SET UP-UNABLE TO SCHEDULE - assigned to Georgiana Wilson </li>
            <li>7.3 ORDER SET UP-LEFT MESSAGE - assigned to themselves</li>
            <li>7.4 ORDER SET UP-OSTOMY/ENTERAL - assigned to Jenna</li>
            <li>7.5 ORDER SET UP-KTWO/MEDLINE/AMAZON - assigned to Georgiana Wilson</li>
            <li>7.6 ORDER SET UP-DOUBLE ORDER - assigned to Georgiana Wilson</li>
            <li>7.7 ORDER SET UP-PT. DOESNT WANT ORDER THIS MONTH - assigned to Georgiana Wilson</li>
            <li>7.8 ORDER SET UP-GLOVES ONLY - assigned to Georgiana Wilson</li>

        </div>

        <h4>URL Links</h4>
        <div>
            <a href="https://recordings.join.me/bKsXXqvz9UORH9jWIv_byg">Brightree Tabs explained</a>
            <h4>WIPs, Tasks, Notes and Orders:</h4>
            <a href="https://recordings.join.me/vV0ntbQi_kmyIlze8FcuHQ">Link 1</a>
            <a href="https://recordings.join.me/gA_zL2vlZkaCa7cA-RQikw">Link 2</a>
        </div>





    </div>`,
    transfermatrix: `<h1>Transfer Matrix</h1>
    <div id="transfer-matrix">
    <table>
    <tr class="table-name">
        <td colspan="4">Supply Line Medical</td>
    </tr>
    <tr class="Table-header">
        <td>Scenario</td>
        <td>Transfer to</td>
        <td>Transfer to Ext</td>
        <td>Description</td>
    </tr>
    <tr class="table-content">
        <td>COO and CEO concern</td>
        <td>Jackie Bustamante</td>
        <td>819</td>
        <td>Caller is looking for Mo and Joe </td>
    </tr>
    <tr class="table-content">
        <td>Spanish calls - Bronx</td>
        <td>Jazmine, Catalyn and Keyri</td>
        <td>503 / 504 / 505</td>
        <td>Spanish speaking callers related to Bronx supply </td>
    </tr>
    <tr class="table-content">
        <td>Other Languages / Interpreter</td>
        <td>Accutrans</td>
        <td>8558652224 access code 11150</td>
        <td>Seeking interpreter for other languages</td>
    </tr>
    <tr class="table-content">
        <td>Medicare Representative Calls</td>
        <td>Brian or Devora</td>
        <td>804 / 118</td>
        <td>Medicare inquiries</td>
    </tr>
    <tr class="table-content">
        <td>Private Pay / Upgrade</td>
        <td>Elena and Brian</td>
        <td>805 / 804</td>
        <td>Callers wanting to do a private pay or an upgrade</td>
    </tr>
    <tr class="table-content">
        <td>Return Call for a US Rep</td>
        <td>to be determined</td>
        <td>to be determined</td>
        <td>Caller asking for the US rep who gave patient a call or any US rep</td>
    </tr>
    <tr class="table-content">
        <td>PRISM portal</td>
        <td>Aileen / Merry Ann / Marissa</td>
        <td>837 / 810 / 809</td>
        <td>Accepting order or order status</td>
    </tr>
    <tr class="table-content">
        <td>Documentation Review </td>
        <td>Katherine Se</td>
        <td>830</td>
        <td>Documentation Review for script and Clinicals</td>
    </tr>
    <tr class="table-content">
        <td>CPAP / BPAP inquiry</td>
        <td>Devorah Blumenkrantz</td>
        <td>603 or email supplyline if facility</td>
        <td>CPAP / BPAP pickup</td>
    </tr>
    <tr class="table-content">
        <td>Escalation Calls / Supervisor Calls</td>
        <td>JM, Nelter and Rhyan</td>
        <td>Queue 9111</td>
        <td>Unresolved issues after exhausting all resources available and wanting to speak with a supervisor</td>
    </tr>
    <tr class="table-content">
        <td>Accounts Receivable</td>
        <td>Esti Young</td>
        <td>126</td>
        <td>Inquiries about billing, bill to and from</td>
    </tr>
    <tr class="table-content">
        <td>Refund</td>
        <td>Adina Lerman</td>
        <td>114</td>
        <td>Rep or member requesting for a refund</td>
    </tr>
    <tr class="table-content">
        <td>Pricing concern</td>
        <td>Elena and Brian</td>
        <td>805 / 804</td>
        <td>All pricing concern (WIP to Chevy under 8.5 notes)</td>
    </tr>
    <tr class="table-content">
        <td>Costing</td>
        <td>Devora</td>
        <td>118</td>
        <td>Pricing of a medical equipment</td>
    </tr>
    <tr class="table-content">
        <td>Delivery Ticket (signature)</td>
        <td>Devora</td>
        <td>118</td>
        <td>Email elisha and attached the DT from Apacheta</td>
    </tr>
    <tr class="table-content">
        <td>Home Modificationss</td>
        <td>Devora</td>
        <td>118</td>
        <td>Home modifcation / alteration - mostly for ramps and stairwells </td>
    </tr>
    <tr class="table-content">
        <td>Village Care Max</td>
        <td>Angelica and Jazmine</td>
        <td>827 / 840</td>
        <td>All Village Care Max concerns</td>
    </tr>
    <tr class="table-content">
        <td>Bronx Orders</td>
        <td>Jazmine, Catalyn and Keyri</td>
        <td>(516) 636 0504</td>
        <td>Diabetic inserts / Stockings / Orthopedic shoes</td>
    </tr>
    <tr class="table-content">
        <td>Oxygen Masks</td>
        <td>Oxygen Mask Venture Respiratory</td>
        <td>(888) 758-3688</td>
        <td>Venture Respiratory ((888) 758-3688)</td>
    </tr>
    <tr class="table-content">
        <td>Auth Approval</td>
        <td>to be determined</td>
        <td>to be determined</td>
        <td>Integra insurance for auth approval </td>
    </tr>
    <tr class="table-content">
        <td>Parachute Orders</td>
        <td>Elena / Brian</td>
        <td>805 / 804</td>
        <td>Asking about parachute orders</td>
    </tr>
    <tr class="table-content">
        <td>Supplier Delivery</td>
        <td>WH</td>
        <td>202 / 203 / 205</td>
        <td>Drivers or suppliers stating they have deliveries for Valmar</td>
    </tr>
    <tr class="table-content">
        <td>Supply Line Inquiry</td>
        <td>info@supplylinemedical.com</td>
        <td>info@supplylinemedical.com</td>
        <td>"Supply line inquires (if no answer send email to info@supplylinemedical.com and hmiller@supplylinemedical.com )"
        </td>
    </tr>
    <tr class="table-content">
        <td>Purchasing</td>
        <td>Yehuda Siberberg</td>
        <td>113</td>
        <td>Purchasing</td>
    </tr>
    <tr class="table-content">
        <td>HR Director</td>
        <td>Rachel Schwab</td>
        <td>103</td>
        <td>Employee Verification</td>
    </tr>
    <tr class="table-content">
        <td>Judah Strauss</td>
        <td>Judah Strauss</td>
        <td>201-655-4531</td>
        <td>Callers looking for Judah</td>
    </tr>

</table>
<table>

        <tr class="table-name">
            <td colspan="2">Contacts</td>
        </tr>

        <tr class="Table-header">
        <td></td>
        <td>Contact #</td>
        </tr>

        <tr class="table-content">
            <td>UPS</td>
            <td>1-800-742-5877</td>
        </tr>

        <tr class="table-content">
            <td>USPS</td>
            <td>1-800-344-7779</td>
        </tr>

        <tr class="table-content">
            <td>FedEx</td>
            <td>1-800 463 3339</td>
        </tr>

        <tr class="table-content">
            <td>Valmar Contact Number</td>
            <td>516 596 3070</td>
        </tr>

        <tr class="table-content">
            <td>Valmar Fax Number</td>
            <td>516 596 3080</td>
        </tr>

        <tr class="table-content">
            <td>Fax number for CPHL</td>
            <td>732-719-4420</td>
        </tr>

        <tr class="table-content">
            <td>Bronx Ofiice Contact</td>
            <td>(516) 636 0504</td>
        </tr>

        <tr class="table-content">
            <td>Billing for Medical Star</td>
            <td>7186903959</td>
        </tr>

        <tr class="table-content">
            <td>CPHL</td>
            <td>7182157000</td>
        </tr>

        <tr class="table-content">
            <td>Oxygen Mask Venture Respiratory</td>
            <td>(888) 758-3688</td>
        </tr>

        <tr class="table-content">
            <td>VALMAR'S NPI</td>
            <td>1245387943</td>
        </tr>

        <tr class="table-content">
            <td>INTEGRA NPI</td>
            <td>1962502229</td>
        </tr>

        <tr class="table-content">
            <td>Interpreters</td>
            <td>(855) 865 2224 ACCESS CODE (11150)</td>
        </tr>

        <tr class="table-content">
            <td>VALMAR TAX NUMBER</td>
            <td>113296385</td>
        </tr>


    </table>
    </div>`,
    callback: `<div id="call-back">
        <h1>Call Back Process</h1>


        <strong>Our goal is to lessen repeat calls and ensure excellent customer service. It is important to resolve our customer's concern on their first call attempt. In any case that we need to call them back, an agent is therefore required to call back members or callers to ensure we resolve their concern and avoid a repeat call. Scenarios below but not limited to shall be called back immediately or within the day: </strong>


        <ul>
            <li>Call (Except insurance calls as they only have 1 number)</li>

            <li>Customer request for call back </li>

            <li>Awaiting WH reply </li>

            <li>Promised call back </li>

            <li>System down / outage </li>

        </ul>




        <strong>How?</strong>


        <ul>
            <li>Disconnected calls – Immediate call back </li>

            <li>Customer requesting call back – Call back on the date requested </li>

            <li>Awaiting WH reply – call back member as soon as we get WH reply </li>

            <li>Promised call back – call member back on the date and time committed</li>

            <li> System down / outage – call back as soon as system is back up and running </li>

        </ul>

        <p>All Call backs are to be logged into Brightree using the Task Function: </p>







        <p>Logging your call backs into the BT Task function will enable you to track your open and closed call back. Immediate supervisor shall check your open tasks at the start of the shift and monitor 100% compliance. You will be given a designated time
            to call your customers back, ideally on lean time / avail time (future dated call backs). </p>



        <p>Failure to adhere on the aforementioned call back process without any valid reason shall be construed as negligence of duty and shall be dealt with in accordance to our company'
        s policy. </p>

        <img src="assets/call-back.png"

        </div>`,
    dme: `<div class="dme-url">
        <div>
            <img src="assets/single-point-cane.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/mobility/canes/round-handle-cane/round-handle-aluminum-cane/p/461-1" target="_blank">
                <h4>Single Point Cane</h4>
            </a>
        </div>

        <div>
            <img src="assets/bariatic-transfer-bench.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/bathroom-safety/transfer-benches/bariatric-transfer-bench/p/264-1" target="_blank">
                <h4>Bariatric Transfer Bench</h4>
            </a>
        </div>

        <div>
            <img src="assets/bariatic-rollator.jpg" alt="">
            <a href="https://athome.medline.com/en/medline-basic-aluminum-heavy-duty-bariatric-rollator-1ct-mds86800xw?gclid=EAIaIQobChMI_qOYuYve8wIVvj6tBh2i2gK2EAAYAiAAEgIIR_D_BwE" target="_blank">
                <h4>Bariatric Rollator</h4>
            </a>
        </div>
    </div>

    <div class="dme-url">


        <div>
            <img src="assets/electric-hoyer-lift.jpg" alt="">
            <a href="https://proactivemedical.com/products/lifts-slings-mobility/patient-lifts/electric-patient/protekt-500-lift/" target="_blank">
                <h4>Electric Hoyer Lift</h4>
            </a>
        </div>

        <div>
            <img src="assets/bed-wedge.jpg" alt="">
            <a href="https://proactivemedical.com/products/support-surfaces/positioning-products/bed-positioning/protekt-bed-wedge/" target="_blank">
                <h4>Bed Wedge</h4>
            </a>
        </div>

        <div>
            <img src="assets/standard-rollator.jpg" alt="">
            <a href="https://www.medline.com/sku/item/MDPMDS86830EBL?skuIndex=S1&question=rollator&flowType=&indexCount" target="_blank">
                <h4>Standard Rollator</h4>
            </a>
        </div>
    </div>


    <div class="dme-url">
        <div>
            <img src="assets/lightweight-wheelchair.jpg" alt="">
            <a href="https://www.nationalbusinessfurniture.com/silver-vein-framed-wheelchair-with-elevating-leg-rests-18w-seat-25919?afid=mpl_nbf_bing_pla&mr:trackingCode=8CC8AD6D-2E66-E411-A521-BC305BF82162&mr:referralID=NA&mr:device=c&mr:adType=pa&s_kwcid=AL!6708!3!!e!!o!4581321363524500!&msclkid=587d8fdb514b17eecbbaee8449f33e1d&utm_source=bing&utm_medium=cpc&utm_campaign=.Shopping%20-%20Prospecting&utm_term=4581321363524500&utm_content=Chairs%20-%20zMisc&option=25919_1"
                target="_blank">
                <h4>Lightweight Wheelchair</h4>
            </a>
        </div>

        <div>
            <img src="assets/hoyer-lift.jpg" alt="">
            <a href="https://proactivemedical.com/products/lifts-slings-mobility/patient-lifts/hydraulic-manual/protekt-hydraulic/" target="_blank">
                <h4>Hoyer Lift</h4>
            </a>
        </div>

        <div>
            <img src="assets/semi-electric-bed.jpg" alt="">
            <a href="https://www.medline.com/sku/item/MDPMDR107002E?skuIndex=S1&question=semi+electric+bed&flowType=&indexCount=" target="_blank">
                <h4>Semi Electric Bed</h4>
            </a>
        </div>
    </div>



    <div class="dme-url">
        <div>
            <img src="assets/fully-electric-bed.jpg" alt="">
            <a href="https://www.medline.com/sku/item/MDPMDR107003E?skuIndex=S2&question=semi+electric+bed&flowType=&indexCount=" target="_blank">
                <h4>Fully Electric Bed</h4>
            </a>
        </div>

        <div>
            <img src="assets/raised-toilet-seat-with-arms.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/bathroom-safety/raised-toilet-seats/premium-plastic-raised-elongated-toilet-seat-with-lock/p/240-1" target="_blank">
                <h4>Raised Toilet Seat with Arms</h4>
            </a>
        </div>

        <div>
            <img src="assets/reclining-wheelchair.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/mobility/wheelchairs/reclining-wheelchairs/silver-sport-full-reclining-wheelchair/p/988-1" target="_blank">
                <h4>Reclining Wheelchair</h4>
            </a>
        </div>
    </div>

    <div class="dme-url">
        <div>
            <img src="assets/transport-chair.jpg" alt="">
            <a href="https://www.medline.com/product/Medline-Basic-Aluminum-Transport-Chair-with-8-Wheels/Transport-Wheelchairs/Z05-PF21896?question=medline%20transport%20chair" target="_blank">
                <h4>Transport Chair</h4>
            </a>
        </div>

        <div>
            <img src="assets/geri-chair.jpg" alt="">
            <a href="https://www.activeforever.com/drive-3-position-geri-chair-recliner?gclid=EAIaIQobChMIl5LXlZ788gIVdQiICR1fuA-iEAQYAiABEgIrNvD_BwE" target="_blank">
                <h4>Geri Chair</h4>
            </a>
        </div>

        <div>
            <img src="assets/commode.jpg" alt="">
            <a href="https://www.medline.com/product/Medline-Steel-Elongated-Bedside-Commode/Commodes/Z05-PF04652?question=commode" target="_blank">
                <h4>3 in 1 Commode</h4>
            </a>
        </div>
    </div>

    <div class="dme-url">
        <div>
            <img src="assets/crutches-forearm.jpg" alt="">
            <a href="https://www.parentgiving.com/shop/medline-forearm-crutches-7021/p/14501/?utm_source=google&utm_medium=shopping&gclid=EAIaIQobChMIlN_bgpSO9AIVUcvICh3aTwufEAQYASABEgIgvfD_BwE" target="_blank">
                <h4>Crutches Forearm</h4>
            </a>
        </div>

        <div>
            <img src="assets/bariatric-commode.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/commodes/bariatric-commodes/deluxe-bariatric-commode/p/20-1" target="_blank">
                <h4>Bariatric Commode</h4>
            </a>
        </div>

        <div>
            <img src="assets/standard-wheelchair.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/mobility/wheelchairs/standard-wheelchairs/silver-sport-2-wheelchair/p/969-1" target="_blank">
                <h4>Standard Wheelchair</h4>
            </a>
        </div>

    </div>

    <div class="dme-url">
        <div>
            <img src="assets/cam-boot-walker.jpg" alt="">
            <a href="https://advanced-orthopaedics.com/store/walking-boot-night-splints/" target="_blank">
                <h4>Cam Boot Walker</h4>
            </a>
        </div>

        <div>
            <img src="assets/overbed-table.jpg" alt="">
            <a href="https://www.amazon.com/Drive-Medical-Overbed-Table-Silver/dp/B002VWJZ8S" target="_blank">
                <h4>Overbed Table</h4>
            </a>
        </div>

        <div>
            <img src="assets/walker.jpg" alt="">
            <a href="https://www.medline.com/sku/item/MDPMDS86410W54?skuIndex=S2&question=walker&flowType=&indexCount=" target="_blank">
                <h4>Walker</h4>
            </a>
        </div>
    </div>

    <div class="dme-url">
        <div>
            <img src="assets/raised-toilet-seat-with-noarm.jpg" alt="">
            <a href="https://www.amazon.com/Drive-Medical-Elevated-Without-Standard/dp/B005JIMJBQ" target="_blank">
                <h4>Raised Toilet Seat with No Arms</h4>
            </a>
        </div>

        <div>
            <img src="assets/Shower-chair.jpg" alt="">
            <a href="https://leadermedicalsupplies.com/onlinestore/product/aluminum-bath-benches-with-back/" target="_blank">
                <h4>Shower Chair</h4>
            </a>
        </div>

        <div>
            <img src="assets/quad-canes.jpg" alt="">
            <a href="https://www.medline.com/product/Aluminum-Quad-Canes/Canes/Z05-PF04749?_requestid=506719" target="_blank">
                <h4>Quad Canes</h4>
            </a>
        </div>
    </div>

    <div class="dme-url">
        <div>
            <img src="assets/bariatric-transport-chair.jpg" alt="">
            <a href="https://dynarex.com/catalogsearch/result/?q=22%22+transport+chair+" target="_blank">
                <h4>Bariatric Transport Chair</h4>
            </a>
        </div>

        <div>
            <img src="assets/bariatric-walker.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/mobility/walkers/bariatric-walkers/bariatric-aluminum-folding-walker-two-button/p/715-1" target="_blank">
                <h4>Bariatric Walker</h4>
            </a>
        </div>

        <div>
            <img src="assets/toilet-safety-rails.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/bathroom-safety/toilet-safety/toilet-safety-rail/p/244-1" target="_blank">
                <h4>Toilet Safety Rails</h4>
            </a>
        </div>
    </div>

    <div class="dme-url">
        <div>
            <img src="assets/hemi-walker.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/mobility/walkers/specialty-walkers/side-walker/p/750-1" target="_blank">
                <h4>Hemi Walker</h4>
            </a>
        </div>

        <div>
            <img src="assets/low-air-loss-mattress.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/support-surfaces/group-2/med-aire-8-alternating-pressure-and-low-air-loss-mattress-system/p/536-1" target="_blank">
                <h4>Low Air Loss Mattress</h4>
            </a>
        </div>

        <div>
            <img src="assets/bariatric-bed.jpg" alt="">
            <a href="https://www.drivemedical.com/us/en/products/beds/bariatric-beds/full-electric-bariatric-bed-42/p/796-1" target="_blank">
                <h4>Bariatric Bed</h4>
            </a>
        </div>

    </div>

    <div class="dme-url">
        <div>
            <img src="assets/bath-stool.jpg" alt="">
            <a href="https://www.quill.com/drive-medical-adjustable-height-bath-stool-white/cbs/50221085.html?effort_code=369&sfcp=1&gclsrc=aw.ds&&cm_mmc=SEM_PLA_SHOP_N_19p_50221085_N_N_ZOM&mcode=SEM_PLA_ZOM_19p_50221085_N_N&gclid=EAIaIQobChMIxsKkhOfP9AIVs_7jBx1rlgoIEAQYAyABEgLBRfD_BwE" target="_blank">
                <h4>Bath Stool – PP cost $45</h4>
            </a>
        </div>

        <div>
            <img src="assets/reacher.jpg" alt="">
            <a href="https://www.medline.com/product/Medline-Pistol-Grip-Reacher/Reachers/Z05-PF127661" target="_blank">
                <h4>Reacher</h4>
            </a>
        </div>

        <div>
            <img src="assets/standard-mattress.jpg" alt="">
            <a href="https://www.amazon.com/Kolbs-Long-Pressure-Redistribution-Mattress/dp/B00V0C17EU" target="_blank">
                <h4>Standard Mattress</h4>
            </a>
        </div>


    </div>

    <div class="dme-url">

        <div>
            <img src="assets/cpap-bpap.jpg" alt="">
            <a href="https://www.philips.com.ph/healthcare/product/HCNOCTN447/dreamstation-cpap-bipap-cpap-bi-level-therapy-systems" target="_blank">
                <h4>CPAP and BiPAP</h4>
            </a>
        </div>

    </div>`,
    OrderStatus: `<div id="order-status">

        <h1>Order Status Inquiry</h1>

        <h3>Scenario:</h3>
        <strong><p>PT calls in - "hi, I would like to know the status of my order"</p></strong>

        <strong><p>How do we begin our investigation?</p></strong>
        <p>Right beneath, you'll see the order was created by Jenna.</p>
        <p>Above it - the WIP is to Miri. Do we send an email outright? <strong>NO</strong>.</p>
        <img src="assets/policy/1.png" alt="">
        <strong><p>Go to the notes, we need to scroll downwards (DO NOT JUST LOOK AT THE LATEST) and look at the LAST COMMENT:</p></strong>
        <p>Here it states on 5/3 - Jenna submitted the items for auth to Wellcare</p>
        <p>Today, 5/25 - Wellcare responded as per Jenna, and the needed information is in the completed folder (check orders@valmar and you'll see that Wellcare responded)</p>
        <img src="assets/policy/2.png" alt="">
        <strong><p>Wellcare's response found in the orders@valmar inbox:</p></strong>
        <img src="assets/policy/3.png" alt="">
        <p>The answer then to the inquiry of "I'd like to know the status of the order" is - "Hi, we have submitted this for auth to Wellcare and the insurance is needing additional documentation for them to approve. We are working on this and someone will get in touch with you to provide an update"</p>

        <strong><p>As a summary:</p></strong>
        <p>Any calls pertaining to supplies that are being submitted for auth - it is important to see who the order is wiped to and to check the WIP STATE.</p>
        <p>We go to the notes to see the latest one, scroll downwards to get a clearer picture of the order's status, investigate analyze your findings - then provide the needed update to the PT or insurance rep.</p>

        </div>

        `,
    UpdatingTemplate: `<div id="updating-template">
        <h1>Updating Template</h1>
        <strong><p>CLEAR CLASSIFICATION - this should be NONE</p></strong>
        <img src="assets/policy/4.png" alt="">
        <strong><p>Check off USE PT ADDRESS and make sure deliverable</p></strong>
        <img src="assets/policy/5.png" alt="">
        <strong><p>Check PAR EXP date - check the PAR in the template and see if it matches the daily sheet / latest auth</p></strong>
        <strong><p>Check Pricing - billing correct payer, PROC selected etc</p></strong>
        <p>Below, the pricing is $0.00 as we divided the PT's supplies for PU and diapers - NO ACTION WILL BE DONE</p>
        <img src="assets/policy/6.png" alt="">
        <p>Below, pricing is zero as there is no HCPC. Work on it, put the HCPC</p>
        <img src="assets/policy/7.png" alt="">
        <strong><p>Check that the facility is on the template</p></strong>
        <p>Go to the items. These are incontinence, payable through Medicaid (CPHP). Choose CPHL and input in the template's facility</p>
        <img src="assets/policy/8.png" alt="">
        <strong><p>Clear Custom Fields Set Up By</p></strong>
        <p>Remove the name and set-up date</p>
        <img src="assets/policy/9.png" alt="">
        <strong><p>Clear name of Marketing Rep</p></strong>
        <p>Remove the name</p>
        <img src="assets/policy/10.png" alt="">
        <strong><p>No ICD 10 DX code entered</p></strong>
        <p>Look by the PT level and copy the ICD and put it in the clinical tab, by the template</p>
        <img src="assets/policy/11.png" alt="">
        <strong><p>On the clinical tab - enter the Marketing Referral Name</p></strong>
        <p>Go by the PT level and check the facility in the personal tab. Once you see it, go to the template, choose facility, and enter the facility's name</p>
        <img src="assets/policy/12.png" alt="">
        </div>`,
    DelayDelivery: `<div id="delayed-deliveries">
        <h1>Delayed Deliveries - What to do?</h1>

        <strong><p>"I was promised to get it Monday and until now, I do not have it!"</p></strong>
        <p>"I apologize for the delay. I understand how important this must be for you. We had a minor system update and unfortunately your order was affected. You are my responsibility and I will treat this with urgency. You will get your supplies this week, and latest is by Monday, 6/14”</p>
        <p>You may include: “I can also call you back to update you of the progress so you would not exert effort knowing where your supplies are"</p>

        <strong><P>"I need an exact date! I will not sit around watiing all week!"</P></strong>
        <p>“I certainly agree with you. The good news is for UPS, - you do not have to wait for them. If they don't catch you at home, they will leave a door tag that will either state A. they will go back and attempt next day, B. your supplies will be at an authorized UPS access point (very near your premise) to have it picked up”</p>
        <p>You may include: “I can also call you back to update you of the progress so you would not exert effort knowing where your supplies are”</p>

        <strong><p>"You said the same thing last month!"</p></strong>
        <p>“I apologize if your supplies are delayed once more. I would like to let you know that here at Valmar, we look for ways to improve our delivery system to serve you better. Our system update is one of them. The good news is you will get your supplies this week, latest is Monday 6/14”</p>
        <p>You may include: “I can also call you back to update you of the progress so you would not exert effort knowing where your supplies are”</p>

        <strong><p>We will be available for supervisor calls. But this should be the last resort. All of you are highly skilled. I trust you know what to do.</p></strong>

        <strong><p>Remember:</p></strong>
        <ul>
            <li><strong>Listen and acknowledge</strong> - Let them vent, we need to hear them out</li>
            <li><strong>Apologize</strong> - Inject empathy - put yourselves in their shoes. Your tone of voice is very important</li>
            <li><Strong>Expectations</Strong> - Tell the, the next steps of what you will be doing after the call (e.g. track the status of their delivery and call them back to update)</li>
            <li><strong>Control the conversation</strong> - Let them know this is a system constraint brought about an enhancement in our system</li>
            <li><strong>Take ownership</strong> - use the “I” statement. “I will take care of this”, “I will treat this with urgency”, “I will make sure to call you back and update you”</li>
            <li><strong>Confidence statements</strong> - Providing assurance statements when needed will do you big. They know they have reached the right person</li>
        </ul>
            <p>Lastly - When you do the notes, leave it OPEN (if needing to call back) and WIP it yourself.</p>
            <img src="assets/policy/13.png" alt="">
            <p>During avail time, run the open notes to yourself and check UPS website. Call the PT back once we have an update</p>
            <img src="assets/policy/14.png" alt="">
    </div>
        `,
    ReturningCall: `<div id="delayed-deliveries">
        <h1>Returning a Call</h1>

        <strong><p>Policy:</p></strong>
        <p>When a phone call comes in we need to always task the message using the 2.4 note to the intended rep.</p>
        <strong><p>Procedure:</p></strong>
        <p>When a phone call comes in and the inbound rep cannot help so they take a message or transfer. When they take a message, they must note it down on the 2.4 note and task it to the rep. You may send an email with a subject line: RETURNING A CALL then task it using 2.4.</p>
        <img src="assets/policy/15.png" alt="">


    </div>
        `,
    Notes: `<div id="delayed-deliveries">
        <h1>Notes - New Policy</h1>
    <h3>Editing a Note</h3>
        <strong><p>Policy:</p></strong>
        <p>You must add a comment each time you edit your note.</p>
        <strong><p>Procedure:</p></strong>
        <p>If a note was tasked to you and you want to make a change to it, you must ALWAYS add a comment noting why you made a change. Example: if it was tasks to you for a specific date and you wanted to push off the ‘date needed date’ you would need to add a comment why (waiting for item to be in stock). You may not make a change without a comment.</p>

    <h3>Notes - Filling in Properly</h3>
        <strong><p>Policy:</p></strong>
        <p>All notes must be filled in properly!</p>
        <strong><p>Procedure:</p></strong>
        <p>When creating a note in the system (for any reasons!) and there are questions that need to be answered you may not leave any blank or delete. Every question /line must be filled in with either the correct answer or N/A if it is not applicable for that situation.</p>
        <strong><p>**You may not delete any lines or leave them blank**</p></strong>
        <img src="assets/policy/16.png" alt="">

    </div>
        `,
    RemovingAdding: `<div id="removing-adding-orders">
        <h1>Removing/Adding Orders</h1>

        <h3>Removing an order:</h3>
        <p>PT calls in and wants to remove an order. E.g. – SO 12345 contains gloves and liners, and PT wants gloves only.</p>
        <p>If we see the reference below labeled as SHIP LINERS, we need to change this to SHIP and remove the liners</p>
        <p>REMEMBER though, that if order is already PRINTED, we can never modify and we have no choice but to let it ship as is.</p>
        <img src="assets/policy/17.png" alt="">
        <h3>Adding an order:</h3>
        <p>Same concept - if a PT calls in and they want to ADD an order and we see the same reference (SHIP LINERS)</p>
        <p>If order is already PRINTED - we let it ship. Create a new SO and schedule it in accordance to the announced SHIPs/Del schedule</p>
        <p>If order is NOT PRINTED, we can add the item (provided it has auth), CHANGE the reference to SHIP.</p>
        <h3>Summary:</h3>
        <p>In any order we modify, we change the reference to SHIP, provided that label has not been printed yet</p>
        <p>If label is printed - we let it ship and create a new SO if we are adding an order</p>
        <p>If label is not printed - we can add or delete an item and change the reference to SHIP</p>

    </div>`,
    ReschedulingShips: `<div id="ReschedulingShips">
        <h1>Rescheduling SHIPs</h1>

        <p>The only person allowed to do this is JM - and this is for SHIP RUSH. If we are to reschedule an order to be SHIPPED, we need to look at the current announced delivery/SHIP date (refer to the attached).</p>
        <p>If you see order has not been printed yet  and PT claiming of not receiving the items - reship to the current SHIP date</p>
        <p>If printed with no movement and you are unable to find it on the list of UPS, send an email to JM to collate. Let the PT know that you'll call them</p>
        <p>back tomorrow as UPS's website is having tech difficulties and is not generating any tracking number.</p>



    </div>`,
    SkipDelivery: `<div id="SkipDelivery">
        <h1>STOP AUTH/ HOLD SKIP DELIVERY</h1>

        <h3>Updated Process:</h3>

        <p>If a PT calls in to request for stop/hold/skip delivery due to too much supplies - we cater to their request. We the WIP the STOP AUTH/ HOLD SKIP DELIVERY to Arcelie Villafuerte and put the date needed to 30 days from now. E.g. call is today, 7/30
            - WIP to Arcelie and input 8/30.</p>
        <p>If PT states they will call us back to let us know of resuming their services, we still need to follow the process. These PTs are mostly elderlies with ailments and disabilities and may have forgotten they will call us back once they need more supplies.
            In turn – we will get complaints from insurance reps.</p>
        <p>Arcelie will then call these PTs after 30 days to let them know we are resuming our services.</p>
        <p>
            <Strong>We no longer ask them if it will only for this month or onwards. We want them to be active again after 30 days.</Strong>
        </p>


    </div>`,
    CustomsFields: `<div id="CustomsFields">
        <h1>Customs Fields</h1>
        <h3>Reminder:</h3>
        <ul>
            <li>We populate the INSURANCE FIELDS with the PT's current insurance payor.</li>
            <li>If we see the items as incontinence and covered by CPHL - we do CPHL</li>
            <li>If under Straight Medicare - We choose Medicare</li>
        </ul>
        <p>We should never put a non-existing insurance. If the insurance is not among the dropdown, leave it blank and let me know so I can have this updated.</p>
        <img src="assets/policy/18.png" alt="">


    </div>`,
    OnlineChatSupport: `<div id="OnlineChatSupport">
        <h1>Online Chat Support - Workflow</h1>

       <h3>Please see guidelines set below for our Chat Support Team.</h3>
       <strong><p>Initial response for a normal inquiry</p></strong>
       <p>“Hi, good morning! Thank you for your question, I would be delighted to help you today. May I please have your date of birth, first and last name to assist you better?”</p>
       <p>If not the PT themselves, we proceed to ask “How are you related to the PT?”</p>
       <strong><p>We will only allow relatives, nurses, insurance reps and care givers. Neighbors / Friends are not authorized</p></strong>

       <strong><p>Initial response to an issue</p></strong>
       <p>“Hi, good morning! Thank you for bringing this up to my attention. I apologize for (issue). You have reached the right person and I will resolve this for you. May I please have your date of birth, first and last name to assist you better?”</p>
       <strong><p>While looking / researching for an answer, this is how we will be message our PTs and members:</p></strong>
       <p>“Thank you for providing me the details. Give me a short moment while I get you the needed information / resolution”</p>
       <strong><p>*It is important to go back to your chat in 30secs or less. If you need more time, please use this:</p></strong>
       <p>“Thank you for waiting. I am still validating some information and would need more time. I appreciate your patience”</p>
       <strong><p>When providing an answer:</p></strong>
       <p>“Hi (insert name), thank you for waiting. I am happy to let you know that (insert resolution here).”</p>
       <strong><p>After providing a resolution:</p></strong>
       <p>“With this being said, is there anything else I can help you with for today, (insert name)?”</p>
       <strong><p>If none, use the closing remarks:</p></strong>
       <p>“Thank you for reaching out to Valmar Surgical today, we appreciate your business. I am now ending this chat session. Have a great one ahead”</p>
       <strong><p>*Remember – we will never close a chat without a confirmation that their concern/question have been resolved.</p></strong>

       <h3>Key Performance Indicators:</h3>
       <ul>
           <li>Average Chat Duration - below 4mins</li>
           <li>Average Response Time - below 30secs</li>
           <li>Chat Windows - 2 or more</li>
           <li>Longest Wait - below 20secs</li>
        </ul>

        <h3>FAQ's</h3>
        <p>What if we are not chatting with the PT themselves, is this allowed? – we will only allow relatives, nurses, insurance reps and care givers.</p>
        <p>Neighbors / Friends are not authorized</p>
        <p>What if we do not get a response? We need to ask <strong>“Hi (insert name), would like to check if you have further questions or inquiry” - wait for 2mins and state <strong>“I have not received any response from you. I am now closing this chat session. Please feel free to contact us again anytime”</strong></strong> </p>
        <p>What if the need a copy / transcript of the chat session? Yes, we can provide. Instruct them to click on the “request copy” in the chat window and it will be sent to their email address they registered</p>
        <img src="assets/policy/19.png" alt="">


    </div>`,
    TemplateHouseKeeping: `<div id="House-Keeping">
        <h1>Template House Keeping</h1>

        <h3>Reminder when working on a template:</h3>
        <p>1. <strong>Order Tab</strong> - USE PT address should be green and NEVER a USER OVERRIDE</p>
        <p>If it is grayed out - revisit the PT level. Check if the billing and shipping address are both green and validated. Go back to the template, you'll now be able to validate</p>
        <p>2. <strong>Insurance Tab</strong> - Make sure the item is billable to the correct payor. These boxes should be CHECKED OFF:</p>
        <img src="assets/policy/21.png" alt="">
        <p>3.
            <Strong>Items tab</Strong> - All authorized (RECURRING) items should be here. Separate Ostomy and Enterals. Only diabetic supplies and incontinence should be together.</p>
        <img src="assets/policy/22.png" alt="">
        <p>4. <strong>PAR Tab</strong> - PAR # should match the item in the template and auth sheet</p>
        <img src="assets/policy/23.png" alt="">
        <img src="assets/policy/24.png" alt="">
        <p>5. <strong>We can never leave a blank template from running, if you see one, check if an item needs to be added. If none, equal the template to stop from running</strong></p>


    </div>`,
    ProcessUpdateTemplate: `<div id="ProcessUpdate-Templates">
        <h1>Process Update - Templates</h1>

        <h3>What: New process for special instructions</h3>
        <h3>When: Effective IMMEDIATELY 8/26/2021</h3>
        <h3>Who: (Owner) Everyone</h3>
        <h3>How: See below:</h3>

        <p><strong>Scenario:</strong></p>
        <p>PT calls and say “I want my liners removed for September, and only need gloves and chux as I have too many of them. Come October, I need all of them again”</p>
        <p><strong>What you usually do:</strong></p>
        <p>Remove liners from the template for September and put an order note like this below:</p>
        <img src="assets/policy/25.png" alt="">
        <p>We shall no longer be doing this effective immediately</p>
        <p><strong>New process:</strong></p>
        <p>All special instructions pertaining to supplies will be noted as a 16.1 note</p>
        <p>What is a 16.1 ORDER NOTE? This is a note we use when a specific instruction(s) is provided by the PT for their order</p>
        <p><strong>16.1 ORDER NOTE samples</strong></p>
        <ul>
            <li>I just want diapers next 2 months and resume everything on the 3rd month.</li>
            <li>If there is an existing SO, remove the item. If not – do not touch the template. Angelica will handle</li>
            <li>I need my supplies earlier next month</li>
            <li>I want to try out large gloves next 2 months</li>
            <li>Remove liners for September and resume everything in October</li>
        </ul>
        <p><strong>Procedure:</strong></p>
        <ul>
            <li>Go to notes and open 16.1. This should be assigned automatically to Angelica - Angelica Esquivel we'll have a separate discussion on the how-to's</li>
            <li>Enter the TEMPLATE ID and INSURANCE</li>
            <li>Input exactly the SPECIAL INSTRUCTIONS</li>
        </ul>
        <img src="assets/policy/26.png" alt="">
        <p>
            <Strong>Why are we doing this?</Strong>
        </p>
        <ul>
            <li>1. Order note in the Sales Order (above) is not being followed religiously</li>
            <li>2. We want to make sure we comply to the PT's request (it is doable) and there is no system constraint</li>
            <li>Lesser issues with order, happier PT</li>
        </ul>
        <p><strong>Remember:</strong></p>
        <p>A STOP AUTH/HOLD SKIP DELIVERY is a request to stop a certain item or entire supplies with no definite date of resumption</p>
        <p>A 16.1 is a special instruction to remove a supply and will resume next month or any special DOABLE instructions</p>

        <h3>Diffrentiating:</h3>
        <p><strong>A STOP AUTH/HOLD SKIP DELIVERY samples</strong></p>
        <ul>
            <li>I am going on vacation and would want to stop my deliveries. I'll just call you back</li>
            <li>I have too many supplies, stop all my delveries onwards, not sure when I would be needing them</li>
            <li>Remove liners from my order. I have too many of them and I will just call back if I need them. Just send me my gloves and liners onwards</li>
        </ul>
        <p><strong>16.1 ORDER NOTE samples</strong></p>
        <ul>
            <li>I just want diapers next 2 months and resume everything on the 3rd month</li>
            <li>If there is an existing SO, remove the item. If not – do not touch the template. Angelica will handle</li>
            <li>I need my supplies earlier next month</li>
            <li>I want to try out large gloves next month</li>
        </ul>
        <p><strong>What NOT to do a 16.1 ORDER NOTE:</strong></p>
        <ul>
            <li>Have the driver ring my bell</li>
            <li>Have the UPS man delivery my supplies and leave it infront of my garage</li>
            <li>I want better quality of diapers</li>
            <li>I want the driver to be smiling when my supplies are being delivered</li>
        </ul>
    </div>`,
    GlovesOnly: `<div id="Gloves-Only">
        <h1>Gloves Only - Policy Update</h1>

        <h3>WHAT TO DO:</h3>
        <p>
        Please check if there is an existing 16.3 note. If there's none, you can create 16.3 note (same process - assigned to "All", date needed should be the expiration on the auth
        </p>

        <h3>Please see sample below:</h3>
        <img src="assets/gloves1.png">
        <img src="assets/gloves2.png">
        <img src="assets/gloves3.png">

    </div>`,
    NewSchedulingProcess: `<div id="NewSchedulingProcess">
        <h1>New Scheduling process for Driver Deliveries</h1>

        <p><strong>Any equipment within the 5 Boroughs below should only have 2 a reference of either Facility or NF (non-facility)</strong></p>

        <p>If regular equipment to any of the 5 Boroughs:</p>
        <li>“NF BRONX” should be the reference  (NF + Borough)</li>
        <li>NF stands for NON-FACILITY</li>
        <p>If FACILITY order to any of the 5 Boroughs:</p>
        <li>“Facility BROOKLYN” should be the reference (Facility + Borough)</li>
        <p>When will this take effect?</p>
        <p>All orders being scheduled for Sept. 7, 2021</p>
        <img src="assets/policy/27.png" alt="">

    </div>`,
    ProcessUpdate: `<div id="Process-update">
        <h1>Process Update: New Process for Grab Bar Orders</h1>
        <p>Effective immediately, we are no longer be assigning the WIP for grab bar orders to Aziz.</p>
        <p><strong>WHAT TO DO:</strong></p>
        <p>1. <strong>Reference - you must make sure to write GRAB BAR in the reference</strong></p>
        <p>2. <strong>Location -you must make sure to select ‘Grab Bars’ as your location.</strong></p>
        <p>3. <strong>The scheduled date should always be the following Monday’s date. (Make sure that date is with in auth dates or use the next Mondays date.)</strong></p>
        <p>4. <strong>Once the order is scheduled click ‘send POD’ so all orders will be routed in Apacheta.</strong></p>
        <p>5. <strong>Going forward we will not be using WIPs and will no longer populate custom fields for any grab orders.</strong></p>
        <img src="assets/policy/28.png" alt="">
        <img src="assets/policy/29.png" alt="">




    </div>`,
    BrightreePurpose: `<div id="Brightree-Purpose">
    <h1>Brightree Purpose</h1>
    <p><strong>Whenever we access BRIGHTREE for whatever the purpose maybe, please remember this picture:</strong></p>
    <img src="assets/policy/30.png" alt="">
    <p>Regardless of if your purpose is to update, void, change, add an order or modify a PT's information</p>
    <p><strong>YOUR PURPOSE should also be UPDATING THE PT ADDRESS. Validate and ensure it is DELIVERABLE.</strong></p>
</div>`,
    UPSOrderTips: `<div id="UPS-Order-Tips">
        <h1>UPS Order Tips</h1>
        <p>If you enter a tracking number in UPS and shows the message below, it doesn't mean that we have not fulfilled the delivery. It simply means that the tracking number is more than 4mos old. Delivery details in the UPS website will only have a maximum
            of 120 days or 4mos.</p>
        <img src="assets/policy/31.png" alt="">
        <p>One way to distinguish if the order is fulfilled or delivered is by checking the CONFIRM button. We only press the CONFIRM button in BT if we are sure that the supplies have been delivered.</p>
        <img src="assets/policy/32.png" alt="">
    </div>`,
    ProcessWorkflowDMEs: `<div id="UPS-Order-Tips">
    <h1>Clear Order Process Workflow - DMEs</h1>
    <p>
        <Strong>This is our official policy and process workflow for DME orders in the Clear Portal.</Strong>
    </p>
    <p>It is imperative for the individuals involved to understand their role to have this run like a clockwork.</p>
    <p><strong>Clear Order Process Workflow (DMEs)</strong></p>
    <p><strong>Policy:</strong></p>
    <p>To make sure that all DME orders that we accept in the portal shall have the needed documentation to be submitted for auth or request additional documentation if there is none Marissa will officially be in charge of accepting recurring and DMEs from
        the Clear Portal</p>
    <p><strong>Procedure:</strong></p>
    <ul>
        <li>Marissa to accept the order</li>
        <li>Create a BT profile and SO (remove the schedule date)</li>
        <li>If with attached documentation – WIP the note to Katt @Katherine Se using 7.1 Intake – SCRIPT/CLINICALS RECEIVED</li>
        <li>Marissa to send the received documentation to orders (do not forget ###)</li>
    </ul>
    <p><strong>IF WITHOUT DOCUMENTATION</strong></p>
    <p>flag the order and choose DOCUMENTATION NEEDED and notate “Please send needed script/clinicals to proceed with the order”</p>
    <img src="assets/policy/33.png" alt="">
    <p><strong>IF WITH DOCUMENTATION:</strong></p>
    <p><strong>@Katherine Se</strong></p>
    <ul>
        <li>Review script/clinicals received</li>
        <li>If all is well, proceed to submit for auth (and we'll follow the normal process)</li>
</ul>
    <p>If needing additional or revised – back the 7.1 to Marissa and Marissa to flag the order in the Clear Portal (comments will be based on Katt's findings e.g., need revised RX etc)</p>
    <p><strong>@Crisjean Crispolon and @Nyssa Salmasan</strong></p>
    <ul>
        <li>1 call attempt per day for 3 days as this is an INTAKE</li>
        <li>If unable to contact after 3 days, proceed to VOID the order as UNABLE TO CONTACT</li>
        <li>WIP back the 4.14 note to Marissa</li>
    </ul>
    <p>Marissa to go back to the Clear Portal and flag the order as below:</p>
    <img src="assets/policy/34.png" alt="">
    <p>Marissa to check the reply from Clear Orders daily</p>
    <p>If we get a reply that they do not have a documentation of the order, WIP to Bjay  (NOTE TEMPLATE TO BE DETERMINED) @Bernardo Navarro</p>

    <p>Inbound Team shall answer all Clear Portal inquiries as normal via checking the notes. If unable to please transfer the call to @Paula Jane Balajadia x816 or @Marissa Ostria x809</p>
</div>`,
    InsuranceQuestions: `<div id="creoh">
        <h1>Insurance Questions</h1>

        <p>Below is the list of our US Billing Team and the insurance they handle.</p>
        <p>If we get a call specific to billing inquiries – check which insurance and revert to the list.</p>
        <p>Send an email directly to the Biller concerned, cc Brian and Elisha and no one else.</p>
        <p>If there is the need to speak directly to the Biller itself, transfer the call over straight instead of using the billing queue.</p>


        <table>
            <tr class="table-name">
            </tr>
            <tr class="Table-header">
                <td>Insurance by Biller:</td>
                <td></td>

            </tr>
            <tr class="table-content">
                <td>Agewell</td>
                <td>Goldy Rosenblum</td>

            </tr>
            <tr class="table-content">
                <td>Archcare</td>
                <td>Goldy Rosenblum</td>
            </tr>
            <tr class="table-content">
                <td>Elderplan</td>
                <td>Goldy Rosenblum</td>
            </tr>
            <tr class="table-content">
                <td>Elderserve</td>
                <td>Goldy Rosenblum</td>
            </tr>
            <tr class="table-content">
                <td>Homefirst</td>
                <td>Goldy Rosenblum</td>
            </tr>
            <tr class="table-content">
                <td>No-fault</td>
                <td>Goldy Rosenblum</td>
            </tr>
            <tr class="table-content">
                <td>Patient</td>
                <td>Goldy Rosenblum</td>
            </tr>
            <tr class="table-content">
                <td>Aetna</td>
                <td>Raizel Joseph</td>
            </tr>
            <tr class="table-content">
                <td>Medicaid</td>
                <td>Raizel Joseph</td>
            </tr>
            <tr class="table-content">
                <td>Metroplus</td>
                <td>Raizel Joseph</td>
            </tr>
            <tr class="table-content">
                <td>Village Care</td>
                <td>Raizel Joseph</td>
            </tr>
            <tr class="table-content">
                <td>1199</td>
                <td>Adina Lerman</td>
            </tr>
            <tr class="table-content">
                <td>Extended MLTC</td>
                <td>Adina Lerman</td>
            </tr>
            <tr class="table-content">
                <td>Integra</td>
                <td>Adina Lerman</td>
            </tr>
            <tr class="table-content">
                <td>Medicare</td>
                <td>Adina Lerman</td>
            </tr>

        </table>
    </div>`,
    IssueWithOrder: `<div id="creoh">
    <h1>Issue with Order</h1>
    <p><strong>If the issue is about SHIP, you will be using notes from 2.3.1 to 2.3.4</strong></p>
    <p>Based off from our call types, majority of our SHIP issues are missing, incorrect item and incorrect QTY</p>
    <p>You just need to choose the right category</p>
    <p><strong>If the issue is about DRIVER, you will be using 2.3.5 to 2.3.8</strong></p>
    <p>Just choose the correct category</p>
    <p><strong>Question: How will you choose the correct category?</strong></p>
    <ul>
        <li>By LISTENING to the PT's concern</li>
        <li>After listening, you PROBE</li>
        <li>After PROBING, you RESTATE or SUMMARIZE</li>
    </ul>
    <p><strong>Samples below:</strong></p>
    <ul>
        <li>“Based off from what you told me and how I understand this, you received your liners and chux yesterday. You emptied the box and noticed that the gloves are missing, correct?” - you will then choose SHIP ISSUE – MISSING ITEM</li>
        <li>“Based off from what you told me and how I understand this, the left wheel of the wheelchair is not working upon delivery, correct?” – you will then choose DRIVER ISSUE - DAMAGED</li>
        <li>“Based off from what you told me and how I understand this, the bed's lower leg part is not elevating upon delivery correct?” – you will then choose DRIVER ISSUE - DAMAGAED</li>
        <li>“Based off from what you told me and how I understand this, the break(s) of the wheelchair is no longer working after several months, correct? – you will then choose INBOUND CALL – WEAR AND TEAR</li>
    </ul>

    <table>
        <tr>
            <td><strong>2.3 INBOUND CALL- ISSUE WITH ORDER</strong></td>
        </tr>
        <tr>
            <td><strong>2.3.1 INBOUND CALL- SHIP ISSUE- MISSING ITEM</strong></td>
        </tr>
        <tr>
            <td><strong>2.3.2 INBOUND CALL-SHIP ISSUE- WRONG ITEM RECEIVED</strong></td>
        </tr>
        <tr>
            <td><strong>2.3.3 INBOUND CALL- SHIP ISSUE- WRONG QUANTITY</strong></td>
        </tr>
        <tr>
            <td><strong>2.3.4 INBOUND CALL- SHIP ISSUE- GENERAL</strong></td>
        </tr>
        <tr>
            <td><strong>2.3.5 INBOUND CALL- DRIVER ISSUE- DAMAGED</strong></td>
        </tr>
        <tr>
            <td><strong>2.3.6 INBOUND CALL-DRIVER ISSUE- MISSING ITEM/PART</strong></td>
        </tr>
        <tr>
            <td><strong>2.3.7 INBOUND CALL- DRIVER ISSUE- WRONG ITEM</strong></td>
        </tr>
        <tr>
            <td><strong>2.3.8 INBOUND CALL- WEAR AND TEAR</strong></td>
        </tr>
        <tr>
            <td><strong>2.3.3 INBOUND CALL- MISSING SHIPMENT</strong></td>
        </tr>
    </table>
    <p><strong>Right below is the body of the template. PLEASE TAKE NOTE:</strong></p>
    <ul>
        <li>“IS SERVICE CALL NEEDED?” – If you think that a service call is needed, put YES but this does not guarantee a service call</li>
        <li>“IS SERVICE CALL NEEDED?” – If you think that a service call is NOT NEEDED, close the note</li>
    </ul>
    <p><strong>Next steps (if SERVICE CALL IS NEEDED):</strong></p>
    <ul>
        <li>WIP the actual ISSUE WITH ORDER note to Devora (equipment) and Rhyan (Incontinence/recurring supplies, small EQ's like BP monitors, glucometer) – WE WILL NO LONGER USE SERVICE CALL. WIPing this note will suffice as a replacement for the SERVICE
            CALL NOTE</li>
        <li>Leave the note OPEN</li>
        <li>Let the PT/member know that we will treat this with urgency and will be evaluated</li>
    </ul>
    <img src="assets/policy/35.png" alt="">
    <p>If you are unsure on how to categorize, PLEASE ASK. We do not choose a note template for the sake of just wanting to, we need this to be accurate. Our goal is to address and lessen our issues with order. This will start from YOU, identifying which
        is what – accurately.</p>
</div>`,
    WeekendNHPs: `<div id="creoh">
        <h1>Weekend NHPs</h1>
        <p><strong>What is our goal?</strong></p>
        <p>To call these patients and acquire a NEW RX. We will continue servicing them once we have it.</p>
        <p><strong>Call script:</strong></p>
        <p>“Hi good morning, this is (NAME) calling from Valmar Surgical. We recently provided you your incontinence supplies (ENUMERATE – Diapers, Liners, Chux etc)  over a new prescription to us”</p>
        <p><strong>Process workflow:</strong></p>
        <ul>
            <li><strong>If PT declines</strong> - Ask the reason why and address as needed. E.g. Delayed deliveries – commit and guarantee to SHIP RUSH/EXPEDITE and assign to self as special instructions.  customer service we provide.</li>
            <li><strong>If NO ANSWER</strong> - create a 17.5 – INTEGRA/PARACHUTE INCNTNCE ORDER and WIP to self for Monday 11/15. We do a total of 3 attempts, 1 (one) per day and if still NO ANSWER – stop the template from running</li>
            <li><strong>IF PT agrees</strong> - Provide our fax number. If PT wants us to do the legwork and call their doctor, get the info and we do the call attempt to the doctor's office. Notate using 17.5 – INTEGRA/PARACHUTE INCNTNCE ORDER and 17.1 – INTEGRA/PARACHUTE INCNTNCE ORDER – CMN/SCRIPT</li>
        </ul>
        <p>Once you receive the script from Scanners, assign back to the person who created the 17.1 (Wilma)</p>
        <p><strong>Once we have the RX, follow the steps below:</strong></p>
        <ul>
            <li>Create a sales order</li>
            <li>Update the template with what is on the RX. The # of RUN DATE will be based off from the CMN (6 months)</li>
            <li>Log the CMN with a 6 month expiration date</li>
            <li>Assign the CMN to you future dated for 5 months to follow-up again (we anticipate prior to expiring)</li>
            <li>Schedule the order and use 7.15</li>
        </ul>
        <p><strong>How to log CMN?</strong> <a target="_blank" href="https://valmarsurgical-my.sharepoint.com/:p:/r/personal/john_dynamichcsolutions_com/_layouts/15/Doc.aspx?sourcedoc=%7BC41049D7-7051-44FE-B896-25CD90B81918%7D&file=All%20About%20CMN.pptx&action=edit&mobileredirect=true">Click here</a></p>
        <p><strong>Do we need an auth?</strong></p>
        <img src="assets/policy/36.png" alt="">

    </div>`,
    TripleOrderProcess: `<div id="creoh">
    <h1>Triple Order Process</h1>
    <ul>
        <li>We're not creating new sales orders for the original order - we're using the order the template will generate and simply updating the QTY (while ensuring the BQTY remains the same)</li>
        <li>Actual date will not be filled out by the confirmation team it is automatically inputted when shipped</li>
        <li>Reference will be different for every item, not sure why SI SHIP CHUX | 6 is being used, unless it's not clear that it's as an example</li>
        <li>On the copied orders, Status needs to be changed to Delivered</li>
    </ul>
    <p>Apart from order accuracy, we see to it that:</p>
    <ul>
        <li>PT/rep questions pertaining to tripled orders will be answered by our reps in a very satisfactory manner</li>
        <li>We aim for 0 (zero) complaints; therefore, it is imperative to upskill the Inbound Team to handle objections and weave around difficult scenarios. We need to “upsell” why tripled order is an advantage</li>
        <li>Leadership Team shall be ready for escalation calls if our reps find certain objections tough to handle</li>
        <li>Leadership Team to inject and conduct role play during coaching sessions</li>

    </ul>
    <p>We need to run a daily report starting Friday, of all 2.17 notes to quantify AGREED vs DISAGREED and measure how successful we are to determine continuation of this tripled order project</p>
    <p>Billers and Confirmers will not have a difficult time with QTY, BQTY and reference (Elisha will provide a sheet on exactly what to put). With this, we are expecting 100% order accuracy please.</p>


</div>`,
    TripleOrderCallScripts: `<div id="creoh">
<h1>Triple Order Call Scripts</h1>

<h3>Advised Scripts</h3>
<p>Customer: Why do I have so much supplies?</p>
<p>Representative: The supply we sent you is good for 3 months. We know how important supplies are to our patients so by sending enough, we can make sure  you're well taken cared for for 3 months</p>
<br>
<p>Customer: Why do you suddenly sending so much supplies?</p>
<p>Representative: We value our patients well-being by making sure that they enough supplies good for 3 months. We also do not want you to stress out by following us up monthly. We want you to focus your attention in getting better</p>
<br>
<p>Customer: I might ran out of supplies before the third month</p>
<p>Representative: Let me help you solve this problem today. In a day, how many "insert item" are you using? If we are to sustain that number, you supplies will not be able to cover to 3months. You might want to alert our Physician and increase the number of "insert item" in our prescription</p>
<br>
<p>Customer: I don't want this, get the extra supplies out</p>
<p>Representative: I apologize if you feel that you are being forced to take this. Our aim is to be able to give our patients the amount of care they need and after careful evaluation, giving sufficient supplies to our customers we know will make a difference in their health progression. I hope I can get your buy in to this.</p>
<br>
<p>Customer: I don't have enough storage</p>
<p>Representative: We anticipated issues and concerns like yours to happen. The aim of this campaign is for all of our patient have sufficient supplies, we do not wish to burden you with storage issue. We hope we can get your buyin in order for us to continue serving you and other patients to the best that we can.</p>
</div>`,
    TripleOrderAuth: `<div id="creoh">
<h1>New Auth for tripled Orders</h1>

<p>Any member that received 3 months' supply will be recognizable in the following 3 ways:</p>
<ul>
   <li>The December SO has a reference starting with TO  [which stands for Tripled Order]</li>
   <li>The January and February SO (which they received in December) have a reference of TRIPLED ORDER</li>
   <li>There is a 4.17 note on the PT level detailing what items were tripled</li>
</ul>
<p>We've already provided coaching on how to answer members Q's pertaining to their tripled orders (using the 2.12 note).</p>
<p>We will now discuss how we will go about proceeding if we receive any changes to an AUTH over the next 3-month period.</p>
<p>(We are attempting to cover any scenario, but if any scenario comes up that was not covered, please reach out).</p>

<ul>
   <li>STOP AUTH - If we receive a STOP AUTH we will not do anything different, we'll just end the PAR and end the template for good without touching the JAN or FEB orders that were created already</li>
   <li>New Item Added for monthly order - If we get an AUTH to add an item to members monthly delivery (I.E. We delivered 3-month supply of pullups and now member needs to get 25 CHUX monthly as well) we will do the following: Create a new order containing all the QTY of the new item (CHUX) they should be getting through February (if in DEC X3 (75), in JAN X2 (50) in FEB X 1 (25)) while keeping the BQTY at 1 months' worth (25). Then create new orders for the months we included and change reference to TRIPELD ORDER, status to Delivered, and enter scheduled and Actual date for the first of the months. Then update template with the correct added item, which will next run in March.</li>
   <li>Change to QTY of active item
       <ul>
           <li>Increase - (I.E. PT was getting 25 CHUX / month, so we sent 75 / 3 months, now they need to start getting 100/ month)  Treat the same as New Item Added</li>
           <li>Decrease -(I.E. PT was getting 100 CHUX / month, so we sent 300 / 3 months, now they need to start getting 25/ month) This is similar to a STOP AUTH and we will do nothing other than make sure the template is updated with new QTY for next time it runs.</li>
       </ul>
   </li>
   <li>Change of size to current item (I.E. Gloves from L to M, Liners to 6X13, PU or Diaper to a different size or switch from one to the other)
       <ul>
           <li>Still in December - There's nothing to be done for the December order once it was shipped. For the next 2 months, treat as below:</li>
           <li>In January or February - We try to get PT to agree to use the current product we delivered already and start getting the updated product in March for next delivery. If PT is unagreeable we will start sending them the updated product from when they called in as a service call (through Ryhan). If in February, he will imply create a SRVC SO and send out to PT and ensure it's updated on the template. If in January (or in December for JAN - FEB supplies), we will ensure template is updated, and send out as a service call with the updated product for January and February at once.</li>
       </ul>
   </li>
</ul>
<a href="https://valmarsurgical-my.sharepoint.com/:w:/r/personal/john_dynamichcsolutions_com/_layouts/15/Doc.aspx?sourcedoc=%7B9FF1CBFE-E7E1-4A91-8052-2FE48456240F%7D&file=TRIPLED%20ORDER_ADDITIONAL%20QTY.docx&action=default&mobileredirect=true"><h3>Click here for Tripled Order Additional Quantity Guide</h3></a>

</div>`,
    HandleTripleOrderChanges: `<div id="creoh">

<h1>How to Handle Changes in Triple Orders</h1>
<ul>
    <li>STOP AUTH - If we receive a STOP AUTH we will not do anything different, we'll just end the PAR and end the template for good without touching the JAN or FEB orders that were created already</li>
    <li>Change to QTY of active item
        <ul>
            <li>Increase - (I.E. PT was getting 25 CHUX / month, so we sent 75 / 3 months, now they need to start getting 100/ month)  Treat the same as New Item Added</li>
            <li>Decrease -(I.E. PT was getting 100 CHUX / month, so we sent 300 / 3 months, now they need to start getting 25/ month) This is similar to a STOP AUTH and we will do nothing other than make sure the template is updated with new QTY for next time it runs.</li>

        </ul>
    </li>
    <li>Change of size to current item (I.E. Gloves from L to M, Liners to 6X13, PU or Diaper to a different size or switch from one to the other)
        <ul>
            <li>Still in December - There's nothing to be done for the December order once it was shipped. For the next 2 months, treat as below:</li>
            <li>In January or February - We try to get PT to agree to use the current product we delivered already and start getting the updated product in March for next delivery. If PT is unagreeable we will start sending them the updated product from when they called in as a service call (through Ryhan). If in February, he will imply create a SRVC SO and send out to PT and ensure it's updated on the template. If in January (or in December for JAN - FEB supplies), we will ensure template is updated, and send out as a service call with the updated product for January and February at once.</li>
            <li>If gloves only, no need to pick up</li>
            <li>If for other more expensive supplies (pull ups, diapers etc) and within the 5 boroughs, we can have this picked up.</li>
        </ul>
    </li>
    <li>Always counter check the SO in list that was sent you (New Triple Orders)</li>
</ul>



</div>`,
    PhotosfromPatients: `<div id="creoh">

<h1>Photos from our Patients</h1>

<p>Let's standardized the emails of photos being sent to us.</p>
<p>Have our PTs and or reps write in the subject line: ATTENTION: MARISSA</p>
<p><strong>Body of the email should contain:</strong></p>
<ul>
    <li>Name of PT</li>
    <li>DOB</li>
    <li>Concern</li>
</ul>
<p>This way, we know exactly who to forward the email, to receive the needed attention.</p>

</div>`,
    ManilaDirectory: `<h1>TEAM MANILA DIRECTORY</h1>
    <table>

      <tr class="Table-header">
        <td>Name</td>
        <td>Ext</td>
        <td>Email</td>
        <td>Function</td>
      </tr>
      <tr class="table-content">
        <td>Nelter Cardano</td>
        <td>801</td>
        <td>ncardano@valmarsurgical.com</td>
        <td>Quality Analyst</td>
      </tr>
      <tr class="table-content">
        <td>John Mark TIbig</td>
        <td>802</td>
        <td>jtibig@valmarsurgical.com</td>
        <td>Team Leader</td>
      </tr>
      <tr class="table-content">
        <td>Rhyan Gonzales</td>
        <td>803</td>
        <td>rgonzales@valmarsurgical.com</td>
        <td>Subject Matter Expert</td>
      </tr>
      <tr class="table-content">
        <td>Brian Pascual</td>
        <td>804</td>
        <td>bpascual@valmarsurgical.com</td>
        <td>Senior Operation Manager</td>
      </tr>
      <tr class="table-content">
        <td>Ma. Elena Taninas</td>
        <td>805</td>
        <td>etaninas@valmarsurgical.com</td>
        <td>Team Leader</td>
      </tr>
      <tr class="table-content">
        <td>Merry Ann Samonte</td>
        <td>806</td>
        <td>msamonte@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Mark Anthony Jalandoni</td>
        <td>807</td>
        <td>mjalandoni@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Robert Destreza</td>
        <td>808</td>
        <td>rdestreza@valmarsurgical.com</td>
        <td>Billing Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Marissa Ostria</td>
        <td>809</td>
        <td>mostria@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Mary Consuelo</td>
        <td>810</td>
        <td>mconsuelo@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Gina de Lima</td>
        <td>811</td>
        <td>gdelima@valmarsurgical.com</td>
        <td> Customer Service Representative - Document</td>
      </tr>
      <tr class="table-content">
        <td>Bernardo Navarro</td>
        <td>812</td>
        <td>bnavarro@valmarsurgical.com</td>
        <td>Document Chaser Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Nesalen Catalasan</td>
        <td>813</td>
        <td>ncatalasan@valmarsurgical.com</td>
        <td>Billing Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Christine Bugawan</td>
        <td>814</td>
        <td>cbugawan@valmarsurgical.com</td>
        <td>Billing Specialist - Order Confirmer</td>
      </tr>
      <tr class="table-content">
        <td>Wilma Jardin</td>
        <td>815</td>
        <td>wjardin@valmarsurgical.com</td>
        <td>Billing Specialist - Order Confirmer</td>
      </tr>
      <tr class="table-content">
        <td>Paula Jane Balajadia</td>
        <td>816</td>
        <td>pbalajadia@valmarsurgical.com</td>
        <td>Team Leader</td>
      </tr>
      <tr class="table-content">
        <td>Karen Escote</td>
        <td>817</td>
        <td>mgaite@valmarsugical.com</td>
        <td>Order Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Sharlene Refama</td>
        <td>818</td>
        <td>srefama@supplylinemedical.com</td>
        <td>Senior Data Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Jackie Bustamante</td>
        <td>819</td>
        <td>jbustamante@thevalmedgroup.com</td>
        <td>Executive Assistant</td>
      </tr>
      <tr class="table-content">
        <td>Nina Shina Del Rosario</td>
        <td>820</td>
        <td>acadavedo@valmarsurgical.com</td>
        <td>Billing Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Ma. Eliza Miguel</td>
        <td>821</td>
        <td>mmiguel@valmarsurgical.com</td>
        <td>Inbound Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Christian Rabago</td>
        <td>822</td>
        <td>crabago@supplylinemedical.com</td>
        <td>Data Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Kareen Mae Bajo</td>
        <td>823</td>
        <td>kbajo@supplylinemedical.com</td>
        <td>Sales Support Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Bernardo Adrias</td>
        <td>824</td>
        <td>badrias@supplylinemedical.com</td>
        <td>Data Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Giselle Ann Mae Tobias</td>
        <td>825</td>
        <td>gtobias@valmarsugical.com</td>
        <td> Order Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Nyssa Salmasan</td>
        <td>826</td>
        <td>nsalmasan@valmarsurgical.com</td>
        <td>Outbound Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Angelica Esquivel</td>
        <td>827</td>
        <td>aesquivel@valmarsurgical.com</td>
        <td>Team Leader</td>
      </tr>
      <tr class="table-content">
        <td>Arcelie Villafuerte</td>
        <td>828</td>
        <td>avillafuerte@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Crisjean Crispolon</td>
        <td>829</td>
        <td>ccrispolon@valmarsurgical.com</td>
        <td>Outbound Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Katherine Se</td>
        <td>830</td>
        <td>kse@valmarsurgical.com</td>
        <td>Document Review Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Clifford Aquino</td>
        <td>831</td>
        <td>john@dynamichcsolutions.com</td>
        <td>Web Developer</td>
      </tr>
      <tr class="table-content">
        <td>Edchie Pagkaliwangan</td>
        <td>832</td>
        <td>epagkaliwangan@valmarsurgical.com</td>
        <td> Order Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Maria Katrina Hirondo</td>
        <td>833</td>
        <td>mhirondo@valmarsugical.com</td>
        <td> Order Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Kirsten Gale Dolorso</td>
        <td>834</td>
        <td>kdolorso@thevalmedgroup.com</td>
        <td>Bookeeper</td>
      </tr>
      <tr class="table-content">
        <td>Shiella Salas</td>
        <td>835</td>
        <td>ssalas@supplylinemedical.com</td>
        <td>Sales Support Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Maridel Caeg</td>
        <td>836</td>
        <td>mcaeg@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Aileen Alvarado</td>
        <td>837</td>
        <td>aalavarado@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Patrick Dave Villaflor</td>
        <td>838</td>
        <td>pvillaflor@emeraldimportsusa.com</td>
        <td>Order Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Janet Conde</td>
        <td>839</td>
        <td>jcondez@valmarsurgical.com</td>
        <td>Order Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Jazmine Jriej</td>
        <td>840</td>
        <td>jjriej@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Brian Myers Schuck</td>
        <td>841</td>
        <td>bschuck@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Jeralyn Geonzon</td>
        <td>842</td>
        <td>jgeonzon@valmarsurgical.com</td>
        <td>Billing Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Graceline Fernando</td>
        <td>843</td>
        <td>gfernando@valmarsurgical.com</td>
        <td>Outbound Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Donna Mhay Areta</td>
        <td>844</td>
        <td>dareta@valmarsurgical.com</td>
        <td>Order Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Ramel Ocon</td>
        <td>845</td>
        <td>rocon@valmarsurgical.com</td>
        <td>Billing Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Persida Elanie Bernardo</td>
        <td>846</td>
        <td>pbernardo@valmarsurgical.com</td>
        <td>Billing Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Danielle Pambuan</td>
        <td>847</td>
        <td>dpambuan@valmarsurgical.onmicrosoft.com</td>
        <td>Data Entry Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Arienne Bengie Santander</td>
        <td>848</td>
        <td>asantander@valmarsurgical.onmicrosoft.com</td>
        <td>Bookeeper</td>
      </tr>
      <tr class="table-content">
        <td>Mylene Arias</td>
        <td>849</td>
        <td>marias@valmarsurgical.com</td>
        <td>Billing Specialist</td>
      </tr>
      <tr class="table-content">
        <td>Marose Frigillano</td>
        <td>851</td>
        <td>mfrigillano@valmarsurgical.com</td>
        <td>Customer Service Representative</td>
      </tr>
      <tr class="table-content">
        <td>Marie Christine Cu</td>
        <td>852</td>
        <td>mcu@bridge-mgmt.com</td>
        <td>Order Entry Specialist</td>
      </tr>
    </table>
    `,
    Enterals: ``,
    PriceList: `
          <h1>Price List</h1>
          <div class="PriceList">
          <table>
          <tr class="Table-header">
              <td colspan="2">WHEELCHAIR</td>
          </tr>
          <tr class="table-content">
              <td>Wheelchair standard 16''-20''</td>
              <td>$210.00</td>
          </tr>
          <tr class="table-content">
              <td>Wheelchair lightweight 16''-20''</td>
              <td>$275.00</td>
          </tr>
          <tr class="table-content">
              <td>Wheelchair- 24''</td>
              <td>$310.00</td>
          </tr>
          <tr class="table-content">
              <td>Swing away foot rests</td>
              <td>$30.00</td>
          </tr>
          <tr class="table-content">
              <td>Elevating leg rests</td>
              <td>$30.00</td>
          </tr>
          <tr class="table-content">
              <td>Wheelchair-26''</td>
              <td>$650.00</td>
          </tr>
          <tr class="table-content">
              <td>Wheelchair- 28''</td>
              <td>$700.00</td>
          </tr>
          <tr class="table-content">
              <td>Wheelchair-30''</td>
              <td>$700.00</td>
          </tr>
          <tr class="table-content">
              <td>Elevating leg rests for 26''-30'' chair</td>
              <td>$140.00</td>
          </tr>
          <tr class="table-content">
              <td>Highback reclining- 16'' -18''</td>
              <td>$450.00</td>
          </tr>
          <tr class="table-content">
              <td>Highback reclining 20''</td>
              <td>$500.00</td>
          </tr>
          <tr class="table-content">
              <td>Highback reclining 22''</td>
              <td>$525.00</td>
          </tr>
          <tr class="table-content">
              <td>Poly-fly combo chair 16'' -20''</td>
              <td>$350.00</td>
          </tr>
          <tr class="table-content">
              <td>Transport chair 19''</td>
              <td>$150.00</td>
          </tr>
          <tr class="table-content">
              <td>Transport chair 22''</td>
              <td>$250.00</td>
          </tr>
          <tr class="table-content">
              <td>Geri chair</td>
              <td>$500.00</td>
          </tr>
          <tr class="table-content">
              <td>Hip Chair</td>
              <td>$500.00</td>
          </tr>
          <tr class="table-content">
              <td>Seatbelt</td>
              <td>$15.00</td>
          </tr>
          <tr class="table-content">
              <td>Front anti tippers</td>
              <td>$90.00</td>
          </tr>
          <tr class="table-content">
              <td>Rear anti tippers</td>
              <td>$20.00</td>
          </tr>
          <tr class="table-content">
              <td>Brake extenders</td>
              <td>$25.00</td>
          </tr>
          <tr class="table-content">
              <td>Foam seat cushion 16''-20''</td>
              <td>$25.00</td>
          </tr>
          <tr class="table-content">
              <td>Foam seat cushion 22''-26''</td>
              <td>$70.00</td>
          </tr>
          <tr class="table-content">
              <td>Gel 2'' cushion 16''-20''</td>
              <td>$200.00</td>
          </tr>
          <tr class="table-content">
              <td>Gel 2'' cushion 22''-26''</td>
              <td>$200.00</td>
          </tr>
          <tr class="table-content">
              <td>Back cushions 16''-20''</td>
              <td>$75.00</td>
          </tr>
          <tr class="table-content">
              <td>Wheelchair tray</td>
              <td>$125.00</td>
          </tr>
          <tr class="table-content">
              <td>Swing away arm trough</td>
              <td>$350.00</td>
          </tr>
          <tr class="table-content">
              <td>Amputee support</td>
              <td>$250.00</td>
          </tr>
          <tr class="table-content">
              <td>Wheelchair O2 holder</td>
              <td>$35.00</td>
          </tr>
          <tr class="Table-header">
              <td colspan="2">HOSPITAL BED</td>
          </tr>
          <tr class="table-content">
              <td>Semi electric bed</td>
              <td>$1,000.00</td>
          </tr>
          <tr class="table-content">
              <td>Fully electric bed</td>
              <td>$1,200.00</td>
          </tr>
          <tr class="table-content">
              <td>Bariatric bed</td>
              <td>$2,000.00</td>
          </tr>
          <tr class="table-content">
              <td>Foam mattress</td>
              <td>$125.00</td>
          </tr>
          <tr class="table-content">
              <td>Gel overlay</td>
              <td>$150.00</td>
          </tr>
          <tr class="table-content">
              <td>Low air loss mattress</td>
              <td>$600.00</td>
          </tr>
          <tr class="table-content">
              <td>Bariatric low air loss mattress</td>
              <td>$2,500.00</td>
          </tr>
          <tr class="table-content">
              <td>Crash mat</td>
              <td>$100.00</td>
          </tr>
          <tr class="table-content">
              <td>Trapeze</td>
              <td>$80.00</td>
          </tr>
          <tr class="table-content">
              <td>Bed halo</td>
              <td>$225.00</td>
          </tr>
          <tr class="table-content">
              <td>Bed assist rail</td>
              <td>$80.00</td>
          </tr>
          <tr class="table-content">
              <td>Overbed table</td>
              <td>$100.00</td>
          </tr>
          <tr class="table-content">
              <td>Patient lift (hydraulic)</td>
              <td>$550.00</td>
          </tr>
          <tr class="table-content">
              <td>Patient lift slings</td>
              <td>$125.00</td>
          </tr>
          <tr class="table-content">
              <td>Electric lift</td>
              <td>$1,950.00</td>
          </tr>
          <tr class="table-content">
              <td>Transfer boards</td>
              <td>$40.00</td>
          </tr>
          <tr class="table-content">
              <td>Beasy boards</td>
              <td>$220.00</td>
          </tr>
        <tr class="Table-header">
          <td colspan="2">AMBULATORY</td>
        </tr>
        <tr class="table-content">
          <td>Walker with wheels(standard/ junior)</td>
          <td>$75.00</td>
        </tr>
        <tr class="table-content">
          <td>Bariatric walker with wheels</td>
          <td>$100.00</td>
        </tr>
        <tr class="table-content">
          <td>Walker platform attachment</td>
          <td>$75.00</td>
        </tr>
        <tr class="table-content">
          <td>Walker leg extensions</td>
          <td>$15.00</td>
        </tr>
        <tr class="table-content">
          <td>Walker tray</td>
          <td>$25.00</td>
        </tr>
        <tr class="table-content">
          <td>Knee scooter / Roll a bout</td>
          <td>$350.00</td>
        </tr>
        <tr class="table-content">
          <td>Junior Rollator</td>
          <td>$120.00</td>
        </tr>
        <tr class="table-content">
          <td>Universal rollator</td>
          <td>$120.00</td>
        </tr>
        <tr class="table-content">
          <td>Bariatric rollator</td>
          <td>$150.00</td>
        </tr>
        <tr class="table-content">
          <td>Single point cane</td>
          <td>$15.00</td>
        </tr>
        <tr class="table-content">
          <td>Ortho grip cane</td>
          <td>$25.00</td>
        </tr>
        <tr class="table-content">
          <td>Quad cane (wide / narrow)</td>
          <td>$35.00</td>
        </tr>
        <tr class="table-content">
          <td>Hemi walker</td>
          <td>$65.00</td>
        </tr>
        <tr class="table-content">
          <td>Crutches</td>
          <td>$40.00</td>
        </tr>
        <tr class="table-content">
          <td>Forearm crutches</td>
          <td>$45.00</td>
        </tr>
        <tr class="Table-header">
          <td colspan="2">TOILET & BATH</td>
        </tr>
        <tr class="table-content">
          <td>Commode 3-1</td>
          <td>$75.00</td>
        </tr>
        <tr class="table-content">
          <td>Commode folding</td>
          <td>$75.00</td>
        </tr>
        <tr class="table-content">
          <td>Commode drop arm</td>
          <td>$100.00</td>
        </tr>
        <tr class="table-content">
          <td>Commode bariatric 24''</td>
          <td>$150.00</td>
        </tr>
        <tr class="table-content">
          <td>Commode bariatric 30''</td>
          <td>$175.00</td>
        </tr>
        <tr class="table-content">
          <td>Commode bariatric drop arm</td>
          <td>$175.00</td>
        </tr>
        <tr class="table-content">
          <td>Raised toilet seat</td>
          <td>$35.00</td>
        </tr>
        <tr class="table-content">
          <td>Raised toilet seat with arms</td>
          <td>$45.00</td>
        </tr>
        <tr class="table-content">
          <td>Toilet safety rail</td>
          <td>$45.00</td>
        </tr>
        <tr class="table-content">
          <td>Shower chair</td>
          <td>$50.00</td>
        </tr>
        <tr class="table-content">
          <td>Shower chair with arms</td>
          <td>$65.00</td>
        </tr>
        <tr class="table-content">
          <td>Transfer tub bench</td>
          <td>$70.00</td>
        </tr>
        <tr class="table-content">
          <td>Pvc shower transfer bench</td>
          <td>$90.00</td>
        </tr>
        <tr class="table-content">
          <td>Hand shower kit</td>
          <td>$40.00</td>
        </tr>
        <tr class="table-content">
          <td>Suction grab bar</td>
          <td>$25.00</td>
        </tr>
        <tr class="table-content">
          <td>Tub rail</td>
          <td>$45.00</td>
        </tr>
        <tr class="Table-header">
        <td colspan="2">ADL</td>
        </tr>
        <tr class="table-content">
        <td>Hip kit</td>
        <td>$50.00</td>
        </tr>
        <tr class="table-content">
        <td>Reacher 26''</td>
        <td>$25.00</td>
        </tr>
        <tr class="table-content">
        <td>Reacher 32''</td>
        <td>$30.00</td>
        </tr>
        <tr class="table-content">
        <td>Shoe horn</td>
        <td>$15.00</td>
        </tr>
        <tr class="table-content">
        <td>Long sponge</td>
        <td>$10.00</td>
        </tr>
        <tr class="table-content">
        <td>Dressing stick</td>
        <td>$10.00</td>
        </tr>
        <tr class="table-content">
        <td>Gait belt</td>
        <td>$15.00</td>
        </tr>
        <tr class="table-content">
        <td>Leg Lifter</td>
        <td>$25.00</td>
        </tr>
        <tr class="table-content">
        <td>Sock aid (hard/soft)</td>
        <td>$25.00</td>
        </tr>
        </table>

        <table>
        <tr class="Table-header">
            <td>RESPIRATORY</td>
            <td>PRICE</td>
            <td>RENTAL</td>
        </tr>
        <tr class="table-content">
            <td>Oxygen 5 liter</td>
            <td>$1,250.00</td>
            <td>$150.00</td>
        </tr>
        <tr class="table-content">
            <td>Portable</td>
            <td>$3,600.00</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Pulse oximeter</td>
            <td>$60.00</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Mini tank carry case</td>
            <td>$45.00</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>50 PSI compressor-</td>
            <td>$375.00</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Suction machine</td>
            <td>$375.00</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Auto Cpap</td>
            <td>$650.00</td>
            <td>$100.00</td>
        </tr>
        <tr class="table-content">
            <td>Auto Bipap</td>
            <td>$1,500.00</td>
            <td>$175.00</td>
        </tr>
        <tr class="table-content">
            <td>RT visit / mask</td>
            <td>$100.00</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Full face mask</td>
            <td>$150.00</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Nasal mask</td>
            <td>$90.00</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Nasal pillow</td>
            <td>$90.00</td>
            <td></td>
        </tr>
        <tr class="table-name">
            <td colspan="3">UPGRADE PRICING</td>
        </tr>
        <tr class="Table-header">
            <td>Upgrade To:</td>
            <td>Upgrade Price:</td>
            <td>Upgrade Price Monthly</td>
        </tr>
        <tr class="table-content">
            <td>Bariatric Walker</td>
            <td>$65</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Bariatric Rollator</td>
            <td>$85</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Bariatric Commode</td>
            <td>$100</td>
            <td></td>
        </tr>
        <tr class="table-content">
            <td>Bariatric Bed</td>
            <td>$1,105</td>
            <td>$85</td>
        </tr>
        <tr class="table-content">
            <td>Fully Electric Bed</td>
            <td>$650</td>
            <td>$50</td>
        </tr>
        <tr class="table-content">
            <td>Bariatric Wheelchair 22”</td>
            <td>$450</td>
            <td>$35</td>
        </tr>
        <tr class="table-content">
            <td>Bariatric Wheelchair 24”</td>
            <td>$550</td>
            <td>$43</td>
        </tr>
        <tr class="table-content">
            <td>Bariatric Wheelchair 26”</td>
            <td>$778</td>
            <td>$60</td>
        </tr>
        <tr class="table-content">
            <td>Bariatric Wheelchair 28”</td>
            <td>$839</td>
            <td>$65</td>
        </tr>
        <tr class="table-content">
            <td>Bariatric Wheelchair 30”</td>
            <td>$899</td>
            <td>$70</td>
        </tr>

        <tr class="table-content">
            <td colspan="3"><p>*Must use an ABN when doing a Medicare order upgrade.</p></td>
        </tr>
        <tr class="table-content">
            <td colspan="3"><p>**Must make sure the pricing is correct for the patient when billing monthly (check the financial tab to confirm)</p></td>
        </tr>

        <tr class="table-name">
            <td colspan="3">PRIVATE PAY LIST</td>
        </tr>
        <tr class="Table-header">
            <td colspan="3">STOCKINGS</td>
        </tr>
        <tr class="table-content">
            <td>Knee 20-30</td>
            <td>A6530</td>
            <td>$55.00</td>
        </tr>
        <tr class="table-content">
            <td>Knee 30-40</td>
            <td>A6531</td>
            <td>$55.00</td>
        </tr>
        <tr class="table-content">
            <td>Thigh 20-30</td>
            <td>A6533</td>
            <td>$60.00</td>
        </tr>
        <tr class="table-content">
            <td>Thigh 30-40</td>
            <td>A6534</td>
            <td>$60.00</td>
        </tr>
        <tr class="table-content">
            <td>Waist 20-30</td>
            <td>A6539</td>
            <td>$105.00</td>
        </tr>
        <tr class="Table-header">
            <td colspan="3">PODIATRY AND FOOT</td>
        </tr>
        <tr class="table-content">
            <td>Night splint</td>
            <td>L4396</td>
            <td>$75.00</td>
        </tr>
        <tr class="table-content">
            <td>Walking Boot Low</td>
            <td>L2116</td>
            <td>$115.00</td>
        </tr>
        <tr class="table-content">
            <td>Ankle Brace</td>
            <td>L1971</td>
            <td>$100.00</td>
        </tr>
        <tr class="table-content">
            <td>Lace Up Ankle Brace</td>
            <td>L1902</td>
            <td>$45.00</td>
        </tr>
        <tr class="table-content">
            <td>DM Shoes/Inserts</td>
            <td>A5500</td>
            <td>$155.00</td>
        </tr>
        <tr class="table-content">
            <td>Orthopedic Shoes/ Orthotics</td>
            <td>L3221/L3216</td>
            <td>$135.00</td>
        </tr>
        <tr class="table-content">
            <td>DM Custom Orthotics</td>
            <td>A5513</td>
            <td>1- $40.00 | 3 - $80.00</td>
        </tr>
        <tr class="table-content">
            <td>Functional Orthotics</td>
            <td>L3000</td>
            <td>$90.00</td>
        </tr>
        <tr class="Table-header">
            <td colspan="3">WRIST AND HAND</td>
        </tr>
        <tr class="table-content">
            <td>Thumb Spica</td>
            <td>L3807</td>
            <td>$45.00</td>
        </tr>
        <tr class="table-content">
            <td>Wrist Splint</td>
            <td>L3908</td>
            <td>$40.00</td>
        </tr>
        <tr class="table-content">
            <td>Elbow brace</td>
            <td>L3762</td>
            <td>$25.00</td>
        </tr>
        <tr class="Table-header">
            <td colspan="3">KNEE</td>
        </tr>
        <tr class="table-content">
            <td>Knee Brace</td>
            <td>L1832</td>
            <td>$150.00</td>
        </tr>
        <tr class="table-content">
            <td>Knee Sleeve</td>
            <td>L2397</td>
            <td>$30.00</td>
        </tr>
        <tr class="Table-header">
            <td colspan="3">BACK</td>
        </tr>
        <tr class="table-content">
            <td>Back Brace Full</td>
            <td>L0648</td>
            <td>$150.00</td>
        </tr>
        <tr class="table-content">
            <td>Back Brace Half</td>
            <td>L0627</td>
            <td>$115.00</td>
        </tr>
        <tr class="Table-header">
            <td colspan="3">MISC</td>
        </tr>
        <tr class="table-content">
            <td>Tens Unit</td>
            <td>E0730</td>
            <td>$75.00</td>
        </tr>
        <tr class="table-content">
            <td>BP Monitor</td>
            <td>A4670</td>
            <td>$45.00</td>
        </tr>
        <tr class="table-content">
            <td>Cervical Collar</td>
            <td>L0174</td>
            <td>$150.00</td>
        </tr>
        <tr class="table-content">
            <td>Heating Pads</td>
            <td></td>
            <td>$45.00</td>
        </tr>
        </table>
      </div>`,
    WeDontCarry: `
    <div class="wedontcarry">
    <h1>ITEMS WE DON'T CARRY</h1>
    <ul>
      <li>Portable Concentrator</li>
      <li>Power Wheelchair</li>
      <li>Wheelchair Ramp</li>
      <li>Blind Cane with Ball</li>
      <li>Plastic Transfer Board</li>
      <li>Foldable Lift</li>
      <li>Upright Walker</li>
      <li>Cane with Seat</li>
      <li>Sock Aid Soft. - X9999  - no stock</li>
      <li>we dont carry WHEELCHAIR ramps </li>
      <li>OXYGEN TANK HOLDER FOR ROLLATOR</li>
      <li>CHAIR LIFT/FOLD UP BARS FOR THE BED  - we do not carry these items</li>
      <li>Yankauers for suction machine – we do not carry</li>
      <li>portable concentrator we dont carry them</li>
      <li>Heel or Elbow Protector  - we do not carry</li>
      <li>we don't carry nasal pillows</li>
      <li>Heel protectors pillow pair – we do not carry</li>
      <li>Foot wrap – we do not carry</li>
      <li>A5051 L3030 and L3010</li>
      <li>Scooters</li>
      <li>Spectra Breast Pump</li>
      <li>Thermometer</li>
      <li>Don't assist Patients with feeding tube formula(s)</li>
      <li>DON'T DO INCONTINENCE SUPPLIES FOR "INTEGRA" HEALTHFIRST.</li>
      <li>Don't do private pay for OXYGEN,  INCONTINENCE, OSTOMY SUPPLIES</li>
      <li>If they want the reclining mechanism (E0966) this will need to be ordered</li>
      <li>Arm Glucometers</li>
      <li>Baby Wipes</li>
      <li>Breast Prosthetic's</li>
      <li>Electric WC</li>
      <li>Commode Liner</li>
      <li>COVIDIEN Brand Electric Hoyer Lift</li>
      <li>Foot Cream</li>
      <li>Foot Rails Frontier Pus Glucosamine</li>
      <li>Isolation Gowns</li>
      <li>Lactose intolerant Variety For Ensure</li>
      <li>Liquid Hope Or Soap</li>
      <li>Open Back Surgical Dangle Shoes</li>
      <li>Pill Crushers</li>
      <li>Pollo Sack Axim trust Portable Concentrators.</li>
      <li>Portable WC Ramp </li>
      <li>Pro Step Nutritional Supplement</li>
      <li>Spirometer</li>
      <li>Suitcase Ramp Transparent Dressings</li>
      <li>ELEVATING LEG REST FOR WC REQUIRED AUTH - K0195</li>

    </ul></div>`,
    Emails: ``,
    SampleSpiels: `<h1>Sample Spiels</h1>
    <div class="samplespiels">
        <div>
            <h3>Delayed Deliveries</h3>
            <p><strong>Listen and acknowledge</strong> - Let them vent, we need to hear them out</p>
            <p><strong>Apologize</strong> - Inject empathy - put yourselves in their shoes. Your tone of voice is very important</p>
            <p><strong>Expectations</strong> - Tell the, the next steps of what you will be doing after the call (e.g. track the status of their delivery and call them back to update)</p>
            <p><strong>Control the conversation</strong> - Let them know this is a system constraint brought about an enhancement in our system</p>
            <p><strong>Take ownership</strong> - use the “I” statement. “I will take care of this”, “I will treat this with urgency”, “I will make sure to call you back and update you”</p>
            <p><strong>Confidence statements</strong> - Providing assurance statements when needed will do you big. They know they have reached the right person</p>
            <br>
            <p><strong>"I was promised to get it Monday and until now, I do not have it!"</strong></p>
            <p>"I apologize for the delay. I understand how important this must be for you. We had a minor system update and unfortunately your order was affected.  Monday, 6/14”</p>
            <p>You are my responsibility and I will treat this with urgency. You will get your supplies this week, and latest is by</p>
            <br>
            <p>You may include: “I can also call you back to update you of the progress so you would not exert effort knowing where your supplies are"</p>
            <br>
            <p><strong>"I need an exact date! I will not sit around watiing all week!"</strong></p>
            <p>“I certainly agree with you. The good news is for UPS, - you do not have to wait for them. If they don't catch you at home, they will leave a door tag that will either state</p>
            <p>A. they will go back and attempt next day,</p>
            <p>B. your supplies will be at an authorized UPS access point (very near your premise) to have it picked up”</p>
            <br>
            <p>You may include: “I can also call you back to update you of the progress so you would not exert effort knowing where your supplies are”</p>
            <br>
            <p><strong>"You said the same thing last month!"</strong></p>
            <p>“I apologize if your supplies are delayed once more. I would like to let you know that here at Valmar, we look for ways to improve our delivery system to serve you better.</p>
            <p>Our system update is one of them. The good news is you will get your supplies this week, latest is Monday 6/14”</p>
            <br>
            <p>You may include: “I can also call you back to update you of the progress so you would not exert effort knowing where your supplies are”</p>
        </div>
        <div>
          <h3>Triple Order Call Scripts</h3>
          <p>Customer: Why do I have so much supplies?</p>
          <p>Representative: The supply we sent you is good for 3 months. We know how important supplies are to our patients so by sending enough, we can make sure  you're well taken cared for for 3 months</p>
          <br>
          <p>Customer: Why do you suddenly sending so much supplies?</p>
          <p>Representative: We value our patients well-being by making sure that they enough supplies good for 3 months. We also do not want you to stress out by following us up monthly. We want you to focus your attention in getting better</p>
          <br>
          <p>Customer: I might ran out of supplies before the third month</p>
          <p>Representative: Let me help you solve this problem today. In a day, how many "insert item" are you using? If we are to sustain that number, you supplies will not be able to cover to 3months. You might want to alert our Physician and increase the number of "insert item" in our prescription</p>
          <br>
          <p>Customer: I don't want this, get the extra supplies out</p>
          <p>Representative: I apologize if you feel that you are being forced to take this. Our aim is to be able to give our patients the amount of care they need and after careful evaluation, giving sufficient supplies to our customers we know will make a difference in their health progression. I hope I can get your buy in to this.</p>
          <br>
          <p>Customer: I don't have enough storage</p>
          <p>Representative: We anticipated issues and concerns like yours to happen. The aim of this campaign is for all of our patient have sufficient supplies, we do not wish to burden you with storage issue. We hope we can get your buyin in order for us to continue serving you and other patients to the best that we can.</p>
          </div>
          <div class="">
            <h3>DOD in the Patients File</h3>
            <p>“I would like to offer my prayers and deepest condolences on (PT'
    s name or your loved one's) demise.  for your loss”</p>
            <p>I apologize for asking, however if you can please provide me his/her exact date of death, in order for me to update our records and close the file. Again, I am truly sorry</p>
            <br>
            <p><strong>You must make sure to enter it on the clinical tab by DOD.</strong></p>
          </div>
          <div class="">
            <h3>Supplies been dropped off to a UPS/USPS Access Point</h3>
            <p>Hi (PTs Name)! We are from Valmar Surgical. We are happy to let you know that your (Current Month) supplies delivery has already been set however UPS/USPS</p>
            <p>tried delivering it and was not successful and supplies has been dropped off to a Safe Location/Post Office for Pick Up. You could go straight or maybe ask someone</p>
            <p>to pick it up at (UPS/USPS Access Point Address) usually a couple of blocks away from your address where your supplies will be held for 5 business days. Your</p>
            <p>Tracking # is (UPS/USPS Tracking #) and please bring a valid ID to claim your package. Thank you!</p>
          </div>
          <div class="">
            <h3>Info Needed 12.3</h3>
            <p>Hi (Pts Name)! We are from Valmar Surgical. We received a notification coming from UPS/USPS about the delivery of your monthly supplies that the (Info we need</p>
            <p>to get and confirm to move on with the delivery, ie; Invalid Delivery Address, Missing an Apartment # or UPS/USPS cannot locate the address). Thank you!</p>
          </div>
          <div class="">
            <h3>Supplies experiencing a Sortation Delay</h3>
            <p>Hi (PTs Name)! We are from Valmar Surgical. We are happy to let you know that your (Current Month) supplies delivery has already been set yet been experiencing</p>
            <p>a delay. We regret that something like this happens, yet we will be keeping track of your package and you could expect a notification (Enroll to UPS/USPS Notification)</p>
            <p>regarding it to make sure you will get your supplies in the next couple of days. Thank you!</p>
          </div>
    </div>`,
    GrabBarProcess: `<h1>Grab Bar Process</h>
        <h3>Order Set up</h3>
          <ul>
            <li><strong>Reference</strong> - you must make sure to write GRAB BAR in the reference.</li>
            <li><strong>Location</strong> - you must make sure to select ‘Grab Bars’ as your location.</li>
            <li>The scheduled date should always be the following Monday’s date. (Make sure that date is with in auth dates or use the next Mondays date.)</li>
            <li>Once the order is scheduled click ‘send POD’ so all orders will be routed in Apacheta.</li>
            <li>Going forward we will not be using WIPs for any grab orders.</li>
          </ul>

        <p><strong>Only send to POD if within the driver's route:</strong></p>
        <ul>
          <li>Manhattan / NY NY</li>
          <li>Queens</li>
          <li>Bronx</li>
          <li>Brooklyn</li>
          <li>Staten Island</li>
          <li>Long Island - ZIPs starting with 115,116,117,118,119</li>
        </ul>

        <p>If anywhere outside of these Boroughs – we send to Brightship, referenced as SHIP DME</p>
        <p>For all the other insurances and private pay we will offer them the option to private pay for installation. (As long as their location is within our drivers area.)</p>

        <p><strong>If they:</strong></p>
        <ul>
          <li>Decline - we setup the order for SHIP DME.</li>
          <li>Accept – we get their credit card info and advise our installation specialist will call and schedule for delivery /installation. The order must be WIPed to department? (Gina).</li>
        </ul>

        <h3>When setting and order for grab bars and installation the following is done: (FOR DEVORA ONLY)</h3>
        <ul>
          <li>Create one sales order which will be the grab bar and it should be billing the correct insurance /private pay and making sure to schedule according to our process (changing inventory location, Monday...)</li>
          <li>Create a second sales order similar to an upgrade order. Add the item ‘GRAB BAR INSTALL’ and WIP the order to the billing department (Goldy) for COD for 1 week after scheduled date.</li>
        </ul>

        <p><strong>Installation fee is $60 per location</strong></p>`,
    WhoToContact: `<h1>Who to contact</h1>

        <div class="whotocontact">
            <table>
              <tr class="table-name">
                  <td colspan="2">BILLING INQUIRY</td>
              </tr>
              <tr class="Table-header">
                  <td>Agent</td>
                  <td>Insurance</td>
              </tr>
              <tr class="table-content">
                  <td>Goldy Rosenblum</td>
                  <td>Patient Pay</td>
              </tr>
              <tr class="table-content">
                  <td rowspan="9">Raizel Lampert</td>
                  <td>Aetna</td>
              </tr>
              <tr class="table-content">
                  <td>Medicaid</td>
              </tr>
              <tr class="table-content">
                  <td>Metroplus</td>
              </tr>
              <tr class="table-content">
                  <td>Village Care</td>
              </tr>
              <tr class="table-content">
                  <td>Agewell</td>
              </tr>
              <tr class="table-content">
                  <td>Archcare</td>
              </tr>
              <tr class="table-content">
                  <td>Magnacare</td>
              </tr>
              <tr class="table-content">
                  <td>Amida Care</td>
              </tr>
              <tr class="table-content">
                  <td>No fault</td>
              </tr>

              <tr class="table-content">
                  <td rowspan="7">Adina Lerman</td>
                  <td>1199</td>
              </tr>
              <tr class="table-content">
                  <td>Extended MLTC</td>
              </tr>
              <tr class="table-content">
                  <td>Integra</td>
              </tr>
              <tr class="table-content">
                  <td>Medicare</td>
              </tr>
              <tr class="table-content">
                  <td>Elderplan</td>
              </tr>
              <tr class="table-content">
                  <td>Elderserve</td>
              </tr>
              <tr class="table-content">
                  <td>Homefirst</td>
              </tr>
            </table>
            <table>
            <tr class="table-name">
                <td colspan="3">AUTHORIZATION</td>
            </tr>
            <tr class="Table-header">
                <td>Insurance</td>
                <td>REQUESTING AUTH REP</td>
                <td>CHECKING STATUS REP</td>
            </tr>
            <tr class="table-content">
                <td>1199</td>
                <td>Fraidy</td>
                <td>Fraidy</td>
            </tr>
            <tr class="table-content">
                <td>AETNA</td>
                <td>Joseph, Raizel</td>
                <td>Joseph, Raizel</td>
            </tr>
            <tr class="table-content">
                <td>AMIDA CARE</td>
                <td>Fraidy</td>
                <td>Fraidy</td>
            </tr>
            <tr class="table-content">
                <td>Elderplan</td>
                <td>Fraidy</td>
                <td>Fraidy</td>
            </tr>
            <tr class="table-content">
                <td>Elderplan Medicaid</td>
                <td>Ana</td>
                <td>Ana</td>
            </tr>
            <tr class="table-content">
                <td>EMPIRE</td>
                <td>Fraidy</td>
                <td>Fraidy</td>
            </tr>
            <tr class="table-content">
                <td>Fidelis</td>
                <td>Pinili, Jana</td>
                <td>Pinili, Jana</td>
            </tr>
            <tr class="table-content">
                <td>GHI</td>
                <td>Fraidy</td>
                <td>Fraidy</td>
            </tr>
            <tr class="table-content">
                <td>HEALTHFIRST</td>
                <td>Angelyn</td>
                <td>Angelyn</td>
            </tr>
            <tr class="table-content">
                <td>HIP</td>
                <td>Angelyn</td>
                <td>Angelyn</td>
            </tr>
            <tr class="table-content">
                <td>HIP MONTEFIORE</td>
                <td>Angelyn</td>
                <td>Angelyn</td>
            </tr>
            <tr class="table-content">
                <td>INDEPENDENCE CARE</td>
                <td>Fraidy</td>
                <td>Fraidy</td>
            </tr>
            <tr class="table-content">
                <td>MAGNA CARE</td>
                <td>Fraidy</td>
                <td>Fraidy</td>
            </tr>
            <tr class="table-content">
                <td>MEDICAID</td>
                <td>Joseph, Raizel</td>
                <td>N/A</td>
            </tr>
            <tr class="table-content">
                <td>MEDICARE</td>
                <td>Fraidy</td>
                <td>Fraidy</td>
            </tr>
            <tr class="table-content">
                <td>METROPLUS</td>
                <td>Pinili, Jana</td>
                <td>Pinili, Jana</td>
            </tr>
            <tr class="table-content">
                <td>MLTC (CPHL, SWH, HOMEFIRST, EXTENDED MLTC, ARCHCARE)</td>
                <td>Ana</td>
                <td>Ana</td>
            </tr>
            <tr class="table-content">
                <td>INTEGRA MLTC</td>
                <td>Pinili, Jana</td>
                <td>Pinili, Jana</td>
            </tr>
            <tr class="table-content">
                <td>AFFINITY</td>
                <td>Ana</td>
                <td>Ana</td>
            </tr>
            <tr class="table-content">
                <td>UNITED HEALTHCARE</td>
                <td>Angelyn</td>
                <td>Angelyn</td>
            </tr>
            <tr class="table-content">
                <td>Wellcare</td>
                <td>Joseph, Raizel</td>
                <td>Joseph, Raizel</td>
            </tr>
            <tr class="table-content">
                <td>WORKERS COMP/NO FAULT</td>
                <td>Fraidy</td>
                <td>Fraidy</td>
            </tr>
            </table>
        </div>`,
    emails: `<h1>Emails</h1>
    <div class="email">
      <div class="">
        <h3>OoO Email</h3>
        <p><strong>Body of the email:</strong></p>
        <p>Hi everyone,</p>
        <p>I will be out of the office from DATE to DATE and will be back on DATE.</p>
        <p>During my absence, you may reach out to: IMMEDIATE SUPERVISOR'S NAME</p>
        <p>For urgent issues, you may contact OM's Name</p>
        <p>Thank you, <br> YOUR NAME</p>
        <br>
        <p>Subject line: <strong>NAME - Out of the Office</strong></p>
        <p><strong>To: Elisa, Devora, Team Warehouse, Team Valmar</strong></p>
        <p><strong>CC: Mayer, Brian, JM, and Team Valmar Leadership Team</strong></p>
      </div>


      <div class="">
        <h3>Expedition</h3>
        <p><strong>Body of the email:</strong></p>
        <p>Hi JM,</p>
        <p>Reason:</p>
        <p>Did we offer current ships and deliveries date:</p>
        <p>Did we offer to call their Dr. office/Insurance for additional supplies?</p>
        <p>Previous Month delivery:</p>
        <p>Borough:</p>
        <br>
        <p>Subject line: <strong>EXPEDITION - Sales Order</strong></p>
        <p><strong>To: JM</strong></p>
        <p><strong>To: Team Valmar</strong></p>
      </div>

      <div class="">
        <h3>Grab Bar</h3>
        <p><strong>Body of the email:</strong></p>
        <p>Hi JM,</p>
        <p>Kindly assist with GB Delivery and installation, please advise.</p>

        <p>Address:</p>
        <p>Phone Number:</p>

        <br>
        <p>Subject line: <strong>Grab Bar - Sales Order#</strong></p>
        <p><strong>To: Devora</strong></p>
        <p><strong>CC: Team Valmar</strong></p>
      </div>


      <div class="">
        <h3>Photos from our Patients</h3>
        <p><strong>Body of the email should contain:</strong></p>
        <br>
        <p>Name of PT</p>
        <p>DOB</p>
        <p>Concern</p>

        <br>
        <p>Subject line: <strong>ATTENTION :(Rep Name)</strong></p>
        <p><strong>To: JM Tibig</strong></p>
        <p><strong>CC: Team Valmar</strong></p>
      </div>

      <div class="">
        <h3>DT Request</h3>
        <p>Hi Devora,</p>
        <br>
        <p>Kindly assist with sending the attached delivery ticket to the patient / insurance care manager</p>

        <p>Email:</p>
        <p>Fax#:</p>

        <br>
        <p>Subject line: <strong>Delivery Ticket : Sales Order#</strong></p>
        <p><strong>To: Devora</strong></p>
        <p><strong>CC: Team Valmar</strong></p>
      </div>
    </div>`,
    returntosender: `<h1>UPS USPS –'Return to Sender'</h1>
    <div class="returntosender">
        <p>When a shipment is returned to the warehouse from UPS/ USPS we WIP the sales order to @Arcelie Villafuerte using WIP note 12.1 so she can update the information why it was returned to sender and try and have the package resent.</p>
        <p><strong>Procedure:</strong></p>
        <p>A 6.6 note will be created by Arcelie noting why it was returned to the warehouse, she'll log into UPS to see the exact reason why the shipment was returned to Valmar and check if the issue can be corrected and the shipment resent</p>
        <p><strong>Wrong address / Receiver name is incorrect</strong></p>
        <p>The most common reason why a shipment will come back is because of 'wrong address' in that case we must make sure to:</p>
        <p>Check the spreadsheets or order and make sure all info is in BT including the apartment number.</p>
        <p>Call the patient to get the correct address.</p>
        <p>Once the address gets corrected in BT , Arcelie will void the order (select reason 'Shipping error -carrier returned'). A new sales order can only be created if it's within the same month or within the auth dates depending on the items. </p>
        <div>
            <img src="assets/returntosender1.png" /><img src="assets/returntosender2.png" />
        </div>
        <p><strong>Not Available at the time of Final attempt</strong></p>
        <p>UPS does 3 attempts and it's 3 consecutive days where the patient is either not at home or missed the driver</p>
        <p>We then check if this happened every month to see if there's problem with their building where it is not allowed the UPS driver to enter</p>
        <p>If the patient is elderly and lives alone and would take time to answer a call from the driver or go downstair (complex premises)</p>
        <p>If the answer is yes, we might need to request for a driver delivery instead of UPS shipment using 16.2 Do not ship.</p>
        <p>If shipment is under USPS and had a problem with USPS, we still have the option to use UPS,</p>
        <p><strong>create 16.1 note special request to ship supply using UPS instead of USPS before we request for driver delivery..</strong></p>
        <p><strong>Package was not picked up at the UPS Access Point location</strong></p>
        <p>UPS drivers will usually attempt to deliver the package 3 times but if the area is too far from his next day route or if there's a closer UPS access point, he will drop the package off at UPS access point and leave a door tag.</p>
        <p>Patients can always call UPS customer service to request redelivery 1800-742-8577</p>
        <p>When the confirming department is tracking the status and they come across a 'return to sender' they should WIP sales order using 12.1 to @Arcelie</p>
        <p>The confirming department does not void any orders when the tracking says, 'Return to sender'. (they proceed as noted above - update the reference and note)</p>
        <div>
            <img src="assets/returntosender3.png" /><img src="assets/returntosender4.png" />
        </div>
        <h3>UPS Tracking Status</h3>
        <a href=" https://www.ups.com/us/en/support/tracking-support/where-is-my-package/understanding-tracking-status.page">Understanding tracking status link</a>
        <h4>Label Created</h4>
        <p>We’ve received the shipment details and billing information from the sender of the shipment. Once we have possession of the shipment and have it moving within our network, the status will be updated.</p>
        <h4>Shipped/On the Way</h4>
        <p>We’ve received the shipment, it's moving through our network and it now has a scheduled delivery date. Shipments can stay in this status until it's out for final delivery. Keep in mind, if shipments are traveling long distances, they likely won't be scanned again until they reach their destination hub.</p>
        <h4>Out for Delivery</h4>
        <p>The local UPS facility has received the shipment and they’ve dispatched it to a driver for its final delivery. Unless the sender has elected for a time-definite air delivery service, packages are typically delivered between 9 a.m. and 7 p.m. (occasionally later) to residences, and by close of business for a commercial address.</p>
        <h4>Delivered</h4>
        <p>We've delivered the shipment to its final destination, with a timestamp of the delivery recorded. If the shipment doesn't require a signature, our driver will try and find a safe place to leave the shipment to keep it out of plain sight or harmful weather. This may include a front porch, side door, back porch or garage area, among others.</p>
        <h4>Delivered to a UPS Access Point</h4>
        <p>A selected UPS Access Point location has received the shipment and it's ready to be picked up at the receiver's convenience.</p>
        <h4>Transferred to Post Office for Delivery</h4>
        <p>The sender requested the shipment be transferred to the local post office to finish the delivery. To be safe, allow for an extra day or two for final delivery.</p>
        <h4>Exception</h4>
        <p>The shipment is in the UPS network, but there was an unexpected error that may result in a change in the scheduled delivery date. The reason for the exception will be noted in the Shipment Progress section of the Tracking Detail page. When the delivery date changes, the tracking status will show the new date.</p>
    </div>`,
    outages: `<h1>Outages - What to do</h1>
    <p><strong>The following shall be followed immediately:</strong></p>
    <p>Notify me 2hrs prior to shift for any attendance related situations. Brian's number is 0966 441 9232. Please wait for  approval.</p>
    <p>If these 2 are not followed and any of the given conditions below, your absence will be UNAUTHORIZED.</p>
    <p><strong>If you are out sick – present 2 certificates upon your return:</strong></p>
    <p>1. Medical certificate from an accredited Medicard facility</p>
    <p>2. Fit to Work certificate – stating you may return back to work</p>
    <p><strong>If no internet connection:</strong></p>
    <p>Proceed to the 2 sites of EMAPTA -  (TIP Site) and St. Francis Square (Ortigas site) – we have an available person 24/7 to accommodate you</p>
    <p>If living outside of Metro Manila – Tether your phone to  your CPU</p>
    <p>Please provide me proof of loss of internet connectivity – Outage report from your ISP and their ETA with ticket #</p>
    <p><strong>If power interruption:</strong></p>
    <p>Proceed to the 2 sites of EMAPTA -  (TIP Site) and St. Francis Square (Ortigas site) – we have an available person 24/7 to accommodate you</p>
    <p>If living outside of Metro Manila – as early as now, kindly have a back-up device (laptop of your own or you can borrow from a relative or friends)</p>
    <p><strong>Emergency related issues:</strong></p>
    <p>Documentations such as emergency room papers</p>
    <p>Baranggay / Police report</p>
    <br />
    <p>If you have questions – please feel free to reach out.</p>`,
    mltc: `<h1>MLTC Customer Missing Box</h1>
    <h3>Procedure:</h3>
    <p>When a MLTC customer calls that they are missing their supplies, we replace it regardless of what UPS /USPS states on their website. The following steps must be done before sending out a replacement:</p>
    <h3>SHIPPED ORDERS</h3>
    <p><strong>Ask the patient the following:</strong></p>
    <p>(You want to start off stating: I apologize in advance for the series of questions, I just need to better understand this situation)</p>
    <ul>
      <li>Validate that the address is correct</li>
      <li>Do they have a lobby guard that may have received their package?</li>
      <li>Have they looked around?</li>
      <li>Asked the neighbors?</li>
      <li>Did the nurse /aid receive the package?</li>
    </ul>
    <p>If all these questions are validated correctly (the patient checked and still does not have it) we can then go ahead and create a new sales order and ship them their supplies. (see replacement process)</p>
    <p>The patient has the entire month to report this. If they are low on their supplies and should have received supplies from us and didn’t, we can ship out a new order.</p>
    <h3>The replacement process:</h3>
    <p>Inform the patient that an investigation will be done and someone will get back to them within 24-48 hours</p>
    <p>Create a 2.3.9 note (2.3.9 INBOUND CALL- SHIP ISSUE- MISSING SHIPMENT) and task it to the UPS point of contact department (Arcelie) to file a claim</p>
    <ul>
      <li>If UPS found the package, then UPS point of contact department (Arcelie) will call the patient and inform them of the ETA and task the note to herself for 2 days to make sure the package was delivered</li>
      <li>For any other responses from UPS the note needs to be tasked to the Service call department (Ryan) to setup a service call order. the service call department will then call back patient and inform them their supplies will be delivered...</li>
    </ul>
    <h3>DRIVER DELIVERED ORDERS</h3>
    <p><strong>Ask the patient the following:</strong></p>
    <p>(You want to start off stating: I apologize in advance for the series of questions, I just need to better understand this situation)</p>
    <ul>
      <li>Validate that the address is correct</li>
      <li>Do they have a lobby guard that may have received their package?</li>
      <li>Have they looked around?</li>
      <li>Asked the neighbors?</li>
      <li>Did the nurse /aid receive the package?</li>
      <li>Based on the delivery ticket, it appears that the signature states it was signed by you /relative /aid is that correct?</li>
      <li>Can you please tell me more of why the DT was signed for even if the supplies are missing?</li>
    </ul>
    <p>If the patient still insists of the missing /no delivery, we send out a replacement.</p>
    <h3>The replacement process:</h3>
    <p>Create a 2.3.9 note in BT. (2.3.9 INBOUND CALL- SHIP ISSUE- MISSING SHIPMENT) and task the note to the Service call department (Ryan) and he will setup a service call</p>`,
    OrderCycleGuide: `
    <h1>Order Cycle Guide</h1>
    <div class="flex">
    <img src="assets/oc1.png" />
    <img src="assets/oc2.png" />
    <img src="assets/oc3.png" />
    </div>
    <div class="flex">
    <img src="assets/oc4.png" />
    <img src="assets/oc5.png" />
    </div>
    <h1>Parts of a Script</h1>
    <div class="flex">
    <img src="assets/oc6.png" />
    <img src="assets/oc7.png" />
    </div>
    <h1>Clinicals</h1>
    <div class="flex">
    <img src="assets/oc8.png" />
    <img src="assets/oc9.png" />
    </div>`,



  };

  callback(pages[fragmentId]);


}


function loadContent() {

  var contentDiv = document.getElementById("app"),
    fragmentId = location.hash.substr(1);

  getContent(fragmentId, function(content) {
    contentDiv.innerHTML = content;
  });

}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent)


function searchAndHighlight(searchTerm, selector) {
  if (searchTerm) {
    //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
    //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
    var selector = selector || "#app"; //use body as selector if none provided
    var searchTermRegEx = new RegExp(searchTerm, "ig");
    var matches = $(selector).text().match(searchTermRegEx);
    if (matches != null && matches.length > 0) {
      $('.highlighted').removeClass('highlighted'); //Remove old search highlights

      //Remove the previous matches
      $span = $('#app span');
      $span.replaceWith($span.html());

      if (searchTerm === "&") {
        searchTerm = "&amp;";
        searchTermRegEx = new RegExp(searchTerm, "ig");
      }
      $(selector).html($(selector).html().replace(searchTermRegEx, "<span class='match'>" + searchTerm + "</span>"));
      $('.match:first').addClass('highlighted');

      var i = 0;



      if ($('.highlighted:first').length) { //if match found, scroll to where the first one appears
        $(window).scrollTop($('.highlighted:first').position().top);
      }
      return true;
    }
  }
  return false;
}

$(document).on('click', '.searchButtonClickText_h', function(event) {

  $(".highlighted").removeClass("highlighted").removeClass("match");
  if (!searchAndHighlight($('.textSearchvalue_h').val())) {
    alert("No results found");
  }


});