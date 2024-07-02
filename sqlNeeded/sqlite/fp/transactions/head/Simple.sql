select bi_astab.idno as id, RTRIM(ParentVoucherTable.nam) as ParentVoucherName,
SUBSTRING(ParentVoucherTable.nam7, 1,1) as ParentVoucherType,
 SUBSTRING(ParentVoucherTable.nam7, 2,1) as ParentVoucherSign,
 RTRIM(cs_rec_cod.nam) as VoucherName ,
CAST(bi_astab.bl_no AS int) AS VoucherNumber,
bi_astab.da as Date,
 bi_astab.acc_cod as HeadAccCode,
RTRIM(acc_cod_tab.nam) as HeadAccountName
from bi_astab left join cs_rec_cod on bi_astab.bi_bok_cod= cs_rec_cod.acc_cod
left join cs_rec_cod as ParentVoucherTable on cs_rec_cod.amt1= ParentVoucherTable.acc_cod
left join acc_cod_tab on bi_astab.acc_cod= acc_cod_tab.acc_cod
