using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_Project.Models
{
    public class Feedback
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public DateTime date { get; set; }
        public int count { get; set; }
        public string description { get; set; }

    }
}