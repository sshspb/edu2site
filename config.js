module.exports = {
  "tbTables": {
    "DHD": { 
      filename: "Inet_ClearDLS.txt", 
      headers: "LACC,SLDE,PRIB,NAKL,ITUP,ITDR,TRAC,TRAD,DHDC,DHDS" },
    "NAKL": { 
      filename: "Inet_Naklad.txt", 
      headers: "LACC,VID,RAS" },
    "NAKCF": { 
      filename: "Inet_NakladCF.txt", 
      headers: "LACC,VID,FAKK,FAKN,KAFK,KAFN,RAS" },
    "PER": { 
      filename: "Inet_PerevodLS.txt", 
      headers: "LACC,REVERS,DAT,VID,SPEC,SUMM,NOTE" },
    "PRI": { 
      filename: "Inet_Oplata_All.txt", 
      headers: "LACC,DEB,DAT,PRI,PLP,FIO,DOG,CRE,COM" },
    "RCF": { 
      filename: "Inet_RashodLS.txt", 
      headers: "contract,eclass,date,species,sum,dct,note,," },
    "SME": { 
      filename: "Inet_SmetaLSV.txt", 
      headers: "contract,code,name,percent,remains,income,outlay,balance" },
    "UNI": { 
      filename: "Inet_LS_AllFin.txt", 
      headers: "contract,DEPKOD,DEPABBR,DEPNAME,DIVKOD,DIVABBR,DIVNAME,,,,,,,source" },
    "USR": { 
      filename: "Inet_PolzNew.txt", 
      headers: "steward,contract,,,,,,,," }
  },
  "version": "v0.1.4 from 13.12.2017"
};
