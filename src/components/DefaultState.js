import { Classes } from './Classes';
import { ListaPericias } from './Pericias';

const EmptyState = {
  nome: "",
  raca: "",
  origem: "",
  jogador: "",
  classe: Classes[0],
  nivel: 1,
  atributos: {
    for: 10,
    for_mod: 0,
    des: 10,
    des_mod: 0,
    con: 10,
    con_mod: 0,
    int: 10,
    int_mod: 0,
    sab: 10,
    sab_mod: 0,
    car: 10,
    car_mod: 0,
  },
  pontos: {
    vida_max: 1,
    vida_atual: 1,
    vida_calculada: true,
    mana_max: 1,
    mana_atual: 1,
    mana_calculada: true,
  },
  pericias: ListaPericias,
  ataques: [],
  defesa: {
    armadura: {
      value: "sem-armadura",
      label: "--",
      defesa: 0,
      penalidade: 0,
    },
    escudo: {
      value: "sem-escudo",
      label: "--",
      defesa: 0,
      penalidade: 0,
    },
    outros: 0,
  },
  proficiencias: "",
  habilidades: "",
  magias: "",
  equipamento: "",
  tibar: 0,
  tibar_ouro: 0,
}

const DefaultState = {
  nome: 'Drontaz',
  raca: 'Anão',
  origem: 'Acólito',
  jogador: 'Você',
  classe: {
    value: 'clerigo',
    label: 'Clérigo',
    vida_inicial: 16,
    vida_por_nivel: 4,
    mana_por_nivel: 5
  },
  nivel: 3,
  atributos: {
    'for': 16,
    for_mod: 3,
    des: 10,
    des_mod: 0,
    con: 18,
    con_mod: 4,
    'int': 12,
    int_mod: 1,
    sab: 16,
    sab_mod: 3,
    car: 10,
    car_mod: 0
  },
  pontos: {
    vida_max: 41,
    vida_atual: 41,
    vida_calculada: false,
    mana_max: 18,
    mana_atual: 18,
    mana_calculada: false
  },
  pericias: {
    acrobacia: {
      nome: 'Acrobacia',
      atributo: 'des',
      treino: false,
      outros: 0
    },
    adestramento: {
      nome: 'Adestramento',
      atributo: 'car',
      treino: false,
      outros: 0
    },
    atletismo: {
      nome: 'Atletismo',
      atributo: 'for',
      treino: false,
      outros: 0
    },
    atuacao: {
      nome: 'Atuação',
      atributo: 'car',
      treino: false,
      outros: 0
    },
    cavalgar: {
      nome: 'Cavalgar',
      atributo: 'des',
      treino: false,
      outros: 0
    },
    conhecimento: {
      nome: 'Conhecimento',
      atributo: 'int',
      treino: false,
      outros: 0
    },
    cura: {
      nome: 'Cura',
      atributo: 'sab',
      treino: true,
      outros: 0
    },
    diplomacia: {
      nome: 'Diplomacia',
      atributo: 'car',
      treino: false,
      outros: 0
    },
    enganacao: {
      nome: 'Enganação',
      atributo: 'car',
      treino: false,
      outros: 0
    },
    fortitude: {
      nome: 'Fortitude',
      atributo: 'con',
      treino: false,
      outros: 0
    },
    furtividade: {
      nome: 'Furtividade',
      atributo: 'des',
      treino: false,
      outros: 0
    },
    guerra: {
      nome: 'Guerra',
      atributo: 'int',
      treino: false,
      outros: 0
    },
    iniciativa: {
      nome: 'Iniciativa',
      atributo: 'des',
      treino: false,
      outros: 0
    },
    intimidacao: {
      nome: 'Intimidação',
      atributo: 'car',
      treino: false,
      outros: 0
    },
    intuicao: {
      nome: 'Intuição',
      atributo: 'sab',
      treino: false,
      outros: 0
    },
    investigacao: {
      nome: 'Investigação',
      atributo: 'int',
      treino: false,
      outros: 0
    },
    jogatina: {
      nome: 'Jogatina',
      atributo: 'car',
      treino: false,
      outros: 0
    },
    ladinagem: {
      nome: 'Ladinagem',
      atributo: 'des',
      treino: false,
      outros: 0
    },
    luta: {
      nome: 'Luta',
      atributo: 'for',
      treino: false,
      outros: 0
    },
    misticismo: {
      nome: 'Misticismo',
      atributo: 'int',
      treino: false,
      outros: 0
    },
    navegacao: {
      nome: 'Navegação',
      atributo: 'sab',
      treino: false,
      outros: 0
    },
    nobreza: {
      nome: 'Nobreza',
      atributo: 'int',
      treino: false,
      outros: 0
    },
    percepcao: {
      nome: 'Percepção',
      atributo: 'sab',
      treino: true,
      outros: 0
    },
    pontaria: {
      nome: 'Pontaria',
      atributo: 'des',
      treino: false,
      outros: 0
    },
    reflexos: {
      nome: 'Reflexos',
      atributo: 'des',
      treino: false,
      outros: 0
    },
    religiao: {
      nome: 'Religião',
      atributo: 'sab',
      treino: true,
      outros: 0
    },
    sobrevivencia: {
      nome: 'Sobrevivência',
      atributo: 'sab',
      treino: false,
      outros: 0
    },
    vontade: {
      nome: 'Vontade',
      atributo: 'sab',
      treino: true,
      outros: 0
    }
  },
  ataques: {
    '0': {
      value: 'Martelo de guerra',
      label: 'Martelo de guerra',
      bonus: '+6',
      dano: '1d8+3',
      critico: 'x3',
      tipo: 'Esmagamento',
      alcance: '--'
    }
  },
  defesa: {
    armadura: {
      value: 'brunea',
      label: 'Brunea',
      defesa: 5,
      penalidade: -2
    },
    escudo: {
      value: 'sem-escudo',
      label: '--',
      defesa: 0,
      penalidade: 0
    },
    outros: 0
  },
  proficiencias: '- Anão / Proficiências\nArmaduras pesadas e escudos\n\n- Anão / Devagar e Sempre\nDeslocamento 6m; sem redução por armadura/carga\n\n- Anão / Duro como Pedra\n+3 Vida no Nvl 1; +1 Vida / nível depois\n\n- Anão / Conhecimento das Rochas\nVisão no escuro, +2 em testes de Percepção e Sobrevivência no subterrâneo\n\n- Acólito / Curandeiro\nAção completa: teste de Cura (CD 15) em uma criatura, cura 1d6 PV, +1d6 / 5 pontos acima do CD (2d6 resultado 20, 3d6 resultado 25 etc). 1/dia numa mesma criatura',
  habilidades: '- Clérigo 1 / Devoto dos Deuses\nNão usar armas cortantes ou perfurantes\n\n- Clérigo 1 / Magias\nAtributo-chave: Sabedoria; + Mod. Sab em PM máximos\n\n- Clérigo 2 / Poder de Clérigo / Arma Sagrada\n\n- Clérigo 3 / Poder de Clérigo / Canalizar Energia Positiva',
  magias: '- 1o Círculo \nArma Espiritual\nBênção\nCurar Ferimentos\nEscudo da Fé\nOrientação',
  equipamento: 'Símbolo sagrado de sua divindade\nTraje de sacerdote\nKit de medicamentos',
  tibar: '14',
  tibar_ouro: 0,
}

export { EmptyState, DefaultState }