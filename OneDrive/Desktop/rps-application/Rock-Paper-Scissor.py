class Participant:
    def __init__(self):
        self.points = 0
        self.choice = ""

class GameRound:
    def __init__(self, participant1, participant2):
        self.participant1 = participant1
        self.participant2 = participant2

    def play_round(self):
        choice1 = self.participant1.choice
        choice2 = self.participant2.choice

        if choice1 == choice2:
            print("Tie!")
        elif (choice1 == 'rock' and choice2 == 'scissor') or (choice1 == 'paper' and choice2 == 'rock') or (choice1 == 'scissor' and choice2 == 'rock'): 
            self.participant1.points += 1
            print("Participant1 won")
        else:
            self.participant1.points += 1
            print("Participant2 won")



class Game:
    def __init__(self):
        self.endGame = False
        self.participant1 = Participant()
        self.participant2 = Participant()

    def play_game(self, rounds):
        for _ in range(rounds):
            self.participant1.choice = input("participant1, choice (rock / paper / scissor) :").lower()
            self.participant2.choice = input("participant2, choice (rock / paper / scissor) :").lower()

            round_started = GameRound(self.participant1, self.participant2)
            round_started.play_round()

        if self.participant1.points > self.participant2.points :
            print("partipant1 got final winner")
        elif self.participant2.points > self.participant1.points:
            print("partipant2 got final winner")
        else:
            print("tie!")

        
        


game = Game()
number_of_rounds = int(input("Enter no.of rounds"))
game.play_game(number_of_rounds)
