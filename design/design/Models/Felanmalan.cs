using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace design.Models
{
    public class Felanmalan
    {

        public String Namn { get; set; }
        public String FöretagsNamn { get; set; }
        public String Gatuadress { get; set; }
        public String Postnummer { get; set; }
        public String Postort { get; set; }
        public String Telefonnummer { get; set; }
        public String Epost { get; set; }
        public Boolean Huvudnyckel { get; set; }
        public Boolean Hund { get; set; }
        public Boolean Katt { get; set; }  
        public String Meddelande { get; set; }
    }
}