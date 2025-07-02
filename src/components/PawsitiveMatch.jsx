import React from 'react';
import Navbar from './Navbar1';
import Navbar1 from './Navbar1';

const pets = [
  {
    name: 'Buddy',
    breed: 'Golden Retriever, 2 years',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3L6ssgzhvVXAmGFcAxZPcAsSYn1eLU6xl_1jE2pG8-QdBJw7JUpK1lhckczCXhaMbL7JYIZj9LlcsbokA_32krZlfgVL42eaPivXkMQK8kS-PlyF2V74_VYyQqExXiF6pJMLDC5_N7uRxs8eCf_6_cuqwDKnELAv8rvUEnA4s_zhNNEfcCrnwsKugj1x0-anOfTidX29cQhxAHWp2pizFJHicq2fWctIhag6XsZ-L4quOvdkeQ4Gu7c_MDPhSyCfpYJQNTU9_zK4z',
  },
  {
    name: 'Bella',
    breed: 'Labrador, 3 years',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-JqPSjOVA_GfRcfzO3Squk3N8QDctajUaE8mFB_3STPj_Bch8zIJc45yNyqSNi3YDxZv9_NxOQbvxGJtiOEa4YzcKn-TqMOp7dQViDlXIu3ONZb_F-Q5-NxSSehP89AFLal5NWORjRzyPntLJlLcYNrmsE6NufNNw8Ae3POlHSMknj7HVzplAl4MskGq-3GFiJrLbqVxTDqIhlIxkJAc51rDgE4G2qju0N-X9fl8kyVgAOUQatDdEsqpElByD_2nbb__c-LtGJu7X',
  },
  {
    name: 'Max',
    breed: 'German Shepherd, 1 year',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsbhTpuKn_CAoL2JLuw83Klikk4392Xh1jvidcUzPUeSCXnyM4PT4RYXZ2E9Wtt7aB0YkOlnQDbf2xdQRLNA87P_gKEkQYGKTN9MjuuvEDJIRLiv5GhAi6XjHumxZuIqrZd1sGEoJcxsdHhgune3mXBJ-VQOZyzjB2o8_731J-6DKDaEELZbKMEE5bePgNal3c8IWExs2wPxUvRW73W3F9HjSSHIiV7QjUwxlLukSTLBDkMs2rc-FSu1uiarYAPk-kZ_t6Jwhvz1eM',
  },
    {
    name: 'Lucy',
    breed: 'Poodle, 4 years',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSl6nbxjJeh1zpkx6LjvyT2Oys66v8-QsgA&s',
  },
    {
  name: 'Charlie',
    breed: 'Beagle, 2 years',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNO3qF9tCetuMvgfGLob2FDNotSG-Rv096A&s',
  },
    {
       name: 'Daisy',
    breed: 'Bulldog, 5 years',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9nIc_SDtJFizumnRqtbt_GkzT8BCghXNKA&s',
  },
    {
   name: 'Cooper',
    breed: 'Boxer, 3 years',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJmpSMmYU9H2tgy6UKkke4Y4Z0IMZ-w6eHg&s',
  },
    {
    name: 'Sophie',
    breed: 'Shih Tzu, 1 year',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RYofeuHtHBL84g4_odngrFqMgjlY0LZM1g&s',
  },
    {
     name: 'Rocky',
    breed: 'Husky, 2 years',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVMNrMwpw8W74BtknQ55lkQWMgvy80DdyEg&s',
  },
    {
     name: 'Luna',
    breed: 'Dachshund, 4 years',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnl0OgUGvSSLACfXjdGsSYOY3GM-Heti2sYA&s',
  },
    {
    name: 'Molly',
    breed: 'Pomeranian, 1 year',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEBIWFhUXFRoWFRcYFhcdFhUYGBUXGBgXGhcYHSggGBolGxUYITEhJSktLi4uGB8zODMsNygtLisBCgoKDg0OGhAQGy0lICUtLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xAA+EAABAwIEAwUHAwIGAQUBAAABAAIRAyEEBRIxQVFhBiJxgZETMqGxwdHwQlLhYvEHFBUjcoJDFzODorIW/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEAAgICAgICAwEBAAAAAAAAAAECEQMhEjFBUQQTIjJhcRT/2gAMAwEAAhEDEQA/AO4pEIQCoSIQAlSIQAhCEAIQhACEIQCpEIQAhCEAIQhACESiUAqRBK8GqFFoHtCiuxo4An4fEofj2tEvIHmPmo5x9k8WSkqi4THNqe7Mc4spKlST2g01pipEIUkAhCEAqRCEAJUiVAIhCEIBKkQhIqEiEAqEiEAIQhACEJUAiVIhACEqRACCUEqNVxMAkC3M2nwG5UN0CRqC8e0vHSVWPxA3e4+AsB91GOZsmWuFt7rJ5DRQstcdUiIN5+Cbq1DYhQnYsVIjfglfWLRdUcrZZRolvqkASEpdIv8ABU3+a1AcLqVTfazvEcVTkW4Huq7SPdIHnJVNqa58ufJmwIOkffxVtXzAMHePW991CbjqTrFjCDzAuqypl42iRQqPHuuB8CPuptDGO4mfG33WdxeRUXS+mwscOANj4HgV5wctu1xeOIJv6qFOUWWcIyRo3doKTXaahDf+w+qtaVQOALSCDsQsjjccQzuhj2ndtRov0vsVHyHNRSqlug02m5ZMtHMt+y1jnp7MpYdaNwheabw4SDIXpdRzghCVAIhKhAIhKhAIhCEAIQhACEIQAhCEAIQhACEIQAhCbxFYNaXEwAJMoCPi6wB7xgC/ieXX+VmsxzkucWtmx25cpPPojNMY6I/U65ne+wjwj4KowBE2NhcuPMzf4Liy5G3R1Y8dK2WNOhqIFSXuN9Mn4wp7MKxu7GtjYCflMKEzEMpsc8O0tPv1D7zjyB+QVUMb7Y/7JEfueHmfkPiosmrNKcZTaRp0ztwBKMVWBEn+QqZ3sWkOeBqH7Zj0lOVs4bG4j4DlI5KORPEeGKaxwBA7zoBjc9OQVjSxQuGmY3AA+hsspWzQ6yx5kSC08j+fNQP9RLajgCRDifM3+oVOdGnCzbsLHi7R4GD85TLcHRuGgCeEmPITZY6vn7i4ancLqXSxwf8A+RzTzH87pzsj62jS0tdJ4/aeMyslndZ+DxLjf2FRxLXDZpJnSR6wtHgXvLYedbeDxuPED6eijdpKf+zqcA5rffG4dTNiR1Bg+qlq0RGVMZweK1tOqHMO5E90/wBTeXUfFMPHs3aCTG7Jvb+k8eo8OarMBrouhhlm7Qby08Pp6K+ewPZDQCJlrT13AO7TOx6rJejZ62TMjzhzRp3jhzHAjmFp8JmYfEgtn0K500HVDbPbds2JB3afutD2fzGm/ukxPA8COi1w5WnTMc2JNckjZgpVEy99iORt6n7KUvQTtHCxUJEKQCEIQAhCEAIQhACEIQAhCEAIXirVDRJKqMZnWkwBHmJ8+SpKaj2WjBy6LqUSsg/MKxdJdAvESbcl5qZqQPePlMrD/qXo2/52a327ZiRPJQcW0Pd3/ca7bgSBMnoCR6FZNuPc92x8efimcyzBwbp1Wvx3P25qi+Ty8Fn8dryRs5zIGo5021Ezzg/yE1gqYhurbjHEk/x6BUma4gNbqcbBWXZBxrUqbnbOc9x8AS0fASsP2dm9cYnrM8LXxTxB9nRZx2HkOf5K8YnMPYt0tcXRuTx9furntBmDKbOgs1o4n7Bcb7U9pKjjDSRJty+H8rVRbdIperZqsTnuo8j42VnluI9owxckafUhciw2IfJcXgxeOJE3jgY5Ls/ZHBup4alUcWnUNW1xNwJ48FZ4XELMmtDGMNQO7tMG19Q8IC9VaReahbE2geQ4+S1jiKm44X6iybqZY2SQIJFjyKr9RCynH83zQsmNx8D4Kpp59imAVIOkkieEiCRPMAi3Vabtv2bqU3F+mWE7t4WO/IrIinUDTTBJaXatMujVGnUW84MLaGOHHZXJkny0b7sf23dI1mOpiD0K6tQDK7CQO5UaW1G8iREhcGyjs+5tPUTpMyt12Fzp9J3snmWG3/HkR0WFqMqXRrKPKN+SbSIpmnTef3MnqIH0KfdWNOGv/dpJ5SDB9QFC7X0T3nMMFjy7xDocCF6ynE/5qj7OraoBAPBw4H5fhWTLrotarA+CbPbcEcfvIULEU4qSDDiA4EHfr/KTDYhzSG1AQ5pg/fwSMb7QOY8d+mTp8N7dCOCq9llov8ozisyzgSB7w4wOI6XWxwWJFRocPy0/Vc7p4kt0kcILTwI4sPlIgra9mJ9g0HgSPG/4PJdfxpu+JyfIiv2LZCELsOUEIQgBCEIAQhCAEITdWu1vvEBQ3QPbjAkqox2esaDoufTzUHtHmbQARJgi0wI4m258VnqtW95LDsWx8eq5cuetROjHhvbH8TnZcdz1Jum349jW6pk/H429E2QyO40bX1KorOLnaSARPAQAuOTl5OuKXg9YvtNB0OkT+ckMwj6lQEnuRO5XlmAa5w12IsOkKweCxndcCev91n32a9dEljyIaBA5gqlzOvLhNhPo0Hb4Kyp1CAPAnyJCoMU8u1Ft5sDwA4knxV10U8lRn/fgnYN1Rw3haPsTUcMLOwGoDnGr+4WczJstcG3hoaJ494yVq8L3aBZTs1o0T4QJ8SZ9FpApkMr2qzF1R2kHoQPlbh81iswy1x7wJ1AyugPyN7jIEA8TaepPFWGTZW2jqe/SY27s35CR5rWMq2VaTVHMsoyLEYh4aymYm50w0dSV2fJcrFNjWbBoAAlZvEdtnNmGS0WBgfZVuM7VVANWqHEb/tHQc1P2ubWirw8FZ0p1dlOxIlSaOOa4RNui4xUzpzwHF5eIvJN0ZZ2kF30HOEe80k6XdPHkVq4trRikl2dYx2NoQWvqNcDvI4dVVDJ8HUI9lAcNvd+W6pMRhg8B4JGoTHG/ivGHpPZ1HCDceB+i45ZJJ7OyOOLVpmlHZ8wQ3vdBCq6vZ14dqp+8OBsVquzuO9o3ST32iQdtQ+6ualQEd8TG5/UOq1ilJWYylKLoxmIwrsRS0G1ZrYbNtY/YevI7GPFZjs5iHU9VKoCKjZAB3BBnSZ5xZdEzPA3LWm7ml1Nw4OHyB4jndYXMsWatUAge1a0OtZzm3EOHFwIPkqzjSL45Wy8qPFVp5jY9OBB/PRRaOLOu9qrRY8Ht5H4+BUDDY2C0jiSPlH0UnNHtOl43BA9Tb1E+YWPZrVMs6LpJ0e4+zmnZpOx6X9CuiZXAY1oEEC46m8+ZlcmwOMLascD6EkA/VdOyKuXMAO7Dp8WkAj6Lp+K/yZz/ACo6RbpUhQu84QQhCAEIXitVDQSeCA9rzUeBus9medGAQILTMTv4qE7tM06S4H7cFhLPFGqwyezRYvMA2wv9PNZLH4vQS4S4k8TMeas8RiSO8zvDiFDfj6LplviI+ixyT5G2OPEq2PdUJ1bcTw9VHqYijTnRUM8Z29OCm4prSIpkgcrhUGMy/va3O2/PMrBo2Q7jMwcGw27j0Vbl+JqUqn++AQ4X5qe17aTS8mCRafgqLOMTpDZJhwnUPus2axRduqgHU15je+/hbdecPjBUcWD+Oqz9HDPcWySGkT5fdXOH0MD9EDYb3O8z+cVVRLNknOcXpaGt/V/+QFVgHS1p/wCTvACw/OafzG72E76IA6nSfv6KK6p3XH+r4C/lMD1CskV8EGv3nFsgA6WydgS7f4roFPBaGNabtZsDu8/ud47wuXtOrVqNzB8yAfr8Qt9kGdtxLdMw4aGlp3gNu7wMlbwWjHIyftc3cb9Aq3M8U0gAXLZgW3JAsOH0Tma1iDAMF535AfkqmfiLn0A4m8bqkk+iYV2VeMwhgSOPxKq8zy2Wao1OBIIuRFuAIky4cea0lbYFxm8kcrHpzVfWqtFgbFwJ4+8SJuOoU4/xkXyfnGjBR7IAAmJ1R42t02Km9msE11WzQG7zefATsrHNGUSJcLnaCJJk28d/RLg8VTa3u7gDztxA2On68l38tWjz1HdM6FgaoLGAjhZP+zE6TcRb85rIUM4IpgFrjp910cDw6qVh+07XXIMtEzzggfVefOMrPQjVaNdgaJp1A5hsQYPWFfZZmntHGRcGR1FvoVlMmzUVfd4Plvm0yPKym9l8Rqc542A+hH0VoqujOe+zV5kQ1gcP0ugef4FyTtW8f5v2lF0O7pdHA976EFdOxtTWzTzdI8GiJXGsYyo2pUdUDrvPeixuTbnxV8hXCizzbEkRzbDj8J9TA8lOx2KlrGjdxa702+MnyUIezqaTUN9Nx+4tiPzqvdO9TW7oAOG0AD84rnOuifljC6t/8gj/AKiPouv5HQgOdwdpjrDAJ9Z9FjOx+SCo72hHdAIBHjBM87H1XQ6LNLQJmBErr+NB/szi+VkTfFHtCVC7DjEQhCAFVZzS1Fup0ANJjmZCmYvFhhbOxm/UcFlM8x79ZcLgNiOXULHLNJGmODb0UfaMEB2h0cuRvtKzWX4w1n6HTqG/C3irylVqYrU1zSINiQfWYVQMmq0Kpe6NPSSC1cFXs71pUaHCYxhbppEgM3Mm3nxKj4jN2Ta55kKuPsi3SHFodu1o0z47kppuGpsMhpPKSY+O/orFaJeMzRwbLjHKP7qLSzVjxM+v5umcY2+nd5sQNhP6fqVAfU0vLWkTbkICrRdVVEzH1DUbIENG7nGP5TuG0PpiQHQbRsRyuomMqUdPec4nxMeq8YAAMOgkXkTuP4VZLRaPZLrVnCA0W4fnBeRaC8SN4A2+O6YOJMiWzf8ANlCzR7nkAk+EgAeShMlqyxxtcuqBw2sR4976GPJV7qndqAzp1AjyF7zdTMpqtdqB95vd8omY8lX5lULiRt+fhRNk0ivGIAmQZ/PSwA8k9kGYezrS33gA4dYEEfFQPYzYOG9z9lVYrV7QFkgNIgzuuiGzGZ1rNKoqMp1WbQZ6SNJHzWaxOMEAtBBcLGNrm2/MclncLm1WmQdRgmSJsfpK0WHpCowPMAEEgSpfspFVopBial2lzj8ef3T+X4M1KkuJ0tFxxJmefRSqmCPl+Qp2X0dMeN/RV5ei9Eun2Youa0ubcQfQk/VT8t7KUWk92TYX/pBHyTjMxYBpJvA+f8hTP9WaII/ut4z0c8obGcTl9PTp0iIuI3CoMVkrYsPP7rQ18SHGWm0/BNVKoA34SfBYy2zaL4oy1DAOZdpI3iOu/wAlpcia5oIJMEzAUOvmIa8gU+vja3yVo3HBmkOHvbdPwIoPyJZE9UPY2tV/dANogTHQysvnTdXdN2tvw948lKzrtATV9gy/HUOA+nFVlSsDDb85M97nBVZdl4IcoZbqLYN4EWH5/ZbPD9iXvYzS9peHNLtgIBsRcniqbImAvDiNvP0WyOLLHMe1xEOGoD9Q/aVWCjdyJySl1E1+AwbaTBTZYCfiST8SVISU3yARxEpV6a60eW37BKkQpAIQhAR8fSDmODhNvisLXqPa3ut1HYc/JbvGslpHRYbN8R7IkG9jpXPnhZthlRTh+MHeAbpJ/U5oLeafxOIqOuXsA3JDgfoswO0dOuxzqwAAdpbJgbSXQLmAPVwTDs7a6madGnp1QHFtrBx4g2sJXK4NHUpJjeZ4VzS59GsXuFz/AE9Y+qz+Cz6r7SHkhwnvG4HULWvpUKQDGuc4lshpEajNzMzY9VT51SoBoeKbvacOojipj6ZZs81M8p0mnQdTjYuNyoeVudUq6mAkncnYeW6ocwe3uxfoFY5bmuhulxLRxDQfnxV+OinI0OZFrd+84DeOPgo9DHhr9L9jEEcCq44ym4ywEf1OMD4n6Ir5W+TfkfEKjgvJZTNBTPfBBDuSi4onWJ59FFwDy3SPQfS+3incS+4JEjjB/JWLVM1TBj9FbUN/mOKsK+AD5cHXO4t8Cq7DYN1WqG0wZnxjxW4pZU2m2Gw53GTf4KUtETlRizlEtMRI4RBjpzVDjGQTq/OkLbZtjSyz2A8ibEeYWYzCs097Tc7Ax6laRZRlZXoEgAAzHmvLcRVotIaSQd2m46kcl4whf7UOc4uHGASOfgFKxZLXEgkHVLQRYggBzeYvdX6I7PeF7WGGiowACA4zwkXHktN/qFNrgG1B3hYi/wCBYevhWvOpzdJ5SYPwVnQwzmsii0Bzt3TsOQCs3EpxZfveydT4J6c1X0c4qPraZAbIgRIEdOMiR4xyTNGmWN01nNk7QSTPjEShtNgJcHX4kGCPAkGETRDi/Bc4rGgP0thrYvsJ63UkZnQjTrHWLm3AKgpYJhDnNJNtyZJPjCSnUo0ZLml73bgWgcgeE80teBxfktsdmTYNQM1bd2eA58v7qjzLM8Q+o2pUGm3cA2E/NWGDf7cEvZooiIYwS58cJ+E7Kzx2GOgOe0BziCGDZjG3+XzUOTJUUVeGpPaz2jgC43giTP2U3C1XVNMvAA6Xv4bKFUxYDg0d2Itck9Oia/yxEvJ0hx1C9xxJWTNza9n2uaSHOa8TY8dPUxutRgyGuv8AKQVgMqxwbBk7zbjz/Oi2uAxLKohzSOsn6KEysos3uGxDSwGQB8E+s7kOWsB1atUbXkehWiXoY5OUbZ584pOkCEqFoUEQhCAFm+1HZz241UzpcLhaRKoavsHzh2s7PV6TzqwzgzVOpgnnMjks7iKgpwGVC0kAuBmwjaefRfVz6YO4BVfichw7/eosP/UKOCLc2fN2VY12psvJGnSDewn1AVvjsFWc0eyoved58d7nou2//wAjhAZFCmP+oUpmTU2iGtAHQKn1Ju2X+5pUj5ypdnarZLqVST/QfoElXJqvGm4DgI36lfRVXKG8lCr5K3kjw/0lZ/4cEwuDAMPZH5wVpUxEAAm7duRH9l1XE9n2n9IVJjuylN36VlLCy8cyOc1XhxmRHEjdp6p/D4IPcC10Om4cflw9VeY7shol1PfkditDlbGCm0ezDHRsQN+hXPOHFnRHJa0GU4GjRZJYdR94iDJ9V4zGvTgyHei84+s9oNvMG3wWSzDNHB0CwJhtoSyK3Yma4jVZocR12CpxRJ7pEcjG/mt3luWv9mNRhzrk8RyHildgqdIE2c4CXH82t6qCyZh3YVoa0Pt3ud/ExwU7/KueyKwbEd14dFRvKR+oLQMwTdbiHEn9UAabcPgpb8tAs0F7yBO2ltuttuKWydGJxWCdUcHgd0CHEcxwA8lGoZmyYcwtaLWJ1DqVuH4IA6XNuDMAzbhcDeyZxOXUnDv0WOBN9TYPQh7RI8fgpTXkf4U9Kiwt39rTN4nvt6heqD/Zn/bc14AktcNLwPKQ4dQq+vhDRLZBb3nNIJF4PdMixlsGVJqGKTieonjpPD1PwTzQ8WWGMx1N1MvaIc0AkQNomQRus32g0sc17P1Db+rj+eKccXG0EAt5Hbl6JaeBpVdJq1Ia2dyOO6utdlH/AAXAdogwS+XftHDpJ5JcTnJP+5UdLiIAGwufgo2PODYO42o/qJg+u/omcvwLXNNSDEw0EzHVS0uwh1zSXajveB5bnpxUnEP1Nb3thDvKIPQJ/BUWOZVeDeTE8Ba35yU3KqepkNAk84P/ANdv7qjLpk7JsL7pcLRYb7c1tstw1o2n3eHy3WUpZUSQ4VBqDbi2mANvGeS0mVSwXNju2TE8wNwfsqKrEi9yzEhrwSSIs6D8xxWjweOFQnSLD4rJVaTXkHvDnG/irTKqOj3XEjqfoujHNp14ObJFNX5NGhM0K+q0R5hPrrTs5aoRCEqkCIQhACEqRACEIQAvJYF7QgI78OColbBhWSIUkGPz7DaaZIF1jsTWcR/C6lmeWNqtgkjwWLzTKn0jdojgY/jdcfyIu7OrBJVRn20K5YAGz1BA+aiU8vZRd7WvDqn6G7kHmrLugwaw/wCMn0RVpE3psA/qIHzuudG7KrMswrNc0gG49zjHG/mn8Bg6lVjvZCDq7+qQeF7jaE87GvZsxriN3Fe8nzd1V7gHmREgWF+pGyWrJ3RYMwxYzQw94ndp3PUx8E4aDtfs3GGlu43PXUNirvG12MpSXAW3AmPDmeqytSsWsdVa92mZ7/d1D+kTt+QrSVFYuyzp4ekwxo1kj33XMcpUbHZW115MXvJAbPAEb+CgsbUdT1imYde7u8R0Gw8ExQz1w7jhpIIgOJEKn+lq9HvG9n31Gxqa7TdocDfmw+YBB8VjM2Y5vulwbdr2mZY7hf4hdUrirLKjAC2IePkR+clme2+DBcHimdJs4gXnhtv58ldIhS8GdpVmBjf9sExZwJB9CqaplJ0mqBbVAH7rxA5/wrKg/SNBaA5twJkEcjyTlHM3CpL2yQ3ujZo42RNou4ogYvICxjnVIENmOnCev3UTA4rQwMJHCIPEXVpnmMOka2ucXEvi4BiIBPTkFTMqO02aBPSysraILPJaOuq4smInTwmRvzFldU8KXVQI0iI5N+H1hQcgqU6dIvc5rXai10/qO467clNzCq405AlpuIJj7qsrJTRosBh6VNsF5cTx0d3yj5qVhq5M98kNFtO58SYHxWay6g8sY1whxBIbzA+Xh1XhuIram0z3ZE3Fm9OpVSKRrTjXtaHPGkbkk7DyKk4fPGn3WvjgYsfX+VicbSNFs1nkF12vd7p6Rw5X2Urs5m4qS4zLQTLnTAHEAiI8E34DSOg4PPTI1t0T7sjfz2Wlw2Kc4tNnNPEbjxXNsT2mZWwxbTAfUa5pAF7hwu3xE/FarsXm3twWFsGnuRtNrHrddOPldHLlSq0axCELqOcEqRCAVCRKgBIlQgESoQgBCEIBE3XoB4hydQgKHE9mabjMkeh+JEqvxfZVxHdqO+E+q1yFR44vwW5y9nMMy7M4gNhoOnieKy1TD1KNZgAcAXDU53HyXdyFVZlkNKt7wWMvjrtGsc7XZzvE1faUalM/+PugddIP1UbEsZSpVWlwLmtAJPJw7zgOG0AcALLUY/sQ8/8AtvEbkSRJ6rKdoP8ADrGVR3CAeJ1zq5TbboqLDK9lvtVaM7hs+rVCzQ9m0NmwMQSIN5gjcq27SYukXsgCo6BLQDLTJcLix47qr/8ASnMpBBpSNu84b8Yjeyusm/w7x1KSdBdwJcSB5eZWksHoiObeyZkOf1CfYVRGxYY3aCQZPO49FqcThjUaWt0wRBkSPRV+WdgajiH4upLgbhhIadrEDhbZbXDZa1gAAVoYfZSeX0cyb/h0Q7UK3lptfhvsp1bsLrADqm2xDbjwK6QMMF6/y4Wn1Q9Fftn7OaVP8PGOjXVqGNriB5EKPV/w0YQQKr73/Tv6LqfsEewT64eiPtn7OMYj/C0gyx7id7x8oSP7P4mk1rCxzmtsIHD6ldo9gk9gFDxRZKyyOLY/EVO7FCs0t/VFwYg+OwWexGYPFb2jhWJDY1PDp8obAHkvok4Rp4D0TT8tpndjT4gKv0RLfdI+f8RWdi2gHVDTIYYu7fysPiqmnhcVqj2LwODQJavpD/QqEz7Fk/8AEKQ3LaY2YPRTHHREslnGch7OYnS2nS1U2n33BsPvuA47ei632aylmGotp02aQB4kniSeJKsqdBo2ATquopLRRybYiEqFJAiVCEAiEIQgEqEISIhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhCAQhCAEqEIBEqEISIhCEB//Z',
  },
    {
    name: 'Buddy',
    breed: 'Golden Retriever, 2 years',
    image: 'data:image/jpeg;base64,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',
  },
];

const PawsitiveMatch = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col dark:bg-black dark:text-white bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4  dark:text-white text-[#111518]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" />
                </svg>
              </div>
              <h2 className="text-[#111518]  dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Pawsitivity </h2>
            </div>
          <Navbar1 />
          </div>

          <div className="flex flex-1 justify-end gap-8">
            {/* Search */}
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full items-stretch rounded-lg h-full">
                <div className="text-[#637c88]  dark:text-white flex items-center justify-center pl-4 rounded-l-lg bg-[#f0f3f4]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  className="form-input w-full flex-1 rounded-l-none px-4 text-base border-none focus:outline-0 bg-[#f0f3f4] placeholder:text-[#637c88]"
                  placeholder="Search"
                />
              </div>
            </label>

            {/* Heart Icon */}
            <button className="flex items-center gap-2 px-2.5 h-10 rounded-lg  dark:text-white  bg-[#f0f3f4] text-sm font-bold text-[#111518]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z" />
              </svg>
            </button>

            {/* User Avatar */}
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxloskdzPLIc_YqikCKFAJM-TgnS6MeN9jLVfzvs6qzI80jwnMhZVNe4BcbdludqcQwsFgwJsb20tTARj3cIPhJ-oe1tqaOWB7k-XH8QqkAKQJTI3gkWzfq5UftHbcrKWf61wdDkpEBAv3ffIZhslt5UPtDPieN_I5ExeYWE9jtRBzgrjeBmzd7h4Ei4AStcsevF66SfIuO6lZqCTkf3w0V7Jl-bHMm8afJYqtBDkUI7crF9XVeR0Q_Rc8_otXSUJozXyvjgjBZ9Am")',
              }}
            />
          </div>
        </header>

        {/* Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex justify-between gap-3 p-4">
              <p className="text-[#111518]  dark:text-white text-[32px] font-bold">Find Your Perfect Companion</p>
            </div>

            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full items-stretch rounded-lg h-full">
                  <div className="text-[#637c88] flex items-center justify-center pl-4 rounded-l-lg bg-[#f0f3f4]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Search by breed, age, or location"
                    className="form-input flex w-full px-4 rounded-l-none text-base font-normal leading-normal bg-[#f0f3f4] text-[#111518] placeholder:text-[#637c88]"
                  />
                </div>
              </label>
            </div>

            {/* Filters */}
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {['Species', 'Breed', 'Age', 'Location'].map((filter) => (
                <button
                  key={filter}
                  className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#f0f3f4] pl-4 pr-2"
                >
                  <p className="text-[#111518] text-sm font-medium">{filter}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Pets Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {pets.map((pet) => (
                <div className="flex flex-col gap-3 pb-3" key={pet.name}>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{ backgroundImage: `url("${pet.image}")` }}
                  ></div>
                  <div>
                    <p className="text-[#111518]  dark:text-white text-base font-medium">{pet.name}</p>
                    <p className="text-[#637c88]   dark:text-white text-sm font-normal">{pet.breed}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PawsitiveMatch;
