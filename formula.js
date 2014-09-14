function yearlyFormula(stateSun, panelArea) {
    
    var solarPanelYield = .14;
    var performanceRatio = .9;
    
    var Energy = 1.0 * panelArea * solarPanelYield * stateSun * performanceRatio;
    
    return Energy;
    
}

function instantFormula(cloudCover, sunAngle){
    
    var Rnot = 990.0 * Math.sin(sunAngle) - 30;
    
    var cloudCoverMultiple = ( 1.0 - ( .75 * ( Math.pow( cloudCover , 3.4) );
    
    var convertUnits = .01;
    
    var instant = Rnot * cloudCoverMultiple;
    
    var instantPostUnitCovenrsion = instant * convertUnits;
    
    return instantPostUnitConversion;


}