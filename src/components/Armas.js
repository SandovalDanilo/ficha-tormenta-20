const Armas = [
  {
    label: "Simples, Corpo a Corpo, Leves",
    options: [
      {
        value: "Ataque desarmado",
        label: "Ataque desarmado",
        dano: "1d3",
        critico: "x2",
        tipo: "Esmagamento",
        alcance: "--",
        pericias: ["luta"]
      },
      {
        value: "Adaga",
        label: "Adaga",
        dano: "1d4",
        critico: "19",
        tipo: "Perfuração",
        alcance: "Curto",
        pericias: ["luta", "pontaria"]
      },
      {
        value: "Espada curta",
        label: "Espada curta",
        dano: "1d6",
        critico: "19",
        tipo: "Perfuração",
        alcance: "--",
        pericias: ["luta"]
      },
      {
        value: "Manopla",
        label: "Manopla",
        dano: "1d4",
        critico: "x2",
        tipo: "Esmagamento",
        alcance: "--",
        pericias: ["luta"]
      },
    ]
  },
  {
    label: "Simples, Corpo a Corpo, Uma Mão",
    options: [
      {
        value: "Clava",
        label: "Clava",
        dano: "1d6",
        critico: "x2",
        tipo: "Esmagamento",
        alcance: "--",
        pericias: ["luta"]
      },
      {
        value: "Lança",
        label: "Lança",
        dano: "1d6",
        critico: "x2",
        tipo: "Perfuração",
        alcance: "Curto",
        pericias: ["luta"]
      },
      {
        value: "Maça",
        label: "Maça",
        dano: "1d8",
        critico: "x2",
        tipo: "Esmagamento",
        alcance: "--",
        pericias: ["luta"]
      },
    ]
  },
  {
    label: "Simples, Corpo a Corpo, Duas Mãos",
    options: [
      {
        value: "Bordão",
        label: "Bordão",
        dano: "1d6/1d6",
        critico: "x2",
        tipo: "Esmagamento",
        alcance: "--",
        pericias: ["luta"]
      },
      {
        value: "Pique",
        label: "Pique",
        dano: "1d8",
        critico: "x2",
        tipo: "Perfuração",
        alcance: "--",
        pericias: ["luta"]
      },
      {
        value: "Tacape",
        label: "Tacape",
        dano: "1d10",
        critico: "x2",
        tipo: "Esmagamento",
        alcance: "--",
        pericias: ["luta"]
      },
    ]
  },
  {
    label: "Simples, Distância",
    options: [
      {
        value: "Ácido",
        label: "Ácido",
        dano: "2d4",
        critico: "--",
        tipo: "Ácido",
        alcance: "Curto",
        pericias: ["pontaria"]
      },
      {
        value: "Água benta",
        label: "Água benta",
        dano: "2d6",
        critico: "--",
        tipo: "Luz",
        alcance: "Curto",
        pericias: ["pontaria"]
      },
      {
        value: "Arco curto",
        label: "Arco curto",
        dano: "1d6",
        critico: "x3",
        tipo: "Perfuração",
        alcance: "Médio",
        pericias: ["pontaria"]
      },
      {
        value: "Azagaia",
        label: "Azagaia",
        dano: "1d6",
        critico: "x2",
        tipo: "Perfuração",
        alcance: "Médio",
        pericias: ["pontaria"]
      },
      {
        value: "Besta leve",
        label: "Besta leve",
        dano: "1d8",
        critico: "19",
        tipo: "Perfuração",
        alcance: "Médio",
        pericias: ["pontaria"]
      },
      {
        value: "Fogo alquímico",
        label: "Fogo alquímico",
        dano: "1d4",
        critico: "--",
        tipo: "Fogo",
        alcance: "Curto",
        pericias: ["pontaria"]
      },
      {
        value: "Funda",
        label: "Funda",
        dano: "1d4",
        critico: "x2",
        tipo: "Esmagamento",
        alcance: "Médio",
        pericias: ["pontaria"]
      },
      {
        value: "Granada",
        label: "Granada",
        dano: "4d4",
        critico: "--",
        tipo: "Trovão",
        alcance: "Curto",
        pericias: ["pontaria"]
      },
    ]
  },
  {
    label: "Marciais, Corpo a Corpo, Leves",
    options: [
      {
        value: "Escudo leve",
        label: "Escudo leve",
        dano: "1d4",
        critico: "x2",
        tipo: "Esmagamento",
        alcance: "--",
        pericias: ["luta"]
      },
      {
        value: "Machadinha",
        label: "Machadinha",
        dano: "1d6",
        critico: "x3",
        tipo: "Corte",
        alcance: "Curto",
        pericias: ["luta"]
      },
    ]
  },
  {
    label: "Marciais, Corpo a Corpo, Uma Mão",
    options: [
      {
        value: "Espada longa",
        label: "Espada longa",
        dano: "1d8",
        critico: "19",
        tipo: "Corte",
        alcance: "--",
        pericias: ["luta"]
      },
    ]
  },
  {
    label: "Marciais, Distância",
    options: [
      {
        value: "arco_longo",
        label: "Arco longo",
        dano: "1d6",
        critico: "x3",
        tipo: "Perfuração",
        alcance: "Médio",
        pericias: ["pontaria"]
      },
    ]
  },
];


export { Armas };