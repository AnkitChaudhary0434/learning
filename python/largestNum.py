# create num list and find largest element in it | elements sare positive hoge matlab 0 se chote nhi hoge okey
nums = input().split()
largestNum = 0
for i in range(len(nums)):
  if int(nums[i]) > largestNum:
    largestNum = int(nums[i]);

print(f"nums = {nums} ka lagerst {largestNum} number hai ")


# explanation:
''' line 1 :-
  nums = input().split()

  nums -> varable name
  input() - ye input leta hai our string return kerta hai matlb if you give input
            1 2 3 4 5 in terminal it will give -> "1 2 3 4 5" in str.
  split() - ye string ko baat ta hai or ek list me daal ke dedeta hai
          mtlb -> "sugam jaat".split() -> ["sugam" , "jaat"]
          or in our case "1 3 2 5 4" -> ["1", "3", "2", "5", "4"]
'''
''' line2 ;-
  largestNum = 0 -> a variable to store largest number in futuer
'''
#  line 3 to 5:
  # consepts :
'''line3: for loop in python is called [ for in range ]

      syntex -> for anyName in range( anyNumber ) :

      exp: for i in range(5):

    2) for loop utni baar chalega jetna number tum range ke andar lekhoge
      matlb range(5) -> ye 5 baar chalega
    3) i or jobhi tume naam dena hai -> ye ek number hoga jeski range 0 se 4 tak hogi
    matlab :-
      range(5) -> 5 baar chalega jo mene neeche lekh deya hai 1 se 5
        ye jo 1 2 3 4 5 hai wo bata ta hai ki konsi baar loop chal rha hai
        jese ki 1 ka matlab loop phale baar chalne ja rha hai
        1 -> is me i ki value 0 hogi | i = 0
        2 -> is me i ki value 1 hogi | i = 1
        3 -> is me i ki value 2 hogi | i = 2
        4 -> is me i ki value 3 hogi | i = 3
        5 -> is me i ki value 4 hogi | i = 4
    for i in range(len(nums)):
                   ^^^^^^^^^ -> len() -> ex function hai jo length of list batata hai length matlab us list me kitne items hai
                   or nums ek list hai |-> ["1", "3", "2", "5", "4"] jiski length 5 hai kyuki usme 5 items hai
'''
''' line 4: if int(nums[i]) > largestNum:
    consepts:
      if ->
        syntax :
          if condition :
            in side body
            in side body
            in side body
          out side body
          ---------------------
          if -> ek key word hai.
          condition : condition koi bhi esi chez jeska conclusion true ya false me ho
              matlb ->
                right conditions :
                  5 > 4 -> ye baat true hai
                  3 > 4 -> ye baat false hai
                    ^ in conditions me comprasion opraters laga hua hai jo condition ko evulate kerke true ya false bata ta hai
                wrond conditions :
                  if name = "sugam" : --> X ye galat hai
                  kyuki  ^- isme assigment oprater alahai jo true false nahi batata
                  vo name joki ek varibale hai usme "sugam" string dalta hai
              in our code -> if int(nums[i]) > largestNum:
                isme if -> key word hai
                    int(nums[i]) > largestNum: -> ye condition hai jo true ya false
                                                  me se ek hogi
            Q) what if condition is true
                agar condition true hoti hai toh in side code run hota hai
                warna(in case of false) inside code run hai hota
                if condition == true :
                  inside code
    if int(nums[i]) > largestNum:
      int() -> ye ek function hai jo not int datatype to int datatype me convert kerta hai.
      nums[i] ->
        nums -> ek list hai jo hamne banae thi |-> ["1", "3", "2", "5", "4"]
        nums[i] -> isme i -> for loop se arha hai jiski values 0 se 4 hai
                -> Q) toh hum nums[i] kyu ker rhae hai ??
                    is ke leye hame samaj na ho ga ki hum list me se value kese
                    lete hai
                    explanation :
                    sapose name = ["sugam" , "chaudhary"]
                    name[position of value] |-> hame vo value deta hai
                    sapose hame iski phali value leni hai
                    toh ham ese le te hai |-> name[0]
                    Q) name[0] kyu ham to phale value le rhae hai na toh name[1]
                    -> hamari list ki values 0 index se start hoti hai
                    exp -> 0 1 2 3  <-|-> ye index hai
                          [1,2,3,4]

        before going ahaed let run or understand code given blow
          num = [1,2,3,4,5]
          for i in range(5):
            print(f"i = {i} hai or num me i position ka item ye hai {num[i]}" )
          OUTPUT:
            i = 0 hai or num me i position ka item ye items 1 hai
            i = 1 hai or num me i position ka item ye items 2 hai
            i = 2 hai or num me i position ka item ye items 3 hai
            i = 3 hai or num me i position ka item ye items 4 hai
            i = 4 hai or num me i position ka item ye items 5 hai
        is code ko apne app samjo

      now lets understand our code |-> if int(nums[i]) > largestNum:
      Q1) if -> kya hai batao -> ---x
      Q2) isme condition kya hai ->
      Q3) int() kya hai ->
      Q4) nums kya hai
      Q5) i kya hai or kedar se aya
      Q6) nums[i] ye kya hai ??
      agar ye answer de pa rhae ho tohhi age bhadna warna chomu khalaoge

      now lets understand hum kya kerna cha rhae hai
        Question kya tha ki hame largest number in list find kerna hai
      toh me ne socha ki ek varible bana luga jisme largest element dalduga
      toh uske leye mene largestNum = 0 banaya kyu ki 0 se chote elements nhi hoge toh iska matlab 0 sabse chota hoga right.
        uske baad ek ek kerke sare elements se compare ker luga ki
          if element > largest se toh largestnum = vo element deduga
      toh mene |> nums = input().split() <| se hum ne ek list banali thi
                  |-> ["1", "3", "2", "5", "4"]
      abb ek ek kerke sare elements ko compare keruga fir pata kerluga ki largest num konsa hai.
      lekin isme ek problem thi ki sare elements srt type ke hai toh mene int() function user ker leya int me convert kerne ke leye
      -----------------------------------------------
      nums = ["1", "3", "2", "5", "4"] ek list leli
      for i in range(len(nums) jo ki 5 hai): for loop laga deya barbar check kerne ke leye jo 5 baar chalega or if condition check karega
                                    |-> if int(nums[i]) > largestNum:
                                      agar list ka element bada hua current largest element se toh largentNum varible me us element ko daldege
                                        largestNum = nums[i]
      ab neche jo we hai use dhekh or khud samajne ki kosis ker
      vesulitation ke leye step by step prosses deya hai

      1 |-> if int(nums[i]) > largestNum:
                    ^-> 1   >   ^-> 0 -> true
                                        |-> largestNum = 1
      2 |-> if int(nums[i]) > largestNum:
                  ^-> 3     >  ^-> 1 => true
                                      |-> largestNum = 3
      3 |-> if int(nums[i]) > largestNum:
                  ^->  2    >  ^-> 3 |-> false
                        inside code will not run so still |-> largestNum = 3
      4 |-> if int(nums[i]) > largestNum:
                  ^->  5    >  ^-> 3 |-> true
                                      |-> largestNum = 5
      5 |-> if int(nums[i]) > largestNum:
                  ^->  5    >  ^-> 4 |-> false
                        inside code will not run so still |-> largestNum = 5
    last me print ker deya
    print(f"nums = {nums} ka lagerst {largestNum} number hai ")

    OUTPUT:
    1 3 2 5 4
    nums = ['1', '3', '2', '5', '4'] ka lagerst 5 number hai


rate my explanation :-
agar kaam rate deya hai toh tu bsdk kese explane karega vo bhi likh deo
'''