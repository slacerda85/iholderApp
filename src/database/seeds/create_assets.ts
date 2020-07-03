import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('assets').insert([
      {
        ticker: '003H11',
        category: 'FUNDS',
        isin: 'BR003HCTF006',
        description: 'KINEA CO-INVESTIMENTO FDO INV IMOB'
      },
      {
        ticker: '02W511',
        category: 'FUNDS',
        isin: 'BR02W5CTF007',
        description: 'LC I FUNDO DE INVESTIMENTO IMOBILIARIO'
      },
      {
        ticker: 'A1AP34',
        category: 'BDR',
        isin: 'BRA1APBDR001',
        description: 'ADVANCE AUTO PARTS INC'
      },
      {
        ticker: 'A1BM34',
        category: 'BDR',
        isin: 'BRA1BMBDR006',
        description: 'ABIOMED Inc'
      },
      {
        ticker: 'A1DI34',
        category: 'BDR',
        isin: 'BRA1DIBDR000',
        description: 'ANALOG DEVICES INC'
      },
      {
        ticker: 'A1DM34',
        category: 'BDR',
        isin: 'BRA1DMBDR002',
        description: 'ARCHER-DANIELS-MIDLAND CO'
      },
      {
        ticker: 'A1EE34',
        category: 'BDR',
        isin: 'BRA1EEBDR007',
        description: 'AMEREN CORP'
      },
      {
        ticker: 'A1EN34',
        category: 'BDR',
        isin: 'BRA1ENBDR008',
        description: 'ALLIANT ENERGY CORP'
      },
      {
        ticker: 'A1EP34',
        category: 'BDR',
        isin: 'BRA1EPBDR003',
        description: 'AMERICAN ELECTRIC POWER CO INC'
      },
      {
        ticker: 'A1ES34',
        category: 'BDR',
        isin: 'BRA1ESBDR007',
        description: 'AES CORP'
      },
      {
        ticker: 'A1FL34',
        category: 'BDR',
        isin: 'BRA1FLBDR009',
        description: 'AFLAC INC'
      },
      {
        ticker: 'A1GI34',
        category: 'BDR',
        isin: 'BRA1GIBDR003',
        description: 'AGILENT TECHNOLOGIES INC'
      },
      {
        ticker: 'A1GN34',
        category: 'BDR',
        isin: 'BRA1GNBDR003',
        description: 'ALLEGION PLC'
      },
      {
        ticker: 'A1IV34',
        category: 'BDR',
        isin: 'BRA1IVBDR002',
        description: 'APARTMENT INVESTMENT & MANAGEMENT CO'
      },
      {
        ticker: 'A1JG34',
        category: 'BDR',
        isin: 'BRA1JGBDR001',
        description: 'ARTHUR J GALLAGHER & CO'
      },
      {
        ticker: 'A1KA34',
        category: 'BDR',
        isin: 'BRA1KABDR002',
        description: 'AKAMAI TECHNOLOGIES INC'
      },
      {
        ticker: 'A1LB34',
        category: 'BDR',
        isin: 'BRA1LBBDR008',
        description: 'ALBEMARLE CORP'
      },
      {
        ticker: 'A1LG34',
        category: 'BDR',
        isin: 'BRA1LGBDR007',
        description: 'ALIGN TECHNOLOGY INC'
      },
      {
        ticker: 'A1LK34',
        category: 'BDR',
        isin: 'BRA1LKBDR009',
        description: 'ALASKA AIR GROUP INC'
      },
      {
        ticker: 'A1LL34',
        category: 'BDR',
        isin: 'BRA1LLBDR007',
        description: 'ALLIANCE DATA SYSTEMS CORP'
      },
      {
        ticker: 'A1LX34',
        category: 'BDR',
        isin: 'BRA1LXBDR002',
        description: 'ALEXION PHARMACEUTICALS INC'
      },
      {
        ticker: 'A1MB34',
        category: 'BDR',
        isin: 'BRA1MBBDR006',
        description: 'AMERISOURCEBERGEN CORP'
      },
      {
        ticker: 'A1MD34',
        category: 'BDR',
        isin: 'BRA1MDBDR002',
        description: 'ADVANCED MICRO DEVICES INC'
      },
      {
        ticker: 'A1ME34',
        category: 'BDR',
        isin: 'BRA1MEBDR000',
        description: 'AMETEK INC'
      },
      {
        ticker: 'A1MP34',
        category: 'BDR',
        isin: 'BRA1MPBDR006',
        description: 'AMERIPRISE FINANCIAL INC'
      },
      {
        ticker: 'A1MT34',
        category: 'BDR',
        isin: 'BRA1MTBDR008',
        description: 'APPLIED MATERIALS INC'
      },
      {
        ticker: 'A1NE34',
        category: 'BDR',
        isin: 'BRA1NEBDR008',
        description: 'ARISTA NETWORKS INC'
      },
      {
        ticker: 'A1NS34',
        category: 'BDR',
        isin: 'BRA1NSBDR008',
        description: 'ANSYS INC'
      },
      {
        ticker: 'A1NT34',
        category: 'BDR',
        isin: 'BRA1NTBDR006',
        description: 'ANTHEM INC'
      },
      {
        ticker: 'A1ON34',
        category: 'BDR',
        isin: 'BRA1ONBDR007',
        description: 'AON PLC'
      },
      {
        ticker: 'A1OS34',
        category: 'BDR',
        isin: 'BRA1OSBDR006',
        description: 'AO SMITH CORP'
      },
      {
        ticker: 'A1PA34',
        category: 'BDR',
        isin: 'BRA1PABDR001',
        description: 'APACHE CORP'
      },
      {
        ticker: 'A1PD34',
        category: 'BDR',
        isin: 'BRA1PDBDR005',
        description: 'AIR PRODUCTS & CHEMICALS INC'
      },
      {
        ticker: 'A1PH34',
        category: 'BDR',
        isin: 'BRA1PHBDR006',
        description: 'AMPHENOL CORP'
      },
      {
        ticker: 'A1RE34',
        category: 'BDR',
        isin: 'BRA1REBDR009',
        description: 'ALEXANDRIA REAL ESTATE EQUITIES INC'
      },
      {
        ticker: 'A1SU34',
        category: 'BDR',
        isin: 'BRA1SUBDR003',
        description: 'ASSURANT INC'
      },
      {
        ticker: 'A1TM34',
        category: 'BDR',
        isin: 'BRA1TMBDR008',
        description: 'ATMOS ENERGY CORP'
      },
      {
        ticker: 'A1TT34',
        category: 'BDR',
        isin: 'BRA1TTBDR003',
        description: 'ALLSTATE CORP'
      },
      {
        ticker: 'A1UT34',
        category: 'BDR',
        isin: 'BRA1UTBDR001',
        description: 'AUTODESK INC'
      },
      {
        ticker: 'A1VB34',
        category: 'BDR',
        isin: 'BRA1VBBDR007',
        description: 'AVALONBAY COMMUNITIES INC'
      },
      {
        ticker: 'A1VY34',
        category: 'BDR',
        isin: 'BRA1VYBDR009',
        description: 'AVERY DENNISON CORP'
      },
      {
        ticker: 'A1WK34',
        category: 'BDR',
        isin: 'BRA1WKBDR006',
        description: 'AMERICAN WATER WORKS CO INC'
      },
      {
        ticker: 'AALL34',
        category: 'BDR',
        isin: 'BRAALLBDR003',
        description: 'AMERICAN AIRLINES GROUP INC.'
      },
      {
        ticker: 'AALR3',
        category: 'SHARES',
        isin: 'BRAALRACNOR6',
        description: 'CENTRO DE IMAGEM DIAGNOSTICOS S.A.'
      },
      {
        ticker: 'AAPL34',
        category: 'BDR',
        isin: 'BRAAPLBDR004',
        description: 'APPLE INC.'
      },
      {
        ticker: 'ABBV34',
        category: 'BDR',
        isin: 'BRABBVBDR001',
        description: 'ABBVIE INC.'
      },
      {
        ticker: 'ABCB4',
        category: 'SHARES',
        isin: 'BRABCBACNPR4',
        description: 'BCO ABC BRASIL S.A.'
      },
      {
        ticker: 'ABCP11',
        category: 'FUNDS',
        isin: 'BRABCPCTF000',
        description: 'FDO INV IMOB GRAND PLAZA SHOPPING'
      },
      {
        ticker: 'ABEV3',
        category: 'SHARES',
        isin: 'BRABEVACNOR1',
        description: 'AMBEV S.A.'
      },
      {
        ticker: 'ABTT34',
        category: 'BDR',
        isin: 'BRABTTBDR007',
        description: 'ABBOTT LABORATORIES'
      },
      {
        ticker: 'ABUD34',
        category: 'BDR',
        isin: 'BRABUDBDR009',
        description: 'ANHEUSER-BUSCH INBEV SA/NV'
      },
      {
        ticker: 'ACNB34',
        category: 'BDR',
        isin: 'BRACNBBDR006',
        description: 'ACCENTURE PLC'
      },
      {
        ticker: 'ADBE34',
        category: 'BDR',
        isin: 'BRADBEBDR003',
        description: 'ADOBE INC'
      },
      {
        ticker: 'ADHM3',
        category: 'SHARES',
        isin: 'BRADHMACNOR9',
        description: 'ADVANCED DIGITAL HEALTH MEDICINA PREVENTIVA S.A.'
      },
      {
        ticker: 'ADPR34',
        category: 'BDR',
        isin: 'BRADPRBDR005',
        description: 'AUTOMATIC DATA PROCESSING INC'
      },
      {
        ticker: 'AFCF11',
        category: 'FUNDS',
        isin: 'BRAFCFCTF010',
        description: 'AFRICA FILMES S/C LTDA.'
      },
      {
        ticker: 'AFCR11',
        category: 'FUNDS',
        isin: 'BRAFCRCTF007',
        description: 'AF INVEST FDO INV. IMOB. - RECEBÍVEIS IMOB.'
      },
      {
        ticker: 'AFCV12',
        category: 'FUNDS',
        isin: 'BRAFCVCTF025',
        description: 'A F CINEMA E VIDEO LTDA'
      },
      {
        ticker: 'AFLT3',
        category: 'SHARES',
        isin: 'BRAFLTACNOR1',
        description: 'AFLUENTE TRANSMISSÃO DE ENERGIA ELÉTRICA S/A'
      },
      {
        ticker: 'AFOF11',
        category: 'FUNDS',
        isin: 'BRAFOFCTF007',
        description: 'ALIANZA FOFII FDO. INVEST. IMOB.'
      },
      {
        ticker: 'AGBK11',
        category: 'UNIT',
        isin: 'BRAGBKCDAM10',
        description: 'BANCO AGIBANK S.A.'
      },
      {
        ticker: 'AGBK4',
        category: 'SHARES',
        isin: 'BRAGBKACNPR6',
        description: 'BANCO AGIBANK S.A.'
      },
      {
        ticker: 'AGRA4',
        category: 'SHARES',
        isin: 'BRAGRAACNPR3',
        description: 'AGRALE S/A'
      },
      {
        ticker: 'AGRO3',
        category: 'SHARES',
        isin: 'BRAGROACNOR7',
        description: 'BRASILAGRO - CIA BRAS DE PROP AGRICOLAS'
      },
      {
        ticker: 'AHEB3',
        category: 'SHARES',
        isin: 'BRAHEBACNOR0',
        description: 'SAO PAULO TURISMO S.A.'
      },
      {
        ticker: 'AHEB5',
        category: 'SHARES',
        isin: 'BRAHEBACNPA3',
        description: 'SAO PAULO TURISMO S.A.'
      },
      {
        ticker: 'AHEB6',
        category: 'SHARES',
        isin: 'BRAHEBACNPB1',
        description: 'SAO PAULO TURISMO S.A.'
      },
      {
        ticker: 'AIEC11',
        category: 'FUNDS',
        isin: 'BRAIECCTF009',
        description: 'AUTONOMY EDIFÍCIOS CORPORATIVOS FUND. INV. IMOB.'
      },
      {
        ticker: 'AIGB34',
        category: 'BDR',
        isin: 'BRAIGBBDR007',
        description: 'AMERICAN INTERNATIONAL GROUP INC.'
      },
      {
        ticker: 'ALEF3B',
        category: 'SHARES',
        isin: 'BRALEFACNOR3',
        description: 'ALEF S.A.'
      },
      {
        ticker: 'ALMI11',
        category: 'FUNDS',
        isin: 'BRALMICTF003',
        description: 'FDO INV IMOB - FII TORRE ALMIRANTE'
      },
      {
        ticker: 'ALPA3',
        category: 'SHARES',
        isin: 'BRALPAACNOR0',
        description: 'ALPARGATAS S.A.'
      },
      {
        ticker: 'ALPA4',
        category: 'SHARES',
        isin: 'BRALPAACNPR7',
        description: 'ALPARGATAS S.A.'
      },
      {
        ticker: 'ALPK3',
        category: 'SHARES',
        isin: 'BRALPKACNOR9',
        description: 'ALLPARK EMPREENDIMENTOS PARTICIPACOES SERVICOS S.A'
      },
      {
        ticker: 'ALSO3',
        category: 'SHARES',
        isin: 'BRALSOACNOR5',
        description: 'ALIANSCE SONAE SHOPPING CENTERS S.A.'
      },
      {
        ticker: 'ALUP11',
        category: 'UNIT',
        isin: 'BRALUPCDAM15',
        description: 'ALUPAR INVESTIMENTO S/A'
      },
      {
        ticker: 'ALUP11F',
        category: 'UNIT',
        isin: 'BRALUPCDAM15',
        description: 'ALUPAR INVESTIMENTO S/A'
      },
      {
        ticker: 'ALUP3',
        category: 'SHARES',
        isin: 'BRALUPACNOR8',
        description: 'ALUPAR INVESTIMENTO S/A'
      },
      {
        ticker: 'ALUP4',
        category: 'SHARES',
        isin: 'BRALUPACNPR5',
        description: 'ALUPAR INVESTIMENTO S/A'
      },
      {
        ticker: 'ALZR11',
        category: 'FUNDS',
        isin: 'BRALZRCTF006',
        description: 'ALIANZA TRUST RENDA IMOBILIARIA FDO INV IMOB'
      },
      {
        ticker: 'AMAR3',
        category: 'SHARES',
        isin: 'BRAMARACNOR4',
        description: 'MARISA LOJAS S.A.'
      },
      {
        ticker: 'AMBP3',
        category: 'SHARES',
        isin: 'BRAMBPACNOR6',
        description: 'AMBIPAR PARTICIPACOES E EMPREENDIMENTOS S/A'
      },
      {
        ticker: 'AMGN34',
        category: 'BDR',
        isin: 'BRAMGNBDR004',
        description: 'AMGEN INC.'
      },
      {
        ticker: 'AMZG11',
        category: 'UNIT',
        isin: 'BRAMZGCDAM10',
        description: 'AMAZONAS DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'AMZG3',
        category: 'SHARES',
        isin: 'BRAMZGACNOR4',
        description: 'AMAZONAS DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'AMZO34',
        category: 'BDR',
        isin: 'BRAMZOBDR002',
        description: 'AMAZON.COM, INC'
      },
      {
        ticker: 'ANCR11B',
        category: 'FUNDS',
        isin: 'BRANCRCTF001',
        description: 'FDO INV IMOB - FII ANCAR IC'
      },
      {
        ticker: 'ANGC11',
        category: 'FUNDS',
        isin: 'BRANGCCTF004',
        description: 'FDO INV IMOB RENDA CORPORATIVA ANGICO - FII'
      },
      {
        ticker: 'ANIM3',
        category: 'SHARES',
        isin: 'BRANIMACNOR6',
        description: 'ANIMA HOLDING S.A.'
      },
      {
        ticker: 'APER3',
        category: 'SHARES',
        isin: 'BRAPERACNOR9',
        description: 'ALPER CONSULTORIA E CORRETORA DE SEGUROS S.A.'
      },
      {
        ticker: 'APTI3',
        category: 'SHARES',
        isin: 'BRAPTIACNOR6',
        description: 'SIDERURGICA J. L. ALIPERTI S.A.'
      },
      {
        ticker: 'APTI4',
        category: 'SHARES',
        isin: 'BRAPTIACNPR3',
        description: 'SIDERURGICA J. L. ALIPERTI S.A.'
      },
      {
        ticker: 'APTV34',
        category: 'BDR',
        isin: 'BRAPTVBDR003',
        description: 'APTIV PLC'
      },
      {
        ticker: 'AQLL11',
        category: 'FUNDS',
        isin: 'BRAQLLCTF008',
        description: 'ÁQUILLA FDO INV IMOB - FII'
      },
      {
        ticker: 'ARFI11B',
        category: 'FUNDS',
        isin: 'BRARFICTF004',
        description: 'AQ3 RENDA FDO INV IMOB - FII'
      },
      {
        ticker: 'ARMT34',
        category: 'BDR',
        isin: 'BRARMTBDR008',
        description: 'ARCELORMITTAL'
      },
      {
        ticker: 'ARNC34',
        category: 'BDR',
        isin: 'BRARNCBDR002',
        description: 'HOWMET AEROSPACE INC.'
      },
      {
        ticker: 'ARRI11',
        category: 'FUNDS',
        isin: 'BRARRICTF009',
        description: 'FDO. INV. IMOB. ÁTRIO REIT RECEBÍVEIS IMOBILIÁRIOS'
      },
      {
        ticker: 'ARZZ3',
        category: 'SHARES',
        isin: 'BRARZZACNOR3',
        description: 'AREZZO INDÚSTRIA E COMÉRCIO S.A.'
      },
      {
        ticker: 'ASML34',
        category: 'BDR',
        isin: 'BRASMLBDR003',
        description: 'ASML HOLDING NV'
      },
      {
        ticker: 'ATCR11',
        category: 'FUNDS',
        isin: 'BRATCRCTF008',
        description: 'HAZ FDO INV IMOB - FII'
      },
      {
        ticker: 'ATMP3',
        category: 'SHARES',
        isin: 'BRATMPACNOR8',
        description: 'ATMA PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'ATOM3',
        category: 'SHARES',
        isin: 'BRATOMACNOR1',
        description: 'ATOM EMPREENDIMENTOS E PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'ATSA11',
        category: 'FUNDS',
        isin: 'BRATSACTF000',
        description: 'HEDGE ATRIUM SHOPPING SANTO ANDRE FDO INV IMOB'
      },
      {
        ticker: 'ATTB34',
        category: 'BDR',
        isin: 'BRATTBBDR007',
        description: 'AT&T INC.'
      },
      {
        ticker: 'ATVI34',
        category: 'BDR',
        isin: 'BRATVIBDR008',
        description: 'ACTIVISION BLIZZARD INC'
      },
      {
        ticker: 'AURA32',
        category: 'BDR',
        isin: 'BRAURABDR001',
        description: 'AURA MINERALS INC.'
      },
      {
        ticker: 'AURA33',
        category: 'BDR',
        isin: 'BRAURABDR001',
        description: 'AURA MINERALS INC.'
      },
      {
        ticker: 'AVGO34',
        category: 'BDR',
        isin: 'BRAVGOBDR003',
        description: 'BROADCOM INC'
      },
      {
        ticker: 'AWII34',
        category: 'BDR',
        isin: 'BRAWIIBDR009',
        description: 'ARMSTRONG WORLD INDUSTRIES INC'
      },
      {
        ticker: 'AXPB34',
        category: 'BDR',
        isin: 'BRAXPBBDR007',
        description: 'AMERICAN EXPRESS COMPANY'
      },
      {
        ticker: 'AZEV3',
        category: 'SHARES',
        isin: 'BRAZEVACNOR0',
        description: 'AZEVEDO E TRAVASSOS S.A.'
      },
      {
        ticker: 'AZEV4',
        category: 'SHARES',
        isin: 'BRAZEVACNPR7',
        description: 'AZEVEDO E TRAVASSOS S.A.'
      },
      {
        ticker: 'AZOI34',
        category: 'BDR',
        isin: 'BRAZOIBDR000',
        description: 'AUTOZONE INC'
      },
      {
        ticker: 'AZUL4',
        category: 'SHARES',
        isin: 'BRAZULACNPR4',
        description: 'AZUL S.A.'
      },
      {
        ticker: 'B1AX34',
        category: 'BDR',
        isin: 'BRB1AXBDR004',
        description: 'BAXTER INTERNATIONAL INC'
      },
      {
        ticker: 'B1BT34',
        category: 'BDR',
        isin: 'BRB1BTBDR000',
        description: 'TRUIST FINANCIAL CORPORATION'
      },
      {
        ticker: 'B1DX34',
        category: 'BDR',
        isin: 'BRB1DXBDR008',
        description: 'BECTON DICKINSON AND CO'
      },
      {
        ticker: 'B1FC34',
        category: 'BDR',
        isin: 'BRB1FCBDR007',
        description: 'BROWN FORMAN CORP'
      },
      {
        ticker: 'B1KR34',
        category: 'BDR',
        isin: 'BRB1KRBDR005',
        description: 'BAKER HUGHES CO'
      },
      {
        ticker: 'B1LL34',
        category: 'BDR',
        isin: 'BRB1LLBDR006',
        description: 'BALL CORP'
      },
      {
        ticker: 'B1MR34',
        category: 'BDR',
        isin: 'BRB1MRBDR001',
        description: 'BIOMARIN PHARMACEUTICAL INC'
      },
      {
        ticker: 'B1RF34',
        category: 'BDR',
        isin: 'BRB1RFBDR005',
        description: 'BROADRIDGE FINANCIAL SOLUTIONS INC'
      },
      {
        ticker: 'B1SX34',
        category: 'BDR',
        isin: 'BRB1SXBDR006',
        description: 'BOSTON SCIENTIFIC CORP'
      },
      {
        ticker: 'B1WA34',
        category: 'BDR',
        isin: 'BRB1WABDR006',
        description: 'BORGWARNER INC'
      },
      {
        ticker: 'B3SA3',
        category: 'SHARES',
        isin: 'BRB3SAACNOR6',
        description: 'B3 S.A. - BRASIL, BOLSA, BALCÃO'
      },
      {
        ticker: 'BABA34',
        category: 'BDR',
        isin: 'BRBABABDR005',
        description: 'ALIBABA GROUP HOLDING LTD'
      },
      {
        ticker: 'BAHI3',
        category: 'SHARES',
        isin: 'BRBAHIACNOR1',
        description: 'BAHEMA EDUCAÇÃO S.A.'
      },
      {
        ticker: 'BALM3',
        category: 'SHARES',
        isin: 'BRBALMACNOR5',
        description: 'BAUMER S.A.'
      },
      {
        ticker: 'BALM4',
        category: 'SHARES',
        isin: 'BRBALMACNPR2',
        description: 'BAUMER S.A.'
      },
      {
        ticker: 'BARI11',
        category: 'FUNDS',
        isin: 'BRBARICTF003',
        description: 'FDO INV IMOB BARIGUI RENDIMENTOS IMOB I FII'
      },
      {
        ticker: 'BAUH3',
        category: 'SHARES',
        isin: 'BRBAUHACNOR6',
        description: 'EXCELSIOR ALIMENTOS S.A.'
      },
      {
        ticker: 'BAUH4',
        category: 'SHARES',
        isin: 'BRBAUHACNPR3',
        description: 'EXCELSIOR ALIMENTOS S.A.'
      },
      {
        ticker: 'BAZA3',
        category: 'SHARES',
        isin: 'BRBAZAACNOR0',
        description: 'BCO AMAZONIA S.A.'
      },
      {
        ticker: 'BBAS11',
        category: 'SHARES',
        isin: 'BRBBASA04OR8',
        description: 'BCO BRASIL S.A.'
      },
      {
        ticker: 'BBAS12',
        category: 'SHARES',
        isin: 'BRBBASA05OR5',
        description: 'BCO BRASIL S.A.'
      },
      {
        ticker: 'BBAS3',
        category: 'SHARES',
        isin: 'BRBBASACNOR3',
        description: 'BCO BRASIL S.A.'
      },
      {
        ticker: 'BBDC3',
        category: 'SHARES',
        isin: 'BRBBDCACNOR1',
        description: 'BCO BRADESCO S.A.'
      },
      {
        ticker: 'BBDC4',
        category: 'SHARES',
        isin: 'BRBBDCACNPR8',
        description: 'BCO BRADESCO S.A.'
      },
      {
        ticker: 'BBFI11B',
        category: 'FUNDS',
        isin: 'BRBBFICTF006',
        description: 'BB FDO INV IMOB PROGRESSIVO'
      },
      {
        ticker: 'BBFP11',
        category: 'FUNDS',
        isin: 'BRBBFPCTF019',
        description: 'BANG BANG FILMES PRODUCOES LTDA.'
      },
      {
        ticker: 'BBIM11',
        category: 'FUNDS',
        isin: 'BRBBIMCTF002',
        description: 'BB RECEBIVEIS IMOBILIARIOS FDO INV IMOB - FII'
      },
      {
        ticker: 'BBML3',
        category: 'SHARES',
        isin: 'BRBBMLACNOR3',
        description: 'BBM LOGISTICA S.A.'
      },
      {
        ticker: 'BBPO11',
        category: 'FUNDS',
        isin: 'BRBBPOCTF003',
        description: 'BB PROGRESSIVO II FDO INV IMOB - FII'
      },
      {
        ticker: 'BBRC11',
        category: 'FUNDS',
        isin: 'BRBBRCCTF004',
        description: 'BB RENDA CORPORATIVA FDO INV IMOB - FII'
      },
      {
        ticker: 'BBRK3',
        category: 'SHARES',
        isin: 'BRBBRKACNOR4',
        description: 'BRASIL BROKERS PARTICIPACOES S.A.'
      },
      {
        ticker: 'BBSE3',
        category: 'SHARES',
        isin: 'BRBBSEACNOR5',
        description: 'BB SEGURIDADE PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'BBVJ11',
        category: 'FUNDS',
        isin: 'BRBBVJCTF001',
        description: 'FDO INV IMOB BB VOTORANTIM C JARD CONT TOWER'
      },
      {
        ticker: 'BBYY34',
        category: 'BDR',
        isin: 'BRBBYYBDR005',
        description: 'BEST BUY CO., INC.'
      },
      {
        ticker: 'BCFF11',
        category: 'FUNDS',
        isin: 'BRBCFFCTF000',
        description: 'FDO INV IMOB - FII BTG PACTUAL FUNDO DE FUNDOS'
      },
      {
        ticker: 'BCIA11',
        category: 'FUNDS',
        isin: 'BRBCIACTF005',
        description: 'BRADESCO CARTEIRA IMOBILIÁRIA ATIVA - FII'
      },
      {
        ticker: 'BCPS3',
        category: 'SHARES',
        isin: 'BRBCPSACNOR9',
        description: 'CLARO S.A.'
      },
      {
        ticker: 'BCPS4',
        category: 'SHARES',
        isin: 'BRBCPSACNPR6',
        description: 'CLARO S.A.'
      },
      {
        ticker: 'BCRI11',
        category: 'FUNDS',
        isin: 'BRBCRICTF009',
        description: 'BANESTES RECEBÍVEIS IMOBILIÁRIOS FDO INV IMOB  FII'
      },
      {
        ticker: 'BCSA34',
        category: 'BDR',
        isin: 'BRBCSABDR005',
        description: 'BANCO SANTANDER SA'
      },
      {
        ticker: 'BDLL3',
        category: 'SHARES',
        isin: 'BRBDLLACNOR1',
        description: 'BARDELLA S.A. INDUSTRIAS MECANICAS'
      },
      {
        ticker: 'BDLL4',
        category: 'SHARES',
        isin: 'BRBDLLACNPR8',
        description: 'BARDELLA S.A. INDUSTRIAS MECANICAS'
      },
      {
        ticker: 'BEEF3',
        category: 'SHARES',
        isin: 'BRBEEFACNOR6',
        description: 'MINERVA S.A.'
      },
      {
        ticker: 'BEES3',
        category: 'SHARES',
        isin: 'BRBEESACNOR9',
        description: 'BANESTES S.A. - BCO EST ESPIRITO SANTO'
      },
      {
        ticker: 'BEES4',
        category: 'SHARES',
        isin: 'BRBEESACNPR6',
        description: 'BANESTES S.A. - BCO EST ESPIRITO SANTO'
      },
      {
        ticker: 'BEGB4',
        category: 'SHARES',
        isin: 'BRBEGBACNPR7',
        description: 'BANCO BERJ S.A.'
      },
      {
        ticker: 'BERK34',
        category: 'BDR',
        isin: 'BRBERKBDR002',
        description: 'BERKSHIRE HATHAWAY INC.'
      },
      {
        ticker: 'BETP3B',
        category: 'SHARES',
        isin: 'BRBETPACNOR3',
        description: 'BETAPART PARTICIPACOES S.A.'
      },
      {
        ticker: 'BGIP3',
        category: 'SHARES',
        isin: 'BRBGIPACNOR1',
        description: 'BCO ESTADO DE SERGIPE S.A. - BANESE'
      },
      {
        ticker: 'BGIP4',
        category: 'SHARES',
        isin: 'BRBGIPACNPR8',
        description: 'BCO ESTADO DE SERGIPE S.A. - BANESE'
      },
      {
        ticker: 'BHPG34',
        category: 'BDR',
        isin: 'BRBHPGBDR007',
        description: 'BHP GROUP LTD'
      },
      {
        ticker: 'BICR11',
        category: 'FUNDS',
        isin: 'BRBICRCTF009',
        description: 'INTER TÍTULOS IMOB. FDO INV. IMOB.'
      },
      {
        ticker: 'BIDI11',
        category: 'UNIT',
        isin: 'BRBIDICDAXX3',
        description: 'BANCO INTER S.A.'
      },
      {
        ticker: 'BIDI11F',
        category: 'UNIT',
        isin: 'BRBIDICDAXX3',
        description: 'BANCO INTER S.A.'
      },
      {
        ticker: 'BIDI3',
        category: 'SHARES',
        isin: 'BRBIDIACNOR3',
        description: 'BANCO INTER S.A.'
      },
      {
        ticker: 'BIDI4',
        category: 'SHARES',
        isin: 'BRBIDIACNPR0',
        description: 'BANCO INTER S.A.'
      },
      {
        ticker: 'BIDU34',
        category: 'BDR',
        isin: 'BRBIDUBDR002',
        description: 'BAIDU INC'
      },
      {
        ticker: 'BIGD11',
        category: 'FUNDS',
        isin: 'BRBIGDCTF018',
        description: 'BIGDENI FILMES DO BRASIL LTDA.'
      },
      {
        ticker: 'BIIB34',
        category: 'BDR',
        isin: 'BRBIIBBDR001',
        description: 'BIOGEN INC.'
      },
      {
        ticker: 'BILB34',
        category: 'BDR',
        isin: 'BRBILBBDR005',
        description: 'BANCO BILBAO VIZCAYA ARGENTARIA SA'
      },
      {
        ticker: 'BIOM3',
        category: 'SHARES',
        isin: 'BRBIOMACNOR2',
        description: 'BIOMM S.A.'
      },
      {
        ticker: 'BKBR3',
        category: 'SHARES',
        isin: 'BRBKBRACNOR4',
        description: 'BK BRASIL OPERAÇÃO E ASSESSORIA A RESTAURANTES SA'
      },
      {
        ticker: 'BKNG34',
        category: 'BDR',
        isin: 'BRBKNGBDR006',
        description: 'BOOKING HOLDINGS INC'
      },
      {
        ticker: 'BKOI11',
        category: 'FUNDS',
        isin: 'BRBKOICTF009',
        description: 'FDO INV PART BKO I MULTIESTRATEGIA'
      },
      {
        ticker: 'BLAK34',
        category: 'BDR',
        isin: 'BRBLAKBDR003',
        description: 'BLACKROCK, INC.'
      },
      {
        ticker: 'BLAU3',
        category: 'SHARES',
        isin: 'BRBLAUACNOR8',
        description: 'BLAU FARMACÊUTICA S.A.'
      },
      {
        ticker: 'BLCP11',
        category: 'FUNDS',
        isin: 'BRBLCPCTF007',
        description: 'BLUECAP RENDA LOG. FDO INV. IMOB. - FII'
      },
      {
        ticker: 'BLMO11',
        category: 'FUNDS',
        isin: 'BRBLMOCTF009',
        description: 'BLUEMACAW OFFICE FUND II - FDO. INVEST. IMOB.'
      },
      {
        ticker: 'BMEB3',
        category: 'SHARES',
        isin: 'BRBMEBACNOR8',
        description: 'BCO MERCANTIL DO BRASIL S.A.'
      },
      {
        ticker: 'BMEB4',
        category: 'SHARES',
        isin: 'BRBMEBACNPR5',
        description: 'BCO MERCANTIL DO BRASIL S.A.'
      },
      {
        ticker: 'BMGB4',
        category: 'SHARES',
        isin: 'BRBMGBACNPR0',
        description: 'BANCO BMG S.A.'
      },
      {
        ticker: 'BMII11',
        category: 'FUNDS',
        isin: 'BRBMIICTF007',
        description: 'FDO BRASÍLIO MACHADO DE INVESTIMENTO IMOBILIÁRIO'
      },
      {
        ticker: 'BMIN3',
        category: 'SHARES',
        isin: 'BRBMINACNOR4',
        description: 'BCO MERCANTIL DE INVESTIMENTOS S.A.'
      },
      {
        ticker: 'BMIN4',
        category: 'SHARES',
        isin: 'BRBMINACNPR1',
        description: 'BCO MERCANTIL DE INVESTIMENTOS S.A.'
      },
      {
        ticker: 'BMKS3',
        category: 'SHARES',
        isin: 'BRBMKSACNOR9',
        description: 'BICICLETAS MONARK S.A.'
      },
      {
        ticker: 'BMLC11B',
        category: 'FUNDS',
        isin: 'BRBMLCCTF004',
        description: 'FDO INV IMOB - FII BM BRASCAN LAJES CORPORATIVAS'
      },
      {
        ticker: 'BMYB34',
        category: 'BDR',
        isin: 'BRBMYBBDR000',
        description: 'BRISTOL-MYERS SQUIBB COMPANY'
      },
      {
        ticker: 'BNBR3',
        category: 'SHARES',
        isin: 'BRBNBRACNOR8',
        description: 'BCO NORDESTE DO BRASIL S.A.'
      },
      {
        ticker: 'BNFS11',
        category: 'FUNDS',
        isin: 'BRBNFSCTF000',
        description: 'BANRISUL NOVAS FRONTEIRAS FDO INV IMOB - FII'
      },
      {
        ticker: 'BOAC34',
        category: 'BDR',
        isin: 'BRBOACBDR004',
        description: 'BANK OF AMERICA CORPORATION'
      },
      {
        ticker: 'BOBR3',
        category: 'SHARES',
        isin: 'BRBOBRACNOR6',
        description: 'BOMBRIL S.A.'
      },
      {
        ticker: 'BOBR4',
        category: 'SHARES',
        isin: 'BRBOBRACNPR3',
        description: 'BOMBRIL S.A.'
      },
      {
        ticker: 'BOEI34',
        category: 'BDR',
        isin: 'BRBOEIBDR003',
        description: 'THE BOEING COMPANY'
      },
      {
        ticker: 'BONY34',
        category: 'BDR',
        isin: 'BRBONYBDR001',
        description: 'THE BANK OF NEW YORK MELLON CORPORATION'
      },
      {
        ticker: 'BOXP34',
        category: 'BDR',
        isin: 'BRBOXPBDR008',
        description: 'BOSTON PROPERTIES, INC'
      },
      {
        ticker: 'BPAC11',
        category: 'UNIT',
        isin: 'BRBPACUNT006',
        description: 'BCO BTG PACTUAL S.A.'
      },
      {
        ticker: 'BPAC11F',
        category: 'UNIT',
        isin: 'BRBPACUNT006',
        description: 'BCO BTG PACTUAL S.A.'
      },
      {
        ticker: 'BPAC13',
        category: 'UNIT',
        isin: 'BRBPACUNT014',
        description: 'BCO BTG PACTUAL S.A.'
      },
      {
        ticker: 'BPAC13F',
        category: 'UNIT',
        isin: 'BRBPACUNT014',
        description: 'BCO BTG PACTUAL S.A.'
      },
      {
        ticker: 'BPAC3',
        category: 'SHARES',
        isin: 'BRBPACACNOR7',
        description: 'BCO BTG PACTUAL S.A.'
      },
      {
        ticker: 'BPAC5',
        category: 'SHARES',
        isin: 'BRBPACACNPA0',
        description: 'BCO BTG PACTUAL S.A.'
      },
      {
        ticker: 'BPAN11',
        category: 'SHARES',
        isin: 'BRBPANARNPR9',
        description: 'BCO PAN S.A.'
      },
      {
        ticker: 'BPAN4',
        category: 'SHARES',
        isin: 'BRBPANACNPR1',
        description: 'BCO PAN S.A.'
      },
      {
        ticker: 'BPAR3',
        category: 'SHARES',
        isin: 'BRBPARACNOR5',
        description: 'BCO ESTADO DO PARA S.A.'
      },
      {
        ticker: 'BPFF11',
        category: 'FUNDS',
        isin: 'BRBPFFCTF002',
        description: 'FDO INV IMOB BRASIL PLURAL ABSOLUTO FDO DE FUNDOS'
      },
      {
        ticker: 'BPMA11',
        category: 'FUNDS',
        isin: 'BRBPMACTF009',
        description: 'BRIO PRIME MALLS - FDO. INVEST. IMOB.'
      },
      {
        ticker: 'BPML11',
        category: 'FUNDS',
        isin: 'BRBPMLCTF006',
        description: 'FDO INV IMOB BTG PACTUAL SHOPPINGS'
      },
      {
        ticker: 'BPRP11',
        category: 'FUNDS',
        isin: 'BRBPRPCTF006',
        description: 'FDO INV IMOB - FII BRLPROP'
      },
      {
        ticker: 'BRAP3',
        category: 'SHARES',
        isin: 'BRBRAPACNOR5',
        description: 'BRADESPAR S.A.'
      },
      {
        ticker: 'BRAP4',
        category: 'SHARES',
        isin: 'BRBRAPACNPR2',
        description: 'BRADESPAR S.A.'
      },
      {
        ticker: 'BRCO11',
        category: 'FUNDS',
        isin: 'BRBRCOCTF007',
        description: 'BRESCO LOGÍSTICA - FDO INV IMOB'
      },
      {
        ticker: 'BRCP11',
        category: 'FUNDS',
        isin: 'BRBRCPCTF004',
        description: 'FDO BRASCAN DE PETROLEO GAS E ENERG-FIP'
      },
      {
        ticker: 'BRCR11',
        category: 'FUNDS',
        isin: 'BRBRCRCTF000',
        description: 'FDO INV IMOB - FII BTG PACTUAL CORP. OFFICE FUND'
      },
      {
        ticker: 'BRDT3',
        category: 'SHARES',
        isin: 'BRBRDTACNOR1',
        description: 'PETROBRAS DISTRIBUIDORA S/A'
      },
      {
        ticker: 'BREV11',
        category: 'FUNDS',
        isin: 'BRBREVCTF008',
        description: 'BRAZIL REAL ESTATE VICTORY FUND I - FDO. INV. IMOB'
      },
      {
        ticker: 'BRFS3',
        category: 'SHARES',
        isin: 'BRBRFSACNOR8',
        description: 'BRF S.A.'
      },
      {
        ticker: 'BRGE11',
        category: 'SHARES',
        isin: 'BRBRGEACNPE1',
        description: 'CONSORCIO ALFA DE ADMINISTRACAO S.A.'
      },
      {
        ticker: 'BRGE12',
        category: 'SHARES',
        isin: 'BRBRGEACNPF8',
        description: 'CONSORCIO ALFA DE ADMINISTRACAO S.A.'
      },
      {
        ticker: 'BRGE3',
        category: 'SHARES',
        isin: 'BRBRGEACNOR6',
        description: 'CONSORCIO ALFA DE ADMINISTRACAO S.A.'
      },
      {
        ticker: 'BRGE5',
        category: 'SHARES',
        isin: 'BRBRGEACNPA9',
        description: 'CONSORCIO ALFA DE ADMINISTRACAO S.A.'
      },
      {
        ticker: 'BRGE6',
        category: 'SHARES',
        isin: 'BRBRGEACNPB7',
        description: 'CONSORCIO ALFA DE ADMINISTRACAO S.A.'
      },
      {
        ticker: 'BRGE7',
        category: 'SHARES',
        isin: 'BRBRGEACNPC5',
        description: 'CONSORCIO ALFA DE ADMINISTRACAO S.A.'
      },
      {
        ticker: 'BRGE8',
        category: 'SHARES',
        isin: 'BRBRGEACNPD3',
        description: 'CONSORCIO ALFA DE ADMINISTRACAO S.A.'
      },
      {
        ticker: 'BRHT11B',
        category: 'FUNDS',
        isin: 'BRBRHTCTF005',
        description: 'FDO INV IMOB BR HOTEIS - FII'
      },
      {
        ticker: 'BRIM11B',
        category: 'FUNDS',
        isin: 'BRBRIMCTF008',
        description: 'BRIO REAL ESTATE II - FDO INV IMOB'
      },
      {
        ticker: 'BRIV3',
        category: 'SHARES',
        isin: 'BRBRIVACNOR6',
        description: 'BCO ALFA DE INVESTIMENTO S.A.'
      },
      {
        ticker: 'BRIV4',
        category: 'SHARES',
        isin: 'BRBRIVACNPR3',
        description: 'BCO ALFA DE INVESTIMENTO S.A.'
      },
      {
        ticker: 'BRKM3',
        category: 'SHARES',
        isin: 'BRBRKMACNOR1',
        description: 'BRASKEM S.A.'
      },
      {
        ticker: 'BRKM5',
        category: 'SHARES',
        isin: 'BRBRKMACNPA4',
        description: 'BRASKEM S.A.'
      },
      {
        ticker: 'BRKM6',
        category: 'SHARES',
        isin: 'BRBRKMACNPB2',
        description: 'BRASKEM S.A.'
      },
      {
        ticker: 'BRML3',
        category: 'SHARES',
        isin: 'BRBRMLACNOR9',
        description: 'BR MALLS PARTICIPACOES S.A.'
      },
      {
        ticker: 'BRPR11',
        category: 'SHARES',
        isin: 'BRBRPRA01OR0',
        description: 'BR PROPERTIES S.A.'
      },
      {
        ticker: 'BRPR3',
        category: 'SHARES',
        isin: 'BRBRPRACNOR9',
        description: 'BR PROPERTIES S.A.'
      },
      {
        ticker: 'BRQB3',
        category: 'SHARES',
        isin: 'BRBRQBACNOR1',
        description: 'BRQ SOLUCOES EM INFORMATICA S.A.'
      },
      {
        ticker: 'BRSR3',
        category: 'SHARES',
        isin: 'BRBRSRACNOR3',
        description: 'BCO ESTADO DO RIO GRANDE DO SUL S.A.'
      },
      {
        ticker: 'BRSR5',
        category: 'SHARES',
        isin: 'BRBRSRACNPA6',
        description: 'BCO ESTADO DO RIO GRANDE DO SUL S.A.'
      },
      {
        ticker: 'BRSR6',
        category: 'SHARES',
        isin: 'BRBRSRACNPB4',
        description: 'BCO ESTADO DO RIO GRANDE DO SUL S.A.'
      },
      {
        ticker: 'BRZP11',
        category: 'FUNDS',
        isin: 'BRBRZPCTF005',
        description: 'BRZ INFRA PORTOS FDO, INV. EM PART. INFRAESTRUTURA'
      },
      {
        ticker: 'BSEV3',
        category: 'SHARES',
        isin: 'BRBSEVACNOR3',
        description: 'BIOSEV S.A.'
      },
      {
        ticker: 'BSLI3',
        category: 'SHARES',
        isin: 'BRBSLIACNOR5',
        description: 'BRB BCO DE BRASILIA S.A.'
      },
      {
        ticker: 'BSLI4',
        category: 'SHARES',
        isin: 'BRBSLIACNPR2',
        description: 'BRB BCO DE BRASILIA S.A.'
      },
      {
        ticker: 'BTCR11',
        category: 'FUNDS',
        isin: 'BRBTCRCTF006',
        description: 'FDO INV IMOB - BTG PACTUAL CREDITO IMOBILIARIO'
      },
      {
        ticker: 'BTLG11',
        category: 'FUNDS',
        isin: 'BRBTLGCTF000',
        description: 'BTG PACTUAL LOGISTICA FDO INV IMOB - FII'
      },
      {
        ticker: 'BTOW3',
        category: 'SHARES',
        isin: 'BRBTOWACNOR8',
        description: 'B2W - COMPANHIA DIGITAL'
      },
      {
        ticker: 'BTSG11',
        category: 'FUNDS',
        isin: 'BRBTSGCTF005',
        description: 'BTSP I FDO. INVEST. IMOB - FII'
      },
      {
        ticker: 'BTTL3',
        category: 'SHARES',
        isin: 'BRBTTLACNOR0',
        description: 'BATTISTELLA ADM PARTICIPACOES S.A.'
      },
      {
        ticker: 'BUHY11',
        category: 'FUNDS',
        isin: 'BRBUHYCTF009',
        description: 'CAMBUHY I FDO INV EM ACOES'
      },
      {
        ticker: 'BVAR11',
        category: 'FUNDS',
        isin: 'BRBVARCTF006',
        description: 'FDO INV IMOB BRASIL VAREJO - FII'
      },
      {
        ticker: 'BVEN11',
        category: 'UNIT',
        isin: 'BRBVENUNT003',
        description: 'BOA VISTA ENERGIA S.A.'
      },
      {
        ticker: 'BVEN3',
        category: 'SHARES',
        isin: 'BRBVENACNOR4',
        description: 'BOA VISTA ENERGIA S.A.'
      },
      {
        ticker: 'BZLI11',
        category: 'FUNDS',
        isin: 'BRBZLICTF003',
        description: 'BRAZIL REALTY FDO INV IMOB'
      },
      {
        ticker: 'C1AG34',
        category: 'BDR',
        isin: 'BRC1AGBDR008',
        description: 'CONAGRA BRANDS INC'
      },
      {
        ticker: 'C1AH34',
        category: 'BDR',
        isin: 'BRC1AHBDR006',
        description: 'CARDINAL HEALTH INC'
      },
      {
        ticker: 'C1BL34',
        category: 'BDR',
        isin: 'BRC1BLBDR006',
        description: 'CHUBB LTD'
      },
      {
        ticker: 'C1BO34',
        category: 'BDR',
        isin: 'BRC1BOBDR000',
        description: 'CBOE GLOBAL MARKETS INC'
      },
      {
        ticker: 'C1BR34',
        category: 'BDR',
        isin: 'BRC1BRBDR003',
        description: 'CBRE GROUP INC'
      },
      {
        ticker: 'C1BS34',
        category: 'BDR',
        isin: 'BRC1BSBDR001',
        description: 'VIACOMCBS Inc.'
      },
      {
        ticker: 'C1CI34',
        category: 'BDR',
        isin: 'BRC1CIBDR000',
        description: 'CROWN CASTLE INTERNATIONAL CORP'
      },
      {
        ticker: 'C1CL34',
        category: 'BDR',
        isin: 'BRC1CLBDR004',
        description: 'CARNIVAL CORP'
      },
      {
        ticker: 'C1DN34',
        category: 'BDR',
        isin: 'BRC1DNBDR008',
        description: 'CADENCE DESIGN SYSTEMS INC'
      },
      {
        ticker: 'C1ER34',
        category: 'BDR',
        isin: 'BRC1ERBDR007',
        description: 'CERNER CORP'
      },
      {
        ticker: 'C1FG34',
        category: 'BDR',
        isin: 'BRC1FGBDR007',
        description: 'CITIZENS FINANCIAL GROUP INC'
      },
      {
        ticker: 'C1FI34',
        category: 'BDR',
        isin: 'BRC1FIBDR003',
        description: 'CF INDUSTRIES HOLDINGS INC'
      },
      {
        ticker: 'C1HK34',
        category: 'BDR',
        isin: 'BRC1HKBDR005',
        description: 'CHECK POINT SOFTWARE TECHNOLOGIES LTD'
      },
      {
        ticker: 'C1HR34',
        category: 'BDR',
        isin: 'BRC1HRBDR000',
        description: 'CH ROBINSON WORLDWIDE INC'
      },
      {
        ticker: 'C1IC34',
        category: 'BDR',
        isin: 'BRC1ICBDR000',
        description: 'Cigna Corp'
      },
      {
        ticker: 'C1MA34',
        category: 'BDR',
        isin: 'BRC1MABDR006',
        description: 'COMERICA INC'
      },
      {
        ticker: 'C1MG34',
        category: 'BDR',
        isin: 'BRC1MGBDR003',
        description: 'CHIPOTLE MEXICAN GRILL INC'
      },
      {
        ticker: 'C1MI34',
        category: 'BDR',
        isin: 'BRC1MIBDR009',
        description: 'CUMMINS INC'
      },
      {
        ticker: 'C1MS34',
        category: 'BDR',
        isin: 'BRC1MSBDR008',
        description: 'CMS ENERGY CORP'
      },
      {
        ticker: 'C1NC34',
        category: 'BDR',
        isin: 'BRC1NCBDR000',
        description: 'CENTENE CORP'
      },
      {
        ticker: 'C1NP34',
        category: 'BDR',
        isin: 'BRC1NPBDR002',
        description: 'CENTERPOINT ENERGY INC'
      },
      {
        ticker: 'C1NS34',
        category: 'BDR',
        isin: 'BRC1NSBDR006',
        description: 'CELANESE CORP'
      },
      {
        ticker: 'C1OG34',
        category: 'BDR',
        isin: 'BRC1OGBDR009',
        description: 'CABOT OIL & GAS CORP'
      },
      {
        ticker: 'C1OO34',
        category: 'BDR',
        isin: 'BRC1OOBDR003',
        description: 'COOPER COMPANIES INC'
      },
      {
        ticker: 'C1PB34',
        category: 'BDR',
        isin: 'BRC1PBBDR007',
        description: 'Campbell Soup Co'
      },
      {
        ticker: 'C1PR34',
        category: 'BDR',
        isin: 'BRC1PRBDR003',
        description: 'COPART INC'
      },
      {
        ticker: 'C1TA34',
        category: 'BDR',
        isin: 'BRC1TABDR001',
        description: 'CINTAS CORP'
      },
      {
        ticker: 'C1TL34',
        category: 'BDR',
        isin: 'BRC1TLBDR008',
        description: 'CENTURYLINK INC'
      },
      {
        ticker: 'C1TX34',
        category: 'BDR',
        isin: 'BRC1TXBDR003',
        description: 'CITRIX SYSTEMS INC'
      },
      {
        ticker: 'C1XO34',
        category: 'BDR',
        isin: 'BRC1XOBDR004',
        description: 'CONCHO RESOURCES INC'
      },
      {
        ticker: 'CABI3B',
        category: 'SHARES',
        isin: 'BRCABIACNOR2',
        description: 'CABINDA PARTICIPACOES S.A.'
      },
      {
        ticker: 'CACO3B',
        category: 'SHARES',
        isin: 'BRCACOACNOR8',
        description: 'CACONDE PARTICIPACOES S.A.'
      },
      {
        ticker: 'CAIA3B',
        category: 'SHARES',
        isin: 'BRCAIAACNOR4',
        description: 'CAIANDA PARTICIPACOES S.A.'
      },
      {
        ticker: 'CAJI34',
        category: 'BDR',
        isin: 'BRCAJIBDR009',
        description: 'CANON INC'
      },
      {
        ticker: 'CALI3',
        category: 'SHARES',
        isin: 'BRCALIACNOR1',
        description: 'CONSTRUTORA ADOLPHO LINDENBERG S.A.'
      },
      {
        ticker: 'CALI4',
        category: 'SHARES',
        isin: 'BRCALIACNPR8',
        description: 'CONSTRUTORA ADOLPHO LINDENBERG S.A.'
      },
      {
        ticker: 'CAMB3',
        category: 'SHARES',
        isin: 'BRCAMBACNOR4',
        description: 'CAMBUCI S.A.'
      },
      {
        ticker: 'CAML3',
        category: 'SHARES',
        isin: 'BRCAMLACNOR3',
        description: 'CAMIL ALIMENTOS S.A.'
      },
      {
        ticker: 'CAON34',
        category: 'BDR',
        isin: 'BRCAONBDR009',
        description: 'CAPITAL ONE FINANCIAL CORP'
      },
      {
        ticker: 'CAPH34',
        category: 'BDR',
        isin: 'BRCAPHBDR008',
        description: 'CAPRI HOLDINGS LTD'
      },
      {
        ticker: 'CARD3',
        category: 'SHARES',
        isin: 'BRCARDACNOR9',
        description: 'CSU CARDSYSTEM S.A.'
      },
      {
        ticker: 'CARE11',
        category: 'FUNDS',
        isin: 'BRCARECTF000',
        description: 'BRAZILIAN GRAVEYARD DEATH CARE FDO INV IMOB - FII'
      },
      {
        ticker: 'CASN3',
        category: 'SHARES',
        isin: 'BRCASNACNOR6',
        description: 'CIA CATARINENSE DE AGUAS E SANEAM.-CASAN'
      },
      {
        ticker: 'CASN4',
        category: 'SHARES',
        isin: 'BRCASNACNPR3',
        description: 'CIA CATARINENSE DE AGUAS E SANEAM.-CASAN'
      },
      {
        ticker: 'CATA3',
        category: 'SHARES',
        isin: 'BRCATAACNOR1',
        description: 'CIA INDUSTRIAL CATAGUASES'
      },
      {
        ticker: 'CATA4',
        category: 'SHARES',
        isin: 'BRCATAACNPR8',
        description: 'CIA INDUSTRIAL CATAGUASES'
      },
      {
        ticker: 'CATP34',
        category: 'BDR',
        isin: 'BRCATPBDR003',
        description: 'CATERPILLAR INC.'
      },
      {
        ticker: 'CBEE3',
        category: 'SHARES',
        isin: 'BRCBEEACNOR3',
        description: 'AMPLA ENERGIA E SERVICOS S.A.'
      },
      {
        ticker: 'CBOP11',
        category: 'FUNDS',
        isin: 'BRCBOPCTF001',
        description: 'CASTELLO BRANCO OFFICE PARK FDO INV IMOB - FII'
      },
      {
        ticker: 'CCAT3',
        category: 'SHARES',
        isin: 'BRCCATACNOR7',
        description: 'COMFIO COMPANHIA CATARINENSE DE FIACAO'
      },
      {
        ticker: 'CCAT4',
        category: 'SHARES',
        isin: 'BRCCATACNPR4',
        description: 'COMFIO COMPANHIA CATARINENSE DE FIACAO'
      },
      {
        ticker: 'CCPR3',
        category: 'SHARES',
        isin: 'BRCCPRACNOR9',
        description: 'CYRELA COMMERCIAL PROPERT S.A. EMPR PART'
      },
      {
        ticker: 'CCRO3',
        category: 'SHARES',
        isin: 'BRCCROACNOR2',
        description: 'CCR S.A.'
      },
      {
        ticker: 'CEAB3',
        category: 'SHARES',
        isin: 'BRCEABACNOR1',
        description: 'CEA MODAS S.A.'
      },
      {
        ticker: 'CEAC11',
        category: 'UNIT',
        isin: 'BRCEACUNT008',
        description: 'ENERGISA ACRE - DISTRIBUIDORA DE ENERGIA S.A'
      },
      {
        ticker: 'CEAC3',
        category: 'SHARES',
        isin: 'BRCEACACNOR9',
        description: 'ENERGISA ACRE - DISTRIBUIDORA DE ENERGIA S.A'
      },
      {
        ticker: 'CEAC4',
        category: 'SHARES',
        isin: 'BRCEACACNPR6',
        description: 'ENERGISA ACRE - DISTRIBUIDORA DE ENERGIA S.A'
      },
      {
        ticker: 'CEAG3',
        category: 'SHARES',
        isin: 'BRCEAGACNOR0',
        description: 'CIA DE ENTREPOSTOS E ARMAZENS GERAIS SP'
      },
      {
        ticker: 'CEAL11',
        category: 'UNIT',
        isin: 'BRCEALCDAM10',
        description: 'COMPANHIA ENERGETICA DE ALAGOAS'
      },
      {
        ticker: 'CEAL3',
        category: 'SHARES',
        isin: 'BRCEALACNOR0',
        description: 'COMPANHIA ENERGETICA DE ALAGOAS'
      },
      {
        ticker: 'CEAL4',
        category: 'SHARES',
        isin: 'BRCEALACNPR7',
        description: 'COMPANHIA ENERGETICA DE ALAGOAS'
      },
      {
        ticker: 'CEBR3',
        category: 'SHARES',
        isin: 'BRCEBRACNOR5',
        description: 'CIA ENERGETICA DE BRASILIA'
      },
      {
        ticker: 'CEBR5',
        category: 'SHARES',
        isin: 'BRCEBRACNPA8',
        description: 'CIA ENERGETICA DE BRASILIA'
      },
      {
        ticker: 'CEBR6',
        category: 'SHARES',
        isin: 'BRCEBRACNPB6',
        description: 'CIA ENERGETICA DE BRASILIA'
      },
      {
        ticker: 'CEDO3',
        category: 'SHARES',
        isin: 'BRCEDOACNOR8',
        description: 'CIA FIACAO TECIDOS CEDRO CACHOEIRA'
      },
      {
        ticker: 'CEDO4',
        category: 'SHARES',
        isin: 'BRCEDOACNPR5',
        description: 'CIA FIACAO TECIDOS CEDRO CACHOEIRA'
      },
      {
        ticker: 'CEEB3',
        category: 'SHARES',
        isin: 'BRCEEBACNOR3',
        description: 'CIA ELETRICIDADE EST. DA BAHIA - COELBA'
      },
      {
        ticker: 'CEEB5',
        category: 'SHARES',
        isin: 'BRCEEBACNPA6',
        description: 'CIA ELETRICIDADE EST. DA BAHIA - COELBA'
      },
      {
        ticker: 'CEEB6',
        category: 'SHARES',
        isin: 'BRCEEBACNPB4',
        description: 'CIA ELETRICIDADE EST. DA BAHIA - COELBA'
      },
      {
        ticker: 'CEED3',
        category: 'SHARES',
        isin: 'BRCEEDACNOR9',
        description: 'CIA ESTADUAL DE DISTRIB ENER ELET-CEEE-D'
      },
      {
        ticker: 'CEED4',
        category: 'SHARES',
        isin: 'BRCEEDACNPR6',
        description: 'CIA ESTADUAL DE DISTRIB ENER ELET-CEEE-D'
      },
      {
        ticker: 'CEGR3',
        category: 'SHARES',
        isin: 'BRCEGRACNOR4',
        description: 'CIA DISTRIB DE GAS DO RIO DE JANEIRO-CEG'
      },
      {
        ticker: 'CEOC11',
        category: 'FUNDS',
        isin: 'BRCEOCCTF003',
        description: 'FDO INV IMOB - FII CEO CYRELA COMMERC. PROPERTIES'
      },
      {
        ticker: 'CEPE3',
        category: 'SHARES',
        isin: 'BRCEPEACNOR3',
        description: 'CIA ENERGETICA DE PERNAMBUCO - CELPE'
      },
      {
        ticker: 'CEPE5',
        category: 'SHARES',
        isin: 'BRCEPEACNPA6',
        description: 'CIA ENERGETICA DE PERNAMBUCO - CELPE'
      },
      {
        ticker: 'CEPE6',
        category: 'SHARES',
        isin: 'BRCEPEACNPB4',
        description: 'CIA ENERGETICA DE PERNAMBUCO - CELPE'
      },
      {
        ticker: 'CERO3',
        category: 'SHARES',
        isin: 'BRCEROACNOR8',
        description: 'CENTRAIS ELETRICAS DE RONDONIA S/A CERON'
      },
      {
        ticker: 'CESA3',
        category: 'SHARES',
        isin: 'BRCESAACNOR5',
        description: 'CIA ESTADUAL DE SILOS E ARMAZENS'
      },
      {
        ticker: 'CESP3',
        category: 'SHARES',
        isin: 'BRCESPACNOR3',
        description: 'CESP - CIA ENERGETICA DE SAO PAULO'
      },
      {
        ticker: 'CESP5',
        category: 'SHARES',
        isin: 'BRCESPACNPA6',
        description: 'CESP - CIA ENERGETICA DE SAO PAULO'
      },
      {
        ticker: 'CESP6',
        category: 'SHARES',
        isin: 'BRCESPACNPB4',
        description: 'CESP - CIA ENERGETICA DE SAO PAULO'
      },
      {
        ticker: 'CFHO3',
        category: 'SHARES',
        isin: 'BRCFHOACNOR6',
        description: 'CARVALHO HOLDINGS SA'
      },
      {
        ticker: 'CFHO4',
        category: 'SHARES',
        isin: 'BRCFHOACNPR3',
        description: 'CARVALHO HOLDINGS SA'
      },
      {
        ticker: 'CGAS3',
        category: 'SHARES',
        isin: 'BRCGASACNOR0',
        description: 'CIA GAS DE SAO PAULO - COMGAS'
      },
      {
        ticker: 'CGAS5',
        category: 'SHARES',
        isin: 'BRCGASACNPA3',
        description: 'CIA GAS DE SAO PAULO - COMGAS'
      },
      {
        ticker: 'CGOS3',
        category: 'SHARES',
        isin: 'BRCGOSACNOR1',
        description: 'CELG DISTRIBUICAO S.A. - CELG D'
      },
      {
        ticker: 'CGRA3',
        category: 'SHARES',
        isin: 'BRCGRAACNOR2',
        description: 'GRAZZIOTIN S.A.'
      },
      {
        ticker: 'CGRA4',
        category: 'SHARES',
        isin: 'BRCGRAACNPR9',
        description: 'GRAZZIOTIN S.A.'
      },
      {
        ticker: 'CHCM34',
        category: 'BDR',
        isin: 'BRCHCMBDR001',
        description: 'CHARTER COMMUNICATIONS INC'
      },
      {
        ticker: 'CHDC34',
        category: 'BDR',
        isin: 'BRCHDCBDR000',
        description: 'CHURCH & DWIGHT CO INC'
      },
      {
        ticker: 'CHKE34',
        category: 'BDR',
        isin: 'BRCHKEBDR001',
        description: 'CHESAPEAKE ENERGY CORPORATION'
      },
      {
        ticker: 'CHME34',
        category: 'BDR',
        isin: 'BRCHMEBDR007',
        description: 'CME GROUP INC.'
      },
      {
        ticker: 'CHVX34',
        category: 'BDR',
        isin: 'BRCHVXBDR008',
        description: 'CHEVRON CORPORATION'
      },
      {
        ticker: 'CIEL3',
        category: 'SHARES',
        isin: 'BRCIELACNOR3',
        description: 'CIELO S.A.'
      },
      {
        ticker: 'CINF34',
        category: 'BDR',
        isin: 'BRCINFBDR000',
        description: 'CINCINNATI FINANCIAL CORP'
      },
      {
        ticker: 'CJFI11',
        category: 'FUNDS',
        isin: 'BRCJFICTF007',
        description: 'FDO INV IMOB CJ - FII'
      },
      {
        ticker: 'CLSC3',
        category: 'SHARES',
        isin: 'BRCLSCACNOR6',
        description: 'CENTRAIS ELET DE SANTA CATARINA S.A.'
      },
      {
        ticker: 'CLSC4',
        category: 'SHARES',
        isin: 'BRCLSCACNPR3',
        description: 'CENTRAIS ELET DE SANTA CATARINA S.A.'
      },
      {
        ticker: 'CLXC34',
        category: 'BDR',
        isin: 'BRCLXCBDR000',
        description: 'CLOROX COMPANY'
      },
      {
        ticker: 'CMCS34',
        category: 'BDR',
        isin: 'BRCMCSBDR008',
        description: 'COMCAST CORPORATION'
      },
      {
        ticker: 'CMIG3',
        category: 'SHARES',
        isin: 'BRCMIGACNOR6',
        description: 'CIA ENERGETICA DE MINAS GERAIS - CEMIG'
      },
      {
        ticker: 'CMIG4',
        category: 'SHARES',
        isin: 'BRCMIGACNPR3',
        description: 'CIA ENERGETICA DE MINAS GERAIS - CEMIG'
      },
      {
        ticker: 'CMNS3',
        category: 'SHARES',
        isin: 'BRCMNSACNOR1',
        description: 'CMN SOLUTIONS AO18 PARTICIPACOES S.A.'
      },
      {
        ticker: 'CMSA3',
        category: 'SHARES',
        isin: 'BRCMSAACNOR8',
        description: 'CIMS S.A.'
      },
      {
        ticker: 'CMSA4',
        category: 'SHARES',
        isin: 'BRCMSAACNPR5',
        description: 'CIMS S.A.'
      },
      {
        ticker: 'CNES11',
        category: 'FUNDS',
        isin: 'BRCNESCTF001',
        description: 'FDO INV IMOB - FII CENESP'
      },
      {
        ticker: 'CNIC34',
        category: 'BDR',
        isin: 'BRCNICBDR007',
        description: 'CANADIAN NATIONAL RAILWAY CO'
      },
      {
        ticker: 'CNRT5',
        category: 'SHARES',
        isin: 'BRCNRTACNPA1',
        description: 'CICANORTE IND CONSERVAS ALIMENTICIAS S.A'
      },
      {
        ticker: 'CNSY3',
        category: 'SHARES',
        isin: 'BRCNSYACNOR6',
        description: 'CINESYSTEM S.A.'
      },
      {
        ticker: 'CNTO3',
        category: 'SHARES',
        isin: 'BRCNTOACNOR5',
        description: 'GRUPO SBF SA'
      },
      {
        ticker: 'COCA34',
        category: 'BDR',
        isin: 'BRCOCABDR002',
        description: 'THE COCA-COLA COMPANY'
      },
      {
        ticker: 'COCE3',
        category: 'SHARES',
        isin: 'BRCOCEACNOR0',
        description: 'CIA ENERGETICA DO CEARA - COELCE'
      },
      {
        ticker: 'COCE5',
        category: 'SHARES',
        isin: 'BRCOCEACNPA3',
        description: 'CIA ENERGETICA DO CEARA - COELCE'
      },
      {
        ticker: 'COCE6',
        category: 'SHARES',
        isin: 'BRCOCEACNPB1',
        description: 'CIA ENERGETICA DO CEARA - COELCE'
      },
      {
        ticker: 'COCN5',
        category: 'SHARES',
        isin: 'BRCOCNACNPA4',
        description: 'CIA DE COCOS DO NORDESTE'
      },
      {
        ticker: 'COGN3',
        category: 'SHARES',
        isin: 'BRCOGNACNOR2',
        description: 'COGNA EDUCAÇÃO S.A.'
      },
      {
        ticker: 'COLG34',
        category: 'BDR',
        isin: 'BRCOLGBDR000',
        description: 'COLGATE-PALMOLIVE COMPANY'
      },
      {
        ticker: 'COPH34',
        category: 'BDR',
        isin: 'BRCOPHBDR009',
        description: 'CONOCOPHILLIPS'
      },
      {
        ticker: 'CORR3',
        category: 'SHARES',
        isin: 'BRCORRACNOR0',
        description: 'CORREA RIBEIRO S.A. COMERCIO E INDUSTRIA'
      },
      {
        ticker: 'CORR4',
        category: 'SHARES',
        isin: 'BRCORRACNPR7',
        description: 'CORREA RIBEIRO S.A. COMERCIO E INDUSTRIA'
      },
      {
        ticker: 'COTY34',
        category: 'BDR',
        isin: 'BRCOTYBDR006',
        description: 'COTY, INC.'
      },
      {
        ticker: 'COWC34',
        category: 'BDR',
        isin: 'BRCOWCBDR006',
        description: 'COSTCO WHOLESALE CORPORATION'
      },
      {
        ticker: 'CPCH3',
        category: 'SHARES',
        isin: 'BRCPCHACNOR0',
        description: 'CAPITAL CENTER HOTEIS S.A.'
      },
      {
        ticker: 'CPCH7',
        category: 'SHARES',
        isin: 'BRCPCHACNPC9',
        description: 'CAPITAL CENTER HOTEIS S.A.'
      },
      {
        ticker: 'CPFE3',
        category: 'SHARES',
        isin: 'BRCPFEACNOR0',
        description: 'CPFL ENERGIA S.A.'
      },
      {
        ticker: 'CPFF11',
        category: 'FUNDS',
        isin: 'BRCPFFCTF000',
        description: 'CAPITÂNIA REIT FOF - FDO. INVEST. IMOB'
      },
      {
        ticker: 'CPIS11',
        category: 'UNIT',
        isin: 'BRCPISUNT003',
        description: 'COMPANHIA ENERGETICA DO PIAUI'
      },
      {
        ticker: 'CPIS12',
        category: 'UNIT',
        isin: 'BRCPISUNT011',
        description: 'COMPANHIA ENERGETICA DO PIAUI'
      },
      {
        ticker: 'CPIS3',
        category: 'SHARES',
        isin: 'BRCPISACNOR4',
        description: 'COMPANHIA ENERGETICA DO PIAUI'
      },
      {
        ticker: 'CPIS4',
        category: 'SHARES',
        isin: 'BRCPISACNPR1',
        description: 'COMPANHIA ENERGETICA DO PIAUI'
      },
      {
        ticker: 'CPLE3',
        category: 'SHARES',
        isin: 'BRCPLEACNOR8',
        description: 'CIA PARANAENSE DE ENERGIA - COPEL'
      },
      {
        ticker: 'CPLE5',
        category: 'SHARES',
        isin: 'BRCPLEACNPA1',
        description: 'CIA PARANAENSE DE ENERGIA - COPEL'
      },
      {
        ticker: 'CPLE6',
        category: 'SHARES',
        isin: 'BRCPLEACNPB9',
        description: 'CIA PARANAENSE DE ENERGIA - COPEL'
      },
      {
        ticker: 'CPNO7',
        category: 'SHARES',
        isin: 'BRCPNOACNPC2',
        description: 'COPENOR - CIA PETROQUIMICA DO NORDESTE'
      },
      {
        ticker: 'CPRE3',
        category: 'SHARES',
        isin: 'BRCPREACNOR5',
        description: 'CPFL ENERGIAS RENOVÁVEIS S.A.'
      },
      {
        ticker: 'CPRL34',
        category: 'BDR',
        isin: 'BRCPRLBDR004',
        description: 'CANADIAN PACIFIC RAILWAY LTD'
      },
      {
        ticker: 'CPTP3B',
        category: 'SHARES',
        isin: 'BRCPTPACNOR7',
        description: 'CAPITALPART PARTICIPACOES S.A.'
      },
      {
        ticker: 'CPTS11',
        category: 'FUNDS',
        isin: 'BRCPTSCTF004',
        description: 'CAPITANIA SECURITIES II FDO INV IMOB - FII'
      },
      {
        ticker: 'CRDA34',
        category: 'BDR',
        isin: 'BRCRDABDR003',
        description: 'CREDIT ACCEPTANCE CORP'
      },
      {
        ticker: 'CRDE3',
        category: 'SHARES',
        isin: 'BRCRDEACNOR1',
        description: 'CR2 EMPREENDIMENTOS IMOBILIARIOS S.A.'
      },
      {
        ticker: 'CRFB3',
        category: 'SHARES',
        isin: 'BRCRFBACNOR2',
        description: 'ATACADÃO S.A.'
      },
      {
        ticker: 'CRFF11',
        category: 'FUNDS',
        isin: 'BRCRFFCTF006',
        description: 'CAIXA RIO BRAVO FDO DE FDOS INV IMOB II'
      },
      {
        ticker: 'CRHP34',
        category: 'BDR',
        isin: 'BRCRHPBDR002',
        description: 'CRH PLC'
      },
      {
        ticker: 'CRIN34',
        category: 'BDR',
        isin: 'BRCRINBDR005',
        description: 'CARTERS INC'
      },
      {
        ticker: 'CRIP34',
        category: 'BDR',
        isin: 'BRCRIPBDR000',
        description: 'TRIP.COM GROUP LIMITED'
      },
      {
        ticker: 'CRIV3',
        category: 'SHARES',
        isin: 'BRCRIVACNOR4',
        description: 'FINANCEIRA ALFA S.A.- CRED FINANC E INVS'
      },
      {
        ticker: 'CRIV4',
        category: 'SHARES',
        isin: 'BRCRIVACNPR1',
        description: 'FINANCEIRA ALFA S.A.- CRED FINANC E INVS'
      },
      {
        ticker: 'CRML4',
        category: 'SHARES',
        isin: 'BRCRMLACNPR4',
        description: 'CARBOMIL S.A.'
      },
      {
        ticker: 'CRPC4',
        category: 'SHARES',
        isin: 'BRCRPCACNPR6',
        description: 'CRP CADERI CAPITAL DE RISCO S/A'
      },
      {
        ticker: 'CRPG3',
        category: 'SHARES',
        isin: 'BRCRPGACNOR0',
        description: 'TRONOX PIGMENTOS DO BRASIL S.A.'
      },
      {
        ticker: 'CRPG5',
        category: 'SHARES',
        isin: 'BRCRPGACNPA3',
        description: 'TRONOX PIGMENTOS DO BRASIL S.A.'
      },
      {
        ticker: 'CRPG6',
        category: 'SHARES',
        isin: 'BRCRPGACNPB1',
        description: 'TRONOX PIGMENTOS DO BRASIL S.A.'
      },
      {
        ticker: 'CRPM11',
        category: 'FUNDS',
        isin: 'BRCRPMCTF001',
        description: 'VOTORANTIM CARDIO PULMONAR FDO INV IMOB - FII'
      },
      {
        ticker: 'CRPM12',
        category: 'FUNDS',
        isin: 'BRCRPMCTF019',
        description: 'VOTORANTIM CARDIO PULMONAR FDO INV IMOB - FII'
      },
      {
        ticker: 'CRTE3B',
        category: 'SHARES',
        isin: 'BRCRTEACNOR7',
        description: 'CONC RIO-TERESOPOLIS S.A.'
      },
      {
        ticker: 'CRTE5B',
        category: 'SHARES',
        isin: 'BRCRTEACNPA0',
        description: 'CONC RIO-TERESOPOLIS S.A.'
      },
      {
        ticker: 'CSAB3',
        category: 'SHARES',
        isin: 'BRCSABACNOR1',
        description: 'CIA SEGUROS ALIANCA DA BAHIA'
      },
      {
        ticker: 'CSAB4',
        category: 'SHARES',
        isin: 'BRCSABACNPR8',
        description: 'CIA SEGUROS ALIANCA DA BAHIA'
      },
      {
        ticker: 'CSAL4',
        category: 'SHARES',
        isin: 'BRCSALACNPR7',
        description: 'CIA ABASTEC. D\'\'AGUA E SAN. EST. ALAGOAS'
      },
      {
        ticker: 'CSAM3',
        category: 'SHARES',
        isin: 'BRCSAMACNOR8',
        description: 'COSAMA - CIA DE SANEAMENTO DA AMAZONIA'
      },
      {
        ticker: 'CSAM4',
        category: 'SHARES',
        isin: 'BRCSAMACNPR5',
        description: 'COSAMA - CIA DE SANEAMENTO DA AMAZONIA'
      },
      {
        ticker: 'CSAN3',
        category: 'SHARES',
        isin: 'BRCSANACNOR6',
        description: 'COSAN S.A.'
      },
      {
        ticker: 'CSCO34',
        category: 'BDR',
        isin: 'BRCSCOBDR004',
        description: 'CISCO SYSTEMS, INC.'
      },
      {
        ticker: 'CSMG3',
        category: 'SHARES',
        isin: 'BRCSMGACNOR5',
        description: 'CIA SANEAMENTO DE MINAS GERAIS-COPASA MG'
      },
      {
        ticker: 'CSNA3',
        category: 'SHARES',
        isin: 'BRCSNAACNOR6',
        description: 'CIA SIDERURGICA NACIONAL'
      },
      {
        ticker: 'CSRN3',
        category: 'SHARES',
        isin: 'BRCSRNACNOR0',
        description: 'CIA ENERGETICA DO RIO GDE NORTE - COSERN'
      },
      {
        ticker: 'CSRN5',
        category: 'SHARES',
        isin: 'BRCSRNACNPA3',
        description: 'CIA ENERGETICA DO RIO GDE NORTE - COSERN'
      },
      {
        ticker: 'CSRN6',
        category: 'SHARES',
        isin: 'BRCSRNACNPB1',
        description: 'CIA ENERGETICA DO RIO GDE NORTE - COSERN'
      },
      {
        ticker: 'CSXC34',
        category: 'BDR',
        isin: 'BRCSXCBDR005',
        description: 'CSX CORP'
      },
      {
        ticker: 'CTBA11B',
        category: 'SHARES',
        isin: 'BRCTBACPA001',
        description: 'PREFEITURA MUNICIPAL DE CURITIBA'
      },
      {
        ticker: 'CTCA3',
        category: 'SHARES',
        isin: 'BRCTCAACNOR7',
        description: 'CTC - CENTRO DE TECNOLOGIA CANAVIEIRA S.A.'
      },
      {
        ticker: 'CTGP34',
        category: 'BDR',
        isin: 'BRCTGPBDR000',
        description: 'CITIGROUP INC.'
      },
      {
        ticker: 'CTKA3',
        category: 'SHARES',
        isin: 'BRCTKAACNOR0',
        description: 'KARSTEN S.A.'
      },
      {
        ticker: 'CTKA4',
        category: 'SHARES',
        isin: 'BRCTKAACNPR7',
        description: 'KARSTEN S.A.'
      },
      {
        ticker: 'CTNM3',
        category: 'SHARES',
        isin: 'BRCTNMACNOR9',
        description: 'CIA TECIDOS NORTE DE MINAS COTEMINAS'
      },
      {
        ticker: 'CTNM4',
        category: 'SHARES',
        isin: 'BRCTNMACNPR6',
        description: 'CIA TECIDOS NORTE DE MINAS COTEMINAS'
      },
      {
        ticker: 'CTSA3',
        category: 'SHARES',
        isin: 'BRCTSAACNOR3',
        description: 'CIA TECIDOS SANTANENSE'
      },
      {
        ticker: 'CTSA4',
        category: 'SHARES',
        isin: 'BRCTSAACNPR0',
        description: 'CIA TECIDOS SANTANENSE'
      },
      {
        ticker: 'CTSA8',
        category: 'SHARES',
        isin: 'BRCTSAACNPD0',
        description: 'CIA TECIDOS SANTANENSE'
      },
      {
        ticker: 'CTSH34',
        category: 'BDR',
        isin: 'BRCTSHBDR002',
        description: 'COGNIZANT TECHNOLOGY SOLUTIONS'
      },
      {
        ticker: 'CTXT11',
        category: 'FUNDS',
        isin: 'BRCTXTCTF014',
        description: 'FDO INV IMOB CENTRO TEXTIL INTERNACIONAL'
      },
      {
        ticker: 'CVBI11',
        category: 'FUNDS',
        isin: 'BRCVBICTF001',
        description: 'FDO INV. IMOB. VBI CRI'
      },
      {
        ticker: 'CVCB3',
        category: 'SHARES',
        isin: 'BRCVCBACNOR1',
        description: 'CVC BRASIL OPERADORA E AGÊNCIA DE VIAGENS S.A.'
      },
      {
        ticker: 'CVSH34',
        category: 'BDR',
        isin: 'BRCVSHBDR008',
        description: 'CVS HEALTH CORPORATION'
      },
      {
        ticker: 'CXCE11B',
        category: 'FUNDS',
        isin: 'BRCXCECTF004',
        description: 'FDO INV IMOB CAIXA CEDAE'
      },
      {
        ticker: 'CXRI11',
        category: 'FUNDS',
        isin: 'BRCXRICTF003',
        description: 'CAIXA RIO BRAVO FUNDO DE FDO INV IMOB - FII'
      },
      {
        ticker: 'CXTL11',
        category: 'FUNDS',
        isin: 'BRCXTLCTF003',
        description: 'FDO INV IMOB CAIXA TRX LOGÍSTICA RENDA'
      },
      {
        ticker: 'CYRE3',
        category: 'SHARES',
        isin: 'BRCYREACNOR7',
        description: 'CYRELA BRAZIL REALTY S.A.EMPREEND E PART'
      },
      {
        ticker: 'D1EL34',
        category: 'BDR',
        isin: 'BRD1ELBDR009',
        description: 'DELL TECHNOLOGIES INC'
      },
      {
        ticker: 'D1FS34',
        category: 'BDR',
        isin: 'BRD1FSBDR001',
        description: 'Discover Financial Services'
      },
      {
        ticker: 'D1HI34',
        category: 'BDR',
        isin: 'BRD1HIBDR008',
        description: 'DR HORTON INC'
      },
      {
        ticker: 'D1IS34',
        category: 'BDR',
        isin: 'BRD1ISBDR005',
        description: 'DISH NETWORK CORP'
      },
      {
        ticker: 'D1LR34',
        category: 'BDR',
        isin: 'BRD1LRBDR001',
        description: 'DIGITAL REALTY TRUST INC'
      },
      {
        ticker: 'D1OM34',
        category: 'BDR',
        isin: 'BRD1OMBDR006',
        description: 'DOMINION ENERGY INC'
      },
      {
        ticker: 'D1OV34',
        category: 'BDR',
        isin: 'BRD1OVBDR007',
        description: 'DOVER CORP'
      },
      {
        ticker: 'D1RE34',
        category: 'BDR',
        isin: 'BRD1REBDR006',
        description: 'DUKE REALTY CORP'
      },
      {
        ticker: 'D1RI34',
        category: 'BDR',
        isin: 'BRD1RIBDR007',
        description: 'DARDEN RESTAURANTS INC'
      },
      {
        ticker: 'D1TE34',
        category: 'BDR',
        isin: 'BRD1TEBDR002',
        description: 'DTE ENERGY CO'
      },
      {
        ticker: 'D1VN34',
        category: 'BDR',
        isin: 'BRD1VNBDR009',
        description: 'DEVON ENERGY CORP'
      },
      {
        ticker: 'D1XC34',
        category: 'BDR',
        isin: 'BRD1XCBDR008',
        description: 'DXC TECHNOLOGY CO'
      },
      {
        ticker: 'DAMT11',
        category: 'FUNDS',
        isin: 'BRDAMTCTF007',
        description: 'DIAMANTE FDO INV IMOB'
      },
      {
        ticker: 'DAMT11B',
        category: 'FUNDS',
        isin: 'BRDAMTCTF007',
        description: 'DIAMANTE FDO INV IMOB'
      },
      {
        ticker: 'DANA11',
        category: 'SHARES',
        isin: 'BRDANAACNV18',
        description: 'DANA INDUSTRIAL S.A.'
      },
      {
        ticker: 'DASA3',
        category: 'SHARES',
        isin: 'BRDASAACNOR1',
        description: 'DIAGNOSTICOS DA AMERICA S.A.'
      },
      {
        ticker: 'DASS3',
        category: 'SHARES',
        isin: 'BRDASSACNOR3',
        description: 'DASS NORDESTE CALÇADOS E ARTIGOS ESPORTIVOS SA'
      },
      {
        ticker: 'DBAG34',
        category: 'BDR',
        isin: 'BRDBAGBDR008',
        description: 'DEUTSCHE BANK AKTIENGESELLSCHAFT'
      },
      {
        ticker: 'DCVY34',
        category: 'BDR',
        isin: 'BRDCVYBDR005',
        description: 'DISCOVERY INC'
      },
      {
        ticker: 'DCVY35',
        category: 'BDR',
        isin: 'BRDCVYBDR013',
        description: 'DISCOVERY INC'
      },
      {
        ticker: 'DDNB34',
        category: 'BDR',
        isin: 'BRDDNBBDR008',
        description: 'DUPONT DE NEMOURS INC.'
      },
      {
        ticker: 'DEAI34',
        category: 'BDR',
        isin: 'BRDEAIBDR008',
        description: 'DELTA AIR LINES, INC.'
      },
      {
        ticker: 'DEEC34',
        category: 'BDR',
        isin: 'BRDEECBDR003',
        description: 'DEERE & CO'
      },
      {
        ticker: 'DEOP34',
        category: 'BDR',
        isin: 'BRDEOPBDR004',
        description: 'DIAGEO PLC'
      },
      {
        ticker: 'DGCO34',
        category: 'BDR',
        isin: 'BRDGCOBDR007',
        description: 'DOLLAR GENERAL CORP'
      },
      {
        ticker: 'DHER34',
        category: 'BDR',
        isin: 'BRDHERBDR004',
        description: 'DANAHER CORPORATION'
      },
      {
        ticker: 'DIRR3',
        category: 'SHARES',
        isin: 'BRDIRRACNOR0',
        description: 'DIRECIONAL ENGENHARIA S.A.'
      },
      {
        ticker: 'DISB34',
        category: 'BDR',
        isin: 'BRDISBBDR006',
        description: 'THE WALT DISNEY COMPANY'
      },
      {
        ticker: 'DLMT11',
        category: 'FUNDS',
        isin: 'BRDLMTCTF004',
        description: 'DEL MONTE AJAX FDO INV IMOB - FII'
      },
      {
        ticker: 'DLTR34',
        category: 'BDR',
        isin: 'BRDLTRBDR004',
        description: 'DOLLAR TREE INC'
      },
      {
        ticker: 'DMAC11',
        category: 'FUNDS',
        isin: 'BRDMACCTF003',
        description: 'MAC FDO INV IMOB'
      },
      {
        ticker: 'DMMO3',
        category: 'SHARES',
        isin: 'BRDMMOACNOR0',
        description: 'DOMMO ENERGIA S.A.'
      },
      {
        ticker: 'DNEN3B',
        category: 'SHARES',
        isin: 'BRDNENACNOR7',
        description: 'DINAMICA ENERGIA S.A.'
      },
      {
        ticker: 'DOHL3',
        category: 'SHARES',
        isin: 'BRDOHLACNOR2',
        description: 'DOHLER S.A.'
      },
      {
        ticker: 'DOHL4',
        category: 'SHARES',
        isin: 'BRDOHLACNPR9',
        description: 'DOHLER S.A.'
      },
      {
        ticker: 'DOMC11',
        category: 'FUNDS',
        isin: 'BRDOMCCTF004',
        description: 'REAG RENDA IMOBILIARIA FDO INV IMOB - FII'
      },
      {
        ticker: 'DOVL11B',
        category: 'FUNDS',
        isin: 'BRDOVLCTF006',
        description: 'DOVEL FDO INV IMOB'
      },
      {
        ticker: 'DRIT11B',
        category: 'FUNDS',
        isin: 'BRDRITCTF009',
        description: 'MULTIGESTÃO RENDA COMERCIAL FDO INV IMOB - FII'
      },
      {
        ticker: 'DTCY3',
        category: 'SHARES',
        isin: 'BRDTCYACNOR5',
        description: 'DTCOM - DIRECT TO COMPANY S.A.'
      },
      {
        ticker: 'DTCY4',
        category: 'SHARES',
        isin: 'BRDTCYACNPR2',
        description: 'DTCOM - DIRECT TO COMPANY S.A.'
      },
      {
        ticker: 'DTEN3',
        category: 'SHARES',
        isin: 'BRDTENACNOR4',
        description: 'DETEN QUIMICA S.A.'
      },
      {
        ticker: 'DTEN6',
        category: 'SHARES',
        isin: 'BRDTENACNPB5',
        description: 'DETEN QUIMICA S.A.'
      },
      {
        ticker: 'DTEX3',
        category: 'SHARES',
        isin: 'BRDTEXACNOR3',
        description: 'DURATEX S.A.'
      },
      {
        ticker: 'DUKB34',
        category: 'BDR',
        isin: 'BRDUKBBDR008',
        description: 'DUKE ENERGY CORPORATION'
      },
      {
        ticker: 'DVAI34',
        category: 'BDR',
        isin: 'BRDVAIBDR002',
        description: 'DAVITA INC'
      },
      {
        ticker: 'DXXI3',
        category: 'SHARES',
        isin: 'BRDXXIACNOR6',
        description: 'DUXXI IMOBILIÁRIA S.A.'
      },
      {
        ticker: 'E1CL34',
        category: 'BDR',
        isin: 'BRE1CLBDR002',
        description: 'ECOLAB INC'
      },
      {
        ticker: 'E1DI34',
        category: 'BDR',
        isin: 'BRE1DIBDR006',
        description: 'Consolidated Edison Inc'
      },
      {
        ticker: 'E1FX34',
        category: 'BDR',
        isin: 'BRE1FXBDR000',
        description: 'EQUIFAX INC'
      },
      {
        ticker: 'E1IX34',
        category: 'BDR',
        isin: 'BRE1IXBDR004',
        description: 'EDISON INTERNATIONAL'
      },
      {
        ticker: 'E1MN34',
        category: 'BDR',
        isin: 'BRE1MNBDR007',
        description: 'EASTMAN CHEMICAL CO'
      },
      {
        ticker: 'E1MR34',
        category: 'BDR',
        isin: 'BRE1MRBDR008',
        description: 'Emerson Electric Co'
      },
      {
        ticker: 'E1OG34',
        category: 'BDR',
        isin: 'BRE1OGBDR007',
        description: 'EOG RESOURCES INC'
      },
      {
        ticker: 'E1QR34',
        category: 'BDR',
        isin: 'BRE1QRBDR009',
        description: 'EQUITY RESIDENTIAL'
      },
      {
        ticker: 'E1SE34',
        category: 'BDR',
        isin: 'BRE1SEBDR003',
        description: 'EVERSOURCE ENERGY'
      },
      {
        ticker: 'E1SS34',
        category: 'BDR',
        isin: 'BRE1SSBDR003',
        description: 'ESSEX PROPERTY TRUST INC'
      },
      {
        ticker: 'E1TF34',
        category: 'BDR',
        isin: 'BRE1TFBDR008',
        description: 'E TRADE FINANCIAL CORP'
      },
      {
        ticker: 'E1TN34',
        category: 'BDR',
        isin: 'BRE1TNBDR002',
        description: 'Eaton Corp PLC'
      },
      {
        ticker: 'E1TR34',
        category: 'BDR',
        isin: 'BRE1TRBDR003',
        description: 'Entergy Corp'
      },
      {
        ticker: 'E1VE34',
        category: 'BDR',
        isin: 'BRE1VEBDR007',
        description: 'EVEREST RE GROUP LTD'
      },
      {
        ticker: 'E1VR34',
        category: 'BDR',
        isin: 'BRE1VRBDR009',
        description: 'EVERGY INC'
      },
      {
        ticker: 'E1WL34',
        category: 'BDR',
        isin: 'BRE1WLBDR000',
        description: 'EDWARDS LIFESCIENCES CORP'
      },
      {
        ticker: 'E1XC34',
        category: 'BDR',
        isin: 'BRE1XCBDR007',
        description: 'EXELON CORP'
      },
      {
        ticker: 'E1XP34',
        category: 'BDR',
        isin: 'BRE1XPBDR009',
        description: 'EXPEDITORS INTERNATIONAL OF WASHINGTON INC'
      },
      {
        ticker: 'E1XR34',
        category: 'BDR',
        isin: 'BRE1XRBDR005',
        description: 'EXTRA SPACE STORAGE INC'
      },
      {
        ticker: 'EAIN34',
        category: 'BDR',
        isin: 'BREAINBDR007',
        description: 'ELECTRONIC ARTS INC'
      },
      {
        ticker: 'EALT3',
        category: 'SHARES',
        isin: 'BREALTACNOR4',
        description: 'ELECTRO ACO ALTONA S.A.'
      },
      {
        ticker: 'EALT4',
        category: 'SHARES',
        isin: 'BREALTACNPR1',
        description: 'ELECTRO ACO ALTONA S.A.'
      },
      {
        ticker: 'EBAY34',
        category: 'BDR',
        isin: 'BREBAYBDR009',
        description: 'EBAY INC.'
      },
      {
        ticker: 'EBTL3',
        category: 'SHARES',
        isin: 'BREBTLACNOR2',
        description: 'EMBRATEL - EMPR.BRASILEIRA DE TELEC S.A.'
      },
      {
        ticker: 'ECOR3',
        category: 'SHARES',
        isin: 'BRECORACNOR8',
        description: 'ECORODOVIAS INFRAESTRUTURA E LOGÍSTICA S.A.'
      },
      {
        ticker: 'ECPR3',
        category: 'SHARES',
        isin: 'BRECPRACNOR5',
        description: 'EMPRESA NAC COM REDITO PART S.A.ENCORPAR'
      },
      {
        ticker: 'ECPR4',
        category: 'SHARES',
        isin: 'BRECPRACNPR2',
        description: 'EMPRESA NAC COM REDITO PART S.A.ENCORPAR'
      },
      {
        ticker: 'EDFO11B',
        category: 'FUNDS',
        isin: 'BREDFOCTF004',
        description: 'FDO INV IMOB EDIFÍCIO OURINVEST'
      },
      {
        ticker: 'EDGA11',
        category: 'FUNDS',
        isin: 'BREDGACTF001',
        description: 'FDO INV IMOB - FII EDIFÍCIO GALERIA'
      },
      {
        ticker: 'EEEL3',
        category: 'SHARES',
        isin: 'BREEELACNOR8',
        description: 'CIA ESTADUAL GER.TRANS.ENER.ELET-CEEE-GT'
      },
      {
        ticker: 'EEEL4',
        category: 'SHARES',
        isin: 'BREEELACNPR5',
        description: 'CIA ESTADUAL GER.TRANS.ENER.ELET-CEEE-GT'
      },
      {
        ticker: 'EGCE3',
        category: 'SHARES',
        isin: 'BREGCEACNOR2',
        description: 'ENERGISA GERACAO CENTRAIS EOLICAS RN S.A.'
      },
      {
        ticker: 'EGIE3',
        category: 'SHARES',
        isin: 'BREGIEACNOR9',
        description: 'ENGIE BRASIL ENERGIA S.A.'
      },
      {
        ticker: 'EKTR3',
        category: 'SHARES',
        isin: 'BREKTRACNOR0',
        description: 'ELEKTRO REDES S.A.'
      },
      {
        ticker: 'EKTR4',
        category: 'SHARES',
        isin: 'BREKTRACNPR7',
        description: 'ELEKTRO REDES S.A.'
      },
      {
        ticker: 'ELBR4',
        category: 'SHARES',
        isin: 'BRELBRACNPR3',
        description: 'ELEBRA S/A ELETRONICA BRASILEIRA'
      },
      {
        ticker: 'ELCI34',
        category: 'BDR',
        isin: 'BRELCIBDR007',
        description: 'ESTEE LAUDER COMPANIES INC'
      },
      {
        ticker: 'ELDO11B',
        category: 'FUNDS',
        isin: 'BRELDOCTF002',
        description: 'FDO INV IMOB - FII ELDORADO'
      },
      {
        ticker: 'ELET3',
        category: 'SHARES',
        isin: 'BRELETACNOR6',
        description: 'CENTRAIS ELET BRAS S.A. - ELETROBRAS'
      },
      {
        ticker: 'ELET5',
        category: 'SHARES',
        isin: 'BRELETACNPA9',
        description: 'CENTRAIS ELET BRAS S.A. - ELETROBRAS'
      },
      {
        ticker: 'ELET6',
        category: 'SHARES',
        isin: 'BRELETACNPB7',
        description: 'CENTRAIS ELET BRAS S.A. - ELETROBRAS'
      },
      {
        ticker: 'EMAE3',
        category: 'SHARES',
        isin: 'BREMAEACNOR4',
        description: 'EMAE - EMPRESA METROP.AGUAS ENERGIA S.A.'
      },
      {
        ticker: 'EMAE4',
        category: 'SHARES',
        isin: 'BREMAEACNPR1',
        description: 'EMAE - EMPRESA METROP.AGUAS ENERGIA S.A.'
      },
      {
        ticker: 'EMBP3',
        category: 'SHARES',
        isin: 'BREMBPACNOR8',
        description: 'EMBRAPAR PARTICIPACOES S.A.'
      },
      {
        ticker: 'EMBP4',
        category: 'SHARES',
        isin: 'BREMBPACNPR5',
        description: 'EMBRAPAR PARTICIPACOES S.A.'
      },
      {
        ticker: 'EMBR3',
        category: 'SHARES',
        isin: 'BREMBRACNOR4',
        description: 'EMBRAER S.A.'
      },
      {
        ticker: 'ENAC3',
        category: 'SHARES',
        isin: 'BRENACACNOR6',
        description: 'CIA ARMAZENS GERAIS ENTREPOSTOS DO ACRE'
      },
      {
        ticker: 'ENAT3',
        category: 'SHARES',
        isin: 'BRENATACNOR0',
        description: 'ENAUTA PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'ENBR3',
        category: 'SHARES',
        isin: 'BRENBRACNOR2',
        description: 'EDP - ENERGIAS DO BRASIL S.A.'
      },
      {
        ticker: 'ENEV3',
        category: 'SHARES',
        isin: 'BRENEVACNOR8',
        description: 'ENEVA S.A'
      },
      {
        ticker: 'ENGI11',
        category: 'UNIT',
        isin: 'BRENGICDAM16',
        description: 'ENERGISA S.A.'
      },
      {
        ticker: 'ENGI11F',
        category: 'UNIT',
        isin: 'BRENGICDAM16',
        description: 'ENERGISA S.A.'
      },
      {
        ticker: 'ENGI3',
        category: 'SHARES',
        isin: 'BRENGIACNOR0',
        description: 'ENERGISA S.A.'
      },
      {
        ticker: 'ENGI4',
        category: 'SHARES',
        isin: 'BRENGIACNPR7',
        description: 'ENERGISA S.A.'
      },
      {
        ticker: 'ENMT3',
        category: 'SHARES',
        isin: 'BRENMTACNOR5',
        description: 'ENERGISA MATO GROSSO-DISTRIBUIDORA DE ENERGIA S/A'
      },
      {
        ticker: 'ENMT4',
        category: 'SHARES',
        isin: 'BRENMTACNPR2',
        description: 'ENERGISA MATO GROSSO-DISTRIBUIDORA DE ENERGIA S/A'
      },
      {
        ticker: 'EPCO19',
        category: 'SHARES',
        isin: 'BREPCOA08PA1',
        description: 'ENCALSO PARTICIPACOES EM CONCESSOES S.A.'
      },
      {
        ticker: 'EPCO20',
        category: 'SHARES',
        isin: 'BREPCOA09PA9',
        description: 'ENCALSO PARTICIPACOES EM CONCESSOES S.A.'
      },
      {
        ticker: 'EPCO21',
        category: 'SHARES',
        isin: 'BREPCOA10PA7',
        description: 'ENCALSO PARTICIPACOES EM CONCESSOES S.A.'
      },
      {
        ticker: 'EPCO3',
        category: 'SHARES',
        isin: 'BREPCOACNOR2',
        description: 'ENCALSO PARTICIPACOES EM CONCESSOES S.A.'
      },
      {
        ticker: 'EPTR4',
        category: 'SHARES',
        isin: 'BREPTRACNPR6',
        description: 'EMPR TURISMO DE PERNAMBUCO S.A. -EMPETUR'
      },
      {
        ticker: 'EQIX34',
        category: 'BDR',
        isin: 'BREQIXBDR002',
        description: 'EQUINIX INC'
      },
      {
        ticker: 'EQMA3B',
        category: 'SHARES',
        isin: 'BREQMAACNOR8',
        description: 'EQUATORIAL MARANHÃO DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'EQMA5B',
        category: 'SHARES',
        isin: 'BREQMAACNPA1',
        description: 'EQUATORIAL MARANHÃO DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'EQMA6B',
        category: 'SHARES',
        isin: 'BREQMAACNPB9',
        description: 'EQUATORIAL MARANHÃO DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'EQPA3',
        category: 'SHARES',
        isin: 'BREQPAACNOR1',
        description: 'EQUATORIAL PARA DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'EQPA5',
        category: 'SHARES',
        isin: 'BREQPAACNPA4',
        description: 'EQUATORIAL PARA DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'EQPA6',
        category: 'SHARES',
        isin: 'BREQPAACNPB2',
        description: 'EQUATORIAL PARA DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'EQPA7',
        category: 'SHARES',
        isin: 'BREQPAACNPC0',
        description: 'EQUATORIAL PARA DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'EQTL3',
        category: 'SHARES',
        isin: 'BREQTLACNOR0',
        description: 'EQUATORIAL ENERGIA S.A.'
      },
      {
        ticker: 'ERPA11',
        category: 'FUNDS',
        isin: 'BRERPACTF002',
        description: 'EUROPA 105 - FDO INV IMOB'
      },
      {
        ticker: 'ESSD3',
        category: 'SHARES',
        isin: 'BRESSDACNOR5',
        description: 'ENERGISA SUL-SUDESTE DISTRIBUIDORA DE ENERGIA S.A.'
      },
      {
        ticker: 'ESTQ11',
        category: 'FUNDS',
        isin: 'BRESTQCTF008',
        description: 'FDO INV IMOB POLO ESTOQUE II - FII'
      },
      {
        ticker: 'ESTQ12',
        category: 'FUNDS',
        isin: 'BRESTQCTF016',
        description: 'FDO INV IMOB POLO ESTOQUE II - FII'
      },
      {
        ticker: 'ESTR3',
        category: 'SHARES',
        isin: 'BRESTRACNOR3',
        description: 'MANUFATURA DE BRINQUEDOS ESTRELA S.A.'
      },
      {
        ticker: 'ESTR4',
        category: 'SHARES',
        isin: 'BRESTRACNPR0',
        description: 'MANUFATURA DE BRINQUEDOS ESTRELA S.A.'
      },
      {
        ticker: 'ESUD11',
        category: 'FUNDS',
        isin: 'BRESUDCTF004',
        description: 'FDO INV PART IE BB VOTORANTIM ENERG SUSTENT II'
      },
      {
        ticker: 'ESUD12',
        category: 'FUNDS',
        isin: 'BRESUDCTF012',
        description: 'FDO INV PART IE BB VOTORANTIM ENERG SUSTENT II'
      },
      {
        ticker: 'ESUT11',
        category: 'FUNDS',
        isin: 'BRESUTCTF000',
        description: 'FDO INV PART IE BB VOTORANTIM ENERG SUSTENT III'
      },
      {
        ticker: 'ESUT12',
        category: 'FUNDS',
        isin: 'BRESUTCTF018',
        description: 'FDO INV PART IE BB VOTORANTIM ENERG SUSTENT III'
      },
      {
        ticker: 'ESUU11',
        category: 'FUNDS',
        isin: 'BRESUUCTF008',
        description: 'FDO INV PART IE BB VOTORANTIM ENERG SUSTENT I'
      },
      {
        ticker: 'ESUU12',
        category: 'FUNDS',
        isin: 'BRESUUCTF016',
        description: 'FDO INV PART IE BB VOTORANTIM ENERG SUSTENT I'
      },
      {
        ticker: 'ETER3',
        category: 'SHARES',
        isin: 'BRETERACNOR3',
        description: 'ETERNIT S.A.'
      },
      {
        ticker: 'ETGO3',
        category: 'SHARES',
        isin: 'BRETGOACNOR5',
        description: 'EMPR DE TRANSP URBANO DO EST GOIAS S.A.'
      },
      {
        ticker: 'ETGO4',
        category: 'SHARES',
        isin: 'BRETGOACNPR2',
        description: 'EMPR DE TRANSP URBANO DO EST GOIAS S.A.'
      },
      {
        ticker: 'EUCA3',
        category: 'SHARES',
        isin: 'BREUCAACNOR1',
        description: 'EUCATEX S.A. INDUSTRIA E COMERCIO'
      },
      {
        ticker: 'EUCA4',
        category: 'SHARES',
        isin: 'BREUCAACNPR8',
        description: 'EUCATEX S.A. INDUSTRIA E COMERCIO'
      },
      {
        ticker: 'EURO11',
        category: 'FUNDS',
        isin: 'BREUROCTF011',
        description: 'FDO INV IMOB EUROPAR'
      },
      {
        ticker: 'EVEN3',
        category: 'SHARES',
        isin: 'BREVENACNOR8',
        description: 'EVEN CONSTRUTORA E INCORPORADORA S.A.'
      },
      {
        ticker: 'EXGR34',
        category: 'BDR',
        isin: 'BREXGRBDR004',
        description: 'EXPEDIA GROUP INC'
      },
      {
        ticker: 'EXXO34',
        category: 'BDR',
        isin: 'BREXXOBDR006',
        description: 'EXXON MOBIL CORPORATION'
      },
      {
        ticker: 'EZTB11',
        category: 'FUNDS',
        isin: 'BREZTBCTF005',
        description: 'FDO INV IMOB EZTB - FII'
      },
      {
        ticker: 'EZTC3',
        category: 'SHARES',
        isin: 'BREZTCACNOR0',
        description: 'EZ TEC EMPREEND. E PARTICIPACOES S.A.'
      },
      {
        ticker: 'F1AN34',
        category: 'BDR',
        isin: 'BRF1ANBDR001',
        description: 'Diamondback Energy Inc'
      },
      {
        ticker: 'F1BH34',
        category: 'BDR',
        isin: 'BRF1BHBDR001',
        description: 'Fortune Brands Home & Security Inc'
      },
      {
        ticker: 'F1EC34',
        category: 'BDR',
        isin: 'BRF1ECBDR006',
        description: 'FIRSTENERGY CORP'
      },
      {
        ticker: 'F1FI34',
        category: 'BDR',
        isin: 'BRF1FIBDR000',
        description: 'F5 NETWORKS INC'
      },
      {
        ticker: 'F1IS34',
        category: 'BDR',
        isin: 'BRF1ISBDR003',
        description: 'FISERV INC'
      },
      {
        ticker: 'F1LI34',
        category: 'BDR',
        isin: 'BRF1LIBDR008',
        description: 'FLIR SYSTEMS INC'
      },
      {
        ticker: 'F1LS34',
        category: 'BDR',
        isin: 'BRF1LSBDR007',
        description: 'FLOWSERVE CORP'
      },
      {
        ticker: 'F1MC34',
        category: 'BDR',
        isin: 'BRF1MCBDR009',
        description: 'FMC CORP'
      },
      {
        ticker: 'F1NI34',
        category: 'BDR',
        isin: 'BRF1NIBDR004',
        description: 'FIDELITY NATIONAL INFORMATION SERVICES INC'
      },
      {
        ticker: 'F1RA34',
        category: 'BDR',
        isin: 'BRF1RABDR002',
        description: 'FRANKLIN RESOURCES INC'
      },
      {
        ticker: 'F1RC34',
        category: 'BDR',
        isin: 'BRF1RCBDR008',
        description: 'FIRST REPUBLIC BANK'
      },
      {
        ticker: 'F1RI34',
        category: 'BDR',
        isin: 'BRF1RIBDR005',
        description: 'FEDERAL REALTY INVESTMENT TRUST'
      },
      {
        ticker: 'F1TN34',
        category: 'BDR',
        isin: 'BRF1TNBDR001',
        description: 'Fortinet Inc'
      },
      {
        ticker: 'F1TV34',
        category: 'BDR',
        isin: 'BRF1TVBDR004',
        description: 'Fortive Corp'
      },
      {
        ticker: 'FAED11',
        category: 'FUNDS',
        isin: 'BRFAEDCTF003',
        description: 'FDO INV IMOB - FII ANHANGUERA EDUCACIONAL'
      },
      {
        ticker: 'FAEL6',
        category: 'SHARES',
        isin: 'BRFAELACNPB4',
        description: 'FAE -FERRAGENS E APARELHOS ELETRICOS S.A'
      },
      {
        ticker: 'FAEL7',
        category: 'SHARES',
        isin: 'BRFAELACNPC2',
        description: 'FAE -FERRAGENS E APARELHOS ELETRICOS S.A'
      },
      {
        ticker: 'FAMB11B',
        category: 'FUNDS',
        isin: 'BRFAMBCTF018',
        description: 'FDO INV IMOB - FII EDIFÍCIO ALMIRANTE BARROSO'
      },
      {
        ticker: 'FASL34',
        category: 'BDR',
        isin: 'BRFASLBDR007',
        description: 'FASTENAL CO'
      },
      {
        ticker: 'FATN11',
        category: 'FUNDS',
        isin: 'BRFATNCTF000',
        description: 'FUNDO DE INVESTIMENTO IMOBILIÁRIO ATHENA I'
      },
      {
        ticker: 'FAVM11',
        category: 'FUNDS',
        isin: 'BRFAVMCTF008',
        description: 'FDO INV. IMOB. - AVM FII'
      },
      {
        ticker: 'FBOK34',
        category: 'BDR',
        isin: 'BRFBOKBDR006',
        description: 'FACEBOOK, INC.'
      },
      {
        ticker: 'FBTS11',
        category: 'FUNDS',
        isin: 'BRFBTSCTF007',
        description: 'FDO INV IMOB VOTORANTIM BII BTS'
      },
      {
        ticker: 'FCCQ11',
        category: 'FUNDS',
        isin: 'BRFCCQCTF005',
        description: 'CONQUEST FIP EMPRESAS EMERGENTES'
      },
      {
        ticker: 'FCFL11',
        category: 'FUNDS',
        isin: 'BRFCFLCTF009',
        description: 'FDO INV IMOB - FII CAMPUS FARIA LIMA'
      },
      {
        ticker: 'FCXO34',
        category: 'BDR',
        isin: 'BRFCXOBDR007',
        description: 'FREEPORT-MCMORAN INC.'
      },
      {
        ticker: 'FDES11',
        category: 'FUNDS',
        isin: 'BRFDESCTF005',
        description: 'FDO DE DESENVOLVIMENTO DO ESPÍRITO SANTO - FUNDES'
      },
      {
        ticker: 'FDMO34',
        category: 'BDR',
        isin: 'BRFDMOBDR008',
        description: 'FORD MOTORS COMPANY'
      },
      {
        ticker: 'FDXB34',
        category: 'BDR',
        isin: 'BRFDXBBDR002',
        description: 'FEDEX CORPORATION'
      },
      {
        ticker: 'FESA3',
        category: 'SHARES',
        isin: 'BRFESAACNOR8',
        description: 'CIA FERRO LIGAS DA BAHIA - FERBASA'
      },
      {
        ticker: 'FESA4',
        category: 'SHARES',
        isin: 'BRFESAACNPR5',
        description: 'CIA FERRO LIGAS DA BAHIA - FERBASA'
      },
      {
        ticker: 'FEXC11',
        category: 'FUNDS',
        isin: 'BRFEXCCTF007',
        description: 'FDO INV IMOB - FII BTG PACTUAL FUNDO DE CRI'
      },
      {
        ticker: 'FFTD34',
        category: 'BDR',
        isin: 'BRFFTDBDR001',
        description: 'FIFTH THIRD BANCORP'
      },
      {
        ticker: 'FGRT5',
        category: 'SHARES',
        isin: 'BRFGRTACNPA8',
        description: 'FRIGORIFICO REDENTOR S.A.'
      },
      {
        ticker: 'FHER3',
        category: 'SHARES',
        isin: 'BRFHERACNOR5',
        description: 'FERTILIZANTES HERINGER S.A.'
      },
      {
        ticker: 'FIGE3',
        category: 'SHARES',
        isin: 'BRFIGEACNOR6',
        description: 'INVESTIMENTOS BEMGE S.A.'
      },
      {
        ticker: 'FIGE4',
        category: 'SHARES',
        isin: 'BRFIGEACNPR3',
        description: 'INVESTIMENTOS BEMGE S.A.'
      },
      {
        ticker: 'FIGS11',
        category: 'FUNDS',
        isin: 'BRFIGSCTF009',
        description: 'FDO INV IMOB GENERAL SHOPPING ATIVO E RENDA - FII'
      },
      {
        ticker: 'FIGV11',
        category: 'FUNDS',
        isin: 'BRFIGVCTF003',
        description: 'FDO INV. IMOB. GV BLUE CHIP'
      },
      {
        ticker: 'FIIB11',
        category: 'FUNDS',
        isin: 'BRFIIBCTF001',
        description: 'FDO INV IMOB INDUSTRIAL DO BRASIL'
      },
      {
        ticker: 'FIIP11B',
        category: 'FUNDS',
        isin: 'BRFIIPCTF001',
        description: 'RB CAPITAL RENDA I FDO INV IMOB - FII'
      },
      {
        ticker: 'FINF11',
        category: 'FUNDS',
        isin: 'BRFINFCTF002',
        description: 'FDO INV IMOB INFRA REAL ESTATE - FII'
      },
      {
        ticker: 'FISC11',
        category: 'FUNDS',
        isin: 'BRFISCCTF008',
        description: 'FDO INV IMOB SC 401'
      },
      {
        ticker: 'FISD11',
        category: 'FUNDS',
        isin: 'BRFISDCTF006',
        description: 'SAO DOMINGOS FDO INV IMOB - FII'
      },
      {
        ticker: 'FIVN11',
        category: 'FUNDS',
        isin: 'BRFIVNCTF009',
        description: 'FDO INV IMOB VIDA NOVA - FII'
      },
      {
        ticker: 'FKEN11B',
        category: 'FUNDS',
        isin: 'BRFKENCTF001',
        description: 'FDO INV IMOB KENNEDY SQUARE - FII'
      },
      {
        ticker: 'FLCR11',
        category: 'FUNDS',
        isin: 'BRFLCRCTF004',
        description: 'FARIA LIMA CAPITAL RECEB. IMOB. I - FDO INV. IMOB.'
      },
      {
        ticker: 'FLCT11',
        category: 'FUNDS',
        isin: 'BRFLCTCTF018',
        description: '02 FILMES CURTOS LTDA.'
      },
      {
        ticker: 'FLEX3',
        category: 'SHARES',
        isin: 'BRFLEXACNOR5',
        description: 'FLEX GESTÃO DE RELACIONAMENTOS S.A.'
      },
      {
        ticker: 'FLMA11',
        category: 'FUNDS',
        isin: 'BRFLMACTF009',
        description: 'FDO INV IMOB CONTINENTAL SQUARE FARIA LIMA'
      },
      {
        ticker: 'FLRP11',
        category: 'FUNDS',
        isin: 'BRFLRPCTF006',
        description: 'FDO INV IMOB - FII FLORIPA SHOPPING'
      },
      {
        ticker: 'FLRY3',
        category: 'SHARES',
        isin: 'BRFLRYACNOR5',
        description: 'FLEURY S.A.'
      },
      {
        ticker: 'FLTC34',
        category: 'BDR',
        isin: 'BRFLTCBDR001',
        description: 'FLEETCOR TECHNOLOGIES INC'
      },
      {
        ticker: 'FMOB11',
        category: 'FUNDS',
        isin: 'BRFMOBCTF019',
        description: 'IMMOB III - GALPOES E LAJES CORP. FDO INV. IMOB.'
      },
      {
        ticker: 'FMOB12',
        category: 'FUNDS',
        isin: 'BRFMOBCTF027',
        description: 'IMMOB III - GALPOES E LAJES CORP. FDO INV. IMOB.'
      },
      {
        ticker: 'FMOF11',
        category: 'FUNDS',
        isin: 'BRFMOFCTF010',
        description: 'FDO INV IMOB MEMORIAL OFFICE'
      },
      {
        ticker: 'FMSC34',
        category: 'BDR',
        isin: 'BRFMSCBDR001',
        description: 'FRESENIUS MEDICAL CARE AG & CO KGAA'
      },
      {
        ticker: 'FMXB34',
        category: 'BDR',
        isin: 'BRFMXBBDR003',
        description: 'FOMENTO ECONOMICO MEXICANO SAB DE CV - FEMSA'
      },
      {
        ticker: 'FNAM11',
        category: 'FUNDS',
        isin: 'BRFNAMCTF013',
        description: 'FDO INV DA AMAZONIA'
      },
      {
        ticker: 'FNCN3',
        category: 'SHARES',
        isin: 'BRFNCNACNOR6',
        description: 'FINANSINOS S.A.- CREDITO FINANC E INVEST'
      },
      {
        ticker: 'FNOR11',
        category: 'FUNDS',
        isin: 'BRFNORCTF013',
        description: 'FDO INV DO NORDESTE'
      },
      {
        ticker: 'FNUV3',
        category: 'SHARES',
        isin: 'BRFNUVACNOR1',
        description: 'FENAUVA-FEIRA NAC DA UVA TUR E EMPR S.A.'
      },
      {
        ticker: 'FOXC34',
        category: 'BDR',
        isin: 'BRFOXCBDR007',
        description: 'FOX CORPORATION'
      },
      {
        ticker: 'FPAB11',
        category: 'FUNDS',
        isin: 'BRFPABCTF011',
        description: 'FDO INV IMOB PROJETO ÁGUA BRANCA'
      },
      {
        ticker: 'FPNG11',
        category: 'FUNDS',
        isin: 'BRFPNGCTF005',
        description: 'FDO INV IMOB PEDRA NEGRA RENDA IMOB'
      },
      {
        ticker: 'FPOR11',
        category: 'FUNDS',
        isin: 'BRFPORCTF000',
        description: 'PORTO SUDESTE ROYALTIES - FIP-IE'
      },
      {
        ticker: 'FPOR12',
        category: 'FUNDS',
        isin: 'BRFPORCTF018',
        description: 'PORTO SUDESTE ROYALTIES - FIP-IE'
      },
      {
        ticker: 'FRAS3',
        category: 'SHARES',
        isin: 'BRFRASACNOR0',
        description: 'FRAS-LE S.A.'
      },
      {
        ticker: 'FRIO3',
        category: 'SHARES',
        isin: 'BRFRIOACNOR2',
        description: 'METALFRIO SOLUTIONS S.A.'
      },
      {
        ticker: 'FRNV3',
        category: 'SHARES',
        isin: 'BRFRNVACNOR7',
        description: 'CIA DE NAVEG DO SAO FRANCISCO - FRANAVE'
      },
      {
        ticker: 'FRRN3B',
        category: 'SHARES',
        isin: 'BRFRRNACNOR5',
        description: 'RUMO MALHA NORTE S.A.'
      },
      {
        ticker: 'FRRN5B',
        category: 'SHARES',
        isin: 'BRFRRNACNPA8',
        description: 'RUMO MALHA NORTE S.A.'
      },
      {
        ticker: 'FRRN6B',
        category: 'SHARES',
        isin: 'BRFRRNACNPB6',
        description: 'RUMO MALHA NORTE S.A.'
      },
      {
        ticker: 'FRTA3',
        category: 'SHARES',
        isin: 'BRFRTAACNOR8',
        description: 'POMIFRUTAS S/A'
      },
      {
        ticker: 'FSLR34',
        category: 'BDR',
        isin: 'BRFSLRBDR001',
        description: 'FIRST SOLAR, INC'
      },
      {
        ticker: 'FSPE11',
        category: 'FUNDS',
        isin: 'BRFSPECTF017',
        description: 'FDO INV SETORIAL PESCA'
      },
      {
        ticker: 'FSRF11',
        category: 'FUNDS',
        isin: 'BRFSRFCTF010',
        description: 'FDO INV SETORIAL FL E REF'
      },
      {
        ticker: 'FSTU11',
        category: 'FUNDS',
        isin: 'BRFSTUCTF015',
        description: 'FDO INV SETORIAL TURISMO'
      },
      {
        ticker: 'FTCE11B',
        category: 'FUNDS',
        isin: 'BRFTCECTF005',
        description: 'OPPORTUNITY FDO INV IMOB'
      },
      {
        ticker: 'FTRO3',
        category: 'SHARES',
        isin: 'BRFTROACNOR9',
        description: 'FRUTOS TROPICAIS S/A'
      },
      {
        ticker: 'FVBI11',
        category: 'FUNDS',
        isin: 'BRFVBICTF004',
        description: 'FDO INV IMOB VBI FL 4440 - FII'
      },
      {
        ticker: 'FVPQ11',
        category: 'FUNDS',
        isin: 'BRFVPQCTF015',
        description: 'FDO INV IMOB VIA PARQUE SHOPPING - FII'
      },
      {
        ticker: 'G1AR34',
        category: 'BDR',
        isin: 'BRG1ARBDR001',
        description: 'GARTNER INC'
      },
      {
        ticker: 'G1LL34',
        category: 'BDR',
        isin: 'BRG1LLBDR001',
        description: 'GLOBE LIFE INC'
      },
      {
        ticker: 'G1LW34',
        category: 'BDR',
        isin: 'BRG1LWBDR008',
        description: 'CORNING INC'
      },
      {
        ticker: 'G1MI34',
        category: 'BDR',
        isin: 'BRG1MIBDR005',
        description: 'General Mills Inc'
      },
      {
        ticker: 'G1PC34',
        category: 'BDR',
        isin: 'BRG1PCBDR001',
        description: 'GENUINE PARTS CO'
      },
      {
        ticker: 'G1PI34',
        category: 'BDR',
        isin: 'BRG1PIBDR008',
        description: 'Global Payments Inc'
      },
      {
        ticker: 'G1RM34',
        category: 'BDR',
        isin: 'BRG1RMBDR006',
        description: 'GARMIN LTD'
      },
      {
        ticker: 'G1WW34',
        category: 'BDR',
        isin: 'BRG1WWBDR005',
        description: 'WW GRAINGER INC'
      },
      {
        ticker: 'GBIO33',
        category: 'BDR',
        isin: 'BRGBIOBDR008',
        description: 'BIOTOSCANA INVESTMENTS S.A.'
      },
      {
        ticker: 'GCFF11',
        category: 'FUNDS',
        isin: 'BRGCFFCTF009',
        description: 'GALAPAGOS FDO DE FDO - FII FDO INV. IMOB.'
      },
      {
        ticker: 'GDBR34',
        category: 'BDR',
        isin: 'BRGDBRBDR002',
        description: 'GENERAL DYNAMICS CORP.'
      },
      {
        ticker: 'GEOO34',
        category: 'BDR',
        isin: 'BRGEOOBDR000',
        description: 'GENERAL ELECTRIC COMPANY'
      },
      {
        ticker: 'GEPA3',
        category: 'SHARES',
        isin: 'BRGEPAACNOR2',
        description: 'RIO PARANAPANEMA ENERGIA S.A.'
      },
      {
        ticker: 'GEPA4',
        category: 'SHARES',
        isin: 'BRGEPAACNPR9',
        description: 'RIO PARANAPANEMA ENERGIA S.A.'
      },
      {
        ticker: 'GESE11B',
        category: 'FUNDS',
        isin: 'BRGESECTF001',
        description: 'FDO INV IMOB GENERAL SEVERIANO - FII'
      },
      {
        ticker: 'GFSA3',
        category: 'SHARES',
        isin: 'BRGFSAACNOR3',
        description: 'GAFISA S.A.'
      },
      {
        ticker: 'GGBR3',
        category: 'SHARES',
        isin: 'BRGGBRACNOR1',
        description: 'GERDAU S.A.'
      },
      {
        ticker: 'GGBR4',
        category: 'SHARES',
        isin: 'BRGGBRACNPR8',
        description: 'GERDAU S.A.'
      },
      {
        ticker: 'GGRC11',
        category: 'FUNDS',
        isin: 'BRGGRCCTF002',
        description: 'GGR COVEPI RENDA FDO INV IMOB'
      },
      {
        ticker: 'GGRF11',
        category: 'FUNDS',
        isin: 'BRGGRFCTF005',
        description: 'GGR ESTRATEGIA FDO INV IMOB - FII'
      },
      {
        ticker: 'GILD34',
        category: 'BDR',
        isin: 'BRGILDBDR000',
        description: 'GILEAD SCIENCES, INC.'
      },
      {
        ticker: 'GLAZ11',
        category: 'FUNDS',
        isin: 'BRGLAZCTF017',
        description: 'GLAZ CINEMA E VIDEO LTDA. - ME'
      },
      {
        ticker: 'GMCO34',
        category: 'BDR',
        isin: 'BRGMCOBDR008',
        description: 'GENERAL MOTORS COMPANY'
      },
      {
        ticker: 'GNDI3',
        category: 'SHARES',
        isin: 'BRGNDIACNOR2',
        description: 'NOTRE DAME INTERMEDICA PARTICIPACOES SA'
      },
      {
        ticker: 'GNTV11',
        category: 'FUNDS',
        isin: 'BRGNTVCTF012',
        description: 'GRUPO NOVO DE CINEMA E TV LTDA.'
      },
      {
        ticker: 'GOAU3',
        category: 'SHARES',
        isin: 'BRGOAUACNOR1',
        description: 'METALURGICA GERDAU S.A.'
      },
      {
        ticker: 'GOAU4',
        category: 'SHARES',
        isin: 'BRGOAUACNPR8',
        description: 'METALURGICA GERDAU S.A.'
      },
      {
        ticker: 'GOGL34',
        category: 'BDR',
        isin: 'BRGOGLBDR001',
        description: 'ALPHABET INC.'
      },
      {
        ticker: 'GOGL35',
        category: 'BDR',
        isin: 'BRGOGLBDR019',
        description: 'ALPHABET INC.'
      },
      {
        ticker: 'GOLL4',
        category: 'SHARES',
        isin: 'BRGOLLACNPR4',
        description: 'GOL LINHAS AEREAS INTELIGENTES S.A.'
      },
      {
        ticker: 'GPAR3',
        category: 'SHARES',
        isin: 'BRGPARACNOR4',
        description: 'CIA CELG DE PARTICIPACOES - CELGPAR'
      },
      {
        ticker: 'GPCP3',
        category: 'SHARES',
        isin: 'BRGPCPACNOR4',
        description: 'GPC PARTICIPACOES S.A.'
      },
      {
        ticker: 'GPCP4',
        category: 'SHARES',
        isin: 'BRGPCPACNPR1',
        description: 'GPC PARTICIPACOES S.A.'
      },
      {
        ticker: 'GPIV33',
        category: 'BDR',
        isin: 'BRGPIVBDR003',
        description: 'GP INVESTMENTS, LTD.'
      },
      {
        ticker: 'GPLA5',
        category: 'SHARES',
        isin: 'BRGPLAACNPA0',
        description: 'GEPLAN HOTEIS S.A.'
      },
      {
        ticker: 'GPRK34',
        category: 'BDR',
        isin: 'BRGPRKBDR007',
        description: 'GEOPARK LTD'
      },
      {
        ticker: 'GPRO34',
        category: 'BDR',
        isin: 'BRGPROBDR009',
        description: 'GOPRO, INC.'
      },
      {
        ticker: 'GPSI34',
        category: 'BDR',
        isin: 'BRGPSIBDR009',
        description: 'THE GAP, INC.'
      },
      {
        ticker: 'GRLV11',
        category: 'FUNDS',
        isin: 'BRGRLVCTF002',
        description: 'CSHG GR LOUVEIRA FDO DE INV IMOB - FII'
      },
      {
        ticker: 'GRND3',
        category: 'SHARES',
        isin: 'BRGRNDACNOR3',
        description: 'GRENDENE S.A.'
      },
      {
        ticker: 'GRRO11',
        category: 'FUNDS',
        isin: 'BRGRROCTF004',
        description: 'GREEN ROCK - FDO INV IMOB'
      },
      {
        ticker: 'GSFI11',
        category: 'FUNDS',
        isin: 'BRGSFICTF009',
        description: 'GENERAL SHOP E OUTLETS DO BRASIL FDO INV IMOB - FI'
      },
      {
        ticker: 'GSGI34',
        category: 'BDR',
        isin: 'BRGSGIBDR008',
        description: 'GOLDMAN SACHS GROUP INC.'
      },
      {
        ticker: 'GSHP3',
        category: 'SHARES',
        isin: 'BRGSHPACNOR7',
        description: 'GENERAL SHOPPING E OUTLETS DO BRASIL S.A.'
      },
      {
        ticker: 'GTIS11',
        category: 'FUNDS',
        isin: 'BRGTISCTF000',
        description: 'GTIS ENERGIA FDO. INVEST EM PART. INFRAESTRUTURA'
      },
      {
        ticker: 'GTPC11',
        category: 'FUNDS',
        isin: 'BRGTPCCTF017',
        description: 'G. T. PRODUCOES CINEMATOGRAFICAS LTDA.'
      },
      {
        ticker: 'GTWR11',
        category: 'FUNDS',
        isin: 'BRGTWRCTF003',
        description: 'FDO INV IMOB GREEN TOWERS'
      },
      {
        ticker: 'GUAR3',
        category: 'SHARES',
        isin: 'BRGUARACNOR4',
        description: 'GUARARAPES CONFECCOES S.A.'
      },
      {
        ticker: 'H1AS34',
        category: 'BDR',
        isin: 'BRH1ASBDR008',
        description: 'Hasbro Inc'
      },
      {
        ticker: 'H1BA34',
        category: 'BDR',
        isin: 'BRH1BABDR004',
        description: 'HUNTINGTON BANCSHARES INC'
      },
      {
        ticker: 'H1BI34',
        category: 'BDR',
        isin: 'BRH1BIBDR007',
        description: 'Hanesbrands Inc'
      },
      {
        ticker: 'H1CA34',
        category: 'BDR',
        isin: 'BRH1CABDR002',
        description: 'HCA HEALTHCARE INC'
      },
      {
        ticker: 'H1ES34',
        category: 'BDR',
        isin: 'BRH1ESBDR000',
        description: 'Hess Corp'
      },
      {
        ticker: 'H1FC34',
        category: 'BDR',
        isin: 'BRH1FCBDR001',
        description: 'HollyFrontier Corp'
      },
      {
        ticker: 'H1IG34',
        category: 'BDR',
        isin: 'BRH1IGBDR006',
        description: 'HARTFORD FINANCIAL SERVICES GROUP INC'
      },
      {
        ticker: 'H1II34',
        category: 'BDR',
        isin: 'BRH1IIBDR002',
        description: 'HUNTINGTON INGALLS INDUSTRIES INC'
      },
      {
        ticker: 'H1LT34',
        category: 'BDR',
        isin: 'BRH1LTBDR003',
        description: 'HILTON WORLDWIDE HOLDINGS INC'
      },
      {
        ticker: 'H1OG34',
        category: 'BDR',
        isin: 'BRH1OGBDR004',
        description: 'HARLEY-DAVIDSON INC'
      },
      {
        ticker: 'H1OL34',
        category: 'BDR',
        isin: 'BRH1OLBDR004',
        description: 'HOLOGIC INC'
      },
      {
        ticker: 'H1PE34',
        category: 'BDR',
        isin: 'BRH1PEBDR006',
        description: 'HEWLETT PACKARD ENTERPRISE CO'
      },
      {
        ticker: 'H1RB34',
        category: 'BDR',
        isin: 'BRH1RBBDR008',
        description: 'H&R BLOCK INC'
      },
      {
        ticker: 'H1RL34',
        category: 'BDR',
        isin: 'BRH1RLBDR007',
        description: 'HORMEL FOODS CORP'
      },
      {
        ticker: 'H1SI34',
        category: 'BDR',
        isin: 'BRH1SIBDR001',
        description: 'HENRY SCHEIN INC'
      },
      {
        ticker: 'H1ST34',
        category: 'BDR',
        isin: 'BRH1STBDR008',
        description: 'HOST HOTELS & RESORTS INC'
      },
      {
        ticker: 'H1UM34',
        category: 'BDR',
        isin: 'BRH1UMBDR009',
        description: 'HUMANA INC'
      },
      {
        ticker: 'HAAA11',
        category: 'FUNDS',
        isin: 'BRHAAACTF003',
        description: 'HEDGE AAA FDO. INV. IMOB.'
      },
      {
        ticker: 'HABT11',
        category: 'FUNDS',
        isin: 'BRHABTCTF001',
        description: 'HABITAT II - FDO INV IMOB'
      },
      {
        ticker: 'HAGA3',
        category: 'SHARES',
        isin: 'BRHAGAACNOR7',
        description: 'HAGA S.A. INDUSTRIA E COMERCIO'
      },
      {
        ticker: 'HAGA4',
        category: 'SHARES',
        isin: 'BRHAGAACNPR4',
        description: 'HAGA S.A. INDUSTRIA E COMERCIO'
      },
      {
        ticker: 'HALI34',
        category: 'BDR',
        isin: 'BRHALIBDR004',
        description: 'HALLIBURTON COMPANY'
      },
      {
        ticker: 'HAPV3',
        category: 'SHARES',
        isin: 'BRHAPVACNOR4',
        description: 'HAPVIDA PARTICIPACOES E INVESTIMENTOS SA'
      },
      {
        ticker: 'HBOR3',
        category: 'SHARES',
        isin: 'BRHBORACNOR3',
        description: 'HELBOR EMPREENDIMENTOS S.A.'
      },
      {
        ticker: 'HBRH11',
        category: 'FUNDS',
        isin: 'BRHBRHCTF000',
        description: 'FDO.INVEST. IMOB. MULTI RENDA URBANA'
      },
      {
        ticker: 'HBSA3',
        category: 'SHARES',
        isin: 'BRHBSAACNOR0',
        description: 'HIDROVIAS DO BRASIL S.A.'
      },
      {
        ticker: 'HBTS3',
        category: 'SHARES',
        isin: 'BRHBTSACNOR0',
        description: 'CIA HABITASUL DE PARTICIPACOES'
      },
      {
        ticker: 'HBTS5',
        category: 'SHARES',
        isin: 'BRHBTSACNPA3',
        description: 'CIA HABITASUL DE PARTICIPACOES'
      },
      {
        ticker: 'HBTS6',
        category: 'SHARES',
        isin: 'BRHBTSACNPB1',
        description: 'CIA HABITASUL DE PARTICIPACOES'
      },
      {
        ticker: 'HBTT11',
        category: 'FUNDS',
        isin: 'BRHBTTCTF001',
        description: 'FDO INV IMOB HABITAT I'
      },
      {
        ticker: 'HCRI11',
        category: 'FUNDS',
        isin: 'BRHCRICTF006',
        description: 'FDO INV IMOB - FII HOSPITAL DA CRIANÇA'
      },
      {
        ticker: 'HCTR11',
        category: 'FUNDS',
        isin: 'BRHCTRCTF003',
        description: 'HECTARE CE - FDO INV IMOB'
      },
      {
        ticker: 'HERM11',
        category: 'FUNDS',
        isin: 'BRHERMCTF004',
        description: 'FDO INV IMOB HERMES'
      },
      {
        ticker: 'HETA3',
        category: 'SHARES',
        isin: 'BRHETAACNOR2',
        description: 'HERCULES S.A. FABRICA DE TALHERES'
      },
      {
        ticker: 'HETA4',
        category: 'SHARES',
        isin: 'BRHETAACNPR9',
        description: 'HERCULES S.A. FABRICA DE TALHERES'
      },
      {
        ticker: 'HFOF11',
        category: 'FUNDS',
        isin: 'BRHFOFCTF002',
        description: 'HEDGE TOP FOFII 3 FDO INV IMOB'
      },
      {
        ticker: 'HGBS11',
        category: 'FUNDS',
        isin: 'BRHGBSCTF000',
        description: 'HEDGE BRASIL SHOPPING FDO INV IMOB'
      },
      {
        ticker: 'HGCR11',
        category: 'FUNDS',
        isin: 'BRHGCRCTF000',
        description: 'CSHG RECEBÍVEIS IMOBILIÁRIOS FDO INV IMOB - FII'
      },
      {
        ticker: 'HGFF11',
        category: 'FUNDS',
        isin: 'BRHGFFCTF008',
        description: 'CSHG IMOB. FOF - FDO INV. IMOB. - FII'
      },
      {
        ticker: 'HGLG11',
        category: 'FUNDS',
        isin: 'BRHGLGCTF004',
        description: 'CSHG LOGÍSTICA FDO INV IMOB - FII'
      },
      {
        ticker: 'HGPO11',
        category: 'FUNDS',
        isin: 'BRHGPOCTF009',
        description: 'CSHG PRIME OFFICES FDO INV IMOB - FII'
      },
      {
        ticker: 'HGRE11',
        category: 'FUNDS',
        isin: 'BRHGRECTF006',
        description: 'CSHG REAL ESTATE FDO INV IMOB - FII'
      },
      {
        ticker: 'HGRU11',
        category: 'FUNDS',
        isin: 'BRHGRUCTF002',
        description: 'CSHG RENDA URBANA - FDO INV IMOB - FII'
      },
      {
        ticker: 'HGTX3',
        category: 'SHARES',
        isin: 'BRHGTXACNOR9',
        description: 'CIA HERING'
      },
      {
        ticker: 'HLJP3',
        category: 'SHARES',
        isin: 'BRHLJPACNOR6',
        description: 'HOTEL LAJE DE PEDRA S.A.'
      },
      {
        ticker: 'HLOG11',
        category: 'FUNDS',
        isin: 'BRHLOGCTF008',
        description: 'HEDGE LOGÍSTICA FDO. INV. IMOB.'
      },
      {
        ticker: 'HMOC11',
        category: 'FUNDS',
        isin: 'BRHMOCCTF005',
        description: 'HEDGE SHOPPING PRAÇA DA MOÇA FDO INV IMOB'
      },
      {
        ticker: 'HOAM5',
        category: 'SHARES',
        isin: 'BRHOAMACNPA9',
        description: 'CIA TROPICAL DE HOTEIS DA AMAZONIA'
      },
      {
        ticker: 'HOAM6',
        category: 'SHARES',
        isin: 'BRHOAMACNPB7',
        description: 'CIA TROPICAL DE HOTEIS DA AMAZONIA'
      },
      {
        ticker: 'HOME34',
        category: 'BDR',
        isin: 'BRHOMEBDR002',
        description: 'THE HOME DEPOT, INC.'
      },
      {
        ticker: 'HONB34',
        category: 'BDR',
        isin: 'BRHONBBDR006',
        description: 'HONEYWELL INTERNATIONAL INC.'
      },
      {
        ticker: 'HOND34',
        category: 'BDR',
        isin: 'BRHONDBDR002',
        description: 'HONDA MOTOR CO LTD'
      },
      {
        ticker: 'HOOT3',
        category: 'SHARES',
        isin: 'BRHOOTACNOR2',
        description: 'HOTEIS OTHON S.A.'
      },
      {
        ticker: 'HOOT4',
        category: 'SHARES',
        isin: 'BRHOOTACNPR9',
        description: 'HOTEIS OTHON S.A.'
      },
      {
        ticker: 'HOSI11',
        category: 'FUNDS',
        isin: 'BRHOSICTF009',
        description: 'FDO. INV. IMOB. HOUSI'
      },
      {
        ticker: 'HPDP11',
        category: 'FUNDS',
        isin: 'BRHPDPCTF003',
        description: 'HEDGE SHOPPING PARQUE DOM PEDRO FDO. DE INV. IMOB.'
      },
      {
        ticker: 'HPQB34',
        category: 'BDR',
        isin: 'BRHPQBBDR006',
        description: 'HEWLETT-PACKARD COMPANY'
      },
      {
        ticker: 'HRDF11',
        category: 'FUNDS',
        isin: 'BRHRDFCTF000',
        description: 'HEDGE REALTY DEVELOPMENT FDO INV IMOB'
      },
      {
        ticker: 'HREC11',
        category: 'FUNDS',
        isin: 'BRHRECCTF005',
        description: 'HEDGE RECEBÍVEIS FDO. INVEST. IMOB.'
      },
      {
        ticker: 'HSHY34',
        category: 'BDR',
        isin: 'BRHSHYBDR001',
        description: 'THE HERSHEY COMPANY'
      },
      {
        ticker: 'HSML11',
        category: 'FUNDS',
        isin: 'BRHSMLCTF007',
        description: 'HSI MALL FDO INV IMOB'
      },
      {
        ticker: 'HTMX11',
        category: 'FUNDS',
        isin: 'BRHTMXCTF000',
        description: 'FDO INV IMOB - FII HOTEL MAXINVEST'
      },
      {
        ticker: 'HUSC11',
        category: 'FUNDS',
        isin: 'BRHUSCCTF009',
        description: 'FDO INV IMOB HOSPITAL UNIMED SUL CAPIXABA'
      },
      {
        ticker: 'HUSI11',
        category: 'FUNDS',
        isin: 'BRHUSICTF006',
        description: 'HUSI FDO INV. IMOB.'
      },
      {
        ticker: 'HYPE3',
        category: 'SHARES',
        isin: 'BRHYPEACNOR0',
        description: 'HYPERA S.A.'
      },
      {
        ticker: 'I1CE34',
        category: 'BDR',
        isin: 'BRI1CEBDR003',
        description: 'INTERCONTINENTAL EXCHANGE INC'
      },
      {
        ticker: 'I1DX34',
        category: 'BDR',
        isin: 'BRI1DXBDR001',
        description: 'IDEXX LABORATORIES INC'
      },
      {
        ticker: 'I1FF34',
        category: 'BDR',
        isin: 'BRI1FFBDR003',
        description: 'INTERNATIONAL FLAVORS & FRAGRANCES INC'
      },
      {
        ticker: 'I1LM34',
        category: 'BDR',
        isin: 'BRI1LMBDR007',
        description: 'ILLUMINA INC'
      },
      {
        ticker: 'I1NC34',
        category: 'BDR',
        isin: 'BRI1NCBDR004',
        description: 'INCYTE CORP'
      },
      {
        ticker: 'I1NF34',
        category: 'BDR',
        isin: 'BRI1NFBDR007',
        description: 'IHS MARKIT LTD'
      },
      {
        ticker: 'I1PC34',
        category: 'BDR',
        isin: 'BRI1PCBDR009',
        description: 'INTERNATIONAL PAPER CO'
      },
      {
        ticker: 'I1PG34',
        category: 'BDR',
        isin: 'BRI1PGBDR000',
        description: 'IPG PHOTONICS CORP'
      },
      {
        ticker: 'I1PH34',
        category: 'BDR',
        isin: 'BRI1PHBDR008',
        description: 'INTERPUBLIC GROUP OF COS INC'
      },
      {
        ticker: 'I1QV34',
        category: 'BDR',
        isin: 'BRI1QVBDR007',
        description: 'IQVIA HOLDINGS INC'
      },
      {
        ticker: 'I1RM34',
        category: 'BDR',
        isin: 'BRI1RMBDR004',
        description: 'IRON MOUNTAIN INC'
      },
      {
        ticker: 'I1RP34',
        category: 'BDR',
        isin: 'BRI1RPBDR007',
        description: 'TRANE TECHNOLOGIES PLC'
      },
      {
        ticker: 'I1SR34',
        category: 'BDR',
        isin: 'BRI1SRBDR001',
        description: 'INTUITIVE SURGICAL INC'
      },
      {
        ticker: 'I1TW34',
        category: 'BDR',
        isin: 'BRI1TWBDR009',
        description: 'ILLINOIS TOOL WORKS INC'
      },
      {
        ticker: 'I1VZ34',
        category: 'BDR',
        isin: 'BRI1VZBDR008',
        description: 'INVESCO LTD'
      },
      {
        ticker: 'IBFF11',
        category: 'FUNDS',
        isin: 'BRIBFFCTF007',
        description: 'FDO INV. IMOB. FOF INTEGRAL BREI'
      },
      {
        ticker: 'IBMB34',
        category: 'BDR',
        isin: 'BRIBMBBDR003',
        description: 'INTERNATIONAL BUSINESS MACHINES CORPORATION'
      },
      {
        ticker: 'IDNT3',
        category: 'SHARES',
        isin: 'BRIDNTACNOR5',
        description: 'IDEIASNET S.A.'
      },
      {
        ticker: 'IDVL3',
        category: 'SHARES',
        isin: 'BRIDVLACNOR5',
        description: 'BCO INDUSVAL S.A.'
      },
      {
        ticker: 'IDVL4',
        category: 'SHARES',
        isin: 'BRIDVLACNPR2',
        description: 'BCO INDUSVAL S.A.'
      },
      {
        ticker: 'IGBR3',
        category: 'SHARES',
        isin: 'BRIGBRACNOR7',
        description: 'IGB ELETRÔNICA S/A'
      },
      {
        ticker: 'IGSN3',
        category: 'SHARES',
        isin: 'BRIGSNACNOR0',
        description: 'IGUA SANEAMENTO S.A.'
      },
      {
        ticker: 'IGTA3',
        category: 'SHARES',
        isin: 'BRIGTAACNOR5',
        description: 'IGUATEMI EMPRESA DE SHOPPING CENTERS S.A'
      },
      {
        ticker: 'IMIV11',
        category: 'FUNDS',
        isin: 'BRIMIVCTF005',
        description: 'IMMOB IV - BRAGANÇA FDO. INV. IMOB.'
      },
      {
        ticker: 'IMIV13',
        category: 'FUNDS',
        isin: 'BRIMIVCTF013',
        description: 'IMMOB IV - BRAGANÇA FDO. INV. IMOB.'
      },
      {
        ticker: 'IMMO11',
        category: 'FUNDS',
        isin: 'BRIMMOCTF002',
        description: 'IMMOB II FDO INV IMOB - FII'
      },
      {
        ticker: 'IMMO13',
        category: 'FUNDS',
        isin: 'BRIMMOCTF010',
        description: 'IMMOB II FDO INV IMOB - FII'
      },
      {
        ticker: 'INEP3',
        category: 'SHARES',
        isin: 'BRINEPACNOR1',
        description: 'INEPAR S.A. INDUSTRIA E CONSTRUCOES'
      },
      {
        ticker: 'INEP4',
        category: 'SHARES',
        isin: 'BRINEPACNPR8',
        description: 'INEPAR S.A. INDUSTRIA E CONSTRUCOES'
      },
      {
        ticker: 'INGG34',
        category: 'BDR',
        isin: 'BRINGGBDR009',
        description: 'ING GROEP NV'
      },
      {
        ticker: 'INNT3',
        category: 'SHARES',
        isin: 'BRINNTACNOR4',
        description: 'INTER CONSTRUTORA E INCORPORADORA S.A.'
      },
      {
        ticker: 'INTI11',
        category: 'FUNDS',
        isin: 'BRINTICTF007',
        description: 'FDO INV IMOB INTERMEDIUM - FII'
      },
      {
        ticker: 'INTU34',
        category: 'BDR',
        isin: 'BRINTUBDR003',
        description: 'INTUIT INC'
      },
      {
        ticker: 'IRBL11',
        category: 'FUNDS',
        isin: 'BRIRBLCTF000',
        description: 'IRB INTERNACIONAL FDO INV IMOB -FII'
      },
      {
        ticker: 'IRBR3',
        category: 'SHARES',
        isin: 'BRIRBRACNOR4',
        description: 'IRB - BRASIL RESSEGUROS S.A.'
      },
      {
        ticker: 'IRDM11',
        category: 'FUNDS',
        isin: 'BRIRDMCTF004',
        description: 'FII IRIDIUM RECEBÍVEIS IMOBILIÁRIOS'
      },
      {
        ticker: 'ISBC34',
        category: 'BDR',
        isin: 'BRISBCBDR008',
        description: 'INVESTORS BANCORP INC'
      },
      {
        ticker: 'ISSH11',
        category: 'FUNDS',
        isin: 'BRISSHCTF000',
        description: 'INTERNACIONAL SHOPPING FDO INV IMOB'
      },
      {
        ticker: 'ITLC34',
        category: 'BDR',
        isin: 'BRITLCBDR005',
        description: 'INTEL CORPORATION'
      },
      {
        ticker: 'ITSA3',
        category: 'SHARES',
        isin: 'BRITSAACNOR0',
        description: 'ITAUSA S.A.'
      },
      {
        ticker: 'ITSA4',
        category: 'SHARES',
        isin: 'BRITSAACNPR7',
        description: 'ITAUSA S.A.'
      },
      {
        ticker: 'ITUB3',
        category: 'SHARES',
        isin: 'BRITUBACNOR4',
        description: 'ITAU UNIBANCO HOLDING S.A.'
      },
      {
        ticker: 'ITUB4',
        category: 'SHARES',
        isin: 'BRITUBACNPR1',
        description: 'ITAU UNIBANCO HOLDING S.A.'
      },
      {
        ticker: 'IVLG3B',
        category: 'SHARES',
        isin: 'BRIVLGACNOR8',
        description: 'INVITEL LEGACY S.A.'
      },
      {
        ticker: 'IVPR3B',
        category: 'SHARES',
        isin: 'BRIVPRACNOR6',
        description: 'INVESTIMENTOS E PARTICIP. EM INFRA S.A. - INVEPAR'
      },
      {
        ticker: 'IVPR4B',
        category: 'SHARES',
        isin: 'BRIVPRACNPR3',
        description: 'INVESTIMENTOS E PARTICIP. EM INFRA S.A. - INVEPAR'
      },
      {
        ticker: 'J1BH34',
        category: 'BDR',
        isin: 'BRJ1BHBDR007',
        description: 'JB HUNT TRANSPORT SERVICES INC'
      },
      {
        ticker: 'J1CI34',
        category: 'BDR',
        isin: 'BRJ1CIBDR003',
        description: 'JOHNSON CONTROLS INTERNATIONAL PLC'
      },
      {
        ticker: 'J1EF34',
        category: 'BDR',
        isin: 'BRJ1EFBDR005',
        description: 'JEFFERIES FINANCIAL GROUP INC'
      },
      {
        ticker: 'J1EG34',
        category: 'BDR',
        isin: 'BRJ1EGBDR003',
        description: 'JACOBS ENGINEERING GROUP INC'
      },
      {
        ticker: 'J1KH34',
        category: 'BDR',
        isin: 'BRJ1KHBDR008',
        description: 'JACK HENRY & ASSOCIATES INC'
      },
      {
        ticker: 'J1NP34',
        category: 'BDR',
        isin: 'BRJ1NPBDR005',
        description: 'JUNIPER NETWORKS INC'
      },
      {
        ticker: 'J1WN34',
        category: 'BDR',
        isin: 'BRJ1WNBDR001',
        description: 'NORDSTROM INC'
      },
      {
        ticker: 'JBDU3',
        category: 'SHARES',
        isin: 'BRJBDUACNOR6',
        description: 'INDUSTRIAS J B DUARTE S.A.'
      },
      {
        ticker: 'JBDU4',
        category: 'SHARES',
        isin: 'BRJBDUACNPR3',
        description: 'INDUSTRIAS J B DUARTE S.A.'
      },
      {
        ticker: 'JBSS3',
        category: 'SHARES',
        isin: 'BRJBSSACNOR8',
        description: 'JBS S.A.'
      },
      {
        ticker: 'JCBA6',
        category: 'SHARES',
        isin: 'BRJCBAACNPB1',
        description: 'J C BARRETTO FERTILIZANTES S.A.'
      },
      {
        ticker: 'JDCO34',
        category: 'BDR',
        isin: 'BRJDCOBDR001',
        description: 'JD.COM INC'
      },
      {
        ticker: 'JFEN3',
        category: 'SHARES',
        isin: 'BRJFENACNOR0',
        description: 'JOAO FORTES ENGENHARIA S.A.'
      },
      {
        ticker: 'JHSF3',
        category: 'SHARES',
        isin: 'BRJHSFACNOR2',
        description: 'JHSF PARTICIPACOES S.A.'
      },
      {
        ticker: 'JKDF11',
        category: 'FUNDS',
        isin: 'BRJKDFCTF001',
        description: 'FDO INV IMOB JK D - FII'
      },
      {
        ticker: 'JKEF11',
        category: 'FUNDS',
        isin: 'BRJKEFCTF009',
        description: 'FDO INV IMOB JK E - FII'
      },
      {
        ticker: 'JNJB34',
        category: 'BDR',
        isin: 'BRJNJBBDR002',
        description: 'JOHNSON & JOHNSON'
      },
      {
        ticker: 'JOPA3',
        category: 'SHARES',
        isin: 'BRJOPAACNOR5',
        description: 'JOSAPAR-JOAQUIM OLIVEIRA S.A. - PARTICIP'
      },
      {
        ticker: 'JOPA4',
        category: 'SHARES',
        isin: 'BRJOPAACNPR2',
        description: 'JOSAPAR-JOAQUIM OLIVEIRA S.A. - PARTICIP'
      },
      {
        ticker: 'JPMC34',
        category: 'BDR',
        isin: 'BRJPMCBDR009',
        description: 'JPMORGAN CHASE & CO.'
      },
      {
        ticker: 'JPPA11',
        category: 'FUNDS',
        isin: 'BRJPPACTF005',
        description: 'JPP ALLOCATION MOGNO - FDO INV IMOB'
      },
      {
        ticker: 'JPPC11',
        category: 'FUNDS',
        isin: 'BRJPPCCTF001',
        description: 'JPP CAPITAL FDO INV IMOB - FII'
      },
      {
        ticker: 'JPPV11',
        category: 'FUNDS',
        isin: 'BRJPPVCTF001',
        description: 'JPP CAPITAL VALUE FDO INV IMOB'
      },
      {
        ticker: 'JPSA3',
        category: 'SHARES',
        isin: 'BRJPSAACNOR6',
        description: 'JEREISSATI PARTICIPACOES S.A.'
      },
      {
        ticker: 'JRDM11',
        category: 'FUNDS',
        isin: 'BRJRDMCTF002',
        description: 'FDO INV IMOB - FII SHOPPING JARDIM SUL'
      },
      {
        ticker: 'JSLG3',
        category: 'SHARES',
        isin: 'BRJSLGACNOR2',
        description: 'JSL S.A.'
      },
      {
        ticker: 'JSRE11',
        category: 'FUNDS',
        isin: 'BRJSRECTF007',
        description: 'JS REAL ESTATE MULTIGESTÃO - FII'
      },
      {
        ticker: 'JTPR11',
        category: 'FUNDS',
        isin: 'BRJTPRCTF001',
        description: 'JT PREV FDO INV IMOB DESENVOLVIMENTO HABITACIONAL'
      },
      {
        ticker: 'K1CS34',
        category: 'BDR',
        isin: 'BRK1CSBDR009',
        description: 'KANSAS CITY SOUTHERN'
      },
      {
        ticker: 'K1EL34',
        category: 'BDR',
        isin: 'BRK1ELBDR000',
        description: 'KELLOGG CO'
      },
      {
        ticker: 'K1EY34',
        category: 'BDR',
        isin: 'BRK1EYBDR003',
        description: 'KEYCORP'
      },
      {
        ticker: 'K1IM34',
        category: 'BDR',
        isin: 'BRK1IMBDR009',
        description: 'KIMCO REALTY CORP'
      },
      {
        ticker: 'K1LA34',
        category: 'BDR',
        isin: 'BRK1LABDR008',
        description: 'KLA CORP'
      },
      {
        ticker: 'K1MX34',
        category: 'BDR',
        isin: 'BRK1MXBDR008',
        description: 'CARMAX INC'
      },
      {
        ticker: 'K1RC34',
        category: 'BDR',
        isin: 'BRK1RCBDR001',
        description: 'KROGER CO'
      },
      {
        ticker: 'K1SG34',
        category: 'BDR',
        isin: 'BRK1SGBDR000',
        description: 'KEYSIGHT TECHNOLOGIES INC'
      },
      {
        ticker: 'K1SS34',
        category: 'BDR',
        isin: 'BRK1SSBDR005',
        description: 'KOHLS CORP'
      },
      {
        ticker: 'KALS5',
        category: 'SHARES',
        isin: 'BRKALSACNPA6',
        description: 'KA 2 LAUNDRY SERVICES S.A.'
      },
      {
        ticker: 'KEPL3',
        category: 'SHARES',
        isin: 'BRKEPLACNOR1',
        description: 'KEPLER WEBER S.A.'
      },
      {
        ticker: 'KFOF11',
        category: 'FUNDS',
        isin: 'BRKFOFCTF006',
        description: 'FUNDO DE FDO INV IMOB KINEA FII'
      },
      {
        ticker: 'KHCB34',
        category: 'BDR',
        isin: 'BRKHCBBDR007',
        description: 'THE KRAFT HEINZ COMPANY'
      },
      {
        ticker: 'KINP11',
        category: 'FUNDS',
        isin: 'BRKINPCTF001',
        description: 'EVEN PERMUTA KINEA FII - FDO INV IMOB'
      },
      {
        ticker: 'KLBN11',
        category: 'UNIT',
        isin: 'BRKLBNCDAM18',
        description: 'KLABIN S.A.'
      },
      {
        ticker: 'KLBN11F',
        category: 'UNIT',
        isin: 'BRKLBNCDAM18',
        description: 'KLABIN S.A.'
      },
      {
        ticker: 'KLBN3',
        category: 'SHARES',
        isin: 'BRKLBNACNOR2',
        description: 'KLABIN S.A.'
      },
      {
        ticker: 'KLBN4',
        category: 'SHARES',
        isin: 'BRKLBNACNPR9',
        description: 'KLABIN S.A.'
      },
      {
        ticker: 'KMBB34',
        category: 'BDR',
        isin: 'BRKMBBBDR009',
        description: 'KIMBERLY-CLARK CORP'
      },
      {
        ticker: 'KMIC34',
        category: 'BDR',
        isin: 'BRKMICBDR002',
        description: 'KINDER MORGAN INC'
      },
      {
        ticker: 'KMPR34',
        category: 'BDR',
        isin: 'BRKMPRBDR005',
        description: 'KEMPER CORP'
      },
      {
        ticker: 'KNCR11',
        category: 'FUNDS',
        isin: 'BRKNCRCTF000',
        description: 'KINEA RENDIMENTOS IMOBILIÁRIOS FDO INV IMOB - FII'
      },
      {
        ticker: 'KNFF11',
        category: 'FUNDS',
        isin: 'BRKNFFCTF008',
        description: 'KINEA REAL ESTATE FUNDS FDO INV IMOB - FII'
      },
      {
        ticker: 'KNHY11',
        category: 'FUNDS',
        isin: 'BRKNHYCTF005',
        description: 'KINEA HIGH YIELD CRI FDO INV IMOB - FII'
      },
      {
        ticker: 'KNIP11',
        category: 'FUNDS',
        isin: 'BRKNIPCTF001',
        description: 'KINEA ÍNDICES DE PREÇOS FDO INV IMOB - FII'
      },
      {
        ticker: 'KNRE11',
        category: 'FUNDS',
        isin: 'BRKNRECTF006',
        description: 'KINEA II REAL ESTATE EQUITY FDO INV IMOB'
      },
      {
        ticker: 'KNRI11',
        category: 'FUNDS',
        isin: 'BRKNRICTF007',
        description: 'KINEA RENDA IMOBILIÁRIA FDO INV IMOB - FII'
      },
      {
        ticker: 'L1BT34',
        category: 'BDR',
        isin: 'BRL1BTBDR016',
        description: 'LIBERTY GLOBAL PLC'
      },
      {
        ticker: 'L1CA34',
        category: 'BDR',
        isin: 'BRL1CABDR006',
        description: 'LABORATORY CORP OF AMERICA HOLDINGS'
      },
      {
        ticker: 'L1EG34',
        category: 'BDR',
        isin: 'BRL1EGBDR009',
        description: 'LEGGETT  PLATT INC'
      },
      {
        ticker: 'L1EN34',
        category: 'BDR',
        isin: 'BRL1ENBDR005',
        description: 'LENNAR CORP'
      },
      {
        ticker: 'L1HX34',
        category: 'BDR',
        isin: 'BRL1HXBDR007',
        description: 'L3HARRIS TECHNOLOGIES INC'
      },
      {
        ticker: 'L1IN34',
        category: 'BDR',
        isin: 'BRL1INBDR006',
        description: 'LINDE PLC'
      },
      {
        ticker: 'L1KQ34',
        category: 'BDR',
        isin: 'BRL1KQBDR005',
        description: 'LKQ CORP'
      },
      {
        ticker: 'L1NC34',
        category: 'BDR',
        isin: 'BRL1NCBDR009',
        description: 'LINCOLN NATIONAL CORP'
      },
      {
        ticker: 'L1OE34',
        category: 'BDR',
        isin: 'BRL1OEBDR003',
        description: 'LOEWS CORP'
      },
      {
        ticker: 'L1RC34',
        category: 'BDR',
        isin: 'BRL1RCBDR000',
        description: 'LAM RESEARCH CORP'
      },
      {
        ticker: 'L1UL34',
        category: 'BDR',
        isin: 'BRL1ULBDR005',
        description: 'LULULEMON ATHLETICA INC'
      },
      {
        ticker: 'L1WH34',
        category: 'BDR',
        isin: 'BRL1WHBDR009',
        description: 'LAMB WESTON HOLDINGS INC'
      },
      {
        ticker: 'L1YB34',
        category: 'BDR',
        isin: 'BRL1YBBDR008',
        description: 'LyondellBasell Industries NV'
      },
      {
        ticker: 'LAME3',
        category: 'SHARES',
        isin: 'BRLAMEACNOR9',
        description: 'LOJAS AMERICANAS S.A.'
      },
      {
        ticker: 'LAME4',
        category: 'SHARES',
        isin: 'BRLAMEACNPR6',
        description: 'LOJAS AMERICANAS S.A.'
      },
      {
        ticker: 'LASC11',
        category: 'FUNDS',
        isin: 'BRLASCCTF003',
        description: 'LEGATUS SHOPPINGS FDO. INV. IMOB. - FII'
      },
      {
        ticker: 'LATR11B',
        category: 'FUNDS',
        isin: 'BRLATRCTF009',
        description: 'LATERES FDO INV IMOB - FII'
      },
      {
        ticker: 'LAUP11',
        category: 'FUNDS',
        isin: 'BRLAUPCTF019',
        description: 'LAUPER FILMS LTDA.'
      },
      {
        ticker: 'LBRD34',
        category: 'BDR',
        isin: 'BRLBRDBDR002',
        description: 'LIBERTY BROADBAND CORP'
      },
      {
        ticker: 'LBRN34',
        category: 'BDR',
        isin: 'BRLBRNBDR001',
        description: 'L BRANDS, INC.'
      },
      {
        ticker: 'LCAM3',
        category: 'SHARES',
        isin: 'BRLCAMACNOR3',
        description: 'CIA LOCAÇÃO DAS AMÉRICAS'
      },
      {
        ticker: 'LCII11',
        category: 'FUNDS',
        isin: 'BRLCIICTF007',
        description: 'LCI PREMIUM II FDO INV IMOB - FII'
      },
      {
        ticker: 'LEVE3',
        category: 'SHARES',
        isin: 'BRLEVEACNOR2',
        description: 'MAHLE-METAL LEVE S.A.'
      },
      {
        ticker: 'LGCP11',
        category: 'FUNDS',
        isin: 'BRLGCPCTF006',
        description: 'LOGCP INTER FDO INV IMOB'
      },
      {
        ticker: 'LIGT3',
        category: 'SHARES',
        isin: 'BRLIGTACNOR2',
        description: 'LIGHT S.A.'
      },
      {
        ticker: 'LILY34',
        category: 'BDR',
        isin: 'BRLILYBDR006',
        description: 'ELI LILLY AND COMPANY'
      },
      {
        ticker: 'LINX3',
        category: 'SHARES',
        isin: 'BRLINXACNOR0',
        description: 'LINX S.A.'
      },
      {
        ticker: 'LIPR3',
        category: 'SHARES',
        isin: 'BRLIPRACNOR7',
        description: 'ELETROBRÁS PARTICIPAÇÕES S.A. - ELETROPAR'
      },
      {
        ticker: 'LLIS3',
        category: 'SHARES',
        isin: 'BRLLISACNOR4',
        description: 'RESTOQUE COMÉRCIO E CONFECÇÕES DE ROUPAS S.A.'
      },
      {
        ticker: 'LMED3',
        category: 'SHARES',
        isin: 'BRLMEDACNOR3',
        description: 'LIFEMED INDUSTRIAL EQUIP. DE ART. MÉD. HOSP. S.A.'
      },
      {
        ticker: 'LMTB34',
        category: 'BDR',
        isin: 'BRLMTBBDR009',
        description: 'LOCKHEED MARTIN CORPORATION'
      },
      {
        ticker: 'LOFT11B',
        category: 'FUNDS',
        isin: 'BRLOFTCTF005',
        description: 'LOFT I - FDO INV IMOB'
      },
      {
        ticker: 'LOFT12B',
        category: 'FUNDS',
        isin: 'BRLOFTCTF013',
        description: 'LOFT I - FDO INV IMOB'
      },
      {
        ticker: 'LOFT13B',
        category: 'FUNDS',
        isin: 'BRLOFTCTF021',
        description: 'LOFT I - FDO INV IMOB'
      },
      {
        ticker: 'LOGG3',
        category: 'SHARES',
        isin: 'BRLOGGACNOR7',
        description: 'LOG COMMERCIAL PROPERTIES'
      },
      {
        ticker: 'LOGN3',
        category: 'SHARES',
        isin: 'BRLOGNACNOR3',
        description: 'LOG-IN LOGISTICA INTERMODAL S.A.'
      },
      {
        ticker: 'LOGS3',
        category: 'SHARES',
        isin: 'BRLOGSACNOR2',
        description: 'LOGASA INDUSTRIA E COMERCIO S.A.'
      },
      {
        ticker: 'LOGS4',
        category: 'SHARES',
        isin: 'BRLOGSACNPR9',
        description: 'LOGASA INDUSTRIA E COMERCIO S.A.'
      },
      {
        ticker: 'LOWC34',
        category: 'BDR',
        isin: 'BRLOWCBDR007',
        description: 'LOWES COMPANIES INC'
      },
      {
        ticker: 'LPSB3',
        category: 'SHARES',
        isin: 'BRLPSBACNOR0',
        description: 'LPS BRASIL - CONSULTORIA DE IMOVEIS S.A.'
      },
      {
        ticker: 'LREN3',
        category: 'SHARES',
        isin: 'BRLRENACNOR1',
        description: 'LOJAS RENNER S.A.'
      },
      {
        ticker: 'LSXM34',
        category: 'BDR',
        isin: 'BRLSXMBDR005',
        description: 'LIBERTY MEDIA CORP'
      },
      {
        ticker: 'LTEL3B',
        category: 'SHARES',
        isin: 'BRLTELACNOR1',
        description: 'LITEL PARTICIPACOES S.A.'
      },
      {
        ticker: 'LTLA3B',
        category: 'SHARES',
        isin: 'BRLTLAACNOR9',
        description: 'LITELA PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'LUGG11',
        category: 'FUNDS',
        isin: 'BRLUGGCTF007',
        description: 'LUGGO FDO. INV. IMOB.'
      },
      {
        ticker: 'LUPA3',
        category: 'SHARES',
        isin: 'BRLUPAACNOR8',
        description: 'LUPATECH S.A.'
      },
      {
        ticker: 'LUXM3',
        category: 'SHARES',
        isin: 'BRLUXMACNOR7',
        description: 'TREVISA INVESTIMENTOS S.A.'
      },
      {
        ticker: 'LUXM4',
        category: 'SHARES',
        isin: 'BRLUXMACNPR4',
        description: 'TREVISA INVESTIMENTOS S.A.'
      },
      {
        ticker: 'LVBI11',
        category: 'FUNDS',
        isin: 'BRLVBICTF002',
        description: 'FDO INV IMOB - VBI LOGÍSTICO'
      },
      {
        ticker: 'LWSA3',
        category: 'SHARES',
        isin: 'BRLWSAACNOR8',
        description: 'LOCAWEB SERVIÇOS DE INTERNET S.A.'
      },
      {
        ticker: 'M1AA34',
        category: 'BDR',
        isin: 'BRM1AABDR009',
        description: 'MID-AMERICA APARTMENT COMMUNITIES INC'
      },
      {
        ticker: 'M1AS34',
        category: 'BDR',
        isin: 'BRM1ASBDR001',
        description: 'MASCO CORP'
      },
      {
        ticker: 'M1CB34',
        category: 'BDR',
        isin: 'BRM1CBBDR003',
        description: 'MOLSON COORS BREWING CO'
      },
      {
        ticker: 'M1CH34',
        category: 'BDR',
        isin: 'BRM1CHBDR000',
        description: 'MICROCHIP TECHNOLOGY INC'
      },
      {
        ticker: 'M1CK34',
        category: 'BDR',
        isin: 'BRM1CKBDR004',
        description: 'MCKESSON CORP'
      },
      {
        ticker: 'M1GM34',
        category: 'BDR',
        isin: 'BRM1GMBDR019',
        description: 'MGM RESORTS INTERNATIONAL'
      },
      {
        ticker: 'M1HK34',
        category: 'BDR',
        isin: 'BRM1HKBDR003',
        description: 'MOHAWK INDUSTRIES INC'
      },
      {
        ticker: 'M1KC34',
        category: 'BDR',
        isin: 'BRM1KCBDR004',
        description: 'MCCORMICK & CO INC'
      },
      {
        ticker: 'M1LM34',
        category: 'BDR',
        isin: 'BRM1LMBDR001',
        description: 'MARTIN MARIETTA MATERIALS INC'
      },
      {
        ticker: 'M1MC34',
        category: 'BDR',
        isin: 'BRM1MCBDR000',
        description: 'Marsh & McLennan Cos Inc'
      },
      {
        ticker: 'M1NS34',
        category: 'BDR',
        isin: 'BRM1NSBDR004',
        description: 'Monster Beverage Corp'
      },
      {
        ticker: 'M1PC34',
        category: 'BDR',
        isin: 'BRM1PCBDR003',
        description: 'MARATHON PETROLEUM CORP'
      },
      {
        ticker: 'M1RO34',
        category: 'BDR',
        isin: 'BRM1ROBDR004',
        description: 'MARATHON OIL CORP'
      },
      {
        ticker: 'M1SC34',
        category: 'BDR',
        isin: 'BRM1SCBDR007',
        description: 'MSCI INC'
      },
      {
        ticker: 'M1SI34',
        category: 'BDR',
        isin: 'BRM1SIBDR004',
        description: 'MOTOROLA SOLUTIONS INC'
      },
      {
        ticker: 'M1TB34',
        category: 'BDR',
        isin: 'BRM1TBBDR007',
        description: 'M&T BANK CORP'
      },
      {
        ticker: 'M1TD34',
        category: 'BDR',
        isin: 'BRM1TDBDR003',
        description: 'METTLER-TOLEDO INTERNATIONAL INC'
      },
      {
        ticker: 'M1TT34',
        category: 'BDR',
        isin: 'BRM1TTBDR009',
        description: 'MARRIOTT INTERNATIONAL INC'
      },
      {
        ticker: 'M1XI34',
        category: 'BDR',
        isin: 'BRM1XIBDR004',
        description: 'MAXIM INTEGRATED PRODUCTS INC'
      },
      {
        ticker: 'MACY34',
        category: 'BDR',
        isin: 'BRMACYBDR000',
        description: 'MACYS INC.'
      },
      {
        ticker: 'MALL11',
        category: 'FUNDS',
        isin: 'BRMALLCTF007',
        description: 'MALLS BRASIL PLURAL FDO INV IMOB'
      },
      {
        ticker: 'MAPT3',
        category: 'SHARES',
        isin: 'BRMAPTACNOR8',
        description: 'CEMEPE INVESTIMENTOS S.A.'
      },
      {
        ticker: 'MAPT4',
        category: 'SHARES',
        isin: 'BRMAPTACNPR5',
        description: 'CEMEPE INVESTIMENTOS S.A.'
      },
      {
        ticker: 'MAQN3',
        category: 'SHARES',
        isin: 'BRMAQNACNOR9',
        description: 'MAQUINA DE VENDAS BRASIL PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'MAQN4',
        category: 'SHARES',
        isin: 'BRMAQNACNPR6',
        description: 'MAQUINA DE VENDAS BRASIL PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'MAXR11',
        category: 'FUNDS',
        isin: 'BRMAXRCTF009',
        description: 'FDO INV IMOB - FII MAX RETAIL'
      },
      {
        ticker: 'MBBI11',
        category: 'FUNDS',
        isin: 'BRMBBICTF002',
        description: 'MB BI FDO INV IMOB'
      },
      {
        ticker: 'MBRF11',
        category: 'FUNDS',
        isin: 'BRMBRFCTF004',
        description: 'FDO INV IMOB MERCANTIL DO BRASIL - FII'
      },
      {
        ticker: 'MCCI11',
        category: 'FUNDS',
        isin: 'BRMCCICTF008',
        description: 'FDO INV. MAUA CAPITAL RECEBIVEIS IMOB. - FII'
      },
      {
        ticker: 'MCDC34',
        category: 'BDR',
        isin: 'BRMCDCBDR000',
        description: 'MCDONALDS CORP.'
      },
      {
        ticker: 'MCOR34',
        category: 'BDR',
        isin: 'BRMCORBDR005',
        description: 'MOODYS CORP'
      },
      {
        ticker: 'MCRJ11B',
        category: 'SHARES',
        isin: 'BRMCRJCPA003',
        description: 'MUNICÍPIO DO RIO DE JANEIRO'
      },
      {
        ticker: 'MDIA3',
        category: 'SHARES',
        isin: 'BRMDIAACNOR7',
        description: 'M.DIAS BRANCO S.A. IND COM DE ALIMENTOS'
      },
      {
        ticker: 'MDIN3',
        category: 'SHARES',
        isin: 'BRMDINACNOR0',
        description: 'MUNDIAL INC'
      },
      {
        ticker: 'MDLZ34',
        category: 'BDR',
        isin: 'BRMDLZBDR002',
        description: 'MONDELEZ INTERNATIONAL, INC'
      },
      {
        ticker: 'MDNE3',
        category: 'SHARES',
        isin: 'BRMDNEACNOR9',
        description: 'MOURA DUBEUX ENGENHARIA S/A'
      },
      {
        ticker: 'MDSI3',
        category: 'SHARES',
        isin: 'BRMDSIACNOR9',
        description: 'MUNDIAL ASIA HONG KONG'
      },
      {
        ticker: 'MDTC34',
        category: 'BDR',
        isin: 'BRMDTCBDR004',
        description: 'MEDTRONIC PUBLIC LIMITED COMPANY'
      },
      {
        ticker: 'MEAL3',
        category: 'SHARES',
        isin: 'BRMEALACNOR9',
        description: 'INTERNATIONAL MEAL COMPANY ALIMENTACAO S.A.'
      },
      {
        ticker: 'MELI34',
        category: 'BDR',
        isin: 'BRMELIBDR006',
        description: 'MERCADOLIBRE INC'
      },
      {
        ticker: 'MERC3',
        category: 'SHARES',
        isin: 'BRMERCACNOR2',
        description: 'MERCANTIL BRASIL FINANC S.A. C.F.I.'
      },
      {
        ticker: 'MERC4',
        category: 'SHARES',
        isin: 'BRMERCACNPR9',
        description: 'MERCANTIL BRASIL FINANC S.A. C.F.I.'
      },
      {
        ticker: 'METB34',
        category: 'BDR',
        isin: 'BRMETBBDR004',
        description: 'METLIFE INC'
      },
      {
        ticker: 'MFAI11',
        category: 'FUNDS',
        isin: 'BRMFAICTF005',
        description: 'MERITO FDO. AÇÕES IMOB. FII - FDO INV. IMOB.'
      },
      {
        ticker: 'MFII11',
        category: 'FUNDS',
        isin: 'BRMFIICTF008',
        description: 'MÉRITO DESENVOLVIMENTO IMOBILIÁRIO I FII - FII'
      },
      {
        ticker: 'MGEL3',
        category: 'SHARES',
        isin: 'BRMGELACNOR6',
        description: 'MANGELS INDUSTRIAL S.A.'
      },
      {
        ticker: 'MGEL4',
        category: 'SHARES',
        isin: 'BRMGELACNPR3',
        description: 'MANGELS INDUSTRIAL S.A.'
      },
      {
        ticker: 'MGFB3',
        category: 'SHARES',
        isin: 'BRMGFBACNOR4',
        description: 'M&G FIBRAS HOLDING S.A.'
      },
      {
        ticker: 'MGFF11',
        category: 'FUNDS',
        isin: 'BRMGFFCTF008',
        description: 'FDO INV IMOB MOGNO FUNDO DE FUNDOS'
      },
      {
        ticker: 'MGHT11',
        category: 'FUNDS',
        isin: 'BRMGHTCTF005',
        description: 'FDO. INV. IMOB. MOGNO HOTEIS'
      },
      {
        ticker: 'MGLU3',
        category: 'SHARES',
        isin: 'BRMGLUACNOR2',
        description: 'MAGAZINE LUIZA S.A.'
      },
      {
        ticker: 'MILS3',
        category: 'SHARES',
        isin: 'BRMILSACNOR2',
        description: 'MILLS ESTRUTURAS E SERVIÇOS DE ENGENHARIA S.A.'
      },
      {
        ticker: 'MINT11',
        category: 'FUNDS',
        isin: 'BRMINTCTF009',
        description: 'FUNDO DE INVESTIMENTO IMOBILIÁRIO MINT EDUCACIONAL'
      },
      {
        ticker: 'MKLC34',
        category: 'BDR',
        isin: 'BRMKLCBDR006',
        description: 'MARKEL CORP'
      },
      {
        ticker: 'MMAQ3',
        category: 'SHARES',
        isin: 'BRMMAQACNOR1',
        description: 'MINASMAQUINAS S.A.'
      },
      {
        ticker: 'MMAQ4',
        category: 'SHARES',
        isin: 'BRMMAQACNPR8',
        description: 'MINASMAQUINAS S.A.'
      },
      {
        ticker: 'MMBR3',
        category: 'SHARES',
        isin: 'BRMMBRACNOR7',
        description: 'MAGNETI MARELLI DO BRASIL IND.COM S.A.'
      },
      {
        ticker: 'MMBR4',
        category: 'SHARES',
        isin: 'BRMMBRACNPR4',
        description: 'MAGNETI MARELLI DO BRASIL IND.COM S.A.'
      },
      {
        ticker: 'MMCA3',
        category: 'SHARES',
        isin: 'BRMMCAACNOR1',
        description: 'MAGNETI MARELLI COFAP AUTOPECAS S.A.'
      },
      {
        ticker: 'MMCA4',
        category: 'SHARES',
        isin: 'BRMMCAACNPR8',
        description: 'MAGNETI MARELLI COFAP AUTOPECAS S.A.'
      },
      {
        ticker: 'MMCF3',
        category: 'SHARES',
        isin: 'BRMMCFACNOR0',
        description: 'MAGNETI MARELLI COFAP-CIA FABR PECAS S/A'
      },
      {
        ticker: 'MMCF4',
        category: 'SHARES',
        isin: 'BRMMCFACNPR7',
        description: 'MAGNETI MARELLI COFAP-CIA FABR PECAS S/A'
      },
      {
        ticker: 'MMMC34',
        category: 'BDR',
        isin: 'BRMMMCBDR000',
        description: '3M COMPANY'
      },
      {
        ticker: 'MMXM11',
        category: 'SHARES',
        isin: 'BRMMXMTRV000',
        description: 'MMX MINERACAO E METALICOS S.A.'
      },
      {
        ticker: 'MMXM3',
        category: 'SHARES',
        isin: 'BRMMXMACNOR2',
        description: 'MMX MINERACAO E METALICOS S.A.'
      },
      {
        ticker: 'MNBI3',
        category: 'SHARES',
        isin: 'BRMNBIACNOR4',
        description: 'MLOG S.A.'
      },
      {
        ticker: 'MNDL3',
        category: 'SHARES',
        isin: 'BRMNDLACNOR4',
        description: 'MUNDIAL S.A. - PRODUTOS DE CONSUMO'
      },
      {
        ticker: 'MNPR3',
        category: 'SHARES',
        isin: 'BRMNPRACNOR5',
        description: 'MINUPAR PARTICIPACOES S.A.'
      },
      {
        ticker: 'MNZC3B',
        category: 'SHARES',
        isin: 'BRMNZCACNOR6',
        description: 'TERMINAL GARAGEM MENEZES CORTES S.A.'
      },
      {
        ticker: 'MOAR3',
        category: 'SHARES',
        isin: 'BRMOARACNOR5',
        description: 'MONTEIRO ARANHA S.A.'
      },
      {
        ticker: 'MOFF11',
        category: 'FUNDS',
        isin: 'BRMOFFCTF002',
        description: 'MULTIOFFICES 2 - FDO. INV. IMOB.'
      },
      {
        ticker: 'MOOO34',
        category: 'BDR',
        isin: 'BRMOOOBDR007',
        description: 'ALTRIA GROUP, INC.'
      },
      {
        ticker: 'MORE11',
        category: 'FUNDS',
        isin: 'BRMORECTF000',
        description: 'MORE REAL ESTATE FOF FII FDO. INV. IMOB.'
      },
      {
        ticker: 'MOSC34',
        category: 'BDR',
        isin: 'BRMOSCBDR003',
        description: 'THE MOSAIC COMPANY'
      },
      {
        ticker: 'MOVI3',
        category: 'SHARES',
        isin: 'BRMOVIACNOR0',
        description: 'MOVIDA PARTICIPACOES SA'
      },
      {
        ticker: 'MPBH11',
        category: 'SHARES',
        isin: 'BRMPBHA01OR2',
        description: 'MARINA PORTO BUZIOS HOTEIS E TURISMO S.A'
      },
      {
        ticker: 'MRCK34',
        category: 'BDR',
        isin: 'BRMRCKBDR003',
        description: 'MERCK & CO., INC.'
      },
      {
        ticker: 'MRFG3',
        category: 'SHARES',
        isin: 'BRMRFGACNOR0',
        description: 'MARFRIG GLOBAL FOODS S.A.'
      },
      {
        ticker: 'MRSA3B',
        category: 'SHARES',
        isin: 'BRMRSAACNOR6',
        description: 'MRS LOGISTICA S.A.'
      },
      {
        ticker: 'MRSA5B',
        category: 'SHARES',
        isin: 'BRMRSAACNPA9',
        description: 'MRS LOGISTICA S.A.'
      },
      {
        ticker: 'MRSA6B',
        category: 'SHARES',
        isin: 'BRMRSAACNPB7',
        description: 'MRS LOGISTICA S.A.'
      },
      {
        ticker: 'MRVE3',
        category: 'SHARES',
        isin: 'BRMRVEACNOR2',
        description: 'MRV ENGENHARIA E PARTICIPACOES S.A.'
      },
      {
        ticker: 'MSBR34',
        category: 'BDR',
        isin: 'BRMSBRBDR008',
        description: 'MORGAN STANLEY'
      },
      {
        ticker: 'MSCD34',
        category: 'BDR',
        isin: 'BRMSCDBDR006',
        description: 'MASTERCARD INCORPORATED'
      },
      {
        ticker: 'MSFT34',
        category: 'BDR',
        isin: 'BRMSFTBDR005',
        description: 'MICROSOFT CORPORATION'
      },
      {
        ticker: 'MSPA3',
        category: 'SHARES',
        isin: 'BRMSPAACNOR0',
        description: 'CIA MELHORAMENTOS DE SAO PAULO'
      },
      {
        ticker: 'MSPA4',
        category: 'SHARES',
        isin: 'BRMSPAACNPR7',
        description: 'CIA MELHORAMENTOS DE SAO PAULO'
      },
      {
        ticker: 'MSRO3',
        category: 'SHARES',
        isin: 'BRMSROACNOR7',
        description: 'MAESTRO LOCADORA DE VEICULOS S.A.'
      },
      {
        ticker: 'MTAL3',
        category: 'SHARES',
        isin: 'BRMTALACNOR7',
        description: 'CIMETAL SIDERURGIA S/A'
      },
      {
        ticker: 'MTAL6',
        category: 'SHARES',
        isin: 'BRMTALACNPB8',
        description: 'CIMETAL SIDERURGIA S/A'
      },
      {
        ticker: 'MTIG3',
        category: 'SHARES',
        isin: 'BRMTIGACNOR0',
        description: 'METALGRAFICA IGUACU S.A.'
      },
      {
        ticker: 'MTIG4',
        category: 'SHARES',
        isin: 'BRMTIGACNPR7',
        description: 'METALGRAFICA IGUACU S.A.'
      },
      {
        ticker: 'MTNR5',
        category: 'SHARES',
        isin: 'BRMTNRACNPA0',
        description: 'METANOR - METANOL DO NORDESTE S.A.'
      },
      {
        ticker: 'MTNR7',
        category: 'SHARES',
        isin: 'BRMTNRACNPC6',
        description: 'METANOR - METANOL DO NORDESTE S.A.'
      },
      {
        ticker: 'MTOF11',
        category: 'FUNDS',
        isin: 'BRMTOFCTF003',
        description: 'MULTIOFFICES 1 - FDO. INV. IMOB'
      },
      {
        ticker: 'MTRE3',
        category: 'SHARES',
        isin: 'BRMTREACNOR6',
        description: 'MITRE REALTY EMPREENDIMENTOS E PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'MTRS11',
        category: 'FUNDS',
        isin: 'BRMTRSCTF009',
        description: 'FDO INV IMOB - BTG PACTUAL METROPOLIS'
      },
      {
        ticker: 'MTSA3',
        category: 'SHARES',
        isin: 'BRMTSAACNOR2',
        description: 'METISA METALURGICA TIMBOENSE S.A.'
      },
      {
        ticker: 'MTSA4',
        category: 'SHARES',
        isin: 'BRMTSAACNPR9',
        description: 'METISA METALURGICA TIMBOENSE S.A.'
      },
      {
        ticker: 'MULT3',
        category: 'SHARES',
        isin: 'BRMULTACNOR5',
        description: 'MULTIPLAN - EMPREEND IMOBILIARIOS S.A.'
      },
      {
        ticker: 'MUTC34',
        category: 'BDR',
        isin: 'BRMUTCBDR008',
        description: 'MICRON TECHNOLOGY INC'
      },
      {
        ticker: 'MVFI11',
        category: 'FUNDS',
        isin: 'BRMVFICTF001',
        description: 'FDO INV IMOB MV9 - FII'
      },
      {
        ticker: 'MWET3',
        category: 'SHARES',
        isin: 'BRMWETACNOR6',
        description: 'WETZEL S.A.'
      },
      {
        ticker: 'MWET4',
        category: 'SHARES',
        isin: 'BRMWETACNPR3',
        description: 'WETZEL S.A.'
      },
      {
        ticker: 'MWIS6',
        category: 'SHARES',
        isin: 'BRMWISACNPB0',
        description: 'MWI - SISTEMA DE COMUNICACAO S.A.'
      },
      {
        ticker: 'MXRF11',
        category: 'FUNDS',
        isin: 'BRMXRFCTF008',
        description: 'MAXI RENDA FDO INV IMOB - FII'
      },
      {
        ticker: 'MYPK3',
        category: 'SHARES',
        isin: 'BRMYPKACNOR7',
        description: 'IOCHPE MAXION S.A.'
      },
      {
        ticker: 'N1BL34',
        category: 'BDR',
        isin: 'BRN1BLBDR003',
        description: 'NOBLE ENERGY INC'
      },
      {
        ticker: 'N1CL34',
        category: 'BDR',
        isin: 'BRN1CLBDR001',
        description: 'NORWEGIAN CRUISE LINE HOLDINGS LTD'
      },
      {
        ticker: 'N1DA34',
        category: 'BDR',
        isin: 'BRN1DABDR002',
        description: 'NASDAQ INC'
      },
      {
        ticker: 'N1EM34',
        category: 'BDR',
        isin: 'BRN1EMBDR005',
        description: 'NEWMONT GOLDCORP CORP'
      },
      {
        ticker: 'N1IS34',
        category: 'BDR',
        isin: 'BRN1ISBDR003',
        description: 'NISOURCE INC'
      },
      {
        ticker: 'N1LS34',
        category: 'BDR',
        isin: 'BRN1LSBDR007',
        description: 'NIELSEN HOLDINGS PLC'
      },
      {
        ticker: 'N1OV34',
        category: 'BDR',
        isin: 'BRN1OVBDR005',
        description: 'National Oilwell Varco Inc'
      },
      {
        ticker: 'N1RG34',
        category: 'BDR',
        isin: 'BRN1RGBDR009',
        description: 'NRG ENERGY INC'
      },
      {
        ticker: 'N1SC34',
        category: 'BDR',
        isin: 'BRN1SCBDR006',
        description: 'Norfolk Southern Corp'
      },
      {
        ticker: 'N1TA34',
        category: 'BDR',
        isin: 'BRN1TABDR008',
        description: 'NETAPP INC'
      },
      {
        ticker: 'N1TR34',
        category: 'BDR',
        isin: 'BRN1TRBDR002',
        description: 'NORTHERN TRUST CORP'
      },
      {
        ticker: 'N1UE34',
        category: 'BDR',
        isin: 'BRN1UEBDR008',
        description: 'Nucor Corp'
      },
      {
        ticker: 'N1VR34',
        category: 'BDR',
        isin: 'BRN1VRBDR008',
        description: 'NVR INC'
      },
      {
        ticker: 'N1WL34',
        category: 'BDR',
        isin: 'BRN1WLBDR009',
        description: 'NEWELL BRANDS INC'
      },
      {
        ticker: 'N1WS34',
        category: 'BDR',
        isin: 'BRN1WSBDR004',
        description: 'NEWS CORP'
      },
      {
        ticker: 'N1XP34',
        category: 'BDR',
        isin: 'BRN1XPBDR008',
        description: 'NXP SEMICONDUCTORS NV'
      },
      {
        ticker: 'NAII3',
        category: 'SHARES',
        isin: 'BRNAIIACNOR4',
        description: 'NAI HOLDINGS S.A.'
      },
      {
        ticker: 'NAII4',
        category: 'SHARES',
        isin: 'BRNAIIACNPR1',
        description: 'NAI HOLDINGS S.A.'
      },
      {
        ticker: 'NCHB11',
        category: 'FUNDS',
        isin: 'BRNCHBCTF000',
        description: 'FDO INV IMOB - FII NCH BRASIL RECEBÍVEIS IMOB'
      },
      {
        ticker: 'NELO11',
        category: 'FUNDS',
        isin: 'BRNELOCTF001',
        description: 'NE LOGISTIC FDO INV IMOB'
      },
      {
        ticker: 'NEMO3',
        category: 'SHARES',
        isin: 'BRNEMOACNOR6',
        description: 'SUZANO HOLDING S.A.'
      },
      {
        ticker: 'NEMO5',
        category: 'SHARES',
        isin: 'BRNEMOACNPA9',
        description: 'SUZANO HOLDING S.A.'
      },
      {
        ticker: 'NEMO6',
        category: 'SHARES',
        isin: 'BRNEMOACNPB7',
        description: 'SUZANO HOLDING S.A.'
      },
      {
        ticker: 'NEOE3',
        category: 'SHARES',
        isin: 'BRNEOEACNOR3',
        description: 'NEOENERGIA S.A.'
      },
      {
        ticker: 'NESB3',
        category: 'SHARES',
        isin: 'BRNESBACNOR0',
        description: 'NESBER S.A.'
      },
      {
        ticker: 'NETE34',
        category: 'BDR',
        isin: 'BRNETEBDR006',
        description: 'NETEASE INC'
      },
      {
        ticker: 'NEWL11',
        category: 'FUNDS',
        isin: 'BRNEWLCTF004',
        description: 'NEWPORT LOGÍSTICA FDO INV. IMOB.'
      },
      {
        ticker: 'NEWU11',
        category: 'FUNDS',
        isin: 'BRNEWUCTF005',
        description: 'NEWPORT RENDA URBANA FDO INV IMOB'
      },
      {
        ticker: 'NEXT34',
        category: 'BDR',
        isin: 'BRNEXTBDR006',
        description: 'NEXTERA ENERGY INC'
      },
      {
        ticker: 'NFLX34',
        category: 'BDR',
        isin: 'BRNFLXBDR000',
        description: 'NETFLIX, INC.'
      },
      {
        ticker: 'NIKE34',
        category: 'BDR',
        isin: 'BRNIKEBDR006',
        description: 'NIKE INC'
      },
      {
        ticker: 'NIPL3',
        category: 'SHARES',
        isin: 'BRNIPLACNOR6',
        description: 'NIPLAN ENGENHARIA S.A.'
      },
      {
        ticker: 'NMRH34',
        category: 'BDR',
        isin: 'BRNMRHBDR006',
        description: 'NOMURA HOLDINGS INC'
      },
      {
        ticker: 'NOCG34',
        category: 'BDR',
        isin: 'BRNOCGBDR006',
        description: 'NORTHROP GRUMMAN CORP'
      },
      {
        ticker: 'NODA3',
        category: 'SHARES',
        isin: 'BRNODAACNOR3',
        description: 'NOVADATA SISTEMAS E COMPUTADORES S/A'
      },
      {
        ticker: 'NODA6',
        category: 'SHARES',
        isin: 'BRNODAACNPB4',
        description: 'NOVADATA SISTEMAS E COMPUTADORES S/A'
      },
      {
        ticker: 'NOKI34',
        category: 'BDR',
        isin: 'BRNOKIBDR005',
        description: 'NOKIA CORPORATION'
      },
      {
        ticker: 'NORD3',
        category: 'SHARES',
        isin: 'BRNORDACNOR7',
        description: 'NORDON INDUSTRIAS METALURGICAS S.A.'
      },
      {
        ticker: 'NPAR11',
        category: 'FUNDS',
        isin: 'BRNPARCTF003',
        description: 'FDO INV IMOB NESTPAR - FII'
      },
      {
        ticker: 'NRTQ3',
        category: 'SHARES',
        isin: 'BRNRTQACNOR8',
        description: 'NORTEC QUÍMICA S.A.'
      },
      {
        ticker: 'NSLU11',
        category: 'FUNDS',
        isin: 'BRNSLUCTF008',
        description: 'FDO INV IMOB - FII HOSPITAL NOSSA SRA DE LOURDES'
      },
      {
        ticker: 'NTCO3',
        category: 'SHARES',
        isin: 'BRNTCOACNOR5',
        description: 'NATURA &CO HOLDING S.A.'
      },
      {
        ticker: 'NUTR3',
        category: 'SHARES',
        isin: 'BRNUTRACNOR0',
        description: 'NUTRIPLANT INDUSTRIA E COMERCIO S.A.'
      },
      {
        ticker: 'NVDC34',
        category: 'BDR',
        isin: 'BRNVDCBDR008',
        description: 'NVIDIA CORP'
      },
      {
        ticker: 'NVHO11',
        category: 'FUNDS',
        isin: 'BRNVHOCTF003',
        description: 'FDO INV IMOB - FII NOVO HORIZONTE'
      },
      {
        ticker: 'NVIF11B',
        category: 'FUNDS',
        isin: 'BRNVIFCTF009',
        description: 'NOVA I - FDO INV IMOB - FII'
      },
      {
        ticker: 'NVRP11',
        category: 'FUNDS',
        isin: 'BRNVRPCTF009',
        description: 'FDO INV PART NOVA RAPOSO - MULTIESTRATEGIA'
      },
      {
        ticker: 'NXVL3',
        category: 'SHARES',
        isin: 'BRNXVLACNOR3',
        description: 'NOXVILLE INVESTIMENTOS S.A.'
      },
      {
        ticker: 'NXVL4',
        category: 'SHARES',
        isin: 'BRNXVLACNPR0',
        description: 'NOXVILLE INVESTIMENTOS S.A.'
      },
      {
        ticker: 'O1KE34',
        category: 'BDR',
        isin: 'BRO1KEBDR008',
        description: 'ONEOK Inc'
      },
      {
        ticker: 'O1MC34',
        category: 'BDR',
        isin: 'BRO1MCBDR008',
        description: 'OMNICOM GROUP INC'
      },
      {
        ticker: 'ODER3',
        category: 'SHARES',
        isin: 'BRODERACNOR6',
        description: 'CONSERVAS ODERICH S.A.'
      },
      {
        ticker: 'ODER4',
        category: 'SHARES',
        isin: 'BRODERACNPR3',
        description: 'CONSERVAS ODERICH S.A.'
      },
      {
        ticker: 'ODPV3',
        category: 'SHARES',
        isin: 'BRODPVACNOR4',
        description: 'ODONTOPREV S.A.'
      },
      {
        ticker: 'OFSA3',
        category: 'SHARES',
        isin: 'BROFSAACNOR7',
        description: 'OURO FINO SAUDE ANIMAL PARTICIPACOES S.A.'
      },
      {
        ticker: 'OIBR3',
        category: 'SHARES',
        isin: 'BROIBRACNOR1',
        description: 'OI S.A.'
      },
      {
        ticker: 'OIBR4',
        category: 'SHARES',
        isin: 'BROIBRACNPR8',
        description: 'OI S.A.'
      },
      {
        ticker: 'OMGE3',
        category: 'SHARES',
        isin: 'BROMGEACNOR0',
        description: 'OMEGA GERAÇÃO S.A.'
      },
      {
        ticker: 'ONEF11',
        category: 'FUNDS',
        isin: 'BRONEFCTF003',
        description: 'FDO INV IMOB THE ONE'
      },
      {
        ticker: 'OPDL3B',
        category: 'SHARES',
        isin: 'BROPDLACNOR5',
        description: 'DALETH PARTICIPACOES S.A.'
      },
      {
        ticker: 'OPEQ11B',
        category: 'FUNDS',
        isin: 'BROPEQCTF013',
        description: 'INVESTIDORES INSTITUCIONAIS FDO INV PART MULTIESTR'
      },
      {
        ticker: 'OPGM3B',
        category: 'SHARES',
        isin: 'BROPGMACNOR6',
        description: 'GAMA PARTICIPACOES S.A.'
      },
      {
        ticker: 'OPHE3B',
        category: 'SHARES',
        isin: 'BROPHEACNOR1',
        description: 'OPPORTUNITY ENERGIA E PARTICIPACOES S.A.'
      },
      {
        ticker: 'OPHF11B',
        category: 'FUNDS',
        isin: 'BROPHFCTF001',
        description: 'OPPORTUNITY HOLDING FDO INV PART MULT INV NO EXT'
      },
      {
        ticker: 'OPSE3B',
        category: 'SHARES',
        isin: 'BROPSEACNOR8',
        description: 'SUDESTE S.A.'
      },
      {
        ticker: 'OPTS3B',
        category: 'SHARES',
        isin: 'BROPTSACNOR6',
        description: 'SUL 116 PARTICIPACOES S.A.'
      },
      {
        ticker: 'ORCL34',
        category: 'BDR',
        isin: 'BRORCLBDR007',
        description: 'ORACLE CORPORATION'
      },
      {
        ticker: 'ORLY34',
        category: 'BDR',
        isin: 'BRORLYBDR001',
        description: 'OREILLY AUTOMOTIVE INC'
      },
      {
        ticker: 'ORNA4B',
        category: 'SHARES',
        isin: 'BRORNAACNPR0',
        description: 'ORNATO S.A. INDL DE PISOS E AZULEJOS'
      },
      {
        ticker: 'ORPD11',
        category: 'FUNDS',
        isin: 'BRORPDCTF005',
        description: 'OURO VERDE DESENV IMOB I FDO INV IMOB - FII'
      },
      {
        ticker: 'OSXB3',
        category: 'SHARES',
        isin: 'BROSXBACNOR8',
        description: 'OSX BRASIL S.A.'
      },
      {
        ticker: 'OUCY11',
        category: 'FUNDS',
        isin: 'BROUCYCTF003',
        description: 'FUNDO INV IMOB - OURINVEST CYRELA - FII'
      },
      {
        ticker: 'OUFF11',
        category: 'FUNDS',
        isin: 'BROUFFCTF005',
        description: 'FDO INV IMOB - OURINVEST FUNDO DE FUNDOS'
      },
      {
        ticker: 'OUJP11',
        category: 'FUNDS',
        isin: 'BROUJPCTF006',
        description: 'OURINVEST JPP FDO INV IMOB - FII'
      },
      {
        ticker: 'OULG11',
        category: 'FUNDS',
        isin: 'BROULGCTF001',
        description: 'FDO INV IMOB OURINVEST LOGÍSTICA'
      },
      {
        ticker: 'OXYP34',
        category: 'BDR',
        isin: 'BROXYPBDR000',
        description: 'OCCIDENTAL PETROLEUM CORP'
      },
      {
        ticker: 'P1AC34',
        category: 'BDR',
        isin: 'BRP1ACBDR002',
        description: 'PACCAR INC'
      },
      {
        ticker: 'P1AY34',
        category: 'BDR',
        isin: 'BRP1AYBDR006',
        description: 'Paychex Inc'
      },
      {
        ticker: 'P1BC34',
        category: 'BDR',
        isin: 'BRP1BCBDR000',
        description: 'Peoples United Financial Inc'
      },
      {
        ticker: 'P1DT34',
        category: 'BDR',
        isin: 'BRP1DTBDR000',
        description: 'Prudential Financial Inc'
      },
      {
        ticker: 'P1EA34',
        category: 'BDR',
        isin: 'BRP1EABDR008',
        description: 'Healthpeak Properties Inc'
      },
      {
        ticker: 'P1EG34',
        category: 'BDR',
        isin: 'BRP1EGBDR005',
        description: 'Public Service Enterprise Group Inc'
      },
      {
        ticker: 'P1FG34',
        category: 'BDR',
        isin: 'BRP1FGBDR002',
        description: 'PRINCIPAL FINANCIAL GROUP INC'
      },
      {
        ticker: 'P1GR34',
        category: 'BDR',
        isin: 'BRP1GRBDR007',
        description: 'The Progressive Corp'
      },
      {
        ticker: 'P1HC34',
        category: 'BDR',
        isin: 'BRP1HCBDR007',
        description: 'PARKER-HANNIFIN CORP'
      },
      {
        ticker: 'P1HM34',
        category: 'BDR',
        isin: 'BRP1HMBDR006',
        description: 'PULTEGROUP INC'
      },
      {
        ticker: 'P1IO34',
        category: 'BDR',
        isin: 'BRP1IOBDR000',
        description: 'PIONEER NATURAL RESOURCES CO'
      },
      {
        ticker: 'P1KG34',
        category: 'BDR',
        isin: 'BRP1KGBDR002',
        description: 'PACKAGING CORP OF AMERICA'
      },
      {
        ticker: 'P1KI34',
        category: 'BDR',
        isin: 'BRP1KIBDR008',
        description: 'PERKINELMER INC'
      },
      {
        ticker: 'P1LD34',
        category: 'BDR',
        isin: 'BRP1LDBDR007',
        description: 'Prologis Inc'
      },
      {
        ticker: 'P1NR34',
        category: 'BDR',
        isin: 'BRP1NRBDR003',
        description: 'PENTAIR PLC'
      },
      {
        ticker: 'P1NW34',
        category: 'BDR',
        isin: 'BRP1NWBDR003',
        description: 'PINNACLE WEST CAPITAL CORP'
      },
      {
        ticker: 'P1PG34',
        category: 'BDR',
        isin: 'BRP1PGBDR001',
        description: 'PPG Industries Inc'
      },
      {
        ticker: 'P1PL34',
        category: 'BDR',
        isin: 'BRP1PLBDR001',
        description: 'PPL CORP'
      },
      {
        ticker: 'P1RG34',
        category: 'BDR',
        isin: 'BRP1RGBDR007',
        description: 'Perrigo Co PLC'
      },
      {
        ticker: 'P1SA34',
        category: 'BDR',
        isin: 'BRP1SABDR008',
        description: 'PUBLIC STORAGE'
      },
      {
        ticker: 'P1SX34',
        category: 'BDR',
        isin: 'BRP1SXBDR000',
        description: 'PHILLIPS 66'
      },
      {
        ticker: 'P1VH34',
        category: 'BDR',
        isin: 'BRP1VHBDR007',
        description: 'PVH CORP'
      },
      {
        ticker: 'PABY11',
        category: 'FUNDS',
        isin: 'BRPABYCTF012',
        description: 'FDO INV IMOB PANAMBY'
      },
      {
        ticker: 'PARD3',
        category: 'SHARES',
        isin: 'BRPARDACNOR1',
        description: 'INSTITUTO HERMES PARDINI S.A.'
      },
      {
        ticker: 'PATB11',
        category: 'FUNDS',
        isin: 'BRPATBCTF004',
        description: 'FDO INV IMOB - FII PATEO BANDEIRANTES'
      },
      {
        ticker: 'PATC11',
        category: 'FUNDS',
        isin: 'BRPATCCTF002',
        description: 'PÁTRIA EDIFÍCIOS CORPORATIVOS FDO INV IMOB - FII'
      },
      {
        ticker: 'PATI3',
        category: 'SHARES',
        isin: 'BRPATIACNOR6',
        description: 'PANATLANTICA S.A.'
      },
      {
        ticker: 'PATI4',
        category: 'SHARES',
        isin: 'BRPATIACNPR3',
        description: 'PANATLANTICA S.A.'
      },
      {
        ticker: 'PATL11',
        category: 'FUNDS',
        isin: 'BRPATLCTF003',
        description: 'PÁTRIA LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO'
      },
      {
        ticker: 'PBLV11',
        category: 'FUNDS',
        isin: 'BRPBLVCTF007',
        description: 'PROLOGIS BRAZIL LOGISTICS VENTURE FDO INV IMOB'
      },
      {
        ticker: 'PBYR11',
        category: 'FUNDS',
        isin: 'BRPBYRCTF008',
        description: 'FUND. INVEST. IMOB. FII PANAMBY RENDA MASTER'
      },
      {
        ticker: 'PCAR3',
        category: 'SHARES',
        isin: 'BRPCARACNOR3',
        description: 'CIA BRASILEIRA DE DISTRIBUICAO'
      },
      {
        ticker: 'PCFV4',
        category: 'SHARES',
        isin: 'BRPCFVACNPR1',
        description: 'POCOS DE FERVEDOURO S.A.'
      },
      {
        ticker: 'PDGR3',
        category: 'SHARES',
        isin: 'BRPDGRACNOR8',
        description: 'PDG REALTY S.A. EMPREEND E PARTICIPACOES'
      },
      {
        ticker: 'PEAB3',
        category: 'SHARES',
        isin: 'BRPEABACNOR3',
        description: 'CIA PARTICIPACOES ALIANCA DA BAHIA'
      },
      {
        ticker: 'PEAB4',
        category: 'SHARES',
        isin: 'BRPEABACNPR0',
        description: 'CIA PARTICIPACOES ALIANCA DA BAHIA'
      },
      {
        ticker: 'PEPB34',
        category: 'BDR',
        isin: 'BRPEPBBDR005',
        description: 'PEPSICO, INC.'
      },
      {
        ticker: 'PETR3',
        category: 'SHARES',
        isin: 'BRPETRACNOR9',
        description: 'PETROLEO BRASILEIRO S.A. PETROBRAS'
      },
      {
        ticker: 'PETR4',
        category: 'SHARES',
        isin: 'BRPETRACNPR6',
        description: 'PETROLEO BRASILEIRO S.A. PETROBRAS'
      },
      {
        ticker: 'PFIN11',
        category: 'FUNDS',
        isin: 'BRPFINCTF001',
        description: 'PERFIN APOLLO ENERGIA FIP EM INFRAESTRUTURA'
      },
      {
        ticker: 'PFIZ34',
        category: 'BDR',
        isin: 'BRPFIZBDR006',
        description: 'PFIZER INC.'
      },
      {
        ticker: 'PFRM3',
        category: 'SHARES',
        isin: 'BRPFRMACNOR1',
        description: 'PROFARMA DISTRIB PROD FARMACEUTICOS S.A.'
      },
      {
        ticker: 'PGCO34',
        category: 'BDR',
        isin: 'BRPGCOBDR001',
        description: 'PROCTER & GAMBLE COMPANY'
      },
      {
        ticker: 'PHGN34',
        category: 'BDR',
        isin: 'BRPHGNBDR002',
        description: 'KONINKLIJKE PHILIPS NV'
      },
      {
        ticker: 'PHMO34',
        category: 'BDR',
        isin: 'BRPHMOBDR008',
        description: 'PHILIP MORRIS INTERNATIONAL INC'
      },
      {
        ticker: 'PINE3',
        category: 'SHARES',
        isin: 'BRPINEACNOR1',
        description: 'BCO PINE S.A.'
      },
      {
        ticker: 'PINE4',
        category: 'SHARES',
        isin: 'BRPINEACNPR8',
        description: 'BCO PINE S.A.'
      },
      {
        ticker: 'PLAS3',
        category: 'SHARES',
        isin: 'BRPLASACNOR2',
        description: 'PLASCAR PARTICIPACOES INDUSTRIAIS S.A.'
      },
      {
        ticker: 'PLCR11',
        category: 'FUNDS',
        isin: 'BRPLCRCTF003',
        description: 'FDO INV. IMOB. PLURAL RECEBIVEIS'
      },
      {
        ticker: 'PLFS3',
        category: 'SHARES',
        isin: 'BRPLFSACNOR1',
        description: 'POLO FILMS INDUSTRIA E COMERCIO SA'
      },
      {
        ticker: 'PLRI11',
        category: 'FUNDS',
        isin: 'BRPLRICTF000',
        description: 'POLO FDO INV IMOB - FII RECEBÍVEIS IMOBILIÁRIOS I'
      },
      {
        ticker: 'PLSP3',
        category: 'SHARES',
        isin: 'BRPLSPACNOR0',
        description: 'PLASCORP PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'PMAM3',
        category: 'SHARES',
        isin: 'BRPMAMACNOR3',
        description: 'PARANAPANEMA S.A.'
      },
      {
        ticker: 'PMSP11B',
        category: 'SHARES',
        isin: 'BRPMSPCPA000',
        description: 'PREFEITURA MUNICIPAL DE SAO PAULO'
      },
      {
        ticker: 'PMSP12B',
        category: 'SHARES',
        isin: 'BRPMSPCPA018',
        description: 'PREFEITURA MUNICIPAL DE SAO PAULO'
      },
      {
        ticker: 'PMSP13B',
        category: 'SHARES',
        isin: 'BRPMSPCPA026',
        description: 'PREFEITURA MUNICIPAL DE SAO PAULO'
      },
      {
        ticker: 'PNCS34',
        category: 'BDR',
        isin: 'BRPNCSBDR008',
        description: 'PNC FINANCIAL SERVICES GROUP INC'
      },
      {
        ticker: 'PNVL3',
        category: 'SHARES',
        isin: 'BRPNVLACNOR9',
        description: 'DIMED S.A. DISTRIBUIDORA DE MEDICAMENTOS'
      },
      {
        ticker: 'PNVL4',
        category: 'SHARES',
        isin: 'BRPNVLACNPR6',
        description: 'DIMED S.A. DISTRIBUIDORA DE MEDICAMENTOS'
      },
      {
        ticker: 'POMO3',
        category: 'SHARES',
        isin: 'BRPOMOACNOR0',
        description: 'MARCOPOLO S.A.'
      },
      {
        ticker: 'POMO4',
        category: 'SHARES',
        isin: 'BRPOMOACNPR7',
        description: 'MARCOPOLO S.A.'
      },
      {
        ticker: 'PORD11',
        category: 'FUNDS',
        isin: 'BRPORDCTF005',
        description: 'POLO FDO INV IMOB - RECEBÍVEIS IMOB II - FII'
      },
      {
        ticker: 'POSI3',
        category: 'SHARES',
        isin: 'BRPOSIACNOR9',
        description: 'POSITIVO TECNOLOGIA S.A.'
      },
      {
        ticker: 'PPAR3',
        category: 'SHARES',
        isin: 'BRPPARACNOR5',
        description: 'POLPAR S.A.'
      },
      {
        ticker: 'PPLA11',
        category: 'UNIT',
        isin: 'BRPPLAUNT007',
        description: 'PPLA PARTICIPATIONS LTD.'
      },
      {
        ticker: 'PPLA11F',
        category: 'UNIT',
        isin: 'BRPPLAUNT007',
        description: 'PPLA PARTICIPATIONS LTD.'
      },
      {
        ticker: 'PPLA35',
        category: 'BDR',
        isin: 'BRPPLABDR010',
        description: 'PPLA PARTICIPATIONS LTD.'
      },
      {
        ticker: 'PPLA36',
        category: 'BDR',
        isin: 'BRPPLABDR002',
        description: 'PPLA PARTICIPATIONS LTD.'
      },
      {
        ticker: 'PQDP11',
        category: 'FUNDS',
        isin: 'BRPQDPCTF004',
        description: 'FDO INV IMOB - FII PARQUE D. PEDRO SHOPPING CENTER'
      },
      {
        ticker: 'PRIO3',
        category: 'SHARES',
        isin: 'BRPRIOACNOR1',
        description: 'PETRO RIO S.A.'
      },
      {
        ticker: 'PRMN3B',
        category: 'SHARES',
        isin: 'BRPRMNACNOR5',
        description: 'PRODUTORES ENERGET.DE MANSO S.A.- PROMAN'
      },
      {
        ticker: 'PRNR3',
        category: 'SHARES',
        isin: 'BRPRNRACNOR4',
        description: 'PRINER SERVIÇOS INDUSTRIAIS S.A.'
      },
      {
        ticker: 'PRPT3B',
        category: 'SHARES',
        isin: 'BRPRPTACNOR5',
        description: 'PROMPT PARTICIPACOES S.A.'
      },
      {
        ticker: 'PRSN11B',
        category: 'FUNDS',
        isin: 'BRPRSNCTF005',
        description: 'PERSONALE I FDO INV IMOB - FII'
      },
      {
        ticker: 'PRSV11',
        category: 'FUNDS',
        isin: 'BRPRSVCTF008',
        description: 'PRESIDENTE VARGAS FDO INV IMOB'
      },
      {
        ticker: 'PRTS11',
        category: 'FUNDS',
        isin: 'BRPRTSCTF002',
        description: 'MULTI PROPERTIES FDO INV IMOB - FII'
      },
      {
        ticker: 'PSEG3',
        category: 'SHARES',
        isin: 'BRPSEGACNOR4',
        description: 'SAUIPE S.A.'
      },
      {
        ticker: 'PSEG4',
        category: 'SHARES',
        isin: 'BRPSEGACNPR1',
        description: 'SAUIPE S.A.'
      },
      {
        ticker: 'PSSA3',
        category: 'SHARES',
        isin: 'BRPSSAACNOR7',
        description: 'PORTO SEGURO S.A.'
      },
      {
        ticker: 'PSVM11',
        category: 'SHARES',
        isin: 'BRPSVMTRV004',
        description: 'PORTO SUDESTE V.M. S.A.'
      },
      {
        ticker: 'PTBL3',
        category: 'SHARES',
        isin: 'BRPTBLACNOR8',
        description: 'PBG S/A'
      },
      {
        ticker: 'PTBP4',
        category: 'SHARES',
        isin: 'BRPTBPACNPR6',
        description: 'PORTOBELLO PARTICIPACOES CERAMICAS S.A.'
      },
      {
        ticker: 'PTCA11',
        category: 'SHARES',
        isin: 'BRPTCAARNPR4',
        description: 'PRATICA KLIMAQUIP INDUSTRIA E COMERCIO SA'
      },
      {
        ticker: 'PTCA3',
        category: 'SHARES',
        isin: 'BRPTCAACNOR9',
        description: 'PRATICA KLIMAQUIP INDUSTRIA E COMERCIO SA'
      },
      {
        ticker: 'PTCH34',
        category: 'BDR',
        isin: 'BRPTCHBDR008',
        description: 'PETROCHINA CO LTD'
      },
      {
        ticker: 'PTNT3',
        category: 'SHARES',
        isin: 'BRPTNTACNOR6',
        description: 'PETTENATI S.A. INDUSTRIA TEXTIL'
      },
      {
        ticker: 'PTNT4',
        category: 'SHARES',
        isin: 'BRPTNTACNPR3',
        description: 'PETTENATI S.A. INDUSTRIA TEXTIL'
      },
      {
        ticker: 'PTSL3',
        category: 'SHARES',
        isin: 'BRPTSLACNOR2',
        description: 'PORTOSUL PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'PTSL4',
        category: 'SHARES',
        isin: 'BRPTSLACNPR9',
        description: 'PORTOSUL PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'PVBI11',
        category: 'FUNDS',
        isin: 'BRPVBICTF003',
        description: 'FDO. INV. IMOB. VBI PRIME PROPERTIES'
      },
      {
        ticker: 'PYPL34',
        category: 'BDR',
        isin: 'BRPYPLBDR002',
        description: 'PAYPAL HOLDINGS INC'
      },
      {
        ticker: 'Q1RV34',
        category: 'BDR',
        isin: 'BRQ1RVBDR005',
        description: 'QORVO INC'
      },
      {
        ticker: 'Q1UA34',
        category: 'BDR',
        isin: 'BRQ1UABDR003',
        description: 'QUANTA SERVICES INC'
      },
      {
        ticker: 'Q1UE34',
        category: 'BDR',
        isin: 'BRQ1UEBDR005',
        description: 'QUEST DIAGNOSTICS INC'
      },
      {
        ticker: 'QAGR11',
        category: 'FUNDS',
        isin: 'BRQAGRCTF005',
        description: 'QUASAR AGRO - FDO INV. IMOB.'
      },
      {
        ticker: 'QCOM34',
        category: 'BDR',
        isin: 'BRQCOMBDR007',
        description: 'QUALCOMM INC.'
      },
      {
        ticker: 'QINF11',
        category: 'FUNDS',
        isin: 'BRQINFCTF009',
        description: 'QUASAR INFRA I FDO. INVEST. PARTIC. INFRA.'
      },
      {
        ticker: 'QNTS11',
        category: 'FUNDS',
        isin: 'BRQNTSCTF009',
        description: 'FDO INV IMOB QUINTAS'
      },
      {
        ticker: 'QUAL3',
        category: 'SHARES',
        isin: 'BRQUALACNOR6',
        description: 'QUALICORP CONSULTORIA E CORRETORA DE SEGUROS S.A.'
      },
      {
        ticker: 'QUSW3',
        category: 'SHARES',
        isin: 'BRQUSWACNOR5',
        description: 'QUALITY SOFTWARE S.A.'
      },
      {
        ticker: 'QVQP3B',
        category: 'SHARES',
        isin: 'BRQVQPACNOR1',
        description: '524 PARTICIPACOES S.A.'
      },
      {
        ticker: 'R1CL34',
        category: 'BDR',
        isin: 'BRR1CLBDR007',
        description: 'ROYAL CARIBBEAN CRUISES LTD'
      },
      {
        ticker: 'R1EG34',
        category: 'BDR',
        isin: 'BRR1EGBDR003',
        description: 'REGENCY CENTERS CORP'
      },
      {
        ticker: 'R1FC34',
        category: 'BDR',
        isin: 'BRR1FCBDR009',
        description: 'REGIONS FINANCIAL CORP'
      },
      {
        ticker: 'R1HI34',
        category: 'BDR',
        isin: 'BRR1HIBDR002',
        description: 'ROBERT HALF INTERNATIONAL INC'
      },
      {
        ticker: 'R1IN34',
        category: 'BDR',
        isin: 'BRR1INBDR000',
        description: 'REALTY INCOME CORP'
      },
      {
        ticker: 'R1JF34',
        category: 'BDR',
        isin: 'BRR1JFBDR004',
        description: 'RAYMOND JAMES FINANCIAL INC'
      },
      {
        ticker: 'R1LC34',
        category: 'BDR',
        isin: 'BRR1LCBDR007',
        description: 'RALPH LAUREN CORP'
      },
      {
        ticker: 'R1MD34',
        category: 'BDR',
        isin: 'BRR1MDBDR003',
        description: 'RESMED INC'
      },
      {
        ticker: 'R1OK34',
        category: 'BDR',
        isin: 'BRR1OKBDR004',
        description: 'ROCKWELL AUTOMATION INC'
      },
      {
        ticker: 'R1OL34',
        category: 'BDR',
        isin: 'BRR1OLBDR002',
        description: 'ROLLINS INC'
      },
      {
        ticker: 'R1OP34',
        category: 'BDR',
        isin: 'BRR1OPBDR003',
        description: 'ROPER TECHNOLOGIES INC'
      },
      {
        ticker: 'R1SG34',
        category: 'BDR',
        isin: 'BRR1SGBDR003',
        description: 'REPUBLIC SERVICES INC'
      },
      {
        ticker: 'RADL3',
        category: 'SHARES',
        isin: 'BRRADLACNOR0',
        description: 'RAIA DROGASIL S.A.'
      },
      {
        ticker: 'RAIL3',
        category: 'SHARES',
        isin: 'BRRAILACNOR9',
        description: 'RUMO S.A.'
      },
      {
        ticker: 'RANI3',
        category: 'SHARES',
        isin: 'BRRANIACNOR5',
        description: 'IRANI PAPEL E EMBALAGEM S.A.'
      },
      {
        ticker: 'RANI4',
        category: 'SHARES',
        isin: 'BRRANIACNPR2',
        description: 'IRANI PAPEL E EMBALAGEM S.A.'
      },
      {
        ticker: 'RAPT3',
        category: 'SHARES',
        isin: 'BRRAPTACNOR7',
        description: 'RANDON S.A. IMPLEMENTOS E PARTICIPACOES'
      },
      {
        ticker: 'RAPT4',
        category: 'SHARES',
        isin: 'BRRAPTACNPR4',
        description: 'RANDON S.A. IMPLEMENTOS E PARTICIPACOES'
      },
      {
        ticker: 'RBBV11',
        category: 'FUNDS',
        isin: 'BRRBBVCTF004',
        description: 'JHSF RIO BRAVO FAZENDA BOA VISTA CAP. PROT. - FII'
      },
      {
        ticker: 'RBCO11',
        category: 'FUNDS',
        isin: 'BRRBCOCTF007',
        description: 'RB CAPITAL OFFICE INCOME FDO INV. IMOB.'
      },
      {
        ticker: 'RBDS11',
        category: 'FUNDS',
        isin: 'BRRBDSCTF006',
        description: 'RB CAPITAL DESENV. RESID. II FDO INV IMOB - FII'
      },
      {
        ticker: 'RBED11',
        category: 'FUNDS',
        isin: 'BRRBEDCTF006',
        description: 'FDO INV IMOB RIO BRAVO RENDA EDUCACIONAL - FII'
      },
      {
        ticker: 'RBFF11',
        category: 'FUNDS',
        isin: 'BRRBFFCTF008',
        description: 'RIO BRAVO IFIX FDO INV IMOB'
      },
      {
        ticker: 'RBFI11B',
        category: 'FUNDS',
        isin: 'BRRBFICTF002',
        description: 'RIO BRAVO INVESTIMENTOS FIP'
      },
      {
        ticker: 'RBFI12B',
        category: 'FUNDS',
        isin: 'BRRBFICTF010',
        description: 'RIO BRAVO INVESTIMENTOS FIP'
      },
      {
        ticker: 'RBGS11',
        category: 'FUNDS',
        isin: 'BRRBGSCTF009',
        description: 'RB CAPITAL GENERAL SHOP SULACAP FDO INV IMOB - FII'
      },
      {
        ticker: 'RBIR11',
        category: 'FUNDS',
        isin: 'BRRBIRCTF007',
        description: 'RB CAPITAL DESENV. RESIDENCIAL IV FDO. INV. IMOB.'
      },
      {
        ticker: 'RBIV11',
        category: 'FUNDS',
        isin: 'BRRBIVCTF009',
        description: 'RIO BRAVO CRÉDITO IMOB IV FDO INV IMOB - FII'
      },
      {
        ticker: 'RBRD11',
        category: 'FUNDS',
        isin: 'BRRBRDCTF008',
        description: 'RB CAPITAL RENDA II FDO INV IMOB - FII'
      },
      {
        ticker: 'RBRF11',
        category: 'FUNDS',
        isin: 'BRRBRFCTF003',
        description: 'RBR ALPHA MULTIESTRATÉGIA REAL ESTATE FDO INV IMOB'
      },
      {
        ticker: 'RBRL11',
        category: 'FUNDS',
        isin: 'BRRBRLCTF001',
        description: 'RBR LOG FUNDO DE INVESTIMENTO IMOBILIÁRIO'
      },
      {
        ticker: 'RBRM11',
        category: 'FUNDS',
        isin: 'BRRBRMCTF009',
        description: 'FDO INV IMOB - FII RBR DESENVOLVIMENTO'
      },
      {
        ticker: 'RBRP11',
        category: 'FUNDS',
        isin: 'BRRBRPCTF002',
        description: 'FDO INV IMOB RBR PROPERTIES - FII'
      },
      {
        ticker: 'RBRR11',
        category: 'FUNDS',
        isin: 'BRRBRRCTF008',
        description: 'FDO INV IMOB - FII RBR RENDIMENTO HIGH GRADE'
      },
      {
        ticker: 'RBRY11',
        category: 'FUNDS',
        isin: 'BRRBRYCTF004',
        description: 'FDO INV IMOB RBR CRÉDITO IMOB HIGH YIELD'
      },
      {
        ticker: 'RBTS11',
        category: 'FUNDS',
        isin: 'BRRBTSCTF002',
        description: 'RB CAPITAL TFO SITUS FDO INV IMOB - FII'
      },
      {
        ticker: 'RBVA11',
        category: 'FUNDS',
        isin: 'BRRBVACTF006',
        description: 'FDO INV IMOB RIO BRAVO RENDA VAREJO - FII'
      },
      {
        ticker: 'RBVO11',
        category: 'FUNDS',
        isin: 'BRRBVOCTF007',
        description: 'RIO BRAVO CRÉDITO IMOBILIÁRIO II FDO INV IMOB -FII'
      },
      {
        ticker: 'RCFA11',
        category: 'FUNDS',
        isin: 'BRRCFACTF007',
        description: 'GRUPO RCFA FDO INV IMOB'
      },
      {
        ticker: 'RCFF11',
        category: 'FUNDS',
        isin: 'BRRCFFCTF006',
        description: 'RBR DESENV COMERCIAL FEEDER FOF FDO INVEST IMOB'
      },
      {
        ticker: 'RCRB11',
        category: 'FUNDS',
        isin: 'BRRCRBCTF000',
        description: 'FDO INV IMOB RIO BRAVO RENDA CORPORATIVA'
      },
      {
        ticker: 'RCRI11B',
        category: 'FUNDS',
        isin: 'BRRCRICTF005',
        description: 'RB CAPITAL RENDIMENTOS IMOB FDO INV IMOB - FII'
      },
      {
        ticker: 'RCSL3',
        category: 'SHARES',
        isin: 'BRRCSLACNOR4',
        description: 'RECRUSUL S.A.'
      },
      {
        ticker: 'RCSL4',
        category: 'SHARES',
        isin: 'BRRCSLACNPR1',
        description: 'RECRUSUL S.A.'
      },
      {
        ticker: 'RDNI3',
        category: 'SHARES',
        isin: 'BRRDNIACNOR9',
        description: 'RNI NEGÓCIOS IMOBILIÁRIOS S.A.'
      },
      {
        ticker: 'RDPD11',
        category: 'FUNDS',
        isin: 'BRRDPDCTF008',
        description: 'BB RENDA DE PAPEIS IMOB II FDO INV IMOB - FII'
      },
      {
        ticker: 'RDSA34',
        category: 'BDR',
        isin: 'BRRDSABDR009',
        description: 'ROYAL DUTCH SHELL PLC'
      },
      {
        ticker: 'RECT11',
        category: 'FUNDS',
        isin: 'BRRECTCTF000',
        description: 'FDO INV IMOB - FII UBS (BR) OFFICE'
      },
      {
        ticker: 'REDE3',
        category: 'SHARES',
        isin: 'BRREDEACNOR7',
        description: 'REDE ENERGIA PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'REFC4',
        category: 'SHARES',
        isin: 'BRREFCACNPR3',
        description: 'REFINADORA CATARINENSE S.A.'
      },
      {
        ticker: 'REGN34',
        category: 'BDR',
        isin: 'BRREGNBDR005',
        description: 'REGENERON PHARMACEUTICALS INC'
      },
      {
        ticker: 'REIT11',
        category: 'FUNDS',
        isin: 'BRREITCTF007',
        description: 'SOCOPA FDO INV IMOB - FII'
      },
      {
        ticker: 'RENT3',
        category: 'SHARES',
        isin: 'BRRENTACNOR4',
        description: 'LOCALIZA RENT A CAR S.A.'
      },
      {
        ticker: 'RFAG3',
        category: 'SHARES',
        isin: 'BRRFAGACNOR5',
        description: 'REDE FEDERAL ARMAZENS GERAIS FERROV. S/A'
      },
      {
        ticker: 'RFOF11',
        category: 'FUNDS',
        isin: 'BRRFOFCTF001',
        description: 'FDO. INVEST. IMOB. RB CAPITAL I FUNDO DE FUNDOS'
      },
      {
        ticker: 'RGLO11',
        category: 'FUNDS',
        isin: 'BRRGLOCTF007',
        description: 'REGILO FDO INV ACOES'
      },
      {
        ticker: 'RHED4',
        category: 'SHARES',
        isin: 'BRRHEDACNPR7',
        description: 'RHEDE TECNOLOGIA S.A.'
      },
      {
        ticker: 'RHPY3',
        category: 'SHARES',
        isin: 'BRRHPYACNOR2',
        description: 'RI HAPPY BRINQUEDOS S.A.'
      },
      {
        ticker: 'RIBC8',
        category: 'SHARES',
        isin: 'BRRIBCACNPD3',
        description: 'RIBEIRO CORDEIRO IND E COMERCIOS.A.'
      },
      {
        ticker: 'RIGG34',
        category: 'BDR',
        isin: 'BRRIGGBDR000',
        description: 'TRANSOCEAN LTD.'
      },
      {
        ticker: 'RIOT34',
        category: 'BDR',
        isin: 'BRRIOTBDR007',
        description: 'RIO TINTO PLC'
      },
      {
        ticker: 'RIVA3',
        category: 'SHARES',
        isin: 'BRRIVAACNOR8',
        description: 'RIVA 9 EMPREENDIMENTOS IMOBILIÁRIOS S.A.'
      },
      {
        ticker: 'RLOG3',
        category: 'SHARES',
        isin: 'BRRLOGACNOR4',
        description: 'COSAN LOGISTICA S.A.'
      },
      {
        ticker: 'RLTM11',
        category: 'SHARES',
        isin: 'BRRLTMA01OR2',
        description: 'RELASTOMER TECNOLOGIA E PARTICIP S.A.'
      },
      {
        ticker: 'RNDP11',
        category: 'FUNDS',
        isin: 'BRRNDPCTF007',
        description: 'BB RENDA DE PAPÉIS IMOBILIÁRIOS FDO INV IMOB - FII'
      },
      {
        ticker: 'RNEW11',
        category: 'UNIT',
        isin: 'BRRNEWCDAM15',
        description: 'RENOVA ENERGIA S.A.'
      },
      {
        ticker: 'RNEW11F',
        category: 'UNIT',
        isin: 'BRRNEWCDAM15',
        description: 'RENOVA ENERGIA S.A.'
      },
      {
        ticker: 'RNEW3',
        category: 'SHARES',
        isin: 'BRRNEWACNOR8',
        description: 'RENOVA ENERGIA S.A.'
      },
      {
        ticker: 'RNEW4',
        category: 'SHARES',
        isin: 'BRRNEWACNPR5',
        description: 'RENOVA ENERGIA S.A.'
      },
      {
        ticker: 'RNGO11',
        category: 'FUNDS',
        isin: 'BRRNGOCTF003',
        description: 'FDO INV IMOB RIO NEGRO - FII'
      },
      {
        ticker: 'RNOV11',
        category: 'FUNDS',
        isin: 'BRRNOVCTF002',
        description: 'IMMOB I FDO INV IMOB - FII'
      },
      {
        ticker: 'RNOV12',
        category: 'FUNDS',
        isin: 'BRRNOVCTF010',
        description: 'IMMOB I FDO INV IMOB - FII'
      },
      {
        ticker: 'RNPT4',
        category: 'SHARES',
        isin: 'BRRNPTACNPR7',
        description: 'RENNER PARTICIPACOES S.A.'
      },
      {
        ticker: 'ROMI3',
        category: 'SHARES',
        isin: 'BRROMIACNOR8',
        description: 'INDUSTRIAS ROMI S.A.'
      },
      {
        ticker: 'ROOS12',
        category: 'SHARES',
        isin: 'BRROOSA02OR2',
        description: 'ROOSTER S.A. INDUSTRIA DE EQUIPAMENTOS'
      },
      {
        ticker: 'ROST34',
        category: 'BDR',
        isin: 'BRROSTBDR006',
        description: 'ROSS STORES, INC.'
      },
      {
        ticker: 'RPAD3',
        category: 'SHARES',
        isin: 'BRRPADACNOR1',
        description: 'ALFA HOLDINGS S.A.'
      },
      {
        ticker: 'RPAD5',
        category: 'SHARES',
        isin: 'BRRPADACNPA4',
        description: 'ALFA HOLDINGS S.A.'
      },
      {
        ticker: 'RPAD6',
        category: 'SHARES',
        isin: 'BRRPADACNPB2',
        description: 'ALFA HOLDINGS S.A.'
      },
      {
        ticker: 'RPMG3',
        category: 'SHARES',
        isin: 'BRRPMGACNOR9',
        description: 'REFINARIA DE PETROLEOS MANGUINHOS S.A.'
      },
      {
        ticker: 'RRCI11',
        category: 'FUNDS',
        isin: 'BRRRCICTF005',
        description: 'RB CAPITAL RECEBÍVEIS IMOB. FDO. INVEST. IMOB FII'
      },
      {
        ticker: 'RSID3',
        category: 'SHARES',
        isin: 'BRRSIDACNOR8',
        description: 'ROSSI RESIDENCIAL S.A.'
      },
      {
        ticker: 'RSPD11',
        category: 'FUNDS',
        isin: 'BRRSPDCTF006',
        description: 'RB CAPITAL DESENV RESID III FDO INV IMOB - FII'
      },
      {
        ticker: 'RSUL3',
        category: 'SHARES',
        isin: 'BRRSULACNOR6',
        description: 'METALURGICA RIOSULENSE S.A.'
      },
      {
        ticker: 'RSUL4',
        category: 'SHARES',
        isin: 'BRRSULACNPR3',
        description: 'METALURGICA RIOSULENSE S.A.'
      },
      {
        ticker: 'RVBI11',
        category: 'FUNDS',
        isin: 'BRRVBICTF009',
        description: 'VBI REITS FOF - FDO. INV. IMOB'
      },
      {
        ticker: 'RVBR11',
        category: 'FUNDS',
        isin: 'BRRVBRCTF000',
        description: 'FDO INV IMOB RIVIERA BR LOGISTICA'
      },
      {
        ticker: 'RVRA11',
        category: 'FUNDS',
        isin: 'BRRVRACTF002',
        description: 'FDO INV IMOB RIVIERA RIO QUENTE RESORTS - FII'
      },
      {
        ticker: 'RYTT34',
        category: 'BDR',
        isin: 'BRRYTTBDR003',
        description: 'RAYTHEON TECHNOLOGIES CORPORATION'
      },
      {
        ticker: 'S1BA34',
        category: 'BDR',
        isin: 'BRS1BABDR001',
        description: 'SBA COMMUNICATIONS CORP'
      },
      {
        ticker: 'S1EA34',
        category: 'BDR',
        isin: 'BRS1EABDR005',
        description: 'SEALED AIR CORP'
      },
      {
        ticker: 'S1HW34',
        category: 'BDR',
        isin: 'BRS1HWBDR002',
        description: 'THE SHERWIN-WILLIAMS CO'
      },
      {
        ticker: 'S1IV34',
        category: 'BDR',
        isin: 'BRS1IVBDR002',
        description: 'SVB FINANCIAL GROUP'
      },
      {
        ticker: 'S1JM34',
        category: 'BDR',
        isin: 'BRS1JMBDR009',
        description: 'THE JM SMUCKER CO'
      },
      {
        ticker: 'S1LG34',
        category: 'BDR',
        isin: 'BRS1LGBDR007',
        description: 'SL GREEN REALTY CORP'
      },
      {
        ticker: 'S1NA34',
        category: 'BDR',
        isin: 'BRS1NABDR006',
        description: 'SNAP-ON INC'
      },
      {
        ticker: 'S1NP34',
        category: 'BDR',
        isin: 'BRS1NPBDR004',
        description: 'SYNOPSYS INC'
      },
      {
        ticker: 'S1OU34',
        category: 'BDR',
        isin: 'BRS1OUBDR002',
        description: 'SOUTHWEST AIRLINES CO'
      },
      {
        ticker: 'S1PO34',
        category: 'BDR',
        isin: 'BRS1POBDR002',
        description: 'SPOTIFY TECHNOLOGY SA'
      },
      {
        ticker: 'S1RE34',
        category: 'BDR',
        isin: 'BRS1REBDR009',
        description: 'SEMPRA ENERGY'
      },
      {
        ticker: 'S1SL34',
        category: 'BDR',
        isin: 'BRS1SLBDR002',
        description: 'SKYWORKS SOLUTIONS INC'
      },
      {
        ticker: 'S1TT34',
        category: 'BDR',
        isin: 'BRS1TTBDR003',
        description: 'STATE STREET CORP'
      },
      {
        ticker: 'S1TX34',
        category: 'BDR',
        isin: 'BRS1TXBDR005',
        description: 'SEAGATE TECHNOLOGY PLC'
      },
      {
        ticker: 'S1WK34',
        category: 'BDR',
        isin: 'BRS1WKBDR006',
        description: 'STANLEY BLACK & DECKER INC'
      },
      {
        ticker: 'S1YF34',
        category: 'BDR',
        isin: 'BRS1YFBDR002',
        description: 'SYNCHRONY FINANCIAL'
      },
      {
        ticker: 'S1YK34',
        category: 'BDR',
        isin: 'BRS1YKBDR002',
        description: 'STRYKER CORP'
      },
      {
        ticker: 'S1YM34',
        category: 'BDR',
        isin: 'BRS1YMBDR008',
        description: 'NORTONLIFELOCK INC.'
      },
      {
        ticker: 'S1YY34',
        category: 'BDR',
        isin: 'BRS1YYBDR003',
        description: 'SYSCO CORP'
      },
      {
        ticker: 'SADI11',
        category: 'FUNDS',
        isin: 'BRSADICTF007',
        description: 'SANTANDER PAPEIS IMOB CDI FDO INV IMOB'
      },
      {
        ticker: 'SAIC11B',
        category: 'FUNDS',
        isin: 'BRSAICCTF009',
        description: 'FDO INV IMOB - FII SIA CORPORATE'
      },
      {
        ticker: 'SANB11',
        category: 'UNIT',
        isin: 'BRSANBCDAM13',
        description: 'BCO SANTANDER (BRASIL) S.A.'
      },
      {
        ticker: 'SANB11F',
        category: 'UNIT',
        isin: 'BRSANBCDAM13',
        description: 'BCO SANTANDER (BRASIL) S.A.'
      },
      {
        ticker: 'SANB3',
        category: 'SHARES',
        isin: 'BRSANBACNOR8',
        description: 'BCO SANTANDER (BRASIL) S.A.'
      },
      {
        ticker: 'SANB4',
        category: 'SHARES',
        isin: 'BRSANBACNPR5',
        description: 'BCO SANTANDER (BRASIL) S.A.'
      },
      {
        ticker: 'SANY6',
        category: 'SHARES',
        isin: 'BRSANYACNPB1',
        description: 'SANYO DA AMAZONIA S.A.'
      },
      {
        ticker: 'SAPP34',
        category: 'BDR',
        isin: 'BRSAPPBDR007',
        description: 'SAP SE'
      },
      {
        ticker: 'SAPR11',
        category: 'UNIT',
        isin: 'BRSAPRCDAM13',
        description: 'CIA SANEAMENTO DO PARANA - SANEPAR'
      },
      {
        ticker: 'SAPR11F',
        category: 'UNIT',
        isin: 'BRSAPRCDAM13',
        description: 'CIA SANEAMENTO DO PARANA - SANEPAR'
      },
      {
        ticker: 'SAPR3',
        category: 'SHARES',
        isin: 'BRSAPRACNOR9',
        description: 'CIA SANEAMENTO DO PARANA - SANEPAR'
      },
      {
        ticker: 'SAPR4',
        category: 'SHARES',
        isin: 'BRSAPRACNPR6',
        description: 'CIA SANEAMENTO DO PARANA - SANEPAR'
      },
      {
        ticker: 'SARE11',
        category: 'FUNDS',
        isin: 'BRSARECTF006',
        description: 'SANTANDER RENDA DE ALUGUÉIS FDO. INVEST. IMOB.'
      },
      {
        ticker: 'SBNY34',
        category: 'BDR',
        isin: 'BRSBNYBDR002',
        description: 'SIGNATURE BANK CORP'
      },
      {
        ticker: 'SBSP3',
        category: 'SHARES',
        isin: 'BRSBSPACNOR5',
        description: 'CIA SANEAMENTO BASICO EST SAO PAULO'
      },
      {
        ticker: 'SBUB34',
        category: 'BDR',
        isin: 'BRSBUBBDR005',
        description: 'STARBUCKS CORPORATION'
      },
      {
        ticker: 'SCAR3',
        category: 'SHARES',
        isin: 'BRSCARACNOR7',
        description: 'SAO CARLOS EMPREEND E PARTICIPACOES S.A.'
      },
      {
        ticker: 'SCHW34',
        category: 'BDR',
        isin: 'BRSCHWBDR006',
        description: 'THE CHARLES SCHWAB CORPORATION'
      },
      {
        ticker: 'SCPF11',
        category: 'FUNDS',
        isin: 'BRSCPFCTF003',
        description: 'FDO INV IMOB SCP'
      },
      {
        ticker: 'SDIL11',
        category: 'FUNDS',
        isin: 'BRSDILCTF004',
        description: 'FDO INV IMOB SDI RIO BRAVO RENDA LOGISTICA - FII'
      },
      {
        ticker: 'SDRM3',
        category: 'SHARES',
        isin: 'BRSDRMACNOR0',
        description: 'CIA SIDERURGICA DA AMAZONIA - SIDERAMA'
      },
      {
        ticker: 'SDRM6',
        category: 'SHARES',
        isin: 'BRSDRMACNPB1',
        description: 'CIA SIDERURGICA DA AMAZONIA - SIDERAMA'
      },
      {
        ticker: 'SEER3',
        category: 'SHARES',
        isin: 'BRSEERACNOR5',
        description: 'SER EDUCACIONAL S.A.'
      },
      {
        ticker: 'SFFI11',
        category: 'FUNDS',
        isin: 'BRSFFICTF001',
        description: 'FDO INV IMOB SF - FII'
      },
      {
        ticker: 'SFND11',
        category: 'FUNDS',
        isin: 'BRSFNDCTF006',
        description: 'FDO INV IMOB SÃO FERNANDO'
      },
      {
        ticker: 'SGPS3',
        category: 'SHARES',
        isin: 'BRSGPSACNOR4',
        description: 'SPRINGS GLOBAL PARTICIPACOES S.A.'
      },
      {
        ticker: 'SHDP11B',
        category: 'FUNDS',
        isin: 'BRSHDPCTF007',
        description: 'FDO INV IMOB - FII SHOPPING PARQUE D. PEDRO'
      },
      {
        ticker: 'SHOP11',
        category: 'FUNDS',
        isin: 'BRSHOPCTF004',
        description: 'MULTI SHOPPINGS FDO INV IMOB - FII'
      },
      {
        ticker: 'SHOW3',
        category: 'SHARES',
        isin: 'BRSHOWACNOR7',
        description: 'T4F ENTRETENIMENTO S.A.'
      },
      {
        ticker: 'SHPH11',
        category: 'FUNDS',
        isin: 'BRSHPHCTF008',
        description: 'FDO INV IMOB SHOPPING PÁTIO HIGIENÓPOLIS'
      },
      {
        ticker: 'SHUL3',
        category: 'SHARES',
        isin: 'BRSHULACNOR7',
        description: 'SCHULZ S.A.'
      },
      {
        ticker: 'SHUL4',
        category: 'SHARES',
        isin: 'BRSHULACNPR4',
        description: 'SCHULZ S.A.'
      },
      {
        ticker: 'SILO3',
        category: 'SHARES',
        isin: 'BRSILOACNOR8',
        description: 'CIA DE ARMAZENS E SILOS DO EST MG-CASEMG'
      },
      {
        ticker: 'SILO4',
        category: 'SHARES',
        isin: 'BRSILOACNPR5',
        description: 'CIA DE ARMAZENS E SILOS DO EST MG-CASEMG'
      },
      {
        ticker: 'SIMN34',
        category: 'BDR',
        isin: 'BRSIMNBDR002',
        description: 'SIMON PROPERTY GROUP INC'
      },
      {
        ticker: 'SIMR7',
        category: 'SHARES',
        isin: 'BRSIMRACNPC8',
        description: 'SIDERÚRGICA NORTE BRASIL S.A.'
      },
      {
        ticker: 'SLBC34',
        category: 'BDR',
        isin: 'BRSLBCBDR002',
        description: 'STERLING BANCORP'
      },
      {
        ticker: 'SLBG34',
        category: 'BDR',
        isin: 'BRSLBGBDR003',
        description: 'SCHLUMBERGER LIMITED'
      },
      {
        ticker: 'SLCE3',
        category: 'SHARES',
        isin: 'BRSLCEACNOR2',
        description: 'SLC AGRICOLA S.A.'
      },
      {
        ticker: 'SLCT3B',
        category: 'SHARES',
        isin: 'BRSLCTACNOR0',
        description: 'Inncorp S.A.'
      },
      {
        ticker: 'SLED3',
        category: 'SHARES',
        isin: 'BRSLEDACNOR0',
        description: 'SARAIVA LIVREIROS S.A. - EM RECUPERAÇÃO JUDICIAL'
      },
      {
        ticker: 'SLED4',
        category: 'SHARES',
        isin: 'BRSLEDACNPR7',
        description: 'SARAIVA LIVREIROS S.A. - EM RECUPERAÇÃO JUDICIAL'
      },
      {
        ticker: 'SMFT3',
        category: 'SHARES',
        isin: 'BRSMFTACNOR1',
        description: 'SMARTFIT ESCOLA DE GINÁSTICA E DANÇA S.A.'
      },
      {
        ticker: 'SMLS3',
        category: 'SHARES',
        isin: 'BRSMLSACNOR1',
        description: 'SMILES FIDELIDADE S.A.'
      },
      {
        ticker: 'SMTO3',
        category: 'SHARES',
        isin: 'BRSMTOACNOR3',
        description: 'SAO MARTINHO S.A.'
      },
      {
        ticker: 'SNEC34',
        category: 'BDR',
        isin: 'BRSNECBDR002',
        description: 'SONY CORP'
      },
      {
        ticker: 'SNSY3',
        category: 'SHARES',
        isin: 'BRSNSYACNOR2',
        description: 'SANSUY S.A. INDUSTRIA DE PLASTICOS'
      },
      {
        ticker: 'SNSY5',
        category: 'SHARES',
        isin: 'BRSNSYACNPA5',
        description: 'SANSUY S.A. INDUSTRIA DE PLASTICOS'
      },
      {
        ticker: 'SNSY6',
        category: 'SHARES',
        isin: 'BRSNSYACNPB3',
        description: 'SANSUY S.A. INDUSTRIA DE PLASTICOS'
      },
      {
        ticker: 'SOND3',
        category: 'SHARES',
        isin: 'BRSONDACNOR5',
        description: 'SONDOTECNICA ENGENHARIA SOLOS S.A.'
      },
      {
        ticker: 'SOND5',
        category: 'SHARES',
        isin: 'BRSONDACNPA8',
        description: 'SONDOTECNICA ENGENHARIA SOLOS S.A.'
      },
      {
        ticker: 'SOND6',
        category: 'SHARES',
        isin: 'BRSONDACNPB6',
        description: 'SONDOTECNICA ENGENHARIA SOLOS S.A.'
      },
      {
        ticker: 'SPAF11',
        category: 'FUNDS',
        isin: 'BRSPAFCTF007',
        description: 'SPA FDO INV IMOB - FII'
      },
      {
        ticker: 'SPCI6',
        category: 'SHARES',
        isin: 'BRSPCIACNPB5',
        description: 'SOCIEDADE DE PARTICIP. CIMENTEIRAS S.A.'
      },
      {
        ticker: 'SPCR3',
        category: 'SHARES',
        isin: 'BRSPCRACNOR5',
        description: 'SPE CRISTINA S.A.'
      },
      {
        ticker: 'SPFM12',
        category: 'FUNDS',
        isin: 'BRSPFMCTF028',
        description: 'SP FILMES DE SAO PAULO LTDA'
      },
      {
        ticker: 'SPGI34',
        category: 'BDR',
        isin: 'BRSPGIBDR009',
        description: 'S&P GLOBAL INC'
      },
      {
        ticker: 'SPRI11',
        category: 'SHARES',
        isin: 'BRSPRIA03OR9',
        description: 'SPRINGER S.A.'
      },
      {
        ticker: 'SPRI3',
        category: 'SHARES',
        isin: 'BRSPRIACNOR2',
        description: 'SPRINGER S.A.'
      },
      {
        ticker: 'SPRI5',
        category: 'SHARES',
        isin: 'BRSPRIACNPA5',
        description: 'SPRINGER S.A.'
      },
      {
        ticker: 'SPRI6',
        category: 'SHARES',
        isin: 'BRSPRIACNPB3',
        description: 'SPRINGER S.A.'
      },
      {
        ticker: 'SPTW11',
        category: 'FUNDS',
        isin: 'BRSPTWCTF002',
        description: 'SP DOWNTOWN FDO INV IMOB - FII'
      },
      {
        ticker: 'SPVJ11',
        category: 'FUNDS',
        isin: 'BRSPVJCTF005',
        description: 'FUND. INVEST. IMOB. SUCCESPAR VAREJO'
      },
      {
        ticker: 'SQIA3',
        category: 'SHARES',
        isin: 'BRSQIAACNOR6',
        description: 'SINQIA S.A.'
      },
      {
        ticker: 'SRXM34',
        category: 'BDR',
        isin: 'BRSRXMBDR002',
        description: 'SIRIUS XM HOLDINGS INC'
      },
      {
        ticker: 'SSFO34',
        category: 'BDR',
        isin: 'BRSSFOBDR003',
        description: 'SALESFORCE.COM, INC.'
      },
      {
        ticker: 'STAL6',
        category: 'SHARES',
        isin: 'BRSTALACNPB5',
        description: 'SETAL TELECOM S.A.'
      },
      {
        ticker: 'STBP3',
        category: 'SHARES',
        isin: 'BRSTBPACNOR3',
        description: 'SANTOS BRASIL PARTICIPACOES S.A.'
      },
      {
        ticker: 'STDS11',
        category: 'FUNDS',
        isin: 'BRSTDSCTF014',
        description: 'START DESENHOS ANIMADOS LTDA.'
      },
      {
        ticker: 'STKF3',
        category: 'SHARES',
        isin: 'BRSTKFACNOR5',
        description: 'STATKRAFT ENERGIAS RENOVAVEIS S.A.'
      },
      {
        ticker: 'STMN34',
        category: 'BDR',
        isin: 'BRSTMNBDR009',
        description: 'STMICROELECTRONICS NV'
      },
      {
        ticker: 'STRX11',
        category: 'FUNDS',
        isin: 'BRSTRXCTF006',
        description: 'STARX FDO INV IMOB - FII'
      },
      {
        ticker: 'STTR3',
        category: 'SHARES',
        isin: 'BRSTTRACNOR1',
        description: 'STARA S.A. - INDÚSTRIA DE IMPLEMENTOS AGRÍCOLAS'
      },
      {
        ticker: 'STZB34',
        category: 'BDR',
        isin: 'BRSTZBBDR006',
        description: 'CONSTELLATION BRANDS INC'
      },
      {
        ticker: 'SULA11',
        category: 'UNIT',
        isin: 'BRSULACDAM12',
        description: 'SUL AMERICA S.A.'
      },
      {
        ticker: 'SULA11F',
        category: 'UNIT',
        isin: 'BRSULACDAM12',
        description: 'SUL AMERICA S.A.'
      },
      {
        ticker: 'SULA3',
        category: 'SHARES',
        isin: 'BRSULAACNOR2',
        description: 'SUL AMERICA S.A.'
      },
      {
        ticker: 'SULA4',
        category: 'SHARES',
        isin: 'BRSULAACNPR9',
        description: 'SUL AMERICA S.A.'
      },
      {
        ticker: 'SUPF12',
        category: 'FUNDS',
        isin: 'BRSUPFCTF021',
        description: 'CINEMATOGRAFICA SUPERFILMES LTDA'
      },
      {
        ticker: 'SUZB3',
        category: 'SHARES',
        isin: 'BRSUZBACNOR0',
        description: 'SUZANO S.A.'
      },
      {
        ticker: 'SVPH7',
        category: 'SHARES',
        isin: 'BRSVPHACNPC5',
        description: 'SALVADOR PRAIA HOTEL S.A.'
      },
      {
        ticker: 'T1DG34',
        category: 'BDR',
        isin: 'BRT1DGBDR003',
        description: 'TRANSDIGM GROUP INC'
      },
      {
        ticker: 'T1EC34',
        category: 'BDR',
        isin: 'BRT1ECBDR000',
        description: 'TechnipFMC PLC'
      },
      {
        ticker: 'T1EL34',
        category: 'BDR',
        isin: 'BRT1ELBDR001',
        description: 'TE CONNECTIVITY LTD'
      },
      {
        ticker: 'T1FX34',
        category: 'BDR',
        isin: 'BRT1FXBDR003',
        description: 'TELEFLEX INC'
      },
      {
        ticker: 'T1MU34',
        category: 'BDR',
        isin: 'BRT1MUBDR005',
        description: 'T-MOBILE US INC'
      },
      {
        ticker: 'T1OW34',
        category: 'BDR',
        isin: 'BRT1OWBDR007',
        description: 'AMERICAN TOWER CORP'
      },
      {
        ticker: 'T1RI34',
        category: 'BDR',
        isin: 'BRT1RIBDR009',
        description: 'TRIPADVISOR INC'
      },
      {
        ticker: 'T1RO34',
        category: 'BDR',
        isin: 'BRT1ROBDR007',
        description: 'T ROWE PRICE GROUP INC'
      },
      {
        ticker: 'T1SC34',
        category: 'BDR',
        isin: 'BRT1SCBDR000',
        description: 'TRACTOR SUPPLY CO'
      },
      {
        ticker: 'T1SO34',
        category: 'BDR',
        isin: 'BRT1SOBDR005',
        description: 'THE SOUTHERN CO'
      },
      {
        ticker: 'T1TW34',
        category: 'BDR',
        isin: 'BRT1TWBDR006',
        description: 'TAKE-TWO INTERACTIVE SOFTWARE INC'
      },
      {
        ticker: 'T1XT34',
        category: 'BDR',
        isin: 'BRT1XTBDR004',
        description: 'TEXTRON INC'
      },
      {
        ticker: 'TAEE11',
        category: 'UNIT',
        isin: 'BRTAEECDAM10',
        description: 'TRANSMISSORA ALIANÇA DE ENERGIA ELÉTRICA S.A.'
      },
      {
        ticker: 'TAEE11F',
        category: 'UNIT',
        isin: 'BRTAEECDAM10',
        description: 'TRANSMISSORA ALIANÇA DE ENERGIA ELÉTRICA S.A.'
      },
      {
        ticker: 'TAEE3',
        category: 'SHARES',
        isin: 'BRTAEEACNOR9',
        description: 'TRANSMISSORA ALIANÇA DE ENERGIA ELÉTRICA S.A.'
      },
      {
        ticker: 'TAEE4',
        category: 'SHARES',
        isin: 'BRTAEEACNPR6',
        description: 'TRANSMISSORA ALIANÇA DE ENERGIA ELÉTRICA S.A.'
      },
      {
        ticker: 'TAKP34',
        category: 'BDR',
        isin: 'BRTAKPBDR006',
        description: 'TAKEDA PHARMACEUTICAL CO LTD'
      },
      {
        ticker: 'TASA3',
        category: 'SHARES',
        isin: 'BRTASAACNOR7',
        description: 'TAURUS ARMAS S.A.'
      },
      {
        ticker: 'TASA4',
        category: 'SHARES',
        isin: 'BRTASAACNPR4',
        description: 'TAURUS ARMAS S.A.'
      },
      {
        ticker: 'TBOF11',
        category: 'FUNDS',
        isin: 'BRTBOFCTF006',
        description: 'FDO INV IMOB - FII TB OFFICE'
      },
      {
        ticker: 'TCNO3',
        category: 'SHARES',
        isin: 'BRTCNOACNOR5',
        description: 'TECNOSOLO ENGENHARIA S.A.'
      },
      {
        ticker: 'TCNO4',
        category: 'SHARES',
        isin: 'BRTCNOACNPR2',
        description: 'TECNOSOLO ENGENHARIA S.A.'
      },
      {
        ticker: 'TCPF11',
        category: 'FUNDS',
        isin: 'BRTCPFCTF001',
        description: 'TREECORP REAL ESTATE FDO INV IMOB - I'
      },
      {
        ticker: 'TCQC3',
        category: 'SHARES',
        isin: 'BRTCQCACNOR3',
        description: 'INDUSTRIA CARBOQUIMICA CATARINENSE S/A'
      },
      {
        ticker: 'TCQC4',
        category: 'SHARES',
        isin: 'BRTCQCACNPR0',
        description: 'INDUSTRIA CARBOQUIMICA CATARINENSE S/A'
      },
      {
        ticker: 'TCSA3',
        category: 'SHARES',
        isin: 'BRTCSAACNOR3',
        description: 'TECNISA S.A.'
      },
      {
        ticker: 'TECN3',
        category: 'SHARES',
        isin: 'BRTECNACNOR6',
        description: 'TECHNOS S.A.'
      },
      {
        ticker: 'TEKA3',
        category: 'SHARES',
        isin: 'BRTEKAACNOR6',
        description: 'TEKA-TECELAGEM KUEHNRICH S.A.'
      },
      {
        ticker: 'TEKA4',
        category: 'SHARES',
        isin: 'BRTEKAACNPR3',
        description: 'TEKA-TECELAGEM KUEHNRICH S.A.'
      },
      {
        ticker: 'TELB3',
        category: 'SHARES',
        isin: 'BRTELBACNOR2',
        description: 'TELEC BRASILEIRAS S.A. TELEBRAS'
      },
      {
        ticker: 'TELB4',
        category: 'SHARES',
        isin: 'BRTELBACNPR9',
        description: 'TELEC BRASILEIRAS S.A. TELEBRAS'
      },
      {
        ticker: 'TELD11',
        category: 'FUNDS',
        isin: 'BRTELDCTF001',
        description: 'TELLUS DESENVOLVIMENTO LOGÍSTICO FDO. INVEST. IMOB'
      },
      {
        ticker: 'TEND3',
        category: 'SHARES',
        isin: 'BRTENDACNOR4',
        description: 'CONSTRUTORA TENDA S.A.'
      },
      {
        ticker: 'TEPP11',
        category: 'FUNDS',
        isin: 'BRTEPPCTF006',
        description: 'TELLUS PROPERTIES - FDO INV. IMOB'
      },
      {
        ticker: 'TESA3',
        category: 'SHARES',
        isin: 'BRTESAACNOR9',
        description: 'TERRA SANTA AGRO S.A.'
      },
      {
        ticker: 'TEXA34',
        category: 'BDR',
        isin: 'BRTEXABDR003',
        description: 'TEXAS INSTRUMENTS INC.'
      },
      {
        ticker: 'TGAR11',
        category: 'FUNDS',
        isin: 'BRTGARCTF009',
        description: 'FDO INV IMOB TG ATIVO REAL'
      },
      {
        ticker: 'TGMA3',
        category: 'SHARES',
        isin: 'BRTGMAACNOR7',
        description: 'TEGMA GESTAO LOGISTICA S.A.'
      },
      {
        ticker: 'TGTB34',
        category: 'BDR',
        isin: 'BRTGTBBDR004',
        description: 'TARGET CORP'
      },
      {
        ticker: 'THGI34',
        category: 'BDR',
        isin: 'BRTHGIBDR004',
        description: 'HANOVER INSURANCE GROUP INC'
      },
      {
        ticker: 'THRA11',
        category: 'FUNDS',
        isin: 'BRTHRACTF007',
        description: 'FDO INV IMOB - FII CYRELA THERA CORPORATE'
      },
      {
        ticker: 'TIET11',
        category: 'UNIT',
        isin: 'BRTIETCDAM15',
        description: 'AES TIETE ENERGIA SA'
      },
      {
        ticker: 'TIET11F',
        category: 'UNIT',
        isin: 'BRTIETCDAM15',
        description: 'AES TIETE ENERGIA SA'
      },
      {
        ticker: 'TIET3',
        category: 'SHARES',
        isin: 'BRTIETACNOR0',
        description: 'AES TIETE ENERGIA SA'
      },
      {
        ticker: 'TIET4',
        category: 'SHARES',
        isin: 'BRTIETACNPR7',
        description: 'AES TIETE ENERGIA SA'
      },
      {
        ticker: 'TIFF34',
        category: 'BDR',
        isin: 'BRTIFFBDR000',
        description: 'TIFFANY CO'
      },
      {
        ticker: 'TIMP3',
        category: 'SHARES',
        isin: 'BRTIMPACNOR1',
        description: 'TIM PARTICIPACOES S.A.'
      },
      {
        ticker: 'TIPR11',
        category: 'FUNDS',
        isin: 'BRTIPRCTF011',
        description: 'TIETE PROD. CINEMATOGRAFICAS LTDA'
      },
      {
        ticker: 'TJXC34',
        category: 'BDR',
        isin: 'BRTJXCBDR008',
        description: 'TJX COMPANIES INC'
      },
      {
        ticker: 'TKNO3',
        category: 'SHARES',
        isin: 'BRTKNOACNOR8',
        description: 'TEKNO S.A. - INDUSTRIA E COMERCIO'
      },
      {
        ticker: 'TKNO4',
        category: 'SHARES',
        isin: 'BRTKNOACNPR5',
        description: 'TEKNO S.A. - INDUSTRIA E COMERCIO'
      },
      {
        ticker: 'TLNC34',
        category: 'BDR',
        isin: 'BRTLNCBDR005',
        description: 'TELEFONICA SA'
      },
      {
        ticker: 'TMCO34',
        category: 'BDR',
        isin: 'BRTMCOBDR001',
        description: 'TOYOTA MOTOR CORP.'
      },
      {
        ticker: 'TMFI11',
        category: 'FUNDS',
        isin: 'BRTMFICTF005',
        description: 'FDO INV IMOB TM - FII'
      },
      {
        ticker: 'TMOS34',
        category: 'BDR',
        isin: 'BRTMOSBDR007',
        description: 'THERMO FISHER SCIENTIFIC, INC.'
      },
      {
        ticker: 'TOGA11',
        category: 'SHARES',
        isin: 'BRTOGAA01OR4',
        description: 'TOGA EMPREENDIMENTOS HOTELEIROS S.A.'
      },
      {
        ticker: 'TORD11',
        category: 'FUNDS',
        isin: 'BRTORDCTF015',
        description: 'TORDESILHAS EI FDO. INV. IMOB.'
      },
      {
        ticker: 'TORM13',
        category: 'FUNDS',
        isin: 'BRTORMCTF024',
        description: 'FDO INV IMOB TOURMALET I'
      },
      {
        ticker: 'TORM14',
        category: 'FUNDS',
        isin: 'BRTORMCTF032',
        description: 'FDO INV IMOB TOURMALET I'
      },
      {
        ticker: 'TOTS3',
        category: 'SHARES',
        isin: 'BRTOTSACNOR8',
        description: 'TOTVS S.A.'
      },
      {
        ticker: 'TOUR11',
        category: 'FUNDS',
        isin: 'BRTOURCTF001',
        description: 'FDO INV IMOB TOURMALET II'
      },
      {
        ticker: 'TOUR12',
        category: 'FUNDS',
        isin: 'BRTOURCTF019',
        description: 'FDO INV IMOB TOURMALET II'
      },
      {
        ticker: 'TOUR13',
        category: 'FUNDS',
        isin: 'BRTOURCTF027',
        description: 'FDO INV IMOB TOURMALET II'
      },
      {
        ticker: 'TPIS3',
        category: 'SHARES',
        isin: 'BRTPISACNOR8',
        description: 'TPI - TRIUNFO PARTICIP. E INVEST. S.A.'
      },
      {
        ticker: 'TPRY34',
        category: 'BDR',
        isin: 'BRTPRYBDR001',
        description: 'TAPESTRY INC'
      },
      {
        ticker: 'TRBR3',
        category: 'SHARES',
        isin: 'BRTRBRACNOR1',
        description: 'TRANSBRASIL S.A. LINHAS AEREAS'
      },
      {
        ticker: 'TRBR4',
        category: 'SHARES',
        isin: 'BRTRBRACNPR8',
        description: 'TRANSBRASIL S.A. LINHAS AEREAS'
      },
      {
        ticker: 'TREG3',
        category: 'SHARES',
        isin: 'BRTREGACNOR8',
        description: 'TANGARA ENERGIA S.A.'
      },
      {
        ticker: 'TRIS3',
        category: 'SHARES',
        isin: 'BRTRISACNOR4',
        description: 'TRISUL S.A.'
      },
      {
        ticker: 'TRNT11',
        category: 'FUNDS',
        isin: 'BRTRNTCTF013',
        description: 'FDO INV IMOB - FII TORRE NORTE'
      },
      {
        ticker: 'TRPL3',
        category: 'SHARES',
        isin: 'BRTRPLACNOR4',
        description: 'CTEEP - CIA TRANSMISSÃO ENERGIA ELÉTRICA PAULISTA'
      },
      {
        ticker: 'TRPL4',
        category: 'SHARES',
        isin: 'BRTRPLACNPR1',
        description: 'CTEEP - CIA TRANSMISSÃO ENERGIA ELÉTRICA PAULISTA'
      },
      {
        ticker: 'TRVC34',
        category: 'BDR',
        isin: 'BRTRVCBDR005',
        description: 'THE TRAVELERS COMPANIES, INC'
      },
      {
        ticker: 'TRXB11',
        category: 'FUNDS',
        isin: 'BRTRXBCTF002',
        description: 'TRX REAL ESTATE II FDO. INVEST. IMOB.'
      },
      {
        ticker: 'TRXF11',
        category: 'FUNDS',
        isin: 'BRTRXFCTF003',
        description: 'TRX REAL ESTATE FDO. INV. IMOB. - FII'
      },
      {
        ticker: 'TSLA34',
        category: 'BDR',
        isin: 'BRTSLABDR008',
        description: 'TESLA, INC'
      },
      {
        ticker: 'TSMC34',
        category: 'BDR',
        isin: 'BRTSMCBDR002',
        description: 'TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD'
      },
      {
        ticker: 'TSNC11',
        category: 'FUNDS',
        isin: 'BRTSNCCTF009',
        description: 'TRANSINC FDO INV IMOB - FII'
      },
      {
        ticker: 'TSNF34',
        category: 'BDR',
        isin: 'BRTSNFBDR003',
        description: 'TYSON FOODS INC'
      },
      {
        ticker: 'TUPY3',
        category: 'SHARES',
        isin: 'BRTUPYACNOR1',
        description: 'TUPY S.A.'
      },
      {
        ticker: 'TVIT3',
        category: 'SHARES',
        isin: 'BRTVITACNOR4',
        description: 'TIVIT TERC. DE PROC., SERV. E TEC. S.A.'
      },
      {
        ticker: 'TVOP11',
        category: 'FUNDS',
        isin: 'BRTVOPCTF011',
        description: 'T. V. O. PRODUCOES AUDIOVISUAIS LTDA.'
      },
      {
        ticker: 'TWTR34',
        category: 'BDR',
        isin: 'BRTWTRBDR007',
        description: 'TWITTER, INC.'
      },
      {
        ticker: 'TXBZ11',
        category: 'SHARES',
        isin: 'BRTXBZA02OR1',
        description: 'TBM - TEXTIL BEZERRA DE MENEZES S.A.'
      },
      {
        ticker: 'TXBZ5',
        category: 'SHARES',
        isin: 'BRTXBZACNPA5',
        description: 'TBM - TEXTIL BEZERRA DE MENEZES S.A.'
      },
      {
        ticker: 'TXRX11',
        category: 'SHARES',
        isin: 'BRTXRXA01OR4',
        description: 'TEXTIL RENAUXVIEW S.A.'
      },
      {
        ticker: 'TXRX3',
        category: 'SHARES',
        isin: 'BRTXRXACNOR3',
        description: 'TEXTIL RENAUXVIEW S.A.'
      },
      {
        ticker: 'TXRX4',
        category: 'SHARES',
        isin: 'BRTXRXACNPR0',
        description: 'TEXTIL RENAUXVIEW S.A.'
      },
      {
        ticker: 'TXSA34',
        category: 'BDR',
        isin: 'BRTXSABDR003',
        description: 'TERNIUM SA'
      },
      {
        ticker: 'U1AI34',
        category: 'BDR',
        isin: 'BRU1AIBDR002',
        description: 'UNDER ARMOUR INC'
      },
      {
        ticker: 'U1AL34',
        category: 'BDR',
        isin: 'BRU1ALBDR006',
        description: 'UNITED AIRLINES HOLDINGS INC'
      },
      {
        ticker: 'U1BE34',
        category: 'BDR',
        isin: 'BRU1BEBDR009',
        description: 'UBER TECHNOLOGIES INC'
      },
      {
        ticker: 'U1DR34',
        category: 'BDR',
        isin: 'BRU1DRBDR007',
        description: 'UDR INC'
      },
      {
        ticker: 'U1HS34',
        category: 'BDR',
        isin: 'BRU1HSBDR006',
        description: 'UNIVERSAL HEALTH SERVICES INC'
      },
      {
        ticker: 'U1LT34',
        category: 'BDR',
        isin: 'BRU1LTBDR006',
        description: 'ULTA BEAUTY INC'
      },
      {
        ticker: 'U1NM34',
        category: 'BDR',
        isin: 'BRU1NMBDR007',
        description: 'UNUM GROUP'
      },
      {
        ticker: 'U1RI34',
        category: 'BDR',
        isin: 'BRU1RIBDR006',
        description: 'UNITED RENTALS INC'
      },
      {
        ticker: 'UBSF11',
        category: 'FUNDS',
        isin: 'BRUBSFCTF005',
        description: 'FDO INV IMOB - FII UBS (BR) FUNDOS IMOBILIÁRIOS'
      },
      {
        ticker: 'UBSG34',
        category: 'BDR',
        isin: 'BRUBSGBDR004',
        description: 'UBS GROUP AG'
      },
      {
        ticker: 'UBSR11',
        category: 'FUNDS',
        isin: 'BRUBSRCTF000',
        description: 'FDO INV IMOB - FII UBS (BR) RECEB IMOB'
      },
      {
        ticker: 'UCAS3',
        category: 'SHARES',
        isin: 'BRUCASACNOR1',
        description: 'UNICASA INDÚSTRIA DE MÓVEIS S.A.'
      },
      {
        ticker: 'UGPA3',
        category: 'SHARES',
        isin: 'BRUGPAACNOR8',
        description: 'ULTRAPAR PARTICIPACOES S.A.'
      },
      {
        ticker: 'ULEV34',
        category: 'BDR',
        isin: 'BRULEVBDR002',
        description: 'UNILEVER PLC'
      },
      {
        ticker: 'UNHH34',
        category: 'BDR',
        isin: 'BRUNHHBDR000',
        description: 'UNITEDHEALTH GROUP INC'
      },
      {
        ticker: 'UNIP3',
        category: 'SHARES',
        isin: 'BRUNIPACNOR7',
        description: 'UNIPAR CARBOCLORO S.A.'
      },
      {
        ticker: 'UNIP5',
        category: 'SHARES',
        isin: 'BRUNIPACNPA0',
        description: 'UNIPAR CARBOCLORO S.A.'
      },
      {
        ticker: 'UNIP6',
        category: 'SHARES',
        isin: 'BRUNIPACNPB8',
        description: 'UNIPAR CARBOCLORO S.A.'
      },
      {
        ticker: 'UPAC34',
        category: 'BDR',
        isin: 'BRUPACBDR001',
        description: 'UNION PACIFIC CORPORATION'
      },
      {
        ticker: 'UPKP3B',
        category: 'SHARES',
        isin: 'BRUPKPACNOR8',
        description: 'UPTICK PARTICIPACOES S.A.'
      },
      {
        ticker: 'UPSS34',
        category: 'BDR',
        isin: 'BRUPSSBDR009',
        description: 'UNITED PARCEL SERVICE, INC.'
      },
      {
        ticker: 'URPR11',
        category: 'FUNDS',
        isin: 'BRURPRCTF002',
        description: 'URCA PRIME RENDA FUNDO DE INVESTIMENTO IMOBILIÁRIO'
      },
      {
        ticker: 'USAT4',
        category: 'SHARES',
        isin: 'BRUSATACNPR2',
        description: 'USATI PARTICIPACOES PORTUARIAS S.A.'
      },
      {
        ticker: 'USBC34',
        category: 'BDR',
        isin: 'BRUSBCBDR003',
        description: 'U.S. BANCORP'
      },
      {
        ticker: 'USIM3',
        category: 'SHARES',
        isin: 'BRUSIMACNOR3',
        description: 'USINAS SID DE MINAS GERAIS S.A.-USIMINAS'
      },
      {
        ticker: 'USIM5',
        category: 'SHARES',
        isin: 'BRUSIMACNPA6',
        description: 'USINAS SID DE MINAS GERAIS S.A.-USIMINAS'
      },
      {
        ticker: 'USIM6',
        category: 'SHARES',
        isin: 'BRUSIMACNPB4',
        description: 'USINAS SID DE MINAS GERAIS S.A.-USIMINAS'
      },
      {
        ticker: 'USSX34',
        category: 'BDR',
        isin: 'BRUSSXBDR003',
        description: 'UNITED STATES STEEL CORPORATION'
      },
      {
        ticker: 'V1AR34',
        category: 'BDR',
        isin: 'BRV1ARBDR002',
        description: 'VARIAN MEDICAL SYSTEMS INC'
      },
      {
        ticker: 'V1MC34',
        category: 'BDR',
        isin: 'BRV1MCBDR009',
        description: 'VULCAN MATERIALS CO'
      },
      {
        ticker: 'V1NO34',
        category: 'BDR',
        isin: 'BRV1NOBDR002',
        description: 'VORNADO REALTY TRUST'
      },
      {
        ticker: 'V1RS34',
        category: 'BDR',
        isin: 'BRV1RSBDR004',
        description: 'VERISK ANALYTICS INC'
      },
      {
        ticker: 'V1TA34',
        category: 'BDR',
        isin: 'BRV1TABDR008',
        description: 'VENTAS INC'
      },
      {
        ticker: 'VALE3',
        category: 'SHARES',
        isin: 'BRVALEACNOR0',
        description: 'VALE S.A.'
      },
      {
        ticker: 'VAMO3',
        category: 'SHARES',
        isin: 'BRVAMOACNOR7',
        description: 'VAMOS LOCAÇÃO DE CAMINHÕES, MÁQUINAS E EQUIP. S.A.'
      },
      {
        ticker: 'VCJR11',
        category: 'FUNDS',
        isin: 'BRVCJRCTF005',
        description: 'VECTIS JUROS REAL FDO INV. IMOB. - FII'
      },
      {
        ticker: 'VECF3',
        category: 'SHARES',
        isin: 'BRVECFACNOR8',
        description: 'VALEC - ENG.CONSTRUCOES E FERROVIAS S.A.'
      },
      {
        ticker: 'VERE11',
        category: 'FUNDS',
        isin: 'BRVERECTF002',
        description: 'FDO INV IMOB VEREDA - FII'
      },
      {
        ticker: 'VERZ34',
        category: 'BDR',
        isin: 'BRVERZBDR008',
        description: 'VERIZON COMMUNICATIONS INC.'
      },
      {
        ticker: 'VFCO34',
        category: 'BDR',
        isin: 'BRVFCOBDR001',
        description: 'VF CORP'
      },
      {
        ticker: 'VGIP11',
        category: 'FUNDS',
        isin: 'BRVGIPCTF002',
        description: 'VALORA CRI ÍNDICE DE PREÇO FDO INVEST. IMOB. FII'
      },
      {
        ticker: 'VGIR11',
        category: 'FUNDS',
        isin: 'BRVGIRCTF008',
        description: 'VALORA RE III FDO INV IMOB - FII'
      },
      {
        ticker: 'VIDS11',
        category: 'FUNDS',
        isin: 'BRVIDSCTF003',
        description: 'VIC DESENVOLVIMENTO VINTAGE 20/21 FUND INVEST IMOB'
      },
      {
        ticker: 'VIFI11',
        category: 'FUNDS',
        isin: 'BRVIFICTF009',
        description: 'VINCI INSTRUMENTOS FINANCEIROS FDO INV IMOB - FII'
      },
      {
        ticker: 'VIGT11',
        category: 'FUNDS',
        isin: 'BRVIGTCTF004',
        description: 'VINCI ENERGIA FDO INV PART IE'
      },
      {
        ticker: 'VILG11',
        category: 'FUNDS',
        isin: 'BRVILGCTF001',
        description: 'VINCI LOGÍSTICA FDO INV IMOB - FII'
      },
      {
        ticker: 'VINO11',
        category: 'FUNDS',
        isin: 'BRVINOCTF001',
        description: 'VINCI OFFICES FDO INV IMOB'
      },
      {
        ticker: 'VISA34',
        category: 'BDR',
        isin: 'BRVISABDR000',
        description: 'VISA INC.'
      },
      {
        ticker: 'VISC11',
        category: 'FUNDS',
        isin: 'BRVISCCTF005',
        description: 'VINCI SHOPPING CENTERS FDO INVEST IMOB - FII'
      },
      {
        ticker: 'VIVA3',
        category: 'SHARES',
        isin: 'BRVIVAACNOR0',
        description: 'VIVARA PARTICIPAÇOES S.A'
      },
      {
        ticker: 'VIVR3',
        category: 'SHARES',
        isin: 'BRVIVRACNOR4',
        description: 'VIVER INCORPORADORA E CONSTRUTORA S.A.'
      },
      {
        ticker: 'VIVT3',
        category: 'SHARES',
        isin: 'BRVIVTACNOR0',
        description: 'TELEFÔNICA BRASIL S.A'
      },
      {
        ticker: 'VIVT4',
        category: 'SHARES',
        isin: 'BRVIVTACNPR7',
        description: 'TELEFÔNICA BRASIL S.A'
      },
      {
        ticker: 'VLID3',
        category: 'SHARES',
        isin: 'BRVLIDACNOR5',
        description: 'VALID SOLUÇÕES S.A.'
      },
      {
        ticker: 'VLJS11',
        category: 'FUNDS',
        isin: 'BRVLJSCTF020',
        description: 'VECTOR QUELUZ ATIVOS IMOB FDO INV IMOB'
      },
      {
        ticker: 'VLJS12',
        category: 'FUNDS',
        isin: 'BRVLJSCTF012',
        description: 'VECTOR QUELUZ ATIVOS IMOB FDO INV IMOB'
      },
      {
        ticker: 'VLJS13',
        category: 'FUNDS',
        isin: 'BRVLJSCTF038',
        description: 'VECTOR QUELUZ ATIVOS IMOB FDO INV IMOB'
      },
      {
        ticker: 'VLOE34',
        category: 'BDR',
        isin: 'BRVLOEBDR005',
        description: 'VALERO ENERGY CORPORATION'
      },
      {
        ticker: 'VLOL11',
        category: 'FUNDS',
        isin: 'BRVLOLCTF009',
        description: 'FDO INV IMOB - FII VILA OLÍMPIA CORPORATE'
      },
      {
        ticker: 'VLPN3',
        category: 'SHARES',
        isin: 'BRVLPNACNOR9',
        description: 'ELETRICIDADE VALE PARANAPANEMA S.A.'
      },
      {
        ticker: 'VLYB34',
        category: 'BDR',
        isin: 'BRVLYBBDR000',
        description: 'VALLEY NATIONAL BANCORP'
      },
      {
        ticker: 'VOTS11',
        category: 'FUNDS',
        isin: 'BRVOTSCTF007',
        description: 'VOTORANTIM SECURITIES MASTER FDO INV IMOB - FII'
      },
      {
        ticker: 'VPSI11',
        category: 'FUNDS',
        isin: 'BRVPSICTF007',
        description: 'FDO INV IMOB POLO SHOPPING INDAIATUBA'
      },
      {
        ticker: 'VRSN34',
        category: 'BDR',
        isin: 'BRVRSNBDR004',
        description: 'VERISIGN INC'
      },
      {
        ticker: 'VRTA11',
        category: 'FUNDS',
        isin: 'BRVRTACTF008',
        description: 'FATOR VERITA FDO INV IMOB - FII'
      },
      {
        ticker: 'VRTX34',
        category: 'BDR',
        isin: 'BRVRTXBDR001',
        description: 'VERTEX PHARMACEUTICALS INC'
      },
      {
        ticker: 'VSEC11',
        category: 'FUNDS',
        isin: 'BRVSECCTF004',
        description: 'FDO INV IMOB VOTORANTIM SECURITIES'
      },
      {
        ticker: 'VSHO11',
        category: 'FUNDS',
        isin: 'BRVSHOCTF002',
        description: 'FDO INV IMOB VOTORANTIM SHOPPING'
      },
      {
        ticker: 'VSPT3',
        category: 'SHARES',
        isin: 'BRVSPTACNOR1',
        description: 'FERROVIA CENTRO-ATLANTICA S.A.'
      },
      {
        ticker: 'VSPT4',
        category: 'SHARES',
        isin: 'BRVSPTACNPR8',
        description: 'FERROVIA CENTRO-ATLANTICA S.A.'
      },
      {
        ticker: 'VTLT11',
        category: 'FUNDS',
        isin: 'BRVTLTCTF001',
        description: 'FDO INV IMOB VOTORANTIM LOGISTICA'
      },
      {
        ticker: 'VTPA11',
        category: 'FUNDS',
        isin: 'BRVTPACTF002',
        description: 'FDO. INVEST. IMOB. VOTORANTIM PATRIMONIAL V'
      },
      {
        ticker: 'VTPL11',
        category: 'FUNDS',
        isin: 'BRVTPLCTF009',
        description: 'FDO INV. IMOB. PLUS'
      },
      {
        ticker: 'VTVI11',
        category: 'FUNDS',
        isin: 'BRVTVICTF003',
        description: 'PARKING PARTNERS FDO. INVEST. IMOB.'
      },
      {
        ticker: 'VTXI11',
        category: 'FUNDS',
        isin: 'BRVTXICTF009',
        description: 'FDO. INVEST. IMOB. VOTORANTIM PATRIMONIAL XII'
      },
      {
        ticker: 'VULC3',
        category: 'SHARES',
        isin: 'BRVULCACNOR2',
        description: 'VULCABRAS/AZALEIA S.A.'
      },
      {
        ticker: 'VVAR3',
        category: 'SHARES',
        isin: 'BRVVARACNOR1',
        description: 'VIA VAREJO S.A.'
      },
      {
        ticker: 'VVPR11',
        category: 'FUNDS',
        isin: 'BRVVPRCTF002',
        description: 'FDO INV IMOB - V2 PROPERTIES'
      },
      {
        ticker: 'VXXV11',
        category: 'FUNDS',
        isin: 'BRVXXVCTF004',
        description: 'VX XVI - FDO INV. IMOB.'
      },
      {
        ticker: 'W1AB34',
        category: 'BDR',
        isin: 'BRW1ABBDR005',
        description: 'WABTEC CORP'
      },
      {
        ticker: 'W1DA34',
        category: 'BDR',
        isin: 'BRW1DABDR001',
        description: 'WORKDAY INC'
      },
      {
        ticker: 'W1DC34',
        category: 'BDR',
        isin: 'BRW1DCBDR007',
        description: 'WESTERN DIGITAL CORP'
      },
      {
        ticker: 'W1EC34',
        category: 'BDR',
        isin: 'BRW1ECBDR005',
        description: 'WEC ENERGY GROUP INC'
      },
      {
        ticker: 'W1EL34',
        category: 'BDR',
        isin: 'BRW1ELBDR006',
        description: 'WELLTOWER INC'
      },
      {
        ticker: 'W1HR34',
        category: 'BDR',
        isin: 'BRW1HRBDR006',
        description: 'WHIRLPOOL CORP'
      },
      {
        ticker: 'W1LT34',
        category: 'BDR',
        isin: 'BRW1LTBDR004',
        description: 'WILLIS TOWERS WATSON PLC'
      },
      {
        ticker: 'W1MB34',
        category: 'BDR',
        isin: 'BRW1MBBDR000',
        description: 'THE WILLIAMS COS INC'
      },
      {
        ticker: 'W1MC34',
        category: 'BDR',
        isin: 'BRW1MCBDR008',
        description: 'WASTE MANAGEMENT INC'
      },
      {
        ticker: 'W1RK34',
        category: 'BDR',
        isin: 'BRW1RKBDR000',
        description: 'WESTROCK CO'
      },
      {
        ticker: 'W1YC34',
        category: 'BDR',
        isin: 'BRW1YCBDR003',
        description: 'WEYERHAEUSER CO'
      },
      {
        ticker: 'W1YN34',
        category: 'BDR',
        isin: 'BRW1YNBDR000',
        description: 'WYNN RESORTS LTD'
      },
      {
        ticker: 'WABC34',
        category: 'BDR',
        isin: 'BRWABCBDR007',
        description: 'WESTERN ALLIANCE BANCORPORATION'
      },
      {
        ticker: 'WALM34',
        category: 'BDR',
        isin: 'BRWALMBDR005',
        description: 'WALMART INC.'
      },
      {
        ticker: 'WATC34',
        category: 'BDR',
        isin: 'BRWATCBDR009',
        description: 'WATERS CORP'
      },
      {
        ticker: 'WEGE3',
        category: 'SHARES',
        isin: 'BRWEGEACNOR0',
        description: 'WEG S.A.'
      },
      {
        ticker: 'WFCO34',
        category: 'BDR',
        isin: 'BRWFCOBDR009',
        description: 'WELLS FARGO & COMPANY'
      },
      {
        ticker: 'WGBA34',
        category: 'BDR',
        isin: 'BRWGBABDR008',
        description: 'WALGREENS BOOTS ALLIANCE INC'
      },
      {
        ticker: 'WHRL3',
        category: 'SHARES',
        isin: 'BRWHRLACNOR5',
        description: 'WHIRLPOOL S.A.'
      },
      {
        ticker: 'WHRL4',
        category: 'SHARES',
        isin: 'BRWHRLACNPR2',
        description: 'WHIRLPOOL S.A.'
      },
      {
        ticker: 'WIRE3',
        category: 'SHARES',
        isin: 'BRWIREACNOR8',
        description: 'WIREX CABLE S.A.'
      },
      {
        ticker: 'WIZS3',
        category: 'SHARES',
        isin: 'BRWIZSACNOR1',
        description: 'WIZ SOLUÇÕES E CORRETAGEM DE SEGUROS S.A.'
      },
      {
        ticker: 'WLMM3',
        category: 'SHARES',
        isin: 'BRWLMMACNOR6',
        description: 'WLM PART. E COMÉRCIO DE MÁQUINAS E VEÍCULOS S.A.'
      },
      {
        ticker: 'WLMM4',
        category: 'SHARES',
        isin: 'BRWLMMACNPR3',
        description: 'WLM PART. E COMÉRCIO DE MÁQUINAS E VEÍCULOS S.A.'
      },
      {
        ticker: 'WPLZ11',
        category: 'FUNDS',
        isin: 'BRWPLZCTF004',
        description: 'SHOPPING WEST PLAZA FDO INV IMOB'
      },
      {
        ticker: 'WSON33',
        category: 'BDR',
        isin: 'BRWSONBDR009',
        description: 'WILSON SONS LTD.'
      },
      {
        ticker: 'WTSP11B',
        category: 'FUNDS',
        isin: 'BRWTSPCTF002',
        description: 'FDO INV IMOB - OURINVEST RE I'
      },
      {
        ticker: 'WUNI34',
        category: 'BDR',
        isin: 'BRWUNIBDR007',
        description: 'THE WESTERN UNION COMPANY'
      },
      {
        ticker: 'X1EL34',
        category: 'BDR',
        isin: 'BRX1ELBDR005',
        description: 'XCEL ENERGY INC'
      },
      {
        ticker: 'X1LN34',
        category: 'BDR',
        isin: 'BRX1LNBDR006',
        description: 'XILINX INC'
      },
      {
        ticker: 'X1YL34',
        category: 'BDR',
        isin: 'BRX1YLBDR003',
        description: 'XYLEM INC'
      },
      {
        ticker: 'XPCE11',
        category: 'FUNDS',
        isin: 'BRXPCECTF006',
        description: 'XPCE RE FDO INV IMOB'
      },
      {
        ticker: 'XPCI11',
        category: 'FUNDS',
        isin: 'BRXPCICTF007',
        description: 'XP CREDITO IMOBILIÁRIO - FDO INV IMOB'
      },
      {
        ticker: 'XPCM11',
        category: 'FUNDS',
        isin: 'BRXPCMCTF009',
        description: 'XP CORPORATE MACAÉ FDO INV IMOB - FII'
      },
      {
        ticker: 'XPHT11',
        category: 'FUNDS',
        isin: 'BRXPHTCTF003',
        description: 'XP HOTÉIS - FDO INV IMOB - FII'
      },
      {
        ticker: 'XPHT12',
        category: 'FUNDS',
        isin: 'BRXPHTCTF011',
        description: 'XP HOTÉIS - FDO INV IMOB - FII'
      },
      {
        ticker: 'XPHT13',
        category: 'FUNDS',
        isin: 'BRXPHTCTF029',
        description: 'XP HOTÉIS - FDO INV IMOB - FII'
      },
      {
        ticker: 'XPIE11',
        category: 'FUNDS',
        isin: 'BRXPIECTF003',
        description: 'XP INFRA II FDO DE INV PART IE'
      },
      {
        ticker: 'XPIN11',
        category: 'FUNDS',
        isin: 'BRXPINCTF004',
        description: 'XP INDUSTRIAL FDO INV IMOB - FII'
      },
      {
        ticker: 'XPLG11',
        category: 'FUNDS',
        isin: 'BRXPLGCTF002',
        description: 'XP LOG FDO INV IMOB - FII'
      },
      {
        ticker: 'XPML11',
        category: 'FUNDS',
        isin: 'BRXPMLCTF000',
        description: 'XP MALLS FDO INV IMOB FII'
      },
      {
        ticker: 'XPOM11',
        category: 'FUNDS',
        isin: 'BRXPOMCTF004',
        description: 'FDO INV PART IE XP OMEGA I'
      },
      {
        ticker: 'XPPR11',
        category: 'FUNDS',
        isin: 'BRXPPRCTF000',
        description: 'XP PROPERTIES FDO. INV. IMOB.'
      },
      {
        ticker: 'XPSF11',
        category: 'FUNDS',
        isin: 'BRXPSFCTF009',
        description: 'XP SELECTION FDO DE FUNDOS INV IMOB - FII'
      },
      {
        ticker: 'XRAY34',
        category: 'BDR',
        isin: 'BRXRAYBDR005',
        description: 'DENTSPLY SIRONA INC'
      },
      {
        ticker: 'XRXB34',
        category: 'BDR',
        isin: 'BRXRXBBDR005',
        description: 'XEROX HOLDINGS CORPORATION'
      },
      {
        ticker: 'XTED11',
        category: 'FUNDS',
        isin: 'BRXTEDCTF006',
        description: 'TRX EDIFÍCIOS CORPORATIVOS FDO INV IMOB - FII'
      },
      {
        ticker: 'YCHY11',
        category: 'FUNDS',
        isin: 'BRYCHYCTF009',
        description: 'RIZA ARCTIUM REAL ESTATE FDO INV IMOB'
      },
      {
        ticker: 'YDUQ3',
        category: 'SHARES',
        isin: 'BRYDUQACNOR3',
        description: 'YDUQS PARTICIPACOES S.A.'
      },
      {
        ticker: 'YOUC3',
        category: 'SHARES',
        isin: 'BRYOUCACNOR0',
        description: 'YOU INC INCORPORADORA E PARTICIPAÇÕES S.A.'
      },
      {
        ticker: 'YPEA11',
        category: 'FUNDS',
        isin: 'BRYPEACTF016',
        description: 'YPEARTS AUDIOVISUAL LTDA.'
      },
      {
        ticker: 'YUMR34',
        category: 'BDR',
        isin: 'BRYUMRBDR006',
        description: 'YUM BRANDS INC'
      },
      {
        ticker: 'Z1BH34',
        category: 'BDR',
        isin: 'BRZ1BHBDR007',
        description: 'ZIMMER BIOMET HOLDINGS INC'
      },
      {
        ticker: 'Z1IO34',
        category: 'BDR',
        isin: 'BRZ1IOBDR008',
        description: 'ZIONS BANCORPORATION NA'
      },
      {
        ticker: 'Z1TS34',
        category: 'BDR',
        isin: 'BRZ1TSBDR006',
        description: 'ZOETIS INC'
      }
    ])
}