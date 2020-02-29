function Biodata(biodata)
{
    var biodataRizky =
    {
        "name": biodata,
        "age":21,
        "address": "Gaum Rt 3 Rw 4, Karanganyar",
        "hobbies": 
        [
            "Game",
            "Travelling",
            "Sport"
        ],
        "is_married":false,
        "list_school":
        [
            {
                "name"      :"SMAN 2 Karanganyar",
                "year_in"   :2013,
                "year_out"  :2016,
                "major"     :"IPA"
            },
            {
                "name"      :"STMIK Sinar Nusantara",
                "year_in"   :2016,
                "major"     :"S1 - Teknik Informatika"
            }
        ],
        "skills":
        [
            {
                "skill_name"    :"java",
                "level"         :"beginner"
            },
            {
                "skill_name"    :"PHP",
                "level"         :"beginner"
            },
            {
                "skill_name"    :"HTML",
                "level"         :"beginner"
            },
            {
                "skill_name"    :"javascript",
                "level"         :"beginner"
            },
        ],
        "interest_in_coding": true
    }

    return biodataRizky;
}

console.log(Biodata("Rizky Arya Saputra"));