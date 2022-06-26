let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let persons in names){
    console.log('Olá, '+ names[persons]);
  }