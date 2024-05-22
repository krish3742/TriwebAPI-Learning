import yagmail

user = "krish3742@gmail.com"
app_code = "opjzlgxtppwlhptq"

to = "akshitij70@gmail.com"
subject = "Yag mailer"
content = ["Testing yag mailer."]
with yagmail.SMTP(user, app_code) as yag:
    yag.send(to, subject, content)