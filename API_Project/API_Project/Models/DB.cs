using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace API_Project.Models
{
    public class DB
    {
        public static List<Feedback> listFeedback = new List<Feedback>()
        {
            new Feedback{name="yael",description="אחלה אולפן!",id=1,count=0 },
            new Feedback{name="tamar",description="שירות מעולה, מחירים נוחים",id=2,count=0},
            new Feedback{name="yoni",description="נהנינו מאוד",id=3,count=0}
        };

        public static List<Cards> listCards = new List<Cards>()
        {
            new Cards{name="הפקת קליפים",description="הפכו את רגעי ההקלטה לקטעי וידאו משפחתיים",id=1,color="light-grey",link="/add-klip",more="רוצים להפוך את ההקלטה באולפן לוידאו קליפ משפחתי?  לאחר הקלטת השיר באולפן אנחנו נצלם אתכם,נערוך ונפיק לכם סרטון למזכרת"},
            new Cards{name="ג'ינגלים לרדיו",description="ג'ינגלים מדליקים לפרסומות רדיו",id=2,color="grey",link="/add-sound",more="הפקת ג'ינגל לפרסום ברדיו כולל קריינות  מקצועית,,כתיבת תסריט,הפקת מסר מוסיקלי   ייחודי למוצר שלכם והכנה לשידור ברדיו."},
            new Cards{name="הקלטות",description="הלחנה עיבוד והקלטות ",id=3,color="dark-grey",link="/add-record", more = "יש לך לחן לא גמור? שיר שהלחנת והיית רוצה להוסיף לו כלים נוספים?מנגינה שכלואה בראש? אולפן הברווז מספק שירותי הלחנה ועיבוד מוסיקלי, מגרסה ראשונית (סקיצה לשיר) ועד לשיר מעובד ומנוגן ע\"י נגנים חיים.באולפן הברווז פינה חמה לאמנים ולהקות. אנו מתמחים בהקלטת  סינגלים, אלבומים, עיבוד והכנה לשירים, הלחנת מוסיקה, הקלטת  להקות מכל הסגנונות, שירותי מיקס ועריכה, הקלטת תופים, הקלטות בערוצים ליייב או שכבות. משלב העיבוד ועד להקלטה יהיה לכם ליווי מוסיקלי ומקצועי"},
            new Cards{name="די ג'יי",description="די ג'יי לאירועים ",id=4,color="black",link="/add-dj", more = "אנחנו מספקים גם שירותי מוזיקה לאירועים  – תקליטנים לכל סוגי האירועים והשמחות, מתמחים בעבודה עם מורכב ולא הומוגני, מאמינים שהאירוע שלכם לא חייב להישמע אותו הדבר…"}
        };

    }
}