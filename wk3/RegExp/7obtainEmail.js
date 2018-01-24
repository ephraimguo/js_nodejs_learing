//qq邮箱 3423423423@qq.com

var re = /\s([1-9]\d{5,12})@(qq|gmail|hotmail).com\s/g;

var str =`
 2343423@qq.com adocx9uwk3mwetoiu7x9v7933nvxcjc
 234545653@gmail.com adocx9uwk3mwetoiu7x9v7933nvxcjc
 345423@qq.com adocx9uwk3mwetoiu7x9v7933nvxcjc
 2358768@hotmail.com adocx9uwk3mwetoiu7x9v7933nvxcjc
 890862@qq.com adocx9uwk3mwetoiu7x9v7933nvxcjc
`;

let res1;

do {
    res1 = re.exec(str);
    console.log(res1 && res1[1] +"-"+ res1[2]);
}
while(res1);