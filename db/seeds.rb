Task.destroy_all

9.times do |i|
  Task.create(
      name: "Task #{i + 1}",
      description: 'I am a description',
      deadline: Date.today,
      status: true
  )
end

p "Created #{Task.count} tasks"
