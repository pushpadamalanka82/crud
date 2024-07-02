select idno1, count(*) as RowCount,  sum(amt) as AmountTotal from bi1_tab group by idno1
