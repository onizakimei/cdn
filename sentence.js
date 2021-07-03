function getRandomFood() {
    var result
    var sentence = [
      '杜格',
      '喜碗',
      '優格',
      '金罐',
      '星球'
    ];
    var random = Math.floor(Math.random() * (sentence.length));    
    result = sentence[random]    
    return result
}
