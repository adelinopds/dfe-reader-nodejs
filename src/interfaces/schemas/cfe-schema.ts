export interface CfeSchema {
  _attributes: {
    id: string;
    chcanc?: string;
  };
  ide: {
    cuf: string;
    cnf: string;
    mod: string;
    nseriesat: string;
    ncfe: string;
    demi: string;
    hemi: string;
    cdv: string;
    tpamb: string;
    cnpj: string;
    signac: string;
    numerocaixa: string;
  };
  emit: {
    cnpj: string;
    xnome: string;
    xfant: string;
    enderemit: {
      xlgr: string;
      nro: string;
      xcpl: string;
      xbairro: string;
      xmun: string;
      cep: string;
    };
    ie?: string;
    cregtrib: string;
    indratissqn: string;
  };
  dest: {
    cnpj: string;
    cpf: string;
    xnome: string;
  };
  det: DetSchema[];
  total: {
    icmstot: string;
    vcfe: string;
  };
  pgto: { mp: string; vtroco: string };
}

export interface DetSchema {
  _attributes: { nitem: string };
  prod: {
    cprod: string;
    cean: string;
    xprod: string;
    ncm: string;
    cfop: string;
    ucom: string;
    qcom: string;
    vuncom: string;
    vprod: string;
    indregra: string;
    vdesc: string;
    vitem: string;
  };
  imposto: {
    icms: {
      icms: {
        orig: string;
        cst: string;
      };
      icmssn: {
        orig: string;
        csosn: string;
      };
    };
    pis: {
      pisaliq: { cst: string };
      pisqtde: { cst: string };
      pisnt: { cst: string };
      pissn: { cst: string };
      pisoutr: { cst: string };
    };
    cofins: {
      cofinsaliq: { cst: string };
      cofinsqtde: { cst: string };
      cofinsnt: { cst: string };
      cofinssn: { cst: string };
      cofinsoutr: { cst: string };
    };
  };
}
