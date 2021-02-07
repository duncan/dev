---
date: 2021-02-07T20:00
type: post
emoji: 🧩
title: The case of aaaabbbcca
description: Implicit in a recent pointer to a code puzzle was the fact that a test-driven approach would be perfect.
---

[Allen Holub retweeted][aht] a [code puzzle that Alexey Grigorev posted][agt]. Alexey claimed that most candidates can’t solve the following within a 25 minute screening interview:

```
Input: "aaaabbbcca"
Output: [("a", 4), ("b", 3), ("c", 2), ("a", 1)]
```

My first thought was that this should be easy: a quick matter of counting up the number of times each letter occurred in the string. Then, I saw that final `a` character and realized that something slightly more sophisticated was needed. It took me about 10 minutes (yes, I timed myself) to hack out the following solution in IRB:

```ruby
'aaaabbbcca'.chars.reduce([]) do |a, c|
  if b = a.last and b[0] == c
    b[1] = b[1] + 1
  else
    a << [c, 1]
  end
  a
end
```

This made the following output, which is close enough even though it’s in Ruby’s array of array output format:

```
[['a', 4], ['b', 3], ['c', 2], ['a', 1]]
```

[Based on my recent interview experience][ego], I’m really not sure I could have been able to do it within Alexey’s 25 minute screening. Indeed, I’d have to be in a reasonable frame of mind to have a shot and not totally flub it up.

## Other solutions

A few other solutions stood out in the threads of these discussions. One I quite like is [Sam Ruby’s one liner][sr] using `scan` and a regexp:

```ruby
'aaaabbbcca'.scan(/((.)\2*)/).map(&:first)
```

which returns:

```
["aaaa", "bbb", "cc", "a"]
```

To return the same format mine, you could use the following as the `map` function:

```ruby
.map { |i| [i[1], i[0].size] }
```

Vítězslav Ackermann Ferko solved it the [same way in JavaScript][vat]:

```js
'aaaabbbcca'.match(/((.)\2*)/g).map((v) => [v[0], v.length])
```

I think my absolute favorite, however, is [this solution by Raymond Hettinger][rht]:

```sh
$ echo 'aaaabbbcca' | fold -w 1 | uniq -c
 4 a
 3 b
 2 c
 1 a
```

Love it! 💥

## Let’s be test-driven, ok?

Implicit (to me at least) in Allen’s pointer to the problem is that this is the kind of thing that would be great for a test-driven approach. So, instead of hacking it out in IRB, I really should have written a test first:

```ruby
def test_simple
  expected = [['a', 4], ['b', 3], ['c', 2], ['a', 1]]
  assert_equal expected, solve('aaaabbbcca')
end
```

You might think that setting up a test-driven approach is overkill for a code puzzle like this. Certainly, it can be a pain in the arse to set up seperate files and a test driver. In Ruby, at least, you can do this in a single file:

```ruby
#!/usr/bin/env ruby

def solve(input)
  input.chars.reduce([]) do |a, c|
    if b = a.last and b[0] == c
      b[1] = b[1] + 1
    else
      a << [c, 1]
    end
    a
  end
end

require 'test/unit'

class Tests < Test::Unit::TestCase
  def test_simple
    expected = [['a', 4], ['b', 3], ['c', 2], ['a', 1]]
    assert_equal expected, solve('aaaabbbcca')
  end
end
```

I started using this approach in the last code interview I did recently, and it out really worked nicely. It certainly helped keep my thinking a little bit more structured during the process.

[aht]: https://twitter.com/allenholub/status/1357115515672555520
[agt]: https://twitter.com/Al_Grigor/status/1357028887209902088
[ego]: /software/interviews/tripping-over-my-own-ego
[sr]: https://twitter.com/samruby/status/1358404706910011395
[rht]: https://twitter.com/raymondh/status/1358120906258673665
[vat]: https://twitter.com/vitezslavferko/status/1357506302725996546
