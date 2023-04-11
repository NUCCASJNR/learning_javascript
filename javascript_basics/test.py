# def uniq(list):
#     """ Returns unique values of a list """
#     u_list = []
#     for item in list:
#         if item not in u_list:
#             u_list.append(item)
#     return u_list


# test = uniq([])
# print(test)

class Base():
    """ My base class """

    __nb_instances = 1

    def __init__(self):
        Base.__nb_instances += 1
        self.id = Base.__nb_instances

class User(Base):
    """ My User class """

    def __init__(self):
        super().__init__()
        self.id -= 99

u = User()
print(u.id)