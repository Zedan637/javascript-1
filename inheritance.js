class parent {
    assets = '10 CR'
    good_Qualities() {
        console.log("Parent Class - Good Qualities")
    }
}
class child extends parent {
    bad_Qualities() {
        console.log("Child Class - Bad Qualities")
    }
}
let c1 = new child()
console.log(c1.assets);
c1.good_Qualities()
c1.bad_Qualities()
