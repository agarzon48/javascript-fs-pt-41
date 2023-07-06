import random

who = ["The dog", "My grandma", "His turtle", "My bird"]
action = ["ate", "peed", "crushed", "broke"]
what = ["my homework", "the keys", "the car"]
when = ["before the class","right on time", "when I finished","during my lunch", "while I was praying"]



def num_item(list):
    random_num = list[int(random.random() * len(list))]
    return random_num

    
    

def generate_excuse():
    excuse = num_item(who) + " " + num_item(action) + " " + num_item(what) + " " + num_item(when)
    print(excuse)
generate_excuse()




    
    

