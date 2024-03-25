function lifePhase(age) {
  switch (true) {
    case (age < 0 || age > 140):
    return `This is not a valid age`
    
    case (age <= 3):
    return `baby`;
    case (age >= 4 && age <= 12):
    return `child`;
    case (age >= 13 && age <= 19):
    return `teen`;
    case (age >= 20 && age <= 64):
    return `adult`;
    case (age >= 65):
    return `senior citizen`;
  }
}
