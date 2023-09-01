
def groupAnagrams(str):
    grp = {}
    for w in str:
        s = ''.join(sorted(w))
        
        if s in grp:
            grp[s].append(w)
        else:
            grp[s] = [w]
            
    return list(grp.values())
 
 # create a dictionary
 # loop through each w in str and uniformly sort em
 # if s is in grp append w to grp
 # else grp value = [w]

input_strings = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams = groupAnagrams(input_strings)
print(groupAnagrams)
