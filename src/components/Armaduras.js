const Armaduras = [
  {
    value: "sem-armadura",
    label: "--",
    defesa: 0,
    penalidade: 0,
  },
  {
    label: "Armaduras leves",
    options: [
      {
        value: "armadura-acolchoada",
        label: "Armadura acolchoada",
        defesa: 1,
        penalidade: 0,
      },
      {
        value: "armadura-couro",
        label: "Armadura de couro",
        defesa: 2,
        penalidade: 0,
      },
      {
        value: "couro-batido",
        label: "Couro batido",
        defesa: 3,
        penalidade: -1,
      },
      {
        value: "gibao-peles",
        label: "Gibão de peles",
        defesa: 4,
        penalidade: -3,
      },
      {
        value: "couraca",
        label: "Couraça",
        defesa: 5,
        penalidade: -4,
      },
    ]
  },
  {
    label: "Armaduras pesadas",
    options: [
      {
        value: "brunea",
        label: "Brunea",
        defesa: 5,
        penalidade: -2,
      },
      {
        value: "cota-malha",
        label: "Cota de malha",
        defesa: 6,
        penalidade: -2,
      },
      {
        value: "loriga-segmentada",
        label: "Loriga segmentada",
        defesa: 7,
        penalidade: -3,
      },
      {
        value: "meia-armadura",
        label: "Meia armadura",
        defesa: 8,
        penalidade: -4,
      },
      {
        value: "armadura-completa",
        label: "Armadura completa",
        defesa: 10,
        penalidade: -5,
      },
    ]
  },
];

const Escudos = [
  {
    value: "sem-escudo",
    label: "--",
    defesa: 0,
    penalidade: 0,
  },
  {
    value: "escudo-leve",
    label: "Escudo leve",
    defesa: 1,
    penalidade: -1,
  },
  {
    value: "escudo-pesado",
    label: "Escudo pesado",
    defesa: 2,
    penalidade: -2,
  },
];

export { Armaduras, Escudos };