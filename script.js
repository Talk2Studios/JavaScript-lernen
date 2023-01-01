//var drop = document.getElementById("b1").addEventListener("click", dropd("b1"));

/*function dropd(button){
    var element = document.getElementById(button);
    if(document.getElementById(button).className == "cdropdown"){
        element.classList.remove("cdropdown")
    }else{

        element.classList.add("cdropdown")
    }
}
function but1() {
    let but1 = document.getElementById("b1").className
    dropd(but1);
}


document.getElementById("b1").addEventListener("click", dropd("b1"));

function dropd(button){
    var element = document.getElementById(button);
    if(document.getElementById(button).className == "up"){
        element.classList.replace("up", "down")
    }else{

        element.classList.replace("down", "up")
    }
}
*/
function but1() {
    var element = document.getElementById("b1");
    element.classList.toggle("cdropdown");
}
function but2() {
    var element = document.getElementById("b2");
    element.classList.toggle("cdropdown");
}
function but3() {
    var element = document.getElementById("b3");
    element.classList.toggle("cdropdown");
}
//autotextwrite --------------------------------------------------------------------------------------------------------------------
//business---------------------------------------------------------
function autewr() {
    var batwin = document.getElementById("atw-input").innerHTML
    batwin = "B|"
    document.getElementById("atw-input").innerHTML = batwin
    setTimeout(bautewr2, 100)
    function bautewr2() {
        batwin = "Bu|"
        document.getElementById("atw-input").innerHTML = batwin
        setTimeout(bautewr3, 100)
        function bautewr3() {
            batwin = "Bus|"
            document.getElementById("atw-input").innerHTML = batwin
            setTimeout(bautewr4, 100)
            function bautewr4() {
                batwin = "Busi|"
                document.getElementById("atw-input").innerHTML = batwin
                setTimeout(bautewr5, 100)
                function bautewr5() {
                    batwin = "Busin|"
                    document.getElementById("atw-input").innerHTML = batwin
                    setTimeout(bautewr6, 100)
                    function bautewr6() {
                        batwin = "Busine|"
                        document.getElementById("atw-input").innerHTML = batwin
                        setTimeout(bautewr7, 100)
                        function bautewr7() {
                            batwin = "Busines|"
                            document.getElementById("atw-input").innerHTML = batwin
                            setTimeout(bautewr8, 100)
                            function bautewr8() {
                                batwin = "Business|"
                                document.getElementById("atw-input").innerHTML = batwin
                                setTimeout(bautewr7b, 3000)
                            }
                        }
                    }
                }
            }
        }
    }
}
//business back ---------------------------------------------------------
function bautewr7b() {
    batwin = "Busines|"
    document.getElementById("atw-input").innerHTML = batwin
    setTimeout(bautewr6b, 100)
    function bautewr6b() {
        batwin = "Busine|"
        document.getElementById("atw-input").innerHTML = batwin
        setTimeout(bautewr5b, 100)
        function bautewr5b() {
            batwin = "Busin|"
            document.getElementById("atw-input").innerHTML = batwin
            setTimeout(bautewr4b, 100)
            function bautewr4b() {
                batwin = "Busi|"
                document.getElementById("atw-input").innerHTML = batwin
                setTimeout(bautewr3b, 100)
                function bautewr3b() {
                    batwin = "Bus|"
                    document.getElementById("atw-input").innerHTML = batwin
                    setTimeout(bautewr2b, 100)
                    function bautewr2b() {
                        batwin = "Bu|"
                        document.getElementById("atw-input").innerHTML = batwin
                        setTimeout(bautewr1b, 100)
                        function bautewr1b() {
                            batwin = "B|"
                            document.getElementById("atw-input").innerHTML = batwin
                            setTimeout(bautewrb, 100)
                            function bautewrb() {
                                batwin = "|"
                                document.getElementById("atw-input").innerHTML = batwin
                                setTimeout(dautewr, 500)
                            }
                        }
                    }
                }
            }
        }
    }
}
//Developer ---------------------------------------------------------
function dautewr() {
    var datwin = document.getElementById("atw-input").innerHTML
    datwin = "D|"
    document.getElementById("atw-input").innerHTML = datwin
    setTimeout(dautewr2, 100)
    function dautewr2() {
        datwin = "De|"
        document.getElementById("atw-input").innerHTML = datwin
        setTimeout(dautewr3, 100)
        function dautewr3() {
            datwin = "Dev|"
            document.getElementById("atw-input").innerHTML = datwin
            setTimeout(dautewr4, 100)
            function dautewr4() {
                datwin = "Deve|"
                document.getElementById("atw-input").innerHTML = datwin
                setTimeout(dautewr5, 100)
                function dautewr5() {
                    datwin = "Devel|"
                    document.getElementById("atw-input").innerHTML = datwin
                    setTimeout(dautewr6, 100)
                    function dautewr6() {
                        datwin = "Develo|"
                        document.getElementById("atw-input").innerHTML = datwin
                        setTimeout(dautewr7, 100)
                        function dautewr7() {
                            datwin = "Develop|"
                            document.getElementById("atw-input").innerHTML = datwin
                            setTimeout(dautewr8, 100)
                            function dautewr8() {
                                datwin = "Develope|"
                                document.getElementById("atw-input").innerHTML = datwin
                                setTimeout(dautewr9, 100)
                                function dautewr9() {
                                    datwin = "Developer|"
                                    document.getElementById("atw-input").innerHTML = datwin
                                    setTimeout(dautewr10, 100)
                                    function dautewr10() {
                                        datwin = "Developers|"
                                        document.getElementById("atw-input").innerHTML = datwin
                                        setTimeout(dautewr9b, 3000)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
//Developer back ---------------------------------------------------------
function dautewr9b() {
    var datwin = document.getElementById("atw-input").innerHTML
    datwin = "Developer|"
    document.getElementById("atw-input").innerHTML = datwin
    setTimeout(dautewr8b, 100)
    function dautewr8b() {
        datwin = "Develope|"
        document.getElementById("atw-input").innerHTML = datwin
        setTimeout(dautewr7b, 100)
        function dautewr7b() {
            datwin = "Develop|"
            document.getElementById("atw-input").innerHTML = datwin
            setTimeout(dautewr6b, 100)
            function dautewr6b() {
                datwin = "Develo|"
                document.getElementById("atw-input").innerHTML = datwin
                setTimeout(dautewr5, 100)
                function dautewr5() {
                    datwin = "Devel|"
                    document.getElementById("atw-input").innerHTML = datwin
                    setTimeout(dautewr4b, 100)
                    function dautewr4b() {
                        datwin = "Deve|"
                        document.getElementById("atw-input").innerHTML = datwin
                        setTimeout(dautewr3b, 100)
                        function dautewr3b() {
                            datwin = "Dev|"
                            document.getElementById("atw-input").innerHTML = datwin
                            setTimeout(dautewr2b, 100)
                            function dautewr2b() {
                                datwin = "De|"
                                document.getElementById("atw-input").innerHTML = datwin
                                setTimeout(dautewr1b, 100)
                                function dautewr1b() {
                                    datwin = "D|"
                                    document.getElementById("atw-input").innerHTML = datwin
                                    setTimeout(dautewrb, 100)
                                    function dautewrb() {
                                        datwin = "|"
                                        document.getElementById("atw-input").innerHTML = datwin
                                        setTimeout(cautewr, 500)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
//Companys ---------------------------------------------------------
function cautewr() {
    var catwin = document.getElementById("atw-input").innerHTML
    catwin = "C|"
    document.getElementById("atw-input").innerHTML = catwin
    setTimeout(cautewr2, 100)
    function cautewr2() {
        catwin = "Co|"
        document.getElementById("atw-input").innerHTML = catwin
        setTimeout(cautewr3, 100)
        function cautewr3() {
            catwin = "Com|"
            document.getElementById("atw-input").innerHTML = catwin
            setTimeout(cautewr4, 100)
            function cautewr4() {
                catwin = "Comp|"
                document.getElementById("atw-input").innerHTML = catwin
                setTimeout(cautewr5, 100)
                function cautewr5() {
                    catwin = "Compa|"
                    document.getElementById("atw-input").innerHTML = catwin
                    setTimeout(cautewr6, 100)
                    function cautewr6() {
                        catwin = "Copman|"
                        document.getElementById("atw-input").innerHTML = catwin
                        setTimeout(cautewr7, 100)
                        function cautewr7() {
                            catwin = "Copmany|"
                            document.getElementById("atw-input").innerHTML = catwin
                            setTimeout(cautewr8, 100)
                            function cautewr8() {
                                catwin = "Companys|"
                                document.getElementById("atw-input").innerHTML = catwin
                                setTimeout(cautewr7b, 3000)
                            }
                        }
                    }
                }
            }
        }
    }
}
//Companys back ---------------------------------------------------------
function cautewr7b() {
    catwin = "Company|"
    document.getElementById("atw-input").innerHTML = catwin
    setTimeout(cautewr6b, 100)
    function cautewr6b() {
        catwin = "Compan|"
        document.getElementById("atw-input").innerHTML = catwin
        setTimeout(cautewr5b, 100)
        function cautewr5b() {
            catwin = "Compa|"
            document.getElementById("atw-input").innerHTML = catwin
            setTimeout(cautewr4b, 100)
            function cautewr4b() {
                catwin = "Comp|"
                document.getElementById("atw-input").innerHTML = catwin
                setTimeout(cautewr3b, 100)
                function cautewr3b() {
                    catwin = "Com|"
                    document.getElementById("atw-input").innerHTML = catwin
                    setTimeout(cautewr2b, 100)
                    function cautewr2b() {
                        catwin = "Co|"
                        document.getElementById("atw-input").innerHTML = catwin
                        setTimeout(cautewr1b, 100)
                        function cautewr1b() {
                            catwin = "C|"
                            document.getElementById("atw-input").innerHTML = catwin
                            setTimeout(cautewrb, 100)
                            function cautewrb() {
                                catwin = "|"
                                document.getElementById("atw-input").innerHTML = catwin
                                setTimeout(sautewr, 500)
                            }
                        }
                    }
                }
            }
        }
    }
}
//Security ---------------------------------------------------------
function sautewr() {
    var satwin = document.getElementById("atw-input").innerHTML
    satwin = "S|"
    document.getElementById("atw-input").innerHTML = satwin
    setTimeout(sautewr2, 100)
    function sautewr2() {
        satwin = "Se|"
        document.getElementById("atw-input").innerHTML = satwin
        setTimeout(sautewr3, 100)
        function sautewr3() {
            satwin = "Sec|"
            document.getElementById("atw-input").innerHTML = satwin
            setTimeout(sautewr4, 100)
            function sautewr4() {
                satwin = "Secu|"
                document.getElementById("atw-input").innerHTML = satwin
                setTimeout(sautewr5, 100)
                function sautewr5() {
                    satwin = "Secur|"
                    document.getElementById("atw-input").innerHTML = satwin
                    setTimeout(sautewr6, 100)
                    function sautewr6() {
                        satwin = "Securi|"
                        document.getElementById("atw-input").innerHTML = satwin
                        setTimeout(sautewr7, 100)
                        function sautewr7() {
                            satwin = "Securit|"
                            document.getElementById("atw-input").innerHTML = satwin
                            setTimeout(sautewr8, 100)
                            function sautewr8() {
                                satwin = "Security|"
                                document.getElementById("atw-input").innerHTML = satwin
                                setTimeout(sautewr7b, 3000)
                            }
                        }
                    }
                }
            }
        }
    }
}
//Security back ---------------------------------------------------------
function sautewr7b() {
    satwin = "Securit|"
    document.getElementById("atw-input").innerHTML = satwin
    setTimeout(sautewr6b, 100)
    function sautewr6b() {
        satwin = "Securi|"
        document.getElementById("atw-input").innerHTML = satwin
        setTimeout(sautewr5b, 100)
        function sautewr5b() {
            satwin = "Secur|"
            document.getElementById("atw-input").innerHTML = satwin
            setTimeout(sautewr4b, 100)
            function sautewr4b() {
                satwin = "Secu|"
                document.getElementById("atw-input").innerHTML = satwin
                setTimeout(sautewr3b, 100)
                function sautewr3b() {
                    satwin = "Sec|"
                    document.getElementById("atw-input").innerHTML = satwin
                    setTimeout(sautewr2b, 100)
                    function sautewr2b() {
                        satwin = "Se|"
                        document.getElementById("atw-input").innerHTML = satwin
                        setTimeout(sautewr1b, 100)
                        function sautewr1b() {
                            satwin = "S|"
                            document.getElementById("atw-input").innerHTML = satwin
                            setTimeout(sautewrb, 100)
                            function sautewrb() {
                                satwin = "|"
                                document.getElementById("atw-input").innerHTML = satwin
                                setTimeout(autewr, 500)
                            }
                        }
                    }
                }
            }
        }
    }
}