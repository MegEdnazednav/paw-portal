require 'faker'

10.times do
  Animal.create(
    kind: "Dog",
    name: Faker::GreekPhilosophers.name,
    title: Faker::GreekPhilosophers.quote,
    age: rand(13),
    description: "Doggo ipsum big ol you are doin me a concern long woofer, blop. big ol pupper borking doggo fluffer. Clouds pupper floofs puggorino you are doing me the shock stop it fren corgo, doggo doggorino much ruin diet length boy. Heckin good boys and girls corgo sub woofer most angery pupper I have ever seen bork, shoober extremely cuuuuuute puggorino. Pupper stop it fren bork heck boofers, doggo stop it fren boofers. floofs you are doin me a concern. Doge borking doggo you are doing me a frighten what a nice floof, shoober. Pupperino snoot very taste wow borkf, blop. Doggorino dat tungg tho ur givin me a spook, very hand that feed shibe. Thicc vvv long woofer heckin angery woofer thicc, maximum borkdrive you are doing me a frighten heck big ol snoot, bork doge you are doing me the shock."
  )
end
