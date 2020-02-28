const Armas = [
  {
    label: "Simples, Corpo a Corpo",
    options: [
      {
        value: "adaga",
        label: "Adaga",
        dano: "1d4",
        critico: "19",
        tipo: "Perfuração",
        alcance: "Curto",
        pericias: ["luta", "pontaria"]
      },
    ]
  },
  {
    label: "Simples, Distância",
    options: [
      {
        value: "arco_curto",
        label: "Arco curto",
        dano: "1d6",
        critico: "x3",
        tipo: "Perfuração",
        alcance: "Médio",
        pericias: ["pontaria"]
      },
    ]
  },
  {
    label: "Marciais, Corpo a Corpo",
    options: [
      {
        value: "espada_longa",
        label: "Espada longa",
        dano: "1d8",
        critico: "19",
        tipo: "Corte",
        alcance: "Melee",
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